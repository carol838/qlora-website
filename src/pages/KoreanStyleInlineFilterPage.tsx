import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { absoluteUrl, applySEO } from '../lib/seo'

const pagePath = '/products/korean-style-inline-filter'
const imageBase = '/images/products/korean-style-inline-filter'
const pageTitle = 'Korean Style Inline Water Filters | U-Shape OEM Supplier | QLORA'
const pageDescription = 'QLORA supplies Korean-style U-shape inline water filter cartridges for residential water purifiers. 296 mm design, 1/4" and 3/8" connections, flexible filter media and OEM private label support.'
const inquirySubject = 'Korean Style U-Shape Inline Filter Inquiry'
const inquiryMessage = 'I would like to discuss your Korean Style U-Shape Inline Filter products, including connection options, filter media configurations and OEM/private label requirements.'
const inquiryHref = `/contact?subject=${encodeURIComponent(inquirySubject)}&message=${encodeURIComponent(inquiryMessage)}`

const highlights = ['U-Shape Design', '296 mm Length', '1/4" & 3/8" Connections', 'OEM & Private Label Available']

const mediaOptions = [
  ['PP', 'Polypropylene Sediment Filter'],
  ['GAC', 'Granular Activated Carbon', 'Coconut-shell carbon'],
  ['CTO', 'Carbon Block Filter', 'Sintered coconut-shell carbon block'],
  ['T33', 'Post Carbon Filter', 'Coconut-shell activated carbon'],
  ['UF', 'Ultrafiltration Membrane'],
  ['RO', 'Reverse Osmosis Membrane'],
]

const oemOptions = [
  ['Private label branding', 'QLORA branding or customer-specific branding can be arranged for suitable OEM projects.'],
  ['Customized product labels', 'Current products use factory labels; label direction can be discussed according to project requirements.'],
  ['Filter media selection', 'Media configurations can be selected according to the intended system and filtration requirements.'],
  ['Connection options', 'Choose between confirmed 1/4-inch and 3/8-inch connection options for the water purifier design.'],
  ['B2B supply support', 'Product discussions are structured for water purifier brands, manufacturers, distributors and replacement filter suppliers.'],
]

const applications = [
  'Household water purifiers',
  'Under-sink drinking water filtration systems',
  'Residential water purification equipment',
  'Replacement filter programs for water purifier brands',
]

const faqs = [
  ['What is a Korean Style Inline Filter?', 'It is a residential inline water filter cartridge identified by its Korean-style U-shape structure. “Korean Style” describes the product design and does not state a country of origin.'],
  ['What is the overall length of the U-Shape filter?', 'The confirmed overall length of this U-shape model is 296 mm.'],
  ['Which connection sizes are available?', 'The available connection options are 1/4 inch and 3/8 inch. The appropriate option can be selected according to the customer’s water purifier design.'],
  ['Can different filter media be combined?', 'Different media can be selected and combined according to the intended application, water quality requirements and system configuration. Available combinations must be confirmed for the selected cartridge project.'],
  ['Do you support OEM and private label branding?', 'Yes. Current products use factory labels, while QLORA branding and customer-specific labels can be arranged for suitable OEM and private-label projects.'],
  ['Can customers request different filtration configurations?', 'Yes. Customers can discuss different media and filtration configurations based on their residential water purifier requirements. Final availability depends on the selected product and project requirements.'],
]

export default function KoreanStyleInlineFilterPage() {
  useEffect(() => {
    applySEO({
      title: pageTitle,
      description: pageDescription,
      path: pagePath,
      image: absoluteUrl(`${imageBase}/u-shape-inline-filter-set.png`),
      breadcrumbs: [
        { name: 'Water Filtration', path: '/water-filtration' },
        { name: 'Inline Water Filters', path: '/products/inline-water-filters' },
        { name: 'Korean Style Inline Filter', path: pagePath },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Korean Style Inline Water Filter Cartridges',
        url: absoluteUrl(pagePath),
        description: pageDescription,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: absoluteUrl(`${imageBase}/u-shape-inline-filter-set.png`),
        },
        about: {
          '@type': 'Thing',
          name: 'Korean Style U-Shape Inline Water Filter Cartridge',
        },
      }],
    })
  }, [])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main className="overflow-x-hidden">
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="shell">
            <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink/45" aria-label="Breadcrumb">
              <a href="/" className="transition hover:text-ink">Home</a>
              <span>/</span>
              <a href="/water-filtration" className="transition hover:text-ink">Water Filtration</a>
              <span>/</span>
              <a href="/products/inline-water-filters" className="transition hover:text-ink">Inline Water Filters</a>
              <span>/</span>
              <span className="text-ink/70">Korean Style Inline Filter</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <div>
                <p className="eyebrow">Residential inline filtration</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">Korean Style Inline Water Filter Cartridges</h1>
                <p className="mt-6 max-w-xl text-2xl font-medium leading-9 tracking-[-0.02em] text-ink/78">Compact U-Shape Filter Design for Residential Water Purification Systems.</p>
                <p className="mt-6 max-w-xl text-base leading-7 text-ink/62">QLORA supplies Korean-style inline filter cartridges for household water purification applications, with multiple filter media configurations and connection options to support different system requirements.</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {highlights.map((item) => <span key={item} className="rounded-full border border-line bg-white/60 px-4 py-2 text-sm font-medium text-ink/65">{item}</span>)}
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href={inquiryHref} className="button-primary">Request a Wholesale Quote</a>
                  <a href={inquiryHref} className="button-secondary">Discuss Your OEM Project</a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-5 shadow-soft sm:p-8">
                <img src={`${imageBase}/u-shape-pp-inline-water-filter.png`} alt="Korean-style U-shape PP inline water filter cartridge with factory label" className="mx-auto aspect-square w-full object-contain" loading="eager" fetchPriority="high" decoding="async" width="1308" height="1200" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Product overview</p>
              <h2 className="headline mt-5">Designed for Residential Water Purification Systems</h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-ink/64">
                <p>The U-shape inline cartridge format is intended for compatible residential water purifier configurations and replacement filter programs.</p>
                <p>Different filtration media combinations and confirmed 1/4-inch or 3/8-inch connections can be discussed according to system requirements.</p>
                <p>QLORA supports B2B cooperation for water purifier manufacturers, filtration brands, distributors and OEM or private-label buyers.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[2rem] border border-line bg-white p-4 shadow-soft sm:p-6">
                <img src={`${imageBase}/u-shape-inline-filter-set.png`} alt="Set of four Korean-style U-shape inline filter cartridges with factory labels" className="aspect-[1.24/1] w-full object-contain" loading="lazy" decoding="async" width="1398" height="1125" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Technical reference</p>
              <h2 className="headline mt-5">Dimensions &amp; Connection Options</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">The connection option can be selected according to the customer’s residential water purifier design. No additional dimensional specifications are implied.</p>
            </div>
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-soft sm:p-5">
              <img src={`${imageBase}/u-shape-specifications.png`} alt="U-shape inline filter dimensions showing 296 millimeter length and 1/4-inch and 3/8-inch connection options" className="h-auto w-full rounded-[1.5rem] object-contain" loading="lazy" decoding="async" width="1600" height="1200" />
            </div>
            <dl className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-3">
              {[['Overall Length', '296 mm'], ['Connection Size', '1/4"'], ['Connection Size', '3/8"']].map(([label, value]) => (
                <div key={`${label}-${value}`} className="rounded-[1.5rem] border border-line bg-white/60 p-6 text-center shadow-sm">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/42">{label}</dt>
                  <dd className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-accent">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-[#f1f0eb] py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Available media options</p>
              <h2 className="headline mt-5">Flexible Filter Media Configurations</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">Different filtration media can be selected and combined according to the intended application, water quality requirements and system configuration.</p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-ink/52">These are available media options, not a fixed six-stage cartridge configuration. Final combinations and cartridge availability require confirmation for the selected project.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mediaOptions.map(([code, name, detail]) => (
                <article key={code} className="rounded-[1.5rem] border border-line bg-white/70 p-6 shadow-sm">
                  <p className="text-2xl font-semibold tracking-[-0.02em] text-accent">{code}</p>
                  <h3 className="mt-3 text-lg font-semibold">{name}</h3>
                  {detail && <p className="mt-2 text-sm leading-6 text-ink/55">{detail}</p>}
                </article>
              ))}
            </div>
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-soft sm:p-5">
              <img src={`${imageBase}/inline-filter-media-specifications.png`} alt="QLORA inline filter media and performance specifications reference" className="h-auto w-full rounded-[1.5rem] object-contain" loading="lazy" decoding="async" width="1674" height="935" />
            </div>
            <div className="mt-9 text-center">
              <a href={inquiryHref} className="button-primary">Discuss Your Filter Configuration</a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">B2B customization</p>
              <h2 className="headline mt-5">OEM &amp; Private Label Filter Solutions</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">Current products use factory labels. QLORA branding and customer-specific labels can be arranged for suitable OEM projects after the product direction is confirmed.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {oemOptions.map(([title, copy]) => (
                <article key={title} className="rounded-[1.5rem] border border-line bg-white/60 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold leading-7">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/58">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 text-center">
              <a href="/oem-private-label" className="button-secondary">Explore OEM &amp; Private Label Support</a>
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Residential use</p>
              <h2 className="headline mt-5">Applications</h2>
              <p className="body-copy mt-6">Application discussions focus on compatible residential water purification equipment and replacement filter programs.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {applications.map((application) => (
                <article key={application} className="rounded-[1.5rem] border border-line bg-white/70 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold leading-7">{application}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8">
            <p className="eyebrow">Buyer questions</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em]">Korean Style Inline Filter FAQ</h2>
            <div className="mt-10 space-y-5">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-xl border border-line bg-white/45 px-6 py-5 sm:px-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                    <span>{question}</span>
                    <span className="shrink-0 text-xl text-accent transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-ink/62">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Wholesale &amp; OEM inquiry</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Looking for Korean Style Inline Filter Solutions?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65">Contact QLORA to discuss your water purifier requirements, filter media combinations and OEM customization options.</p>
            <div className="mt-9">
              <a href={inquiryHref} className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request a Wholesale Quote</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
