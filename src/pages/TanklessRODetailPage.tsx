import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import { applySEO } from '../lib/seo'
import CatalogDownloadLink from '../components/CatalogDownloadLink'
import {
  getTanklessROHref,
  getTanklessROProduct,
  tanklessCommonConfigurations,
  tanklessCommonSpecs,
  tanklessROProducts,
  type TanklessROProduct,
} from '../data/tanklessROProducts'

const howItWorks = [
  ['Pre-Filtration', 'A typical RO architecture may include sediment and carbon pre-filtration before the RO stage.'],
  ['RO Separation', 'The RO membrane stage is commonly used to support fine filtration in drinking water systems.'],
  ['Post Treatment', 'A post-treatment stage may be configured according to the selected product plan.'],
]

const applications = ['Residential Kitchen', 'Apartment', 'Under-Sink Installation', 'Home Drinking Water', 'OEM Drinking Water Projects']

const faq = [
  ['What capacity options are available?', 'Selected configurations can support capacities from 75 to 1200 GPD depending on project requirements.'],
  ['Can the filtration stages be customized?', 'The platform can support 4-stage or 5-stage filtration configurations.'],
  ['Is a dual-water configuration available?', 'Yes. Dual-water configuration is listed as an available option.'],
  ['What colors are available?', 'White, gold, gray and blue are listed as customizable color options.'],
  ['Can QLORA support OEM projects?', 'Yes. QLORA supports selected OEM projects with product configuration, branding, packaging coordination and project communication.'],
]

function Breadcrumb({ product }: { product: TanklessROProduct }) {
  return (
    <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink/45" aria-label="Breadcrumb">
      <a href="/" className="transition hover:text-ink">Home</a>
      <span>/</span>
      <a href="/ro-systems" className="transition hover:text-ink">RO Systems</a>
      <span>/</span>
      <a href="/products/tankless-ro-system" className="transition hover:text-ink">Tankless RO Systems</a>
      <span>/</span>
      <span className="text-ink/70">{product.publicName}</span>
    </nav>
  )
}

function ProductImage({ product, priority = false }: { product: TanklessROProduct; priority?: boolean }) {
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-white/80 p-5 shadow-soft">
      <img
        src={product.image}
        alt={product.imageAlt}
        className="h-full w-full object-contain"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
      />
    </div>
  )
}

function SectionHeader({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{label}</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h2>
      {copy && <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/62">{copy}</p>}
    </div>
  )
}

function RelatedCard({ product }: { product: TanklessROProduct }) {
  return (
    <a href={getTanklessROHref(product)} className="group rounded-[1.5rem] border border-line bg-white/65 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] overflow-hidden rounded-[1.15rem] bg-white/80 p-4">
        <img src={product.image} alt={product.imageAlt} className="h-full w-full object-contain" loading="lazy" decoding="async" />
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-tight text-ink">{product.publicName}</h3>
      <p className="mt-2 text-sm text-ink/55">{product.dimension}</p>
      <span className="mt-4 inline-flex text-sm font-semibold text-accent transition group-hover:translate-x-1">View Details →</span>
    </a>
  )
}

export default function TanklessRODetailPage({ slug }: { slug: string }) {
  const product = getTanklessROProduct(slug)
  if (!product) return <Home />

  const specs = [{ label: 'Product Dimensions', value: product.dimension }, ...tanklessCommonSpecs]
  const related = tanklessROProducts.filter((item) => item.slug !== product.slug)

  useEffect(() => {
    applySEO({
      title: product.seoTitle,
      description: product.seoDescription,
      path: `/products/${product.slug}`,
      image: `https://qloratech.com${product.image}`,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'RO Systems', path: '/ro-systems' },
        { name: 'Tankless RO Systems', path: '/products/tankless-ro-system' },
        { name: product.publicName, path: `/products/${product.slug}` },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.publicName,
        brand: { '@type': 'Brand', name: 'QLORA' },
        image: `https://qloratech.com${product.image}`,
        description: product.shortDescription,
        category: 'Tankless reverse osmosis water filtration system',
        additionalProperty: specs.map((spec) => ({ '@type': 'PropertyValue', name: spec.label, value: spec.value })),
      }],
    })
  }, [product, specs])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="shell">
            <Breadcrumb product={product} />
            <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <ProductImage product={product} priority />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Tankless RO System</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl">{product.publicName}</h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-ink/68">{product.shortDescription}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[product.dimension, ...product.cardTags].map((badge) => (
                    <span key={badge} className="rounded-full border border-line bg-white/60 px-4 py-2 text-sm font-medium text-ink/65 shadow-sm">{badge}</span>
                  ))}
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="/contact" className="button-primary">Request Details</a>
                  <a href="/oem-private-label" className="button-secondary">Discuss OEM Options</a>
                  <CatalogDownloadLink label="Download Catalog" pageType="product_detail" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Product overview</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{product.publicName}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink/64">{product.overview}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {product.differentiation.map((item) => (
                <article key={item} className="rounded-[1.25rem] border border-line bg-white/60 p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-ink">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="grid items-center gap-8 rounded-[2rem] border border-line bg-white/55 p-5 shadow-soft md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="max-w-xl px-1 md:px-2">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{product.lifestyle.eyebrow}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{product.lifestyle.heading}</h2>
                <p className="mt-5 text-lg leading-8 text-ink/64">{product.lifestyle.copy}</p>
              </div>
              <div className="aspect-[3/2] overflow-hidden rounded-[1.6rem] bg-white shadow-sm">
                <img
                  src={product.lifestyle.image}
                  alt={product.lifestyle.imageAlt}
                  className={`h-full w-full ${product.lifestyle.imageClassName || 'object-cover object-center'}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Available configurations" title="OEM Configuration Options" copy="These supplier-supported options are configurable according to project requirements, not fixed specifications for every unit." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {tanklessCommonConfigurations.map((item) => (
                <article key={item.label} className="rounded-[1.5rem] border border-line bg-white/55 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/35">{item.label}</p>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{item.value}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Technical specifications" title="Technical Specifications" />
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[1.5rem] border border-line bg-white/65 shadow-soft">
              {specs.map((spec, index) => (
                <div key={spec.label} className={`grid gap-2 px-6 py-5 sm:grid-cols-[0.95fr_1.05fr] sm:px-8 ${index % 2 ? 'bg-white/40' : 'bg-white/75'}`}>
                  <dt className="text-sm font-medium text-ink/55">{spec.label}</dt>
                  <dd className="text-base font-semibold text-ink">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="How it works" title="Typical Tankless RO Filtration Architecture" copy="This is a typical RO configuration example. Final cartridge sequence depends on the selected project configuration." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {howItWorks.map(([title, description], index) => (
                <article key={title} className="rounded-[1.5rem] border border-line bg-white/55 p-6 shadow-sm">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">{index + 1}</div>
                  <h3 className="text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Applications" title="Where This Platform Fits" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {applications.map((item) => (
                <article key={item} className="rounded-[1.5rem] border border-line bg-white/45 p-6 text-center shadow-sm">
                  <h3 className="text-base font-semibold text-ink">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid items-center gap-8 rounded-[2rem] border border-line bg-white/55 p-6 shadow-soft md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">OEM & Private Label</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">OEM & Private Label Options</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-ink/64">
                QLORA supports selected OEM projects with filtration-stage configuration, capacity options, dual-water setup, color customization, branding and packaging coordination.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="/oem-private-label" className="button-primary">Discuss Your OEM Project</a>
                <a href="/contact" className="button-secondary">Contact QLORA</a>
              </div>
            </div>
            <ProductImage product={product} />
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Related products" title="Related Tankless RO Systems" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((item) => <RelatedCard key={item.qloraId} product={item} />)}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell max-w-4xl">
            <SectionHeader label="FAQ" title="Tankless RO FAQ" />
            <div className="mt-10 space-y-4">
              {faq.map(([question, answer]) => (
                <details key={question} className="group rounded-[1.25rem] border border-line bg-white/55 p-6 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-ink">
                    {question}
                    <span className="text-2xl text-accent transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-base leading-7 text-ink/60">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 pt-10 md:pb-24">
          <div className="shell">
            <div className="rounded-[2rem] bg-ink px-6 py-14 text-center text-white md:px-12 md:py-18">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Inquiry</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Discuss This Tankless RO Project</h2>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90">Request Details</a>
                <a href="/products/tankless-ro-system" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Back to Tankless RO Systems</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


