import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'

const imageBase = '/images/ro-systems'

const products = [
  {
    name: 'Under Sink RO Systems',
    description: 'Classic multi-stage reverse osmosis system for dependable under sink drinking water.',
    image: `${imageBase}/tank-ro.webp`,
    alt: 'Tank reverse osmosis water system product photo',
    href: '/products/under-sink-ro-system',
    tags: ['5-Stage Filtration', 'Pressure Tank', 'Easy Installation'],
  },
  {
    name: 'Tankless RO Systems',
    description: 'Compact tankless RO system with a clean modern body for premium kitchen projects.',
    image: `${imageBase}/tankless-ro-600g.webp`,
    alt: 'Tankless 600G reverse osmosis water system product photo',
    href: '/products/tankless-ro-system',
    tags: ['600G High Flow', 'Tankless Design', 'Compact Body'],
  },
]

const faqs = [
  ['What RO systems does QLORA support?', 'QLORA supports tank RO, tankless RO and quick connect RO system configurations for home and partner projects.'],
  ['Can RO systems be customized for private label brands?', 'Yes. We support branding, packaging and product configuration for OEM and private label RO systems.'],
  ['Are these suitable for under sink installation?', 'Yes. The available RO solutions are designed for compact under sink and modern residential water filtration use.'],
  ['How do I request an OEM quote?', 'Share your target product type, market and packaging needs, and our team will help define the right solution.'],
]

export default function ROSystems() {
  useEffect(() => {
    applySEO({
      title: 'RO Water Systems | OEM & Private Label Solutions | QLORA',
      description: 'Explore residential RO water systems and OEM reverse osmosis solutions with private label support for distributors and water brands.',
      path: '/ro-systems',
      image: 'https://qloratech.com/images/ro-systems/hero-ro-system.webp',
      breadcrumbs: [{ name: 'RO Systems', path: '/ro-systems' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'RO Water Systems',
        brand: { '@type': 'Brand', name: 'QLORA' },
        description: 'Residential RO water systems and OEM reverse osmosis solutions with private label support.',
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-20">
          <div className="shell grid min-h-[600px] items-center gap-12 py-12 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-5">
              <p className="eyebrow">Reverse osmosis systems</p>
              <h1 className="display mt-6 max-w-xl">RO Water Systems</h1>
              <p className="mt-6 text-2xl font-medium tracking-[-0.02em] sm:text-3xl">Pure Water, Pure Life</p>
              <p className="body-copy mt-6 max-w-lg">Premium reverse osmosis systems for distributors, importers and private label water brands.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/oem-private-label" className="button-primary">Start OEM Project</a>
                <a href="#available-ro" className="button-secondary">View Solutions</a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[2rem] bg-gradient-to-br from-white via-[#f4f2ec] to-[#e9e6dd] p-8 shadow-soft sm:p-12">
                <img
                  src={`${imageBase}/hero-ro-system.webp`}
                  alt="RO water system in a warm Scandinavian kitchen with faucet and drinking water glass"
                  className="mx-auto aspect-[4/3] max-h-[540px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="shell">
            <div className="mx-auto text-center">
              <h2 className="text-3xl font-semibold uppercase tracking-[0.2em] text-[#5E7F94] sm:text-4xl lg:text-5xl">HOW RO WORKS</h2>
            </div>

            <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-soft md:mt-12">
              <img
                src={`${imageBase}/how-ro-work.webp`}
                alt="RO filtration process infographic showing PP sediment activated carbon RO membrane and post carbon stages"
                className="aspect-[16/10] w-full object-cover object-bottom"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="available-ro" className="scroll-mt-20 py-12 md:py-16 lg:py-20">
          <div className="shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">RO product showcase</p>
              <h2 className="headline mt-5">Available RO Solutions</h2>
              <p className="body-copy mt-6">Clean product formats for residential projects, retail channels and OEM water filtration brands.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-6xl gap-7 md:mt-12 md:grid-cols-2">
              {products.map(product => (
                <a href={product.href} key={product.name} className="group block cursor-pointer rounded-[2rem] bg-white/75 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft md:p-6">
                  <div className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-white via-[#f8f7f3] to-[#eeeae1] p-8">
                    <img src={product.image} alt={product.alt} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
                  </div>
                  <div className="px-2 pb-2 pt-7 md:px-3">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{product.name}</h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-ink/60">{product.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.tags.map(tag => (
                        <span key={tag} className="rounded-full border border-line bg-canvas/70 px-3 py-1.5 text-xs font-medium text-ink/55">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-7 inline-flex items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition group-hover:bg-nordic">
                      Learn More â†?                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="oem-ro" className="scroll-mt-20 bg-[#f1f0eb] py-12 md:py-16 lg:py-20">
          <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">OEM &amp; private label</p>
              <h2 className="headline mt-5">Build Your Own RO Product Line</h2>
              <p className="body-copy mt-6">Private label support for RO systems, replacement filters, custom packaging and export-ready cooperation.</p>
              <div className="mt-9 grid gap-3 text-sm text-ink/70">
                {['Private label branding', 'Custom color box packaging', 'Product configuration support', 'Distributor-ready supply'].map(item => (
                  <div key={item} className="rounded-full bg-white/65 px-5 py-3 shadow-sm">{item}</div>
                ))}
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/oem-private-label" className="button-primary">Start OEM Project</a>
                <a href="/contact" className="button-secondary">Request a Quote</a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <img
                  src={`${imageBase}/private-label.webp`}
                  alt="Private label water filter and custom packaging box for OEM RO projects"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line py-12 md:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em]">RO System FAQ</h2>
            <div className="mt-10 space-y-6">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-xl border border-line bg-white/35 px-6 py-5 sm:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                    <span>{question}</span>
                    <span className="shrink-0 text-xl text-nordic transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-ro" className="scroll-mt-20 px-5 py-12 md:px-8 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Start a conversation</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Ready to Build Your RO Product Line?</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70">Tell us your requirements and let QLORA support your business growth.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request a Quote</a>
              <a href="/oem-private-label" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">Start OEM Project</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
