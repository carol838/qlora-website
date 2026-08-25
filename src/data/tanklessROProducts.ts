export type TanklessROProduct = {
  qloraId: string
  supplierModel: string
  slug: string
  publicName: string
  shortDescription: string
  overview: string
  dimension: string
  image: string
  imageAlt: string
  lifestyle: {
    eyebrow: string
    heading: string
    copy: string
    image: string
    imageAlt: string
    imageClassName?: string
  }
  differentiation: string[]
  cardTags: string[]
  seoTitle: string
  seoDescription: string
}

export const tanklessImageBase = '/images/ro-systems/tankless'

export const tanklessCommonConfigurations = [
  { label: 'Filtration Stages', value: '4-stage / 5-stage' },
  { label: 'Capacity Options', value: '75–1200 GPD' },
  { label: 'Dual-Water Configuration', value: 'Available' },
  { label: 'Color Options', value: 'White / Gold / Gray / Blue' },
]

export const tanklessCommonSpecs = [
  { label: 'Feed Water Source', value: 'Municipal Tap Water' },
  { label: 'Feed Water Temperature', value: '5–38°C' },
  { label: 'Feed Water Pressure', value: '0.1–0.4 MPa' },
  { label: 'Catalog-Stated Filtration Precision', value: '0.0001 μm' },
  { label: 'Available Filtration Stages', value: '4-stage / 5-stage' },
  { label: 'Available Capacity Range', value: '75–1200 GPD' },
  { label: 'Dual-Water Option', value: 'Available' },
  { label: 'Color Options', value: 'White / Gold / Gray / Blue' },
]

export const tanklessROProducts: TanklessROProduct[] = [
  {
    qloraId: 'QR-TL-06B',
    supplierModel: '06-B',
    slug: 'slim-tankless-ro-system',
    publicName: 'Slim Tankless RO System',
    shortDescription: 'A compact direct-flow RO platform with a 150 mm slim body, TDS display and flexible filtration configurations for residential and OEM applications.',
    overview: 'Space-efficient tankless RO platform for compact under-sink installations and OEM drinking water projects.',
    dimension: '460 × 150 × 390 mm',
    image: `${tanklessImageBase}/slim-tankless-ro-system.webp`,
    imageAlt: 'Slim tankless RO system with black smart display panel',
    lifestyle: {
      eyebrow: 'COMPACT INSTALLATION',
      heading: 'Slim Design for Space-Efficient Installation',
      copy: 'With a 150 mm cabinet width, this tankless RO platform is designed for compact under-sink spaces while helping preserve usable cabinet space.',
      image: `${tanklessImageBase}/scenes/slim-tankless-ro-installation.webp`,
      imageAlt: 'Slim tankless RO system installed in a compact under-sink cabinet',
      imageClassName: 'object-cover object-center',
    },
    differentiation: ['150 mm slim cabinet width', 'TDS display', 'Smart touch control', 'Filter-life reminder', 'Configurable 4-stage / 5-stage filtration', 'Configurable 75–1200 GPD range', 'Dual-water option available', 'Customizable colors'],
    cardTags: ['Slim 150 mm Body', 'TDS Display', '4 / 5 Stage Options'],
    seoTitle: 'Slim Tankless RO System | QLORA',
    seoDescription: 'Explore a compact tankless RO platform with a 150 mm slim body, TDS display and configurable filtration options for residential and OEM projects.',
  },
  {
    qloraId: 'QR-TL-09B',
    supplierModel: '09-B',
    slug: 'smart-display-tankless-ro-system',
    publicName: 'Smart Display Tankless RO System',
    shortDescription: 'A tankless RO platform with a large circular display, smart touch control and configurable filtration options for residential drinking water projects.',
    overview: 'Smart-display tankless RO design for OEM partners seeking a clean cabinet form and flexible configuration options.',
    dimension: '438 × 168 × 390 mm',
    image: `${tanklessImageBase}/smart-display-tankless-ro-system.webp`,
    imageAlt: 'Smart display tankless RO system with circular touch panel',
    lifestyle: {
      eyebrow: 'SMART INTERFACE',
      heading: 'Smart Display for Everyday Monitoring',
      copy: 'The large circular display provides a clear visual interface for convenient system-status and filter-life monitoring.',
      image: `${tanklessImageBase}/scenes/smart-display-tankless-ro-installation.webp`,
      imageAlt: 'Smart display tankless RO system installed under a modern kitchen sink',
      imageClassName: 'object-cover object-center',
    },
    differentiation: ['Large display', 'Smart touch control', 'Filter-life reminder', 'Configurable 4-stage / 5-stage filtration', 'Configurable 75–1200 GPD range', 'Dual-water option available', 'Customizable colors'],
    cardTags: ['Large Display', 'Touch Control', 'Filter-Life Reminder'],
    seoTitle: 'Smart Display Tankless RO System | QLORA',
    seoDescription: 'Explore a tankless RO platform with smart display control, filter-life reminder and configurable filtration and capacity options.',
  },
  {
    qloraId: 'QR-TL-09C',
    supplierModel: '09-C',
    slug: 'tds-monitoring-tankless-ro-system',
    publicName: 'TDS Monitoring Tankless RO System',
    shortDescription: 'A tankless RO system with TDS display, smart touch panel and flexible filtration configurations for residential and OEM applications.',
    overview: 'TDS-monitoring tankless RO platform with a smart display interface and configurable capacity options for partner projects.',
    dimension: '438 × 168 × 390 mm',
    image: `${tanklessImageBase}/tds-monitoring-tankless-ro-system.webp`,
    imageAlt: 'TDS monitoring tankless RO system with black front display',
    lifestyle: {
      eyebrow: 'TDS MONITORING',
      heading: 'Integrated TDS Monitoring at a Glance',
      copy: 'The integrated display provides convenient TDS visibility and system-status monitoring directly from the front interface.',
      image: `${tanklessImageBase}/scenes/tds-monitoring-tankless-ro-scene.webp`,
      imageAlt: 'Tankless RO system with integrated TDS monitoring display',
      imageClassName: 'object-cover object-center',
    },
    differentiation: ['TDS display', 'Smart touch control', 'Filter-life reminder', 'Configurable 4-stage / 5-stage filtration', 'Configurable 75–1200 GPD range', 'Dual-water option available', 'Customizable colors'],
    cardTags: ['TDS Display', 'Smart Touch Panel', 'Filter-Life Reminder'],
    seoTitle: 'TDS Monitoring Tankless RO System | QLORA',
    seoDescription: 'Explore a tankless RO system with TDS monitoring, touch control and flexible filtration configurations for residential and OEM applications.',
  },
  {
    qloraId: 'QR-TL-09D',
    supplierModel: '09-D',
    slug: 'dual-tds-display-tankless-ro-system',
    publicName: 'Dual TDS Display Tankless RO System',
    shortDescription: 'A tankless RO platform with dual raw-water and purified-water TDS displays plus configurable filtration and capacity options.',
    overview: 'Dual-display tankless RO platform designed for projects that need visible raw-water and purified-water TDS display interfaces.',
    dimension: '438 × 168 × 390 mm',
    image: `${tanklessImageBase}/dual-tds-display-tankless-ro-system.webp`,
    imageAlt: 'Dual TDS display tankless RO system with white cabinet',
    lifestyle: {
      eyebrow: 'DUAL TDS DISPLAY',
      heading: 'Clear Water-Quality Monitoring',
      copy: 'The dual-display interface provides convenient visibility of water-quality information while supporting flexible configurations for modern kitchen applications.',
      image: `${tanklessImageBase}/scenes/dual-tds-tankless-ro-scene.webp`,
      imageAlt: 'Dual TDS display tankless RO system in a modern kitchen application',
      imageClassName: 'object-cover object-center',
    },
    differentiation: ['Dual display', 'Raw-water TDS display', 'Purified-water TDS display', 'Smart touch control', 'Filter-life reminder', 'Configurable 4-stage / 5-stage filtration', 'Configurable 75–1200 GPD range', 'Dual-water option available', 'Customizable colors'],
    cardTags: ['Dual Display', 'Raw-Water TDS', 'Purified-Water TDS'],
    seoTitle: 'Dual TDS Display Tankless RO System | QLORA',
    seoDescription: 'Explore a tankless RO platform with dual raw-water and purified-water TDS displays plus configurable filtration and capacity options.',
  },
]

export function getTanklessROProduct(slug: string) {
  return tanklessROProducts.find((product) => product.slug === slug)
}

export function getTanklessROHref(product: TanklessROProduct) {
  return `/products/${product.slug}`
}
