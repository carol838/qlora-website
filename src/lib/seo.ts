type Schema = Record<string, unknown>

type SEOConfig = {
  title: string
  description: string
  path: string
  image?: string
  breadcrumbs?: Array<{ name: string; path: string }>
  schemas?: Schema[]
}

const siteUrl = 'https://qloratech.com'
const defaultImage = `${siteUrl}/images/hero-kitchen.webp`

function setMeta(selector: string, attr: 'content' | 'href', value: string, create?: () => HTMLMetaElement | HTMLLinkElement) {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
  if (!element && create) {
    element = create()
    document.head.appendChild(element)
  }
  if (element) element.setAttribute(attr, value)
}

function upsertJsonLd(id: string, schema: Schema) {
  let script = document.getElementById(id) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(schema)
}

export function applySEO({ title, description, path, image = defaultImage, breadcrumbs = [], schemas = [] }: SEOConfig) {
  const canonicalUrl = `${siteUrl}${path}`

  document.title = title

  setMeta('meta[name="description"]', 'content', description, () => {
    const meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    return meta
  })

  setMeta('link[rel="canonical"]', 'href', canonicalUrl, () => {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    return link
  })

  const ogTags = [
    ['property', 'og:title', title],
    ['property', 'og:description', description],
    ['property', 'og:type', 'website'],
    ['property', 'og:url', canonicalUrl],
    ['property', 'og:image', image],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', title],
    ['name', 'twitter:description', description],
    ['name', 'twitter:image', image],
  ]

  ogTags.forEach(([kind, key, value]) => {
    setMeta(`meta[${kind}="${key}"]`, 'content', value, () => {
      const meta = document.createElement('meta')
      meta.setAttribute(kind, key)
      return meta
    })
  })

  upsertJsonLd('qlora-organization-schema', {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'QLORA',
    url: siteUrl,
    logo: `${siteUrl}/images/hero-kitchen.webp`,
    description: 'QLORA provides water filtration solutions including RO systems, replacement filters and OEM manufacturing support for distributors and brands worldwide.',
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'RO Water Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Replacement Water Filters' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'OEM Manufacturing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private Label Products' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Packaging' } },
    ],
  })

  upsertJsonLd('qlora-website-schema', {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'QLORA',
    url: siteUrl,
    description: 'Premium water filtration solutions for homes, distributors and private label water brands.',
    publisher: { '@type': 'Organization', name: 'QLORA' },
  })

  upsertJsonLd('qlora-breadcrumb-schema', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      ...breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${siteUrl}${item.path}`,
      })),
    ],
  })

  schemas.forEach((schema, index) => upsertJsonLd(`qlora-page-schema-${index}`, schema))
}

export const seoImages = {
  home: `${siteUrl}/images/hero-kitchen.webp`,
  ro: `${siteUrl}/images/ro-system.webp`,
  filtration: `${siteUrl}/images/filtration-solutions.webp`,
  oem: `${siteUrl}/images/ro-system.webp`,
}
