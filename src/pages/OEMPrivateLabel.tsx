import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'

const steps = [
  ['01', 'Inquiry', 'Tell us your product requirements and target market.'],
  ['02', 'Product Selection', 'Choose the right filtration products and specifications.'],
  ['03', 'Branding & Sample', 'Confirm packaging, artwork and product samples before production.'],
  ['04', 'Mass Production', 'Begin manufacturing with strict quality control.'],
  ['05', 'Global Delivery', 'Professional export packing and worldwide shipment.'],
]

const branding = [
  ['Logo Labels', 'Brand-ready product labels.'],
  ['Color Boxes', 'Retail and channel packaging.'],
  ['User Manuals', 'Clear usage and setup materials.'],
  ['Barcode & SKU Labels', 'Organized product tracking.'],
  ['Custom Packaging', 'Flexible presentation for your market.'],
]

const reasons = [
  ['Flexible OEM Support', 'Small batch and scalable production options.'],
  ['Export Experience', 'Support for global markets and distributors.'],
  ['Reliable Supply', 'Stable sourcing and long-term cooperation.'],
]

const faqs = [
  ['What products can be customized?', 'RO systems, replacement filters, refrigerator filters, coffee filters and shower filter products can be customized.'],
  ['Can you support private labeling?', 'Yes. QLORA supports private label water filters, logo labels and branded product presentation.'],
  ['Do you provide custom packaging?', 'Yes. We can support color boxes, manuals, SKU labels and custom packaging directions.'],
  ['What is the OEM process?', 'Select products, confirm branding, approve samples and move into production.'],
]

export default function OEMPrivateLabel() {
  useEffect(() => {
    applySEO({
      title: 'OEM & Private Label Water Filtration Products | QLORA',
      description: 'Build your own water filtration brand with OEM manufacturing, private label support and custom packaging solutions.',
      path: '/oem-private-label',
      image: 'https://qloratech.com/images/oem-private-label-hero.webp',
      breadcrumbs: [{ name: 'OEM & Private Label', path: '/oem-private-label' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'OEM & Private Label Water Filtration Products',
        provider: { '@type': 'Organization', name: 'QLORA' },
        serviceType: ['OEM Manufacturing', 'Private Label Products', 'Custom Packaging'],
        description: 'OEM manufacturing, private label support and custom packaging for water filtration products.',
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="min-h-[640px] pt-20 lg:min-h-[760px]">
          <div className="grid min-h-[560px] lg:min-h-[680px] lg:grid-cols-2">
            <div className="flex items-center">
              <div className="ml-auto w-full max-w-[620px] px-5 py-12 sm:px-8 lg:pl-8 lg:pr-16">
                <p className="eyebrow mb-6">OEM & private label</p>
                <h1 className="display max-w-xl">OEM &amp; Private Label Water Filtration Solutions</h1>
                <p className="body-copy mt-7 max-w-lg">Build your own water filtration brand with OEM water filters, private label water filters, custom water filtration products and global supply support.</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href="#oem-inquiry" className="button-primary">Start OEM Project</a>
                  <a href="/contact" className="button-secondary">Request a Quote</a>
                </div>
              </div>
            </div>
            <div className="min-h-[420px] overflow-hidden bg-[#e9e6df]">
              <img src="/images/oem-private-label-hero.webp" alt="Private label water filter and custom packaging box in a warm Nordic kitchen" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 lg:py-24">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">Custom branding</p>
                <h2 className="headline mt-5">Custom Branding &amp; Packaging</h2>
                <p className="body-copy mx-auto mt-6 max-w-2xl">Create a polished product presentation for retail, wholesale and e-commerce channels with coordinated labels, color boxes and brand-ready packaging details.</p>
            </div>

            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-soft md:mt-12">
              <img
                src="/images/oem-color-box.webp"
                alt="Custom color box packaging examples for private label reverse osmosis water systems"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {branding.map(([title, copy]) => (
                <article key={title} className="rounded-2xl bg-white/55 p-6 text-center shadow-sm">
                  <h3 className="text-base font-medium tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 lg:py-24">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">HOW WE WORK</p>
              <h2 className="headline mt-5">Your OEM Journey</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">From your product idea to worldwide delivery in five simple steps.</p>
            </div>

            <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-5">
              {steps.map(([step, title, copy], index) => (
                <article key={title} className="group relative cursor-pointer rounded-2xl border border-line bg-white/60 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-nordic/35 hover:shadow-soft">
                  <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-line transition duration-300 group-hover:bg-nordic lg:block" aria-hidden="true" />
                  {index === 0 && <div className="pointer-events-none absolute left-0 top-10 hidden h-px w-1/2 bg-white transition duration-300 lg:block" aria-hidden="true" />}
                  {index === steps.length - 1 && <div className="pointer-events-none absolute right-0 top-10 hidden h-px w-1/2 bg-white transition duration-300 lg:block" aria-hidden="true" />}

                  <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-canvas text-sm font-semibold tracking-[0.12em] text-ink/45 transition duration-300 group-hover:border-nordic/40 group-hover:text-nordic group-hover:shadow-sm">
                    {step}
                  </span>
                  <h3 className="mt-7 text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f1f0eb] py-14 md:py-20 lg:py-24">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Why QLORA</p>
              <h2 className="headline mt-5">Built for Long-Term Partnership</h2>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-line md:mt-12 md:grid-cols-3">
              {reasons.map(([title, copy]) => (
                <article key={title} className="min-h-52 bg-canvas p-8 sm:p-10">
                  <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="oem-inquiry" className="scroll-mt-20 px-5 py-14 md:px-8 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">OEM inquiry</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Let&apos;s Build Your Product Line</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65">Tell us about your project and we&apos;ll help create the right filtration solution for your market.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Start OEM Project</a>
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="border-t border-line py-14 md:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em]">OEM FAQ</h2>
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
      </main>
      <Footer />
    </>
  )
}
