import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { indexableRoutes, jsonLdForRoute, noindexRoutes, notFoundRoute } from './seo-routes.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const serverDir = join(root, '.prerender')
const template = await readFile(join(distDir, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href)

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

function removeManagedHead(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/gi, '')
    .replace(/\s*<meta\s+(?:name|property)=["'](?:description|robots|og:[^"']+|twitter:[^"']+)["'][^>]*>/gi, '')
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/\s*<script[^>]+id=["']qlora-[^"']+["'][^>]*>[\s\S]*?<\/script>/gi, '')
}

function headMarkup(config) {
  const tags = [
    `<title>${escapeHtml(config.title)}</title>`,
    `<meta name="description" content="${escapeHtml(config.description)}" />`,
    `<meta name="robots" content="${escapeHtml(config.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(config.canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(config.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(config.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(config.canonical)}" />`,
    `<meta property="og:type" content="${escapeHtml(config.type)}" />`,
    `<meta property="og:image" content="${escapeHtml(config.image)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(config.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(config.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(config.image)}" />`,
  ]

  jsonLdForRoute(config).forEach((schema, index) => {
    const json = JSON.stringify(schema).replaceAll('<', '\\u003c')
    tags.push(`<script id="qlora-prerender-schema-${index}" type="application/ld+json">${json}</script>`)
  })

  return `\n    ${tags.join('\n    ')}\n  `
}

function outputPath(path) {
  if (path === '/') return join(distDir, 'index.html')
  return join(distDir, `${path.slice(1)}.html`)
}

async function writeRoute(config, renderPath = config.path, target = outputPath(config.path)) {
  const appHtml = render(renderPath)
  const html = removeManagedHead(template)
    .replace('</head>', `${headMarkup(config)}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, html)
}

for (const config of [...indexableRoutes, ...noindexRoutes]) await writeRoute(config)
await writeRoute(notFoundRoute, '/__404__', join(distDir, '404.html'))
await rm(serverDir, { recursive: true, force: true })

console.log(`Prerendered ${indexableRoutes.length} indexable routes, ${noindexRoutes.length} noindex route, and 404.html.`)
