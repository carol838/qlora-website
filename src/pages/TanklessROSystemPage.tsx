import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { applySEO } from '../lib/seo'

const imageBase = '/images/products/tankless-ro-system'

const highlights = [
  ['600G High Flow', 'Fast daily water supply.'],
  ['0.0001 碌m RO Membrane', 'Removes dissolved solids and contaminants.'],
  ['Tankless Design', 'Compact footprint without storage tank.'],
  ['Quick Change Filters', 'Fast maintenance and simple replacement.'],
]

const stories = [
  {
    title: 'Fast Daily Water Supply',
    description: 'High-flow RO system delivering fresh drinking water directly from the faucet.',
    image: `${imageBase}/600g.webp`,
    alt: '600G tankless reverse osmosis system product view',
  },
  {
    title: 'Simple Under Sink Installation',
    description: 'Compact dimensions fit most kitchen cabinets with straightforward installation.',
    image: `${imageBase}/installation.webp`,
    alt: 'Tankless RO system under sink installation diagram',
  },
  {
    title: 'Long Service Life',
    description: 'Long-lasting filtration capacity designed for everyday household use.',
    image: `${imageBase}/capacity.webp`,
    alt: 'Tankless RO system long service life capacity graphic',
  },
  {
    title: 'Compact Design',
    description: 'Slim body saves cabinet space while maintaining high filtration performance.',
    image: `${imageBase}/specification.webp`,
    alt: 'Tankless RO system dimension and specification graphic',
  },
]

const specs = [
  ['Product Type', 'Tankless Reverse Osmosis System'],
  ['Capacity', '600 GPD'],
  ['RO Accuracy', '0.0001 碌m'],
  ['Flow Rate', '1.5鈥? L/min'],
  ['Power', '72鈥?0W'],
  ['Input Voltage', 'DC 24鈥?6V'],
  ['Water Temperature', '5鈥?0掳C'],
  ['Inlet Pressure', '0.2鈥?.4MPa'],
  ['Working Pressure', '0.6鈥?.7MPa'],
  ['Applicable Water', 'Municipal Tap Water'],
]

const process = [
  ['PP', 'Blocks visible sediment, rust, sand and larger particles.'],
  ['Activated Carbon', 'Reduces chlorine, odors and unwanted taste.'],
  ['RO Membrane', 'Filters dissolved solids and microscopic contaminants.'],
  ['Post Carbon', 'Polishes water for a fresh, clean drinking experience.'],
]

const applications = ['Home', 'Apartments', 'Office', 'Retail Projects']

const faq = [
  ['How often should filters be replaced?', 'Replacement timing depends on local water quality and usage. Share your market requirements and we can recommend a suitable filter program.'],
  ['Does the system include a faucet?', 'Faucet configuration can be discussed according to your project requirements and packaging plan.'],
  ['Can I customize the logo and packaging?', 'Yes. QLORA supports private label branding, custom packaging and selected product configuration options.'],
  ['What is the MOQ?', 'MOQ depends on configuration, packaging and order plan. Contact us with your target market and we will confirm options.'],
  ['What certifications are available?', 'Available certification support depends on the selected product configuration and destination market.'],
]

const related = [
  ['Under Sink RO System', '/products/under-sink-ro-system'],
  ['Replacement Filters', '/water-filtration'],
  ['Water Filtration', '/water-filtration'],
  ['OEM & Private Label', '/oem-private-label'],
]

export default function TanklessROSystemPage() {
  useEffect(() => {
    applySEO({
      title: '600G Tankless Reverse Osmosis System | QLORA',
      description: 'Compact 600G tankless reverse osmosis water filtration system for OEM, private label and residential drinking water applications.',
      path: '/products/tankless-ro-system',
      image: `${imageBase}/600g.webp`,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'RO Systems', path: '/ro-systems' },
        { name: '600G Tankless Reverse Osmosis System', path: '/products/tankless-ro-system' },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: '600G Tankless Reverse Osmosis System',
        brand: { '@type': 'Brand', name: 'QLORA' },
        description: 'Compact 600G tankless reverse osmosis system for residential drinking water, OEM and private label programs.',
        image: `${window.location.origin}${imageBase}/600g.webp`,
        category: 'Tankless reverse osmosis water filtration system',
      }],
    })
  }, [])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="shell">
            <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink/45">
              <a href="/" className="transition hover:text-ink">Home</a>
              <span>/</span>
              <a href="/ro-systems" className="transition hover:text-ink">RO Systems</a>
              <span>/</span>
              <span className="text-ink/70">Tankless RO System</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Tankless RO System</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-7xl">
                  600G Tankless Reverse Osmosis System
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-ink/68">
                  Compact design with powerful RO filtration for modern kitchens. Designed for direct drinking water, OEM projects and private label brands.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['600G High Flow', '0.0001 碌m RO Membrane', 'Tankless Design', 'Quick Change Filters'].map((badge) => (
                    <span key={badge} className="rounded-full border border-line bg-white/55 px-4 py-2 text-sm text-ink/65 shadow-sm">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="/contact" className="button-primary">Request Quote</a>
                  <a href="/oem-private-label" className="button-secondary">OEM Service</a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white/55 p-4 shadow-soft">
                <img
                  src={`${imageBase}/600g.webp`}
                  alt="600G tankless reverse osmosis system for modern kitchen drinking water"
                  className="h-auto w-full rounded-[1.5rem] object-contain"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="1100"
                  height="1100"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {highlights.map(([title, description], index) => (
                <article key={title} className="rounded-[1.5rem] border border-line bg-white/55 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-xl font-semibold tracking-[-0.02em]">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell space-y-20 md:space-y-24">
            {stories.map((story, index) => (
              <article key={story.title} className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="rounded-[2rem] bg-white/55 p-4 shadow-soft">
                  <img src={story.image} alt={story.alt} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" className="h-auto max-h-[520px] w-full rounded-[1.5rem] object-contain" width="1100" height="1100" />
                </div>
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Feature {index + 1}</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{story.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-ink/64">{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Technical Specifications</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Built for compact, high-flow RO performance.</h2>
            </div>
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[1.75rem] border border-line bg-white/55 shadow-soft">
              {specs.map(([label, value]) => (
                <div key={label} className="grid gap-2 border-b border-line px-6 py-4 last:border-b-0 sm:grid-cols-[0.9fr_1.1fr] sm:px-8">
                  <div className="text-sm font-medium text-ink/55">{label}</div>
                  <div className="text-base font-medium text-ink">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Filtration Process</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">A clear four-stage water path.</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {process.map(([stage, description], index) => (
                <article key={stage} className="relative rounded-[1.5rem] border border-line bg-white/55 p-6 shadow-sm">
                  {index < process.length - 1 && (
                    <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-accent/35 lg:block" aria-hidden="true" />
                  )}
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{stage}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell">
            <div className="grid gap-5 md:grid-cols-4">
              {applications.map((item) => (
                <article key={item} className="rounded-[1.5rem] border border-line bg-white/45 p-7 text-center shadow-sm">
                  <div className="mx-auto mb-5 h-10 w-10 rounded-full border border-accent/35" />
                  <h3 className="text-lg font-semibold">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell">
            <div className="grid items-center gap-10 rounded-[2rem] border border-line bg-white/55 p-6 shadow-soft md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">OEM & Private Label</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Private Label & OEM Manufacturing</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-ink/64">
                  Custom logo, packaging, product configuration and global manufacturing support for distributors and brands.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="/oem-private-label" className="button-primary">OEM Service</a>
                  <a href="/contact" className="button-secondary">Request Quote</a>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-canvas p-4">
                <img src={`${imageBase}/600g.webp`} alt="Tankless RO system for OEM and private label water filtration projects" loading="lazy" decoding="async" className="h-auto max-h-[420px] w-full rounded-[1.25rem] object-contain" width="1100" height="1100" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">FAQ</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Tankless RO Questions</h2>
            </div>
            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {faq.map(([question, answer]) => (
                <details key={question} className="group rounded-[1.25rem] border border-line bg-white/55 p-6 shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                    {question}
                    <span className="text-2xl text-accent transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-base leading-7 text-ink/60">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="shell">
            <div className="grid gap-5 md:grid-cols-4">
              {related.map(([title, href]) => (
                <a key={title} href={href} className="group rounded-[1.5rem] border border-line bg-white/55 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-5 text-sm font-medium text-accent">Learn More →</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 pt-10 md:pb-24">
          <div className="shell">
            <div className="rounded-[2rem] bg-ink px-6 py-14 text-center text-white md:px-12 md:py-18">
              <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Let&apos;s Build Your Water Filtration Business</h2>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90">Request Quote</a>
                <a href="/contact" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

