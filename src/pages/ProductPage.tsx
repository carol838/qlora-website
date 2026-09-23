import ProductDetailTemplate, { type ProductDetail } from '../components/ProductDetailTemplate'
import CoffeeMachineFilterPage from './CoffeeMachineFilterPage'
import RefrigeratorWaterFilterPage from './RefrigeratorWaterFilterPage'
import TanklessROSystemPage from './TanklessROSystemPage'
import TanklessRODetailPage from './TanklessRODetailPage'
import { getTanklessROProduct } from '../data/tanklessROProducts'
import UnderSinkROSystemPage from './UnderSinkROSystemPage'
import Home from './Home'
import InlineShowerFilterPage from './InlineShowerFilterPage'

const showerSpecs = [
  { label: 'Product Type', value: 'Filtered hand shower with replaceable cartridge' },
  { label: 'Application', value: 'Handheld shower filtration' },
  { label: 'Filter Media', value: 'Multi-stage shower filtration media' },
  { label: 'Replacement', value: 'Simple cartridge replacement' },
  { label: 'OEM Options', value: 'Logo, packaging and configuration support' },
]

const showerFaqs = [
  { question: 'Can this shower filter be customized?', answer: 'Yes. QLORA can support private label branding, packaging and selected configuration options.' },
  { question: 'Is OEM service available?', answer: 'Yes. OEM and private label support is available for distributors, importers and water filtration brands.' },
  { question: 'Can I request samples?', answer: 'Yes. Share your product requirements and target market so we can discuss the right sample direction.' },
  { question: 'How is the filter replaced?', answer: 'The cartridge is designed for simple replacement by opening the shower handle, removing the used cartridge and inserting a new one.' },
]

const products: Record<string, ProductDetail> = {
  'shower-filter': {
    slug: 'shower-filter',
    title: 'Filtered Hand Shower',
    intro: 'A handheld shower format with an integrated replaceable filter cartridge for residential product lines and private-label programs.',
    overview: 'QLORA filtered hand shower solutions combine a handheld shower format with an integrated cartridge for distributors, retailers and branded product programs.',
    hideOverview: true,
    hideFeatures: true,
    howItWorksAfterHero: true,
    specsAfterHow: true,
    heroImage: {
      src: '/images/products/shower-filter/hero.webp',
      alt: 'Filtered hand shower with integrated replaceable cartridge',
    },
    howItWorksImage: {
      src: '/images/products/shower-filter/how-it-works.webp',
      alt: 'Filtered hand shower cartridge structure and replacement reference',
    },
    howItWorksImageClassName: '',
    specsImage: {
      src: '/images/products/shower-filter/specifications.webp',
      alt: 'Shower filter cartridge size options and dimensions',
    },
    replacementImage: {
      src: '/images/products/shower-filter/replacement.webp',
      alt: 'Step by step shower filter cartridge replacement instructions',
    },
    oemImage: {
      src: '/images/products/shower-filter/oem-packaging.webp',
      alt: 'Private label shower filter with custom retail packaging box',
    },
    highlights: ['Handheld format', 'Integrated cartridge', 'Easy replacement', 'Private label ready'],
    features: [],
    howItWorksTitle: 'Filtered Hand Shower Structure',
    howItWorks: ['Shower water inlet', 'Integrated cartridge', 'Filter media contact', 'Water outlet through hand shower'],
    applications: ['Home', 'Hotel', 'Residential', 'Retail Program'],
    specs: showerSpecs,
    related: [
      { title: 'Refrigerator Water Filter', href: '/products/refrigerator-water-filter' },
      { title: 'Coffee Machine Filter', href: '/products/coffee-machine-filter' },
      { title: 'Water Filtration', href: '/water-filtration' },
    ],
    faqs: showerFaqs,
    seoTitle: 'Filtered Hand Shower | Shower Filtration Solutions | QLORA',
    seoDescription: 'Explore filtered hand showers with integrated replaceable cartridges and OEM branding and packaging support for distributors and private-label programs.',
    catalogDownload: { label: 'Download Catalog', pageType: 'product_detail', catalog: 'showerSolutions' },
  },
}

export default function ProductPage({ slug }: { slug: string }) {
  if (slug === 'inline-shower-filter') return <InlineShowerFilterPage />
  if (slug === 'tankless-ro-system') return <TanklessROSystemPage />
  if (getTanklessROProduct(slug)) return <TanklessRODetailPage slug={slug} />
  if (slug === 'under-sink-ro-system') return <UnderSinkROSystemPage />
  if (slug === 'coffee-machine-filter') return <CoffeeMachineFilterPage />
  if (slug === 'refrigerator-water-filter') return <RefrigeratorWaterFilterPage />
  const product = products[slug]
  if (!product) return <Home />
  return <ProductDetailTemplate product={product} />
}

