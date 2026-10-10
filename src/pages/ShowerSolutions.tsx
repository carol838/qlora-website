import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { absoluteUrl, applySEO } from '../lib/seo'

const base = '/images/shower-solutions'

const categories = [
  { title: 'Inline Shower Filters', description: '15-stage, 20-stage and 25-stage media configurations for shower-line installation.', href: '/products/inline-shower-filter' },
  { title: 'Filtered Hand Showers', description: 'Handheld shower formats with an integrated replaceable filter cartridge.', href: '/products/shower-filter' },
  { title: 'Shower Accessories', description: 'Selected shower heads, hand showers, systems and mixer components.', href: '#additional-shower-products' },
]

type ShowerProduct = {
  name: string
  category: string
  finish?: string
  size?: string
  image: string
  alt: string
}

const showerSystems: ShowerProduct[] = [
  { name: 'Brushed Gold Round Shower System', category: 'Shower Systems', finish: 'Brushed Gold', image: `${base}/systems/QS-SYS-001.webp`, alt: 'Brushed gold round shower system' },
  { name: 'Matte Black Round Shower System', category: 'Shower Systems', finish: 'Matte Black', image: `${base}/systems/QS-SYS-002.webp`, alt: 'Matte black round shower system' },
  { name: 'Chrome Square Shower System', category: 'Shower Systems', finish: 'Chrome', image: `${base}/systems/QS-SYS-005.webp`, alt: 'Chrome square shower system' },
  { name: 'Matte Black Square Shower System', category: 'Shower Systems', finish: 'Matte Black', image: `${base}/systems/QS-SYS-007.webp`, alt: 'Matte black square shower system' },
  { name: 'Chrome Round Shower System', category: 'Shower Systems', finish: 'Chrome', image: `${base}/systems/QS-SYS-014.webp`, alt: 'Chrome round shower system' },
  { name: 'Chrome Square Shower System', category: 'Shower Systems', finish: 'Chrome', image: `${base}/systems/QS-SYS-019.webp`, alt: 'Chrome square shower system' },
]

const showerHeads: ShowerProduct[] = [
  { name: 'Round Rain Shower Head', category: 'Shower Heads', finish: 'Chrome', size: '300 mm diameter; H56 mm', image: `${base}/shower-heads/QS-HEAD-001.webp`, alt: 'Chrome round rain shower head' },
  { name: 'Round Rain Shower Head', category: 'Shower Heads', finish: 'Dark and Chrome visual', size: '260 mm diameter; H63 mm', image: `${base}/shower-heads/QS-HEAD-003.webp`, alt: 'Round rain shower head in dark and chrome finish' },
  { name: 'Slim Rectangular Rain Shower Head', category: 'Shower Heads', finish: 'Chrome', size: '200 x 320 mm; H60 mm', image: `${base}/shower-heads/QS-HEAD-004.webp`, alt: 'Chrome slim rectangular rain shower head' },
  { name: 'Rectangular Shower Head', category: 'Shower Heads', finish: 'Black and Chrome visual', size: '326 x 210 mm; H77 mm', image: `${base}/shower-heads/QS-HEAD-009.webp`, alt: 'Rectangular shower head in black and chrome finish' },
]

const handShowers: ShowerProduct[] = [
  { name: 'Round Hand Shower', category: 'Hand Showers', finish: 'Matte Black', size: '128 mm diameter; H265 mm', image: `${base}/hand-showers/QS-HAND-002.webp`, alt: 'Matte black round hand shower' },
  { name: 'Round Hand Shower', category: 'Hand Showers', finish: 'Chrome', size: '120 mm diameter; H258 mm', image: `${base}/hand-showers/QS-HAND-008.webp`, alt: 'Chrome round hand shower' },
  { name: 'Rectangular Hand Shower', category: 'Hand Showers', finish: 'Chrome', size: '120 x 90 mm; H260 mm', image: `${base}/hand-showers/QS-HAND-011.webp`, alt: 'Chrome rectangular hand shower' },
  { name: 'Rectangular Hand Shower', category: 'Hand Showers', finish: 'Chrome and dark face', size: '110 x 120 mm; H260 mm', image: `${base}/hand-showers/QS-HAND-017.webp`, alt: 'Rectangular hand shower with chrome body and dark face' },
]

const showerFaucets: ShowerProduct[] = [
  { name: 'Bar Shower Mixer Faucet', category: 'Shower Faucets', finish: 'Chrome', image: `${base}/shower-faucets/QS-FAUC-004.webp`, alt: 'Chrome bar shower mixer faucet' },
  { name: 'Matte Black Shower Mixer Faucet', category: 'Shower Faucets', finish: 'Matte Black', image: `${base}/shower-faucets/QS-FAUC-010.webp`, alt: 'Matte black shower mixer faucet' },
  { name: 'Square Shower Mixer Faucet', category: 'Shower Faucets', finish: 'Chrome', image: `${base}/shower-faucets/QS-FAUC-012.webp`, alt: 'Chrome square shower mixer faucet' },
  { name: 'Matte Black Bar Shower Mixer Faucet', category: 'Shower Faucets', finish: 'Matte Black', image: `${base}/shower-faucets/QS-FAUC-028.webp`, alt: 'Matte black bar shower mixer faucet' },
]

const showerFiltrationEntries = [
  {
    title: 'Filtered Hand Shower',
    description: 'Integrated filter design for everyday shower use.',
    href: '/products/shower-filter',
  },
  {
    title: 'Inline Shower Filter',
    description: 'Independent shower-line filtration for flexible installation.',
    href: '/products/inline-shower-filter',
  },
]

const additionalShowerProducts = [showerSystems[0], showerHeads[0], handShowers[1], showerFaucets[0]]

const mediaConfigurations = [
  ['15-Stage', 'Alternative media configuration for selected product programs.'],
  ['20-Stage', 'Featured configuration for inline shower filter sourcing.'],
  ['25-Stage', 'Alternative media configuration for market-specific product positioning.'],
]

function ProductCard({ product }: { product: ShowerProduct }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.25rem] bg-[#f7f6f1] p-5">
        <img src={product.image} alt={product.alt} className="h-full w-full object-contain" loading="lazy" decoding="async" width="800" height="600" />
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nordic">{product.category}</p>
        <h3 className="mt-3 text-xl font-medium leading-tight tracking-tight">{product.name}</h3>
        <div className="mt-5 space-y-2 text-sm leading-6 text-ink/60">
          {product.finish && <p>Finish: {product.finish}</p>}
          {product.size && <p>Size: {product.size}</p>}
        </div>
        <a href="/contact" className="mt-auto pt-6 text-sm font-medium text-nordic">Request Details &rarr;</a>
      </div>
    </article>
  )
}

export default function ShowerSolutions() {
  useEffect(() => {
    applySEO({
      title: 'Shower Systems, Filters & Components | QLORA',
      description: 'Explore QLORA shower solutions including shower filters, shower systems, shower heads, hand showers and shower faucets for residential and OEM applications.',
      path: '/shower-solutions',
      image: absoluteUrl('/images/shower-solutions/systems/QS-SYS-001.webp'),
      breadcrumbs: [{ name: 'Shower Solutions', path: '/shower-solutions' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'QLORA shower solutions',
        itemListElement: [
          ...showerFiltrationEntries.map((product, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: product.title,
            url: absoluteUrl(product.href),
          })),
          ...additionalShowerProducts.map((product, index) => ({
            '@type': 'ListItem',
            position: index + showerFiltrationEntries.length + 1,
            name: product.name,
          })),
        ],
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-20">
          <div className="shell grid min-h-[560px] items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-6">
              <p className="eyebrow">Shower filtration &amp; OEM supply</p>
              <h1 className="display mt-6 max-w-xl">Shower Solutions</h1>
              <p className="body-copy mt-7 max-w-xl">Shower filtration products and selected shower components for distributors, retailers and private-label projects.</p>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink/55">Prioritize inline shower filters with configurable 15-stage, 20-stage and 25-stage media options, alongside filtered hand showers and supporting accessories.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#explore-shower-solutions" className="button-primary">Explore Products</a>
                <a href="/contact" className="button-secondary">Discuss Your Project</a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[2rem] bg-white/70 p-6 shadow-soft">
                <img src={`${base}/shower-filter-installation-hero.png`} alt="Shower filter installed above a rainfall shower head in a modern bathroom" className="aspect-[4/3] w-full rounded-[1.5rem] object-cover object-[42%_50%]" loading="eager" fetchPriority="high" decoding="async" width="1200" height="900" />
              </div>
            </div>
          </div>
        </section>

        <section id="explore-shower-solutions" className="scroll-mt-20 py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Product scope</p>
              <h2 className="headline mt-5">Explore Shower Solutions</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {categories.map((category) => (
                <a key={category.title} href={category.href} className="group rounded-[1.5rem] border border-line bg-white/65 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                  <h3 className="text-xl font-medium tracking-tight">{category.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{category.description}</p>
                  <p className="mt-6 text-sm font-medium text-nordic transition group-hover:translate-x-1">Explore &rarr;</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">Primary product focus</p>
              <h2 className="headline mt-5">20-Stage Inline Shower Filter</h2>
              <p className="body-copy mt-6 max-w-2xl">The 20-stage configuration is the primary inline shower filter option for distributor, retail and private-label discussions. Media selection and final configuration can be reviewed for each project.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {mediaConfigurations.map(([title, description]) => (
                  <article key={title} className={`rounded-[1.5rem] border p-5 shadow-sm ${title === '20-Stage' ? 'border-accent/40 bg-white ring-2 ring-accent/10' : 'border-line bg-white/65'}`}>
                    {title === '20-Stage' && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Featured</p>}
                    <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/products/inline-shower-filter" className="button-primary">View Inline Shower Filter</a>
                <a href="/contact" className="button-secondary">Discuss OEM Supply</a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure className="mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center overflow-hidden rounded-[2rem] bg-white/75 p-8 shadow-soft md:p-10">
                <img src="/images/products/inline-shower-filter/product-design.png" alt="Complete 20-stage inline shower filter product" className="h-full w-full object-contain" loading="lazy" decoding="async" width="1254" height="1254" />
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f3ec] py-14 md:py-20">
          <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Shower filtration</p>
              <h2 className="headline mt-5">Shower Filtration</h2>
              <p className="body-copy mt-6">Practical shower filtration solutions for different residential applications and market needs.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/products/inline-shower-filter" className="button-primary">Explore Inline Shower Filter</a>
                <a href="/technical-knowledge/shower-filter-media-guide" className="button-secondary">Shower Filter Media Guide</a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[2rem] bg-[#fbfaf6] p-6 shadow-soft">
                <img src="/images/shower-solutions/shower-filter-solution.png" alt="Filtered hand shower inline shower filter and shower head solution" className="aspect-[16/10] w-full rounded-[1.5rem] object-contain" loading="lazy" decoding="async" width="1536" height="1024" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-12">
              {showerFiltrationEntries.map((entry) => (
                <a key={entry.href} href={entry.href} className="group block rounded-[1.5rem] border border-line bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                  <h3 className="text-xl font-medium tracking-tight">{entry.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{entry.description}</p>
                  <p className="mt-6 text-sm font-medium text-nordic transition group-hover:translate-x-1">View Details &rarr;</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="additional-shower-products" className="scroll-mt-20 py-14 md:py-20">
          <div className="shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Supporting range</p>
              <h2 className="headline mt-5">Additional Shower Products</h2>
              <p className="body-copy mt-5 max-w-2xl">A compact selection of shower systems, heads, hand showers and mixer components for broader project discussions.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalShowerProducts.map((product) => <ProductCard key={`${product.category}-${product.name}-${product.image}`} product={product} />)}
            </div>
          </div>
        </section>

        <section className="bg-[#f1f0eb] py-14 md:py-20">
          <div className="shell grid items-center gap-10 rounded-[2rem] border border-line bg-white/55 p-6 shadow-soft md:p-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow">OEM support</p>
              <h2 className="headline mt-5">OEM &amp; Private Label Shower Solutions</h2>
              <p className="body-copy mt-6 max-w-2xl">Inline shower filters, filtered hand showers and selected components can support OEM projects including product selection, finishes, packaging and private label requirements.</p>
              <div className="mt-8">
                <a href="/oem-private-label" className="button-primary">Discuss Your Project</a>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-[0.85fr_1.15fr] sm:items-center lg:col-span-7">
              <figure className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <img src="/images/shower-solutions/shower-filter-package.webp" alt="Real retail packaging for an inline shower filter product" className="h-full w-full object-cover object-center" loading="lazy" decoding="async" width="1200" height="1600" />
              </figure>
              <div className="grid gap-3">
                {['Product Selection', 'Finish Options', 'Private Label', 'Packaging Support', 'OEM Project Coordination'].map((point) => (
                  <div key={point} className="rounded-2xl bg-white/75 px-5 py-4 text-sm font-medium text-ink/70 shadow-sm">{point}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Start a conversation</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Looking for Shower Products for Your Market?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60">Tell us your target application, product requirements and market needs. We can help evaluate suitable shower solutions for your project.</p>
            <div className="mt-9">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Contact QLORA</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

