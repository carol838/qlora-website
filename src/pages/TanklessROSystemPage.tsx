import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { absoluteUrl, applySEO } from '../lib/seo'
import CatalogDownloadLink from '../components/CatalogDownloadLink'
import { getTanklessROHref, tanklessCommonConfigurations, tanklessROProducts, tanklessImageBase, type TanklessROProduct } from '../data/tanklessROProducts'

const applications = ['Residential Kitchen', 'Apartment', 'Under-Sink Installation', 'Home Drinking Water', 'OEM Drinking Water Projects']

function ModelCard({ product, priority = false }: { product: TanklessROProduct; priority?: boolean }) {
  return (
    <a href={getTanklessROHref(product)} className="group flex h-full flex-col rounded-[2rem] border border-line bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white/80 p-4">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="h-full w-full object-contain"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
        />
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Tankless RO</p>
        <h3 className="mt-3 text-[clamp(1.35rem,2vw,1.7rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">{product.publicName}</h3>
        <p className="mt-4 text-sm font-medium text-ink/60">{product.dimension}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.cardTags.map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-canvas/80 px-3 py-1.5 text-xs font-medium text-ink/55">{tag}</span>
          ))}
        </div>
        <span className="mt-auto pt-7 text-sm font-semibold text-accent transition group-hover:translate-x-1">View Details →</span>
      </div>
    </a>
  )
}

export default function TanklessROSystemPage() {
  useEffect(() => {
    applySEO({
      title: 'Tankless RO Systems for OEM & Wholesale | QLORA',
      description: 'Source configurable tankless RO systems, including 600 GPD and 800 GPD options, with OEM, private-label, branding and packaging support from QLORA.',
      path: '/products/tankless-ro-system',
      image: absoluteUrl(tanklessROProducts[0].image),
      breadcrumbs: [
        { name: 'RO Systems', path: '/ro-systems' },
        { name: 'Tankless RO Systems', path: '/products/tankless-ro-system' },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'QLORA Tankless RO Systems',
        itemListElement: tanklessROProducts.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: product.publicName,
          url: absoluteUrl(getTanklessROHref(product)),
        })),
      }],
    })
  }, [])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="shell">
            <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink/45" aria-label="Breadcrumb">
              <a href="/" className="transition hover:text-ink">Home</a>
              <span>/</span>
              <a href="/ro-systems" className="transition hover:text-ink">RO Systems</a>
              <span>/</span>
              <span className="text-ink/70">Tankless RO Systems</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Tankless RO Systems</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-7xl">
                  Tankless RO Systems
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-ink/68">
                  Configurable tankless reverse osmosis systems for distributors, importers, water-treatment companies, private-label brands and OEM projects.
                </p>
                <p className="mt-4 max-w-xl text-base leading-7 text-ink/58">
                  Discuss slim-body, smart-display and TDS-monitoring designs, including 600 GPD and 800 GPD configurations within a broader supplier-supported capacity range.
                </p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="#tankless-models" className="button-primary">Explore Models</a>
                  <a href="/contact" className="button-secondary">Get Wholesale Quote</a>
                  <CatalogDownloadLink label="Download Catalog" pageType="tankless_ro" />
                </div>
                <p className="mt-4 text-sm leading-6 text-ink/50">For distributors, importers and private-label projects.</p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-white/55 shadow-soft">
                <img
                  src={`${tanklessImageBase}/tankless-ro-kitchen-hero.webp`}
                  alt="Tankless RO system installed under a modern kitchen sink"
                  className="h-full w-full object-cover object-[62%_54%] sm:object-[64%_54%] lg:object-[66%_54%]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-18">
          <div className="shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Product family</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Tankless RO Platforms for Flexible OEM Projects</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/64">
              QLORA tankless RO systems combine compact cabinet design with configurable filtration stages, capacity options and smart display interfaces for residential drinking water applications.
            </p>
          </div>
        </section>

        <section id="tankless-models" className="scroll-mt-24 py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Available models</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Choose Your Tankless RO Platform</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {tanklessROProducts.map((product, index) => <ModelCard key={product.qloraId} product={product} priority={index === 0} />)}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Capacity &amp; configuration</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">600 GPD, 800 GPD &amp; Flexible Project Options</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/62">
                600 GPD and 800 GPD are important configurations for many B2B project discussions, while additional capacities may be available according to the selected platform and project requirements.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {tanklessCommonConfigurations.map((item) => (
                <article key={item.label} className="rounded-[1.5rem] border border-line bg-white/55 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/35">{item.label}</p>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{item.value}</h3>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-ink/50">
              These are supplier-supported configuration ranges and options. Final specifications depend on project requirements.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-ink/55">
              Choosing between product formats? <a href="/technical-knowledge/tankless-ro-vs-traditional-ro-systems" className="font-semibold text-accent underline decoration-accent/30 underline-offset-4">Compare tankless and traditional RO systems</a> for different market requirements.
            </p>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">B2B supply support</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Manufacturing &amp; Quality Control</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-ink/64">From component assembly to system testing, tankless RO projects are supported by manufacturing and quality-control processes for B2B and private-label supply.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {[
                    ['Tankless RO Production', 'Flexible production support for different system configurations and OEM projects.'],
                    ['System Testing', 'Functional and water-flow testing during the production process.'],
                    ['Batch Supply', 'Production support for distributors, importers and private-label projects.'],
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-[1.25rem] border border-line bg-white/65 p-5 shadow-sm">
                      <h3 className="text-base font-semibold text-ink">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-ink/58">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <figure className="overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-soft">
                  <img src="/images/factory/tankless-ro/tankless-ro-testing-line.webp" alt="Tankless RO systems on production testing line" className="aspect-[4/3] w-full rounded-[1.1rem] object-cover object-center" loading="lazy" decoding="async" width="1600" height="1200" />
                </figure>
                <figure className="overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-soft">
                  <img src="/images/factory/tankless-ro/tankless-ro-batch-production.webp" alt="Batch production of tankless RO systems for B2B supply" className="aspect-[4/3] w-full rounded-[1.1rem] object-cover object-center" loading="lazy" decoding="async" width="1600" height="1200" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {applications.map((item) => (
                <article key={item} className="rounded-[1.5rem] border border-line bg-white/45 p-6 text-center shadow-sm">
                  <h3 className="text-base font-semibold text-ink">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="grid items-center gap-8 rounded-[2rem] border border-line bg-white/55 p-6 shadow-soft md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">OEM & Private Label</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">OEM Configuration Support</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-ink/64">
                  Discuss filtration-stage configuration, capacity options, dual-water setup, color customization, private-label branding, manuals and packaging coordination for your market.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="/oem-private-label" className="button-primary">OEM Service</a>
                  <a href="/contact" className="button-secondary">Request Tankless RO Quote</a>
                </div>
              </div>
              <div className="aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-canvas shadow-sm">
                <img
                  src={`${tanklessImageBase}/tankless-ro-oem-customization.webp`}
                  alt="Tankless RO system with OEM color, branding and packaging options"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-10 md:pb-24">
          <div className="shell">
            <div className="rounded-[2rem] bg-ink px-6 py-14 text-center text-white md:px-12 md:py-18">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Tankless RO projects</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Find the Right Tankless RO System</h2>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90">Get Wholesale Quote</a>
                <a href="/ro-systems" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Back to RO Systems</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


