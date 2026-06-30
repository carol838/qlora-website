import CompatibilitySolutionPage, { type CompatibilityPageData } from '../components/CompatibilitySolutionPage'

const disclaimer = 'All product names, trademarks and registered trademarks are the property of their respective owners and are used for compatibility reference purposes only. QLORA products are compatible replacement filters and are not manufactured by, affiliated with or endorsed by the original equipment manufacturers.'

const data: CompatibilityPageData = {
  path: '/products/coffee-machine-filter',
  title: 'Compatible Coffee Machine Water Filters',
  subtitle: 'Compatible replacement water filters for coffee machines, espresso equipment and beverage systems. OEM, private label and neutral packaging available.',
  heroImage: {
    src: '/images/products/coffee-machine-filter/hero.webp',
    alt: 'Coffee machine water filter being installed in an espresso machine',
  },
  oemImage: {
    src: '/images/products/coffee-machine-filter/private-label.webp',
    alt: 'Private label coffee machine water filter with custom packaging box',
  },
  seoTitle: 'Compatible Coffee Machine Water Filters | OEM & Private Label | QLORA',
  seoDescription: 'Compatible replacement coffee machine water filters for espresso and beverage systems with OEM, private label and neutral packaging support.',
  seriesTitle: 'Compatible Coffee Filter Series',
  series: [
    {
      name: 'Compatible Filter for Philips CA6903/10',
      models: 'Philips CA6903/10 / Selected Philips AquaClean-style coffee machines',
      description: 'Compatible replacement water filter for selected Philips coffee machine applications.',
      image: {
        src: '/images/products/coffee-machine-filter/philips-ca6903-10.webp',
        alt: 'Compatible replacement filter for Philips CA6903/10 coffee machines',
      },
    },
    {
      name: 'Compatible Filter for Jura Coffee Machines',
      models: 'Selected Jura coffee machine filter systems',
      description: 'Compatible replacement water filter for selected Jura coffee machine applications.',
      image: {
        src: '/images/products/coffee-machine-filter/jura.webp',
        alt: 'Compatible replacement filter for Jura coffee machines',
      },
    },
    {
      name: "Compatible Filter for De'Longhi Coffee Machines",
      models: "Selected De'Longhi coffee machine filter systems",
      description: "Compatible replacement water filter for selected De'Longhi coffee machine applications.",
      image: {
        src: '/images/products/coffee-machine-filter/delonghi.webp',
        alt: "Compatible replacement filter for De'Longhi coffee machines",
      },
    },
  ],
  guideSubtitle: 'Share your machine model and we can help verify compatibility.',
  guideColumns: ['QLORA Compatible Product', 'Compatible Model References', 'Application', 'Packaging Option'],
  guideRows: [
    ['Compatible Filter for Philips CA6903/10', 'Philips CA6903/10 / selected Philips coffee machines', 'Coffee Machine', 'Neutral / Private Label'],
    ['Compatible Filter for Jura Coffee Machines', 'Selected Jura coffee machine filter systems', 'Coffee Machine', 'Neutral / Private Label'],
    ["Compatible Filter for De'Longhi Coffee Machines", "Selected De'Longhi coffee machine filter systems", 'Coffee Machine', 'Neutral / Private Label'],
  ],
  guideCta: 'Need help matching your coffee machine model? Contact us for compatibility support.',
  featuresTitle: 'Why Choose Compatible Coffee Filters',
  features: [
    ['Better Coffee Taste', 'Helps improve water quality for better coffee flavor.'],
    ['Scale Protection', 'Helps reduce scale buildup in coffee equipment.'],
    ['Machine Protection', 'Supports stable operation and longer equipment life.'],
    ['OEM Supply', 'Suitable for coffee equipment distributors and private label brands.'],
  ],
  oemContent: 'We support neutral packaging, private label branding and custom carton solutions for coffee machine filter distributors.',
  oemBullets: ['Neutral packaging', 'Private label available', 'Custom model label', 'Retail box support', 'Master carton customization'],
  qualityItems: ['Food-grade materials', 'Flow verification', 'Compatibility verification', 'Stable supply'],
  faqs: [
    ['Are these original coffee machine filters?', 'No. QLORA products are compatible replacement filters, not original coffee machine filters. Brand and model references are used only for compatibility confirmation.'],
    ['Can you help match my machine model?', 'Yes. Share your machine model, filter code or product photos and we can help verify compatibility.'],
    ['Do you support private label packaging?', 'Yes. Private label packaging, custom labels and carton solutions are available for OEM programs.'],
    ['Can you provide neutral packaging?', 'Yes. Neutral packaging is available for distributors and importers.'],
    ['Can you support distributor orders?', 'Yes. We support bulk orders, export cooperation and long-term supply programs.'],
  ],
  disclaimer,
  relatedLinks: [
    { title: 'Refrigerator Water Filter', href: '/products/refrigerator-water-filter' },
    { title: 'Shower Filter', href: '/products/shower-filter' },
    { title: 'Water Filtration', href: '/water-filtration' },
  ],
}

export default function CoffeeMachineFilterPage() {
  return <CompatibilitySolutionPage data={data} />
}
