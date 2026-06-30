import CompatibilitySolutionPage, { type CompatibilityPageData } from '../components/CompatibilitySolutionPage'

const disclaimer = 'All product names, trademarks and registered trademarks are the property of their respective owners and are used for compatibility reference purposes only. QLORA products are compatible replacement filters and are not manufactured by, affiliated with or endorsed by the original equipment manufacturers.'

const data: CompatibilityPageData = {
  path: '/products/refrigerator-water-filter',
  title: 'Compatible Refrigerator Water Filters',
  subtitle: 'High-quality compatible replacement filters for popular refrigerator systems. OEM, private label and neutral packaging available.',
  heroImage: {
    src: '/images/products/refrigerator-filter/hero.png',
    alt: 'Compatible refrigerator water filter replacement in a refrigerator lifestyle scene',
  },
  oemImage: {
    src: '/images/products/refrigerator-filter/private-label.png',
    alt: 'Private label refrigerator filter and custom packaging box',
  },
  seoTitle: 'Compatible Refrigerator Water Filters | Private Label & OEM | QLORA',
  seoDescription: 'Compatible replacement refrigerator water filters with neutral packaging, private label support and OEM supply for distributors.',
  seriesTitle: 'Compatible Refrigerator Filter Series',
  series: [
    {
      name: 'LT1000P Compatible Filter',
      models: 'LT1000P / LT1000PC / LT1000PCS',
      description: 'Compatible replacement refrigerator water filter for selected LT1000P series applications.',
      image: {
        src: '/images/products/refrigerator-filter/lt1000p.jpg',
        alt: 'LT1000P compatible refrigerator water filter',
      },
    },
    {
      name: 'DA29-10105J Compatible Filter',
      models: 'DA29-10105J / DA29 series',
      description: 'Compatible replacement refrigerator water filter for selected DA29 series applications.',
      image: {
        src: '/images/products/refrigerator-filter/da29-10105j.jpg',
        alt: 'DA29-10105J compatible refrigerator water filter',
      },
    },
    {
      name: 'RPWFE Compatible Filter',
      models: 'RPWFE / RPWF series',
      description: 'Compatible replacement refrigerator water filter for selected RPWFE series applications.',
      image: {
        src: '/images/products/refrigerator-filter/rpwfe.jpg',
        alt: 'RPWFE compatible refrigerator water filter',
      },
    },
  ],
  guideSubtitle: 'Check supported model references or contact us for compatibility verification.',
  guideColumns: ['QLORA Compatible Product', 'Compatible Model References', 'Product Type', 'Packaging Option'],
  guideRows: [
    ['LT1000P Compatible Filter', 'LT1000P / LT1000PC / LT1000PCS', 'Refrigerator Filter', 'Neutral / Private Label'],
    ['DA29-10105J Compatible Filter', 'DA29-10105J / DA29 series', 'Refrigerator Filter', 'Neutral / Private Label'],
    ['RPWFE Compatible Filter', 'RPWFE / RPWF series', 'Refrigerator Filter', 'Neutral / Private Label'],
  ],
  guideCta: 'Need another model? Contact us for compatibility verification.',
  featuresTitle: 'Why Choose Compatible Filters',
  features: [
    ['High Compatibility', 'Designed for selected refrigerator filter applications.'],
    ['Reliable Filtration', 'Supports cleaner water and better taste for daily use.'],
    ['Food-grade Materials', 'Manufactured with materials suitable for drinking water contact.'],
    ['Stable Supply', 'Support for distributors, importers and private label brands.'],
  ],
  oemContent: 'We support neutral packaging, private label branding and custom carton solutions for refrigerator filter distributors.',
  oemBullets: ['Neutral color box', 'Private label available', 'Custom label support', 'Retail packaging', 'Master carton customization'],
  qualityItems: ['Food-grade materials', 'Leak verification', 'Compatibility verification', 'Production traceability'],
  faqs: [
    ['Are these original refrigerator filters?', 'No. QLORA products are compatible replacement filters, not original refrigerator filters. Brand and model references are used only for compatibility confirmation.'],
    ['Can you provide neutral packaging?', 'Yes. Neutral packaging is available for distributors, importers and replacement filter programs.'],
    ['Can you print our brand logo?', 'Yes. Private label branding and custom label support are available for OEM projects.'],
    ['How do I confirm compatibility?', 'Share the refrigerator model, existing filter code or product photos and we can help verify compatibility.'],
    ['Can you support bulk orders?', 'Yes. We support bulk supply, master carton customization and export-ready cooperation.'],
  ],
  disclaimer,
  relatedLinks: [
    { title: 'Coffee Machine Filter', href: '/products/coffee-machine-filter' },
    { title: 'Shower Filter', href: '/products/shower-filter' },
    { title: 'Water Filtration', href: '/water-filtration' },
  ],
}

export default function RefrigeratorWaterFilterPage() {
  return <CompatibilitySolutionPage data={data} />
}
