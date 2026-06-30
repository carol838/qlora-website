import ProductDetailTemplate, { type ProductDetail } from '../components/ProductDetailTemplate'
import CoffeeMachineFilterPage from './CoffeeMachineFilterPage'
import RefrigeratorWaterFilterPage from './RefrigeratorWaterFilterPage'
import TanklessROSystemPage from './TanklessROSystemPage'
import UnderSinkROSystemPage from './UnderSinkROSystemPage'
import Home from './Home'

const showerSpecs = [
  { label: 'Product Type', value: 'Replacement shower filter cartridge' },
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
    title: 'Shower Filter',
    intro: 'Consumer-focused shower filtration products for cleaner water feel, wellness routines and private label programs.',
    overview: 'QLORA shower filter solutions are built for wellness-focused water filtration channels, personal care applications and branded consumer product lines.',
    hideOverview: true,
    hideFeatures: true,
    howItWorksAfterHero: true,
    specsAfterHow: true,
    heroImage: {
      src: '/images/products/shower-filter/hero.webp',
      alt: 'Transparent shower head comparison with and without shower filter',
    },
    howItWorksImage: {
      src: '/images/products/shower-filter/how-it-works.webp',
      alt: 'Shower filter working principle and lifespan comparison',
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
    highlights: ['Wellness focused', 'Consumer product', 'Easy replacement', 'Private label ready'],
    features: [],
    howItWorksTitle: 'Shower Filtration Principle',
    howItWorks: ['Shower water inlet', 'Filter media contact', 'Water quality improvement', 'Cleaner shower experience'],
    applications: ['Home', 'Hotel', 'Wellness', 'Retail Program'],
    specs: showerSpecs,
    related: [
      { title: 'Refrigerator Water Filter', href: '/products/refrigerator-water-filter' },
      { title: 'Coffee Machine Filter', href: '/products/coffee-machine-filter' },
      { title: 'Water Filtration', href: '/water-filtration' },
    ],
    faqs: showerFaqs,
    seoTitle: 'Shower Filter | QLORA',
    seoDescription: 'Explore QLORA shower filters for wellness-focused water filtration, consumer channels and private label product lines.',
  },
}

export default function ProductPage({ slug }: { slug: string }) {
  if (slug === 'tankless-ro-system') return <TanklessROSystemPage />
  if (slug === 'under-sink-ro-system') return <UnderSinkROSystemPage />
  if (slug === 'coffee-machine-filter') return <CoffeeMachineFilterPage />
  if (slug === 'refrigerator-water-filter') return <RefrigeratorWaterFilterPage />
  const product = products[slug]
  if (!product) return <Home />
  return <ProductDetailTemplate product={product} />
}
