import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { dirname, extname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { indexableRoutes, jsonLdForRoute, noindexRoutes } from './seo-routes.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const serveOnly = process.argv.includes('--serve')
const requiredRoutes = [
  '/',
  '/products/tankless-ro-system',
  '/products/inline-water-filters',
  '/products/i-shape-inline-filter',
  '/products/korean-style-inline-filter',
  '/products/under-sink-ro-system',
  '/products/inline-shower-filter',
  '/water-filtration',
  '/oem-private-label',
  '/contact',
  '/technical-knowledge',
]

const configByPath = new Map([...indexableRoutes, ...noindexRoutes].map((config) => [config.path, config]))
const categoryRoutes = new Set([
  '/',
  '/ro-systems',
  '/water-dispensers',
  '/water-filtration',
  '/shower-solutions',
  '/products/tankless-ro-system',
  '/products/inline-water-filters',
  '/products/i-shape-inline-filter',
  '/products/korean-style-inline-filter',
])
const invalidCategoryProductNames = new Set(['RO Water Systems', 'Replacement Water Filters'])

function matches(html, pattern) {
  return [...html.matchAll(pattern)]
}

function getTitle(html) {
  return (html.match(/<title>(.*?)<\/title>/i)?.[1] ?? '')
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
}

function getCanonical(html) {
  return html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? ''
}

function getJsonLd(html, path) {
  return matches(html, /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)
    .map((match, index) => {
      try {
        return JSON.parse(match[1])
      } catch (error) {
        throw new Error(`invalid JSON-LD for ${path} at script ${index + 1}: ${error.message}`)
      }
    })
}

function walkSchema(value, visitor) {
  if (Array.isArray(value)) {
    value.forEach((item) => walkSchema(item, visitor))
    return
  }
  if (!value || typeof value !== 'object') return
  visitor(value)
  Object.values(value).forEach((item) => walkSchema(item, visitor))
}

function verifyJsonLd(config, schemas) {
  const serialized = schemas.map((schema) => JSON.stringify(schema))
  if (new Set(serialized).size !== serialized.length) {
    throw new Error(`duplicate JSON-LD object for ${config.path}`)
  }

  let productCount = 0
  const invalidNames = []
  schemas.forEach((schema) => walkSchema(schema, (node) => {
    const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']]
    if (!types.includes('Product')) return
    productCount += 1
    if (invalidCategoryProductNames.has(node.name)) invalidNames.push(node.name)
  }))

  if (invalidNames.length > 0) {
    throw new Error(`category-level Product JSON-LD found for ${config.path}: ${invalidNames.join(', ')}`)
  }
  if (categoryRoutes.has(config.path) && productCount > 0) {
    throw new Error(`Product JSON-LD found on category route ${config.path}`)
  }

  if (config.path === '/products/tankless-ro-system') {
    const collection = schemas.find((schema) => schema['@type'] === 'CollectionPage')
    if (!collection || collection.mainEntity?.['@type'] !== 'ItemList') {
      throw new Error('tankless RO landing page is missing CollectionPage with ItemList')
    }
    const breadcrumbCount = schemas.filter((schema) => schema['@type'] === 'BreadcrumbList').length
    if (breadcrumbCount !== 1) throw new Error('tankless RO landing page must contain exactly one BreadcrumbList')
  }
}

async function verifyFiles() {
  for (const config of configByPath.values()) {
    const file = config.path === '/'
      ? join(distDir, 'index.html')
      : join(distDir, `${config.path.slice(1)}.html`)
    const html = await readFile(file, 'utf8')
    const schemas = getJsonLd(html, config.path)
    const checks = [
      [getTitle(html) === config.title, `title mismatch for ${config.path}`],
      [getCanonical(html) === config.canonical, `canonical mismatch for ${config.path}`],
      [matches(html, /<title>/gi).length === 1, `duplicate title for ${config.path}`],
      [matches(html, /<meta\s+name="description"/gi).length === 1, `duplicate description for ${config.path}`],
      [matches(html, /<link\s+rel="canonical"/gi).length === 1, `duplicate canonical for ${config.path}`],
      [html.includes('<div id="root"><'), `missing prerendered body for ${config.path}`],
      [schemas.length === jsonLdForRoute(config).length, `JSON-LD count mismatch for ${config.path}`],
    ]
    for (const [passed, message] of checks) if (!passed) throw new Error(message)
    verifyJsonLd(config, schemas)
  }

  const sitemap = await readFile(join(distDir, 'sitemap.xml'), 'utf8')
  const sitemapUrls = new Set(matches(sitemap, /<loc>(.*?)<\/loc>/g).map((match) => match[1]))
  const expectedUrls = new Set(indexableRoutes.map((config) => config.canonical))
  if (sitemapUrls.size !== expectedUrls.size || [...expectedUrls].some((url) => !sitemapUrls.has(url))) {
    throw new Error('sitemap.xml does not exactly match the indexable route set')
  }
  if (sitemap.includes('/oem-solutions') || noindexRoutes.some((config) => sitemap.includes(config.canonical))) {
    throw new Error('sitemap.xml contains an alias or noindex route')
  }

  const robots = await readFile(join(distDir, 'robots.txt'), 'utf8')
  if (!robots.includes('Allow: /') || !robots.includes('https://www.qloratech.com/sitemap.xml')) {
    throw new Error('robots.txt is missing required crawl or sitemap directives')
  }

  const notFound = await readFile(join(distDir, '404.html'), 'utf8')
  if (!notFound.includes('noindex, nofollow') || getTitle(notFound) !== 'Page Not Found | QLORA') {
    throw new Error('404.html is missing noindex metadata')
  }
}

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

async function sendFile(response, file, status = 200) {
  const body = await readFile(file)
  response.writeHead(status, { 'content-type': contentTypes[extname(file)] ?? 'application/octet-stream' })
  response.end(body)
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', 'http://127.0.0.1')
  if (url.pathname === '/oem-solutions') {
    response.writeHead(308, { location: `/oem-private-label${url.search}` })
    response.end()
    return
  }
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    response.writeHead(308, { location: `${url.pathname.slice(0, -1)}${url.search}` })
    response.end()
    return
  }

  const directFile = join(distDir, url.pathname.slice(1))
  const routeFile = url.pathname === '/' ? join(distDir, 'index.html') : `${directFile}.html`
  try {
    const directStat = await stat(directFile)
    if (directStat.isFile()) await sendFile(response, directFile)
    else await sendFile(response, routeFile)
  } catch {
    try {
      await sendFile(response, routeFile)
    } catch {
      await sendFile(response, join(distDir, '404.html'), 404)
    }
  }
})

await verifyFiles()
await new Promise((resolvePromise) => server.listen(0, '127.0.0.1', resolvePromise))
const address = server.address()
const baseUrl = `http://127.0.0.1:${address.port}`

if (serveOnly) {
  console.log(`Local: ${baseUrl}`)
  await new Promise(() => {})
}

try {
  for (const path of requiredRoutes) {
    const response = await fetch(`${baseUrl}${path}`, { redirect: 'manual' })
    const html = await response.text()
    const config = configByPath.get(path)
    if (response.status !== 200 || getTitle(html) !== config.title || getCanonical(html) !== config.canonical) {
      throw new Error(`HTTP metadata verification failed for ${path}`)
    }
    console.log(`PASS 200 ${path} | ${getTitle(html)} | ${getCanonical(html)}`)
  }

  const contact = await fetch(`${baseUrl}/contact?subject=Test&message=Prefill`, { redirect: 'manual' })
  const contactHtml = await contact.text()
  if (contact.status !== 200 || getCanonical(contactHtml) !== 'https://www.qloratech.com/contact') {
    throw new Error('parameterized contact canonical verification failed')
  }
  console.log('PASS 200 /contact?subject=Test&message=Prefill | clean contact canonical')

  for (const [path, expectedLocation] of [
    ['/oem-solutions?source=test', '/oem-private-label?source=test'],
    ['/products/tankless-ro-system/?source=test', '/products/tankless-ro-system?source=test'],
  ]) {
    const response = await fetch(`${baseUrl}${path}`, { redirect: 'manual' })
    if (response.status !== 308 || response.headers.get('location') !== expectedLocation) {
      throw new Error(`redirect verification failed for ${path}`)
    }
    console.log(`PASS 308 ${path} -> ${expectedLocation}`)
  }

  const missing = await fetch(`${baseUrl}/definitely-not-a-real-route`, { redirect: 'manual' })
  const missingHtml = await missing.text()
  if (missing.status !== 404 || !missingHtml.includes('noindex, nofollow') || !missingHtml.includes('Page Not Found')) {
    throw new Error('unknown route did not return the noindex 404 page')
  }
  console.log('PASS 404 /definitely-not-a-real-route | noindex 404 page')
} finally {
  server.close()
}

console.log(`SEO verification passed for ${indexableRoutes.length} indexable routes.`)
