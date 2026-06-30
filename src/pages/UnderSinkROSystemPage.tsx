import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { applySEO } from '../lib/seo'

const imageBase = '/images/products/under-sink-ro-system'

const features = [
  ['5-Stage Filtration', 'Removes sediment, chlorine, heavy metals and dissolved solids.'],
  ['Pressure Tank Design', 'Provides stable purified water supply.'],
  ['Complete Accessories', 'Everything needed for installation.'],
  ['Easy Maintenance', 'Standard filter replacement and servicing.'],
]

const stories = [
  {
    title: 'Advanced 5-Stage Filtration',
    description: 'PP Sediment, Pre Carbon, CTO Carbon, RO Membrane and Post Carbon work together for cleaner drinking water.',
    image: `${imageBase}/5-stages-ro.png`,
    alt: 'Five-stage under sink RO filtration system process',
  },
  {
    title: 'Complete Installation Kit',
    description: 'Includes pressure tank, faucet, tubing, valves, fittings and installation tools.',
    image: `${imageBase}/accessories.png`,
    alt: 'Under sink RO system accessories including faucet tubing valves and fittings',
  },
  {
    title: 'Reliable Residential Design',
    description: 'Compact under sink system with stable performance and standard RO configuration.',
    image: `${imageBase}/specification.png`,
    alt: 'Under sink RO system residential product parameters',
  },
  {
    title: 'Easy Under Sink Installation',
    description: 'Simple installation for kitchens with standard plumbing connections.',
    image: `${imageBase}/installation.png`,
    alt: 'Under sink RO system installation diagram for kitchen plumbing',
  },
  {
    title: 'Built for Everyday Drinking Water',
    description: 'Designed for homes, apartments and residential drinking water projects.',
    image: `${imageBase}/tank-ro.jpg`,
    alt: 'Classic under sink reverse osmosis system with pressure tank',
  },
]

const specs = [
  ['Model', 'RO-100'],
  ['Rated Voltage / Frequency', '220V~ / 50Hz'],
  ['Feed Water Pressure', '0.1–0.4 MPa'],
  ['Pure Water Flow', '75G / 100G'],
  ['Dimensions', '390 × 200 × 530 mm'],
  ['Applicable Water Source', 'Municipal Tap Water'],
  ['Pure Water Capacity', '1000 L'],
  ['Rated Power', '26 W'],
  ['Filtration Accuracy', '0.0001 μm'],
]

const applications = ['Residential Homes', 'Apartments', 'Small Offices', 'Retail Projects']

const faq = [
  ['How often should filters be replaced?', 'Replacement timing depends on local water quality, household usage and filter configuration. We can recommend a suitable maintenance plan for your market.'],
  ['Does the system include all installation accessories?', 'Yes. The system can be supplied with pressure tank, faucet, tubing, valves, fittings and installation accessories based on your order configuration.'],
  ['Can I customize the packaging?', 'Yes. Private label packaging, logo labels, color boxes and carton customization can be supported for OEM projects.'],
  ['Can different filtration configurations be supplied?', 'Yes. Filtration configuration can be discussed according to your product positioning, market and compliance needs.'],
  ['What certifications are available?', 'Certification support depends on the selected model, materials and destination market. Contact us to confirm available options.'],
]

const related = [
  ['Tankless RO System', '/products/tankless-ro-system'],
  ['Replacement Filters', '/water-filtration'],
  ['Water Filtration', '/water-filtration'],
  ['OEM & Private Label', '/oem-private-label'],
]

export default function UnderSinkROSystemPage() {
  useEffect(() => {
    applySEO({
      title: 'Under Sink Reverse Osmosis System | QLORA',
      description: '5-stage under sink reverse osmosis water filtration system with pressure tank for OEM, private label and residential drinking water applications.',
      path: '/products/under-sink-ro-system',
      image: `${imageBase}/tank-ro.jpg`,
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'RO Systems', path: '/ro-systems' },
        { name: 'Under Sink RO System', path: '/products/under-sink-ro-system' },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Classic Under Sink Reverse Osmosis System',
        brand: { '@type': 'Brand', name: 'QLORA' },
        description: '5-stage under sink reverse osmosis system with pressure tank for residential drinking water, OEM and private label programs.',
        image: `${window.location.origin}${imageBase}/tank-ro.jpg`,
        category: 'Under sink reverse osmosis water filtration system',
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
              <span className="text-ink/70">Under Sink RO System</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Under Sink RO System</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-7xl">
                  Classic Under Sink Reverse Osmosis System
                </h1>
                <p className="mt-7 max-w-[34rem] text-lg leading-8 text-ink/68">
                  A proven residential RO solution featuring stable water supply, complete installation accessories and reliable multi-stage filtration.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['5-Stage RO Filtration', 'Stable Water Pressure', 'Complete Installation Kit', 'Easy Maintenance'].map((badge) => (
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

              <div className="aspect-[4/3] rounded-[28px] bg-white/55 p-4 shadow-soft">
                <img
                  src={`${imageBase}/tank-ro.jpg`}
                  alt="Classic under sink reverse osmosis system with pressure tank and filters"
                  className="h-full w-full rounded-[28px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map(([title, description], index) => (
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

        <section className="py-14 md:py-20">
          <div className="shell space-y-16 md:space-y-20">
            {stories.map((story, index) => (
              <article key={story.title} className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-[28px] bg-white/55 p-4 shadow-soft">
                  <img
                    src={story.image}
                    alt={story.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="h-full w-full rounded-[28px] object-contain"
                  />
                </div>
                <div className="max-w-[34rem]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Feature {index + 1}</p>
                  <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{story.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-ink/64">{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Technical Specifications</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Technical Specifications</h2>
            </div>

            <div className="mx-auto mt-10 max-w-[900px] overflow-hidden rounded-xl border border-[#E8E8E8] bg-white shadow-[0_18px_50px_rgba(46,52,56,0.07)]">
              {specs.map(([label, value]) => (
                <div key={label} className="grid gap-2 border-b border-[#E8E8E8] px-6 py-[18px] last:border-b-0 odd:bg-[#FAFAFA] sm:grid-cols-[0.9fr_1.1fr] sm:px-7">
                  <div className="text-base font-medium leading-7 text-ink/50">{label}</div>
                  <div className="text-lg font-semibold leading-7 text-ink">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
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

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="grid items-center gap-10 rounded-[2rem] border border-line bg-white/55 p-6 shadow-soft md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">OEM & Private Label</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">OEM & Private Label Available</h2>
                <p className="mt-5 max-w-[34rem] text-lg leading-8 text-ink/64">
                  Custom logo, packaging, product configuration and global manufacturing support.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="/oem-private-label" className="button-primary">OEM Service</a>
                  <a href="/contact" className="button-secondary">Request Quote</a>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-[28px] bg-canvas p-4">
                <img
                  src={`${imageBase}/tank-ro.jpg`}
                  alt="Under sink RO system available for OEM and private label manufacturing"
                  loading="lazy"
                  className="h-full w-full rounded-[28px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">FAQ</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Under Sink RO Questions</h2>
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

        <section className="py-14 md:py-20">
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

        <section className="pb-20 pt-8 md:pb-24">
          <div className="shell">
            <div className="rounded-[2rem] bg-ink px-6 py-14 text-center text-white md:px-12 md:py-16">
              <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Looking for a Reliable RO Manufacturing Partner?</h2>
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
