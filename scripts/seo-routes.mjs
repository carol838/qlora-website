const siteUrl = 'https://www.qloratech.com'
const defaultImage = `${siteUrl}/images/hero-kitchen.webp`

const absoluteUrl = (path) => path.startsWith('http') ? path : `${siteUrl}${path}`

const productSchema = (name, description, image, category, extra = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  brand: { '@type': 'Brand', name: 'QLORA' },
  description,
  image: absoluteUrl(image),
  category,
  ...extra,
})

const articleSchema = (headline, description, image, path) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline,
  description,
  image: absoluteUrl(image),
  author: { '@type': 'Organization', name: 'QLORA' },
  publisher: { '@type': 'Organization', name: 'QLORA' },
  mainEntityOfPage: absoluteUrl(path),
})

const route = (path, title, description, options = {}) => ({
  path,
  title,
  description,
  canonical: absoluteUrl(path === '/' ? '/' : path),
  image: absoluteUrl(options.image ?? '/images/hero-kitchen.webp'),
  type: options.type ?? 'website',
  robots: options.robots ?? 'index, follow',
  breadcrumbs: options.breadcrumbs ?? [],
  schemas: options.schemas ?? [],
})

const tanklessProducts = [
  {
    path: '/products/slim-tankless-ro-system',
    title: 'Slim Tankless RO System | QLORA',
    description: 'Explore a compact tankless RO platform with a 150 mm slim body, TDS display and configurable filtration options for residential and OEM projects.',
    name: 'Slim Tankless RO System',
    sku: 'QR-TL-06B',
    image: '/images/ro-systems/tankless/slim-tankless-ro-system.webp',
  },
  {
    path: '/products/smart-display-tankless-ro-system',
    title: 'Smart Display Tankless RO System | QLORA',
    description: 'Explore a tankless RO platform with smart display control, filter-life reminder and configurable filtration and capacity options.',
    name: 'Smart Display Tankless RO System',
    sku: 'QR-TL-09B',
    image: '/images/ro-systems/tankless/smart-display-tankless-ro-system.webp',
  },
  {
    path: '/products/tds-monitoring-tankless-ro-system',
    title: 'TDS Monitoring Tankless RO System | QLORA',
    description: 'Explore a tankless RO system with TDS monitoring, touch control and flexible filtration configurations for residential and OEM applications.',
    name: 'TDS Monitoring Tankless RO System',
    sku: 'QR-TL-09C',
    image: '/images/ro-systems/tankless/tds-monitoring-tankless-ro-system.webp',
  },
  {
    path: '/products/dual-tds-display-tankless-ro-system',
    title: 'Dual TDS Display Tankless RO System | QLORA',
    description: 'Explore a tankless RO platform with dual raw-water and purified-water TDS displays plus configurable filtration and capacity options.',
    name: 'Dual TDS Display Tankless RO System',
    sku: 'QR-TL-09D',
    image: '/images/ro-systems/tankless/dual-tds-display-tankless-ro-system.webp',
  },
]

const dispenserProducts = [
  {
    path: '/water-dispensers/premium-water-dispenser-with-ice-maker',
    title: 'Water Dispenser with Ice Maker | QLORA',
    description: 'Explore a premium floor-standing water dispenser with hot, normal and cold water dispensing plus integrated ice-making capability for commercial projects.',
    name: 'Premium Water Dispenser with Ice Maker',
    image: '/images/water-dispensers/catalog-scenes/QD-PREM-001-scene.webp',
    category: 'Premium Floor-Standing',
  },
  {
    path: '/water-dispensers/premium-bottom-loading-water-dispenser',
    title: 'Bottom-Loading Water Dispenser & POU Options | QLORA',
    description: 'Explore a premium hot, normal and cold water dispenser with bottom-loading and optional POU, RO or UF filtration configurations for residential and commercial projects.',
    name: 'Premium Bottom-Loading Water Dispenser',
    image: '/images/water-dispensers/catalog-scenes/QD-PREM-002-scene.webp',
    category: 'Premium Floor-Standing',
  },
  {
    path: '/water-dispensers/modern-floor-standing-water-dispenser',
    title: 'Modern Floor-Standing Water Dispenser | QLORA',
    description: 'Explore a modern floor-standing hot, normal and cold water dispenser platform for offices, commercial spaces and shared environments.',
    name: 'Modern Floor-Standing Water Dispenser',
    image: '/images/water-dispensers/catalog-scenes/QD-MOD-001-scene.webp',
    category: 'Modern Floor-Standing',
  },
  {
    path: '/water-dispensers/countertop-hot-cold-water-dispenser',
    title: 'Countertop Hot & Cold Water Dispenser | QLORA',
    description: 'Explore a countertop hot, normal and cold water dispenser for kitchens, offices, meeting rooms and compact commercial applications.',
    name: 'Countertop Hot & Cold Water Dispenser',
    image: '/images/water-dispensers/catalog-scenes/QD-CT-001-scene.webp',
    category: 'Countertop',
  },
  {
    path: '/water-dispensers/compact-countertop-water-dispenser',
    title: 'Compact Countertop Water Dispenser | QLORA',
    description: 'Explore a compact countertop water dispenser for hot and cold water applications in kitchens, offices and space-conscious environments.',
    name: 'Compact Countertop Water Dispenser',
    image: '/images/water-dispensers/catalog-scenes/QD-CCT-001-scene.webp',
    category: 'Compact Countertop',
  },
]

export const indexableRoutes = [
  route('/', 'QLORA | Better Water for Everyday Life', 'Premium water filtration solutions including RO systems, replacement filters and OEM manufacturing support for global brands and distributors.', {
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'QLORA',
        url: siteUrl,
        logo: { '@type': 'ImageObject', url: `${siteUrl}/android-chrome-512x512.png`, width: 512, height: 512 },
        description: 'QLORA provides water filtration solutions including RO systems, replacement filters and OEM manufacturing support for distributors and brands worldwide.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'QLORA',
        url: siteUrl,
        description: 'Premium water filtration solutions for homes, distributors and private label water brands.',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  }),
  route('/ro-systems', 'RO Water Systems | OEM & Private Label Solutions | QLORA', 'Explore residential RO water systems and OEM reverse osmosis solutions with private label support for distributors and water brands.', {
    image: '/images/ro-systems/hero-ro-system.webp',
    breadcrumbs: [['RO Systems', '/ro-systems']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'RO Water Systems',
      description: 'Residential RO water systems and OEM reverse osmosis solutions with private label support.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Under Sink RO Systems', url: `${siteUrl}/products/under-sink-ro-system` },
          { '@type': 'ListItem', position: 2, name: 'Tankless RO Systems', url: `${siteUrl}/products/tankless-ro-system` },
        ],
      },
    }],
  }),
  route('/water-dispensers', 'Water Dispensers & POU Solutions | QLORA', 'Explore QLORA floor-standing, countertop and bottom-loading water dispensers with selected POU, RO and UF filtration options for residential and commercial applications.', {
    image: '/images/water-dispensers/water-dispensers-hero.png',
    breadcrumbs: [['Water Dispensers', '/water-dispensers']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'QLORA water dispensers',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'QL-WD01 Sparkling Water Dispenser', url: `${siteUrl}/products/sparkling-water-dispenser` },
        ...dispenserProducts.map((item, index) => ({ '@type': 'ListItem', position: index + 2, name: item.name, url: absoluteUrl(item.path) })),
      ],
    }],
  }),
  route('/water-filtration', 'Replacement Water Filters & Filtration Solutions | QLORA', 'Discover replacement water filters including under sink, refrigerator and coffee machine filtration solutions.', {
    image: '/images/water-filtration/water-filtration-hero.webp',
    breadcrumbs: [['Water Filtration', '/water-filtration']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Replacement water filter solutions',
      itemListElement: ['PP Sediment Filter', 'Carbon Filter', 'UF Filter', 'Mineral Filter', 'Alkaline Filter'].map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })),
    }],
  }),
  route('/products/inline-water-filters', 'Inline Water Filters for OEM & Wholesale | QLORA', 'Explore PP, GAC, CTO, UF and post-carbon inline water filter options for residential water purification systems, wholesale supply and private-label projects.', {
    image: '/images/water-filtration/hero.webp',
    breadcrumbs: [['Water Filtration', '/water-filtration'], ['Inline Water Filters', '/products/inline-water-filters']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Inline Water Filters for Residential Water Purification Systems',
      url: `${siteUrl}/products/inline-water-filters`,
      description: 'Explore PP, GAC, CTO, UF and post-carbon inline water filter options for residential water purification systems, wholesale supply and private-label projects.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: ['PP Sediment Inline Filters', 'GAC Inline Filters', 'CTO Inline Filters', 'UF Inline Filters', 'Post Carbon Inline Filters'].map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })),
      },
    }],
  }),
  route('/products/korean-style-inline-filter', 'Korean Style Inline Water Filters | U-Shape OEM Supplier | QLORA', 'QLORA supplies Korean-style U-shape inline water filter cartridges for residential water purifiers. 296 mm design, 1/4" and 3/8" connections, flexible filter media and OEM private label support.', {
    image: '/images/products/korean-style-inline-filter/u-shape-inline-filter-set.png',
    breadcrumbs: [['Water Filtration', '/water-filtration'], ['Inline Water Filters', '/products/inline-water-filters'], ['Korean Style Inline Filter', '/products/korean-style-inline-filter']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Korean Style Inline Water Filter Cartridges',
      url: `${siteUrl}/products/korean-style-inline-filter`,
      description: 'QLORA supplies Korean-style U-shape inline water filter cartridges for residential water purifiers. 296 mm design, 1/4" and 3/8" connections, flexible filter media and OEM private label support.',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/products/korean-style-inline-filter/u-shape-inline-filter-set.png`,
      },
      about: {
        '@type': 'Thing',
        name: 'Korean Style U-Shape Inline Water Filter Cartridge',
      },
    }],
  }),
  route('/products/i-shape-inline-filter', 'I-Shape Inline Water Filters | 315mm OEM Supplier | QLORA', 'QLORA supplies 315mm I-shape inline water filter cartridges for residential water purifiers. Available with 1/4" and 3/8" connections, flexible filter media configurations and OEM private label support.', {
    image: '/images/products/i-shape-inline-filter/i-shape-inline-filter-set.png',
    breadcrumbs: [['Water Filtration', '/water-filtration'], ['Inline Water Filters', '/products/inline-water-filters'], ['I-Shape Inline Filter', '/products/i-shape-inline-filter']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'I-Shape Inline Water Filter Cartridges',
      url: `${siteUrl}/products/i-shape-inline-filter`,
      description: 'QLORA supplies 315mm I-shape inline water filter cartridges for residential water purifiers. Available with 1/4" and 3/8" connections, flexible filter media configurations and OEM private label support.',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/products/i-shape-inline-filter/i-shape-inline-filter-set.png`,
      },
      about: {
        '@type': 'Thing',
        name: 'I-Shape Inline Water Filter Cartridge',
      },
    }],
  }),
  route('/shower-solutions', 'Shower Systems, Filters & Components | QLORA', 'Explore QLORA shower solutions including shower filters, shower systems, shower heads, hand showers and shower faucets for residential and OEM applications.', {
    image: '/images/shower-solutions/systems/QS-SYS-001.webp',
    breadcrumbs: [['Shower Solutions', '/shower-solutions']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'QLORA shower solutions',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Filtered Hand Shower', url: `${siteUrl}/products/shower-filter` },
        { '@type': 'ListItem', position: 2, name: 'Inline Shower Filter', url: `${siteUrl}/products/inline-shower-filter` },
      ],
    }],
  }),
  route('/oem-private-label', 'OEM & Private Label Water Filtration Products | QLORA', 'Build your own water filtration brand with OEM manufacturing, private label support and custom packaging solutions.', {
    image: '/images/oem-private-label-hero.webp',
    breadcrumbs: [['OEM & Private Label', '/oem-private-label']],
    schemas: [{ '@context': 'https://schema.org', '@type': 'Service', name: 'OEM & Private Label Water Filtration Products', provider: { '@type': 'Organization', name: 'QLORA' }, serviceType: ['OEM Manufacturing', 'Private Label Products', 'Custom Packaging'], description: 'OEM manufacturing, private label support and custom packaging for water filtration products.' }],
  }),
  route('/technical-knowledge', 'Water Filtration Technical Knowledge | QLORA', 'Explore practical water filtration knowledge covering filtration technologies, water quality, product selection, applications and OEM technical requirements.', {
    image: '/images/about-lab-hero.webp',
    breadcrumbs: [['Technical Knowledge', '/technical-knowledge']],
    schemas: [{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Water Filtration Technical Knowledge', description: 'Practical water filtration knowledge for product selection, system design and OEM projects.' }],
  }),
  route('/technical-knowledge/tankless-ro-vs-traditional-ro-systems', 'Tankless RO vs Traditional RO Systems | QLORA', 'Compare tankless and traditional tank RO systems in design, water delivery, installation, maintenance and OEM positioning to choose the right solution for your market.', {
    image: '/images/ro-systems/hero-ro-system.webp',
    type: 'article',
    breadcrumbs: [['Technical Knowledge', '/technical-knowledge'], ['Tankless RO vs Traditional RO Systems', '/technical-knowledge/tankless-ro-vs-traditional-ro-systems']],
    schemas: [articleSchema('Tankless RO vs Traditional RO Systems: Which Is Right for Your Market?', 'Compare tankless and traditional tank RO systems in design, water delivery, installation, maintenance and OEM positioning to choose the right solution for your market.', '/images/ro-systems/hero-ro-system.webp', '/technical-knowledge/tankless-ro-vs-traditional-ro-systems')],
  }),
  route('/technical-knowledge/shower-filter-media-guide', 'Shower Filter Media Guide: 15, 20 & 25 Stage Filters | QLORA', 'Learn how 15-stage, 20-stage and 25-stage shower filters differ, what common shower filter media are used, and how to choose a configuration for your market.', {
    image: '/images/shower-solutions/shower-filter-installation-hero.png',
    type: 'article',
    breadcrumbs: [['Technical Knowledge', '/technical-knowledge'], ['Shower Filter Media Guide', '/technical-knowledge/shower-filter-media-guide']],
    schemas: [articleSchema('Shower Filter Media Guide: 15, 20 & 25 Stage Filters', 'Learn how 15-stage, 20-stage and 25-stage shower filters differ, what common shower filter media are used, and how to choose a configuration for your market.', '/images/shower-solutions/shower-filter-installation-hero.png', '/technical-knowledge/shower-filter-media-guide')],
  }),
  route('/technical-knowledge/water-dispenser-b2b-buyers-guide', 'How to Choose a Water Dispenser: B2B Buyer’s Guide | QLORA', 'A practical B2B guide to choosing water dispensers by format, water supply, heating and cooling, filtration, application and OEM requirements.', {
    image: '/images/home/home-water-dispenser-banner.webp',
    type: 'article',
    breadcrumbs: [['Technical Knowledge', '/technical-knowledge'], ['Water Dispenser B2B Buyer’s Guide', '/technical-knowledge/water-dispenser-b2b-buyers-guide']],
    schemas: [articleSchema('How to Choose a Water Dispenser for Your Market: A B2B Buyer’s Guide', 'A practical B2B guide to choosing water dispensers by format, water supply, heating and cooling, filtration, application and OEM requirements.', '/images/home/home-water-dispenser-banner.webp', '/technical-knowledge/water-dispenser-b2b-buyers-guide')],
  }),
  route('/about', 'About QLORA | Water Filtration Solutions', 'Learn about QLORA and our mission to provide premium water filtration products and OEM support for global partners.', {
    image: '/images/about-lab-hero.webp',
    breadcrumbs: [['About', '/about']],
    schemas: [{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About QLORA', url: `${siteUrl}/about`, description: 'QLORA provides water filtration solutions including RO systems, replacement filters and OEM manufacturing support for distributors and brands worldwide.' }],
  }),
  route('/contact', 'Contact QLORA | Water Filtration & OEM Inquiries', 'Contact QLORA for RO systems, replacement filters, OEM projects and private label water filtration solutions.', {
    breadcrumbs: [['Contact', '/contact']],
    schemas: [{ '@context': 'https://schema.org', '@type': 'ContactPage', name: 'Contact QLORA', url: `${siteUrl}/contact`, description: 'Contact QLORA for water filtration inquiry, OEM water filter supplier support and RO systems supplier questions.' }],
  }),
  route('/products/tankless-ro-system', '600 & 800 GPD Tankless RO Systems | OEM Supplier | QLORA', 'Explore configurable 600 and 800 GPD tankless RO systems for residential water purification, with OEM branding and private-label supply options.', {
    image: '/images/ro-systems/tankless/slim-tankless-ro-system.webp',
    breadcrumbs: [['RO Systems', '/ro-systems'], ['Tankless RO Systems', '/products/tankless-ro-system']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'QLORA Tankless RO Systems',
      url: `${siteUrl}/products/tankless-ro-system`,
      description: 'Configurable 600 and 800 GPD tankless RO systems for residential water purification, OEM branding and private-label supply projects.',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: tanklessProducts.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, url: absoluteUrl(item.path) })),
      },
    }],
  }),
  ...tanklessProducts.map((item) => route(item.path, item.title, item.description, {
    image: item.image,
    breadcrumbs: [['RO Systems', '/ro-systems'], ['Tankless RO Systems', '/products/tankless-ro-system'], [item.name, item.path]],
    schemas: [productSchema(item.name, item.description, item.image, 'Tankless reverse osmosis water filtration system', { sku: item.sku })],
  })),
  route('/products/under-sink-ro-system', 'Under Sink Reverse Osmosis System | QLORA', '5-stage under sink reverse osmosis water filtration system with pressure tank for OEM, private label and residential drinking water applications.', {
    image: '/images/products/under-sink-ro-system/tank-ro.webp',
    breadcrumbs: [['RO Systems', '/ro-systems'], ['Under Sink RO System', '/products/under-sink-ro-system']],
    schemas: [productSchema('Classic Under Sink Reverse Osmosis System', '5-stage under sink reverse osmosis system with pressure tank for residential drinking water, OEM and private label programs.', '/images/products/under-sink-ro-system/tank-ro.webp', 'Under sink reverse osmosis water filtration system')],
  }),
  route('/products/refrigerator-water-filter', 'Compatible Refrigerator Water Filters | Private Label & OEM | QLORA', 'Compatible replacement refrigerator water filters with neutral packaging, private label support and OEM supply for distributors.', {
    image: '/images/products/refrigerator-filter/hero.webp',
    breadcrumbs: [['Water Filtration', '/water-filtration'], ['Compatible Refrigerator Water Filters', '/products/refrigerator-water-filter']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Compatible Refrigerator Water Filters',
      itemListElement: ['LT1000P Compatible Filter', 'DA29-10105J Compatible Filter', 'RPWFE Compatible Filter'].map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })),
    }],
  }),
  route('/products/coffee-machine-filter', 'Compatible Coffee Machine Water Filters | OEM & Private Label | QLORA', 'Compatible replacement coffee machine water filters for espresso and beverage systems with OEM, private label and neutral packaging support.', {
    image: '/images/products/coffee-machine-filter/hero.webp',
    breadcrumbs: [['Water Filtration', '/water-filtration'], ['Compatible Coffee Machine Water Filters', '/products/coffee-machine-filter']],
    schemas: [{
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Compatible Coffee Machine Water Filters',
      itemListElement: ['Compatible Filter for Philips CA6903/10', 'Compatible Filter for Jura Coffee Machines', "Compatible Filter for De'Longhi Coffee Machines"].map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })),
    }],
  }),
  route('/products/shower-filter', 'Filtered Hand Shower | Shower Filtration Solutions | QLORA', 'Explore filtered hand showers with integrated replaceable cartridges and OEM branding and packaging support for distributors and private-label programs.', {
    image: '/images/products/shower-filter/hero.webp',
    breadcrumbs: [['Water Filtration', '/water-filtration'], ['Filtered Hand Shower', '/products/shower-filter']],
    schemas: [productSchema('Filtered Hand Shower', 'Explore filtered hand showers with integrated replaceable cartridges and OEM branding and packaging support for distributors and private-label programs.', '/images/products/shower-filter/hero.webp', 'Shower filtration')],
  }),
  route('/products/inline-shower-filter', '20-Stage Inline Shower Filter for OEM & Wholesale | QLORA', 'Source 20-stage inline shower filters with 15- and 25-stage alternatives, replaceable cartridge planning, finishes, OEM branding and packaging support.', {
    image: '/images/shower-solutions/shower-filter-installation-hero.png',
    breadcrumbs: [['Shower Solutions', '/shower-solutions'], ['Inline Shower Filter', '/products/inline-shower-filter']],
    schemas: [productSchema('Inline Shower Filter', 'Source 20-stage inline shower filters with 15- and 25-stage alternatives, replaceable cartridge planning, finishes, OEM branding and packaging support.', '/images/shower-solutions/shower-filter-installation-hero.png', 'Shower Filtration')],
  }),
  route('/products/sparkling-water-dispenser', 'Sparkling Water Dispenser OEM & Wholesale | QLORA', 'Explore QLORA QL-WD01 water dispensers with hot, cold, ambient and optional sparkling water. RO filtration and OEM customization for wholesale buyers.', {
    image: '/images/products/sparkling-water-dispenser/ql-wd01-hero.webp',
    breadcrumbs: [['Water Dispensers', '/water-dispensers'], ['QL-WD01 Sparkling Water Dispenser', '/products/sparkling-water-dispenser']],
    schemas: [productSchema('QL-WD01 Sparkling Water Dispenser', 'Explore QLORA QL-WD01 water dispensers with hot, cold, ambient and optional sparkling water. RO filtration and OEM customization for wholesale buyers.', '/images/products/sparkling-water-dispenser/ql-wd01-hero.webp', 'Floor-Standing Water Dispenser')],
  }),
  ...dispenserProducts.map((item) => route(item.path, item.title, item.description, {
    image: item.image,
    breadcrumbs: [['Water Dispensers', '/water-dispensers'], [item.name, item.path]],
    schemas: [productSchema(item.name, item.description, item.image, item.category)],
  })),
]

export const noindexRoutes = [
  route('/technical-knowledge/how-to-choose-the-right-water-filter', 'How to Choose the Right Water Filter | QLORA', 'A practical QLORA technical guide placeholder for selecting water filters by water condition and application.', {
    robots: 'noindex, follow',
    breadcrumbs: [['Technical Knowledge', '/technical-knowledge'], ['How to Choose the Right Water Filter', '/technical-knowledge/how-to-choose-the-right-water-filter']],
  }),
]

export const notFoundRoute = {
  path: '/__404__',
  title: 'Page Not Found | QLORA',
  description: 'The requested QLORA page could not be found.',
  canonical: `${siteUrl}/404`,
  image: defaultImage,
  type: 'website',
  robots: 'noindex, nofollow',
  breadcrumbs: [],
  schemas: [],
}

export function jsonLdForRoute(config) {
  const schemas = [...config.schemas]
  if (config.breadcrumbs.length > 0) {
    schemas.unshift({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        ...config.breadcrumbs.map(([name, path], index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name,
          item: absoluteUrl(path),
        })),
      ],
    })
  }
  return schemas
}
