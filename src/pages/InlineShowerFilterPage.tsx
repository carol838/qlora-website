import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CatalogDownloadLink from '../components/CatalogDownloadLink'
import { applySEO } from '../lib/seo'

const base = '/images/products/inline-shower-filter'
const path = '/products/inline-shower-filter'
const canonicalUrl = 'https://www.qloratech.com/products/inline-shower-filter'
const seoDescription = 'Explore QLORA inline shower filter solutions with 15-stage, 20-stage and 25-stage filtration configuration options, finish options and OEM/private label support.'

const overviewPoints = ['Inline Installation', 'Compact Housing', 'Configurable Filtration Platform', 'Finish Options']
const oemPoints = ['Filter Media Configuration', 'Housing Finish', 'Branding', 'Packaging']
const filtrationConfigurations = [
  {
    title: '15-Stage',
    description: 'Multi-media configuration for essential market requirements.',
  },
  {
    title: '20-Stage',
    description: 'Expanded multi-media configuration with additional media options.',
  },
  {
    title: '25-Stage',
    description: 'Extended multi-media configuration for broader customization requirements.',
  },
]
const specificationRows = [
  ['Product', 'Inline Shower Filter'],
  ['Housing Dimensions', 'Ø82 × 110 mm'],
  ['Housing Material', 'ABS'],
  ['Manufacturing Process', 'Injection Molding / Electroplating'],
  ['Operating Temperature', '1–55°C'],
  ['Application', 'Overhead Shower / Mixer Valve'],
  ['Cartridge Size', 'Ø61 × 69 mm'],
  ['Available Filtration Configurations', '15-Stage / 20-Stage / 25-Stage'],
]

function VisualCard({ src, alt, className = 'aspect-[4/3] object-contain', eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-soft sm:p-6">
      <img
        src={src}
        alt={alt}
        className={`${className} block w-full rounded-[1.5rem]`}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding="async"
        width="1200"
        height="900"
      />
    </div>
  )
}

export default function InlineShowerFilterPage() {
  useEffect(() => {
    applySEO({
      title: 'Inline Shower Filter | Shower Filtration Solutions | QLORA',
      description: seoDescription,
      path,
      canonicalUrl,
      image: 'https://qloratech.com/images/shower-solutions/shower-filter-installation-hero.png',
      breadcrumbs: [
        { name: 'Shower Solutions', path: '/shower-solutions' },
        { name: 'Inline Shower Filter', path },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Inline Shower Filter',
        brand: { '@type': 'Brand', name: 'QLORA' },
        category: 'Shower Filtration',
        description: seoDescription,
        image: 'https://qloratech.com/images/shower-solutions/shower-filter-installation-hero.png',
        additionalProperty: specificationRows.map(([name, value]) => ({
          '@type': 'PropertyValue',
          name,
          value,
        })),
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden pt-20">
          <div className="shell grid min-h-[620px] items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
            <div className="min-w-0 lg:col-span-6">
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink/45" aria-label="Breadcrumb">
                <a href="/" className="transition hover:text-ink">Home</a>
                <span aria-hidden="true">›</span>
                <a href="/shower-solutions" className="transition hover:text-ink">Shower Solutions</a>
                <span aria-hidden="true">›</span>
                <a href={path} className="text-ink/70 transition hover:text-ink">Inline Shower Filter</a>
              </nav>
              <p className="eyebrow">Shower filtration</p>
              <h1 className="display mt-6 max-w-2xl">Inline Shower Filter</h1>
              <p className="body-copy mt-7 max-w-xl">Compact shower-line filtration designed for flexible installation and everyday residential shower applications.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/contact" className="button-primary">Request Details</a>
                <CatalogDownloadLink label="Download Shower Catalog" pageType="product_detail" catalog="showerSolutions" />
              </div>
            </div>
            <div className="min-w-0 lg:col-span-6">
              <VisualCard src="/images/shower-solutions/shower-filter-installation-hero.png" alt="Inline shower filter installed with a shower system" className="aspect-[4/3] object-cover object-[42%_50%]" eager />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <VisualCard src={`${base}/filtration-structure.jpg`} alt="Inline shower filter with configurable filtration media" className="aspect-[4/3] object-contain" />
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow">Product overview</p>
              <h2 className="headline mt-5">Compact Filtration for Shower Applications</h2>
              <p className="body-copy mt-6 max-w-xl">Designed for installation directly in the shower water line, the QLORA Inline Shower Filter provides a compact platform for configurable shower filtration.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {overviewPoints.map((point) => (
                  <div key={point} className="rounded-full bg-white/70 px-5 py-3 text-sm text-ink/70 shadow-sm">{point}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Installation</p>
              <h2 className="headline mt-5">Designed for Flexible Installation</h2>
              <p className="body-copy mt-6 max-w-xl">The unit is designed as an independent shower-line filtration component that can be integrated into compatible shower installations.</p>
            </div>
            <div className="lg:col-span-7">
              <VisualCard src={`${base}/installation.png`} alt="Inline shower filter installed in a bathroom shower application" className="aspect-[4/3] object-cover object-center" />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Product design</p>
              <h2 className="headline mt-5">Compact Inline Design</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">Available Finish Options are shown for product evaluation and OEM discussion.</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <VisualCard src={`${base}/product-design.png`} alt="Compact inline shower filter product" className="aspect-[4/3] object-contain" />
              <VisualCard src={`${base}/finish-options.png`} alt="Inline shower filter finish options" className="aspect-[4/3] object-contain" />
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Multiple filtration configurations</p>
              <h2 className="headline mt-5">15-Stage, 20-Stage &amp; 25-Stage Options</h2>
              <p className="body-copy mt-6 max-w-xl">Available in 15-stage, 20-stage and 25-stage filtration configurations to support different market positioning and project requirements.</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink/55">Different configurations use different combinations and quantities of filtration media. Detailed media specifications are available upon request.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="/contact" className="button-primary">Discuss Filter Configuration</a>
                <a href="/technical-knowledge/shower-filter-media-guide" className="button-secondary">Learn About Shower Filter Media</a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {filtrationConfigurations.map((configuration) => (
                  <div key={configuration.title} className="rounded-[1.5rem] border border-line bg-white/75 p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold tracking-tight text-ink">{configuration.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-ink/60">{configuration.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-line bg-white/70 p-6 shadow-sm">
                <p className="text-base font-medium text-ink">Not sure which configuration fits your market?</p>
                <p className="mt-3 text-sm leading-6 text-ink/60">We can help compare filtration configurations based on your target positioning, price range and application requirements.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Product specifications</p>
              <h2 className="headline mt-5">Product Specifications</h2>
            </div>
            <div className="mt-10 grid items-start gap-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <VisualCard src={`${base}/product-specifications.png`} alt="Inline shower filter product dimensions and specification reference" className="aspect-[4/5] object-contain" />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft lg:col-span-6">
                <dl className="divide-y divide-line">
                  {specificationRows.map(([label, value]) => (
                    <div key={label} className="grid gap-2 px-6 py-5 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-center sm:px-8">
                      <dt className="text-sm font-medium uppercase tracking-[0.14em] text-ink/45">{label}</dt>
                      <dd className="text-base font-semibold leading-7 text-ink sm:text-lg">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="border-t border-line bg-mist/60 px-6 py-5 text-sm leading-6 text-ink/55 sm:px-8">
                  Filtration rating and detailed media specifications may vary by configuration and are available upon request.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">OEM &amp; private label</p>
              <h2 className="headline mt-5">OEM Support for Inline Shower Filters</h2>
              <p className="body-copy mt-6 max-w-xl">QLORA supports product discussion for filter media configuration, housing finish, branding and packaging requirements.</p>
              <div className="mt-9">
                <a href="/oem-private-label" className="button-primary">Discuss Your Project</a>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {oemPoints.map((point) => (
                <div key={point} className="rounded-2xl bg-white/75 px-5 py-4 text-sm font-medium text-ink/70 shadow-sm">{point}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Related shower filtration</p>
              <h2 className="headline mt-5">Related Shower Filtration</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <a href="/products/shower-filter" className="group block rounded-[1.5rem] border border-line bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                <h3 className="text-xl font-medium tracking-tight">Filtered Hand Shower</h3>
                <p className="mt-4 text-sm leading-6 text-ink/60">Integrated filter design for everyday shower use.</p>
                <p className="mt-6 text-sm font-medium text-nordic transition group-hover:translate-x-1">View Product &rarr;</p>
              </a>
              <a href="/shower-solutions" className="group block rounded-[1.5rem] border border-line bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                <h3 className="text-xl font-medium tracking-tight">Explore Shower Solutions</h3>
                <p className="mt-4 text-sm leading-6 text-ink/60">View shower filtration, shower systems, heads, hand showers and faucets.</p>
                <p className="mt-6 text-sm font-medium text-nordic transition group-hover:translate-x-1">Explore Products &rarr;</p>
              </a>
              <div className="rounded-[1.5rem] border border-line bg-white/70 p-6 shadow-sm">
                <h3 className="text-xl font-medium tracking-tight">Download Shower Catalog</h3>
                <p className="mt-4 text-sm leading-6 text-ink/60">Download the QLORA Shower Solutions catalog for product review.</p>
                <div className="mt-6">
                  <CatalogDownloadLink label="Download Catalog" pageType="product_detail" catalog="showerSolutions" className="inline-flex text-sm font-medium text-nordic transition hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Start a conversation</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Ready to Discuss Inline Shower Filter?</h2>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request Details</a>
              <a href="/oem-private-label" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">Discuss Your Project</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

