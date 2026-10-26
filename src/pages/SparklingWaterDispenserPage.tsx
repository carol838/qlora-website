import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { absoluteUrl, applySEO } from '../lib/seo'

const pagePath = '/products/sparkling-water-dispenser'
const imagePath = '/images/products/sparkling-water-dispenser'
const seoTitle = 'Sparkling Water Dispenser OEM & Wholesale | QLORA'
const seoDescription = 'Explore QLORA QL-WD01 water dispensers with hot, cold, ambient and optional sparkling water. RO filtration and OEM customization for wholesale buyers.'

const specifications = [
  ['Product Type', 'Floor-Standing Water Dispenser'],
  ['Water Functions', 'Hot / Cold / Ambient'],
  ['Sparkling Water', 'Optional'],
  ['Filtration', 'RO / Optional UF'],
  ['Tank Capacity', '5L Cold + 5L Hot + 10L Ambient'],
  ['Heating Temperature', '85–95°C'],
  ['Heating Capacity', '15 L/h'],
  ['Cooling Temperature', '5–15°C'],
  ['Cooling Capacity', '10 L/h'],
  ['Cooling Options', 'Electronic / Compressor'],
  ['Sparkling System', 'External CO₂ Cylinder'],
  ['Dimensions', '340 × 390 × 1400 mm'],
  ['OEM / Private Label', 'Available'],
]

const functions = [
  { title: 'Cold Water', value: '5–15°C', accent: 'bg-[#d9edf2]' },
  { title: 'Hot Water', value: '85–95°C', accent: 'bg-[#f3e0d9]' },
  { title: 'Ambient Water', value: 'Convenient everyday drinking water', accent: 'bg-[#e8ece7]' },
  { title: 'Sparkling Water — Optional', value: 'Refreshing carbonated water with an external CO₂ cylinder.', accent: 'bg-[#dce7f2]' },
]

const faqs = [
  {
    question: 'Is sparkling water included in every QL-WD01 unit?',
    answer: 'No. Sparkling water is an optional configuration specifically available for QL-WD01 and should be confirmed when selecting the product specification.',
  },
  {
    question: 'Does the sparkling water configuration require an external CO₂ cylinder?',
    answer: 'Yes. The optional sparkling water configuration uses an external CO₂ cylinder.',
  },
  {
    question: 'Can the CO₂ cylinder be refilled locally?',
    answer: 'Cylinder compatibility and local refilling arrangements vary by market and should be confirmed before ordering.',
  },
  {
    question: 'What filtration configurations are available?',
    answer: 'A five-stage RO filtration configuration and an optional UF filtration configuration are available. The final filtration specification should be confirmed for each project.',
  },
  {
    question: 'Can the dispenser be customized with our brand?',
    answer: 'QLORA can discuss custom branding, logo, product color, plug, filtration and packaging options. Availability is subject to final project confirmation.',
  },
  {
    question: 'What is the MOQ for wholesale and OEM orders?',
    answer: 'MOQ depends on the selected configuration and customization requirements. Contact QLORA with your project details for confirmation.',
  },
]

function inquiryHref(subject: string, message: string) {
  return `/contact?subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}#inquiry-form`
}

const wholesaleHref = inquiryHref(
  'QL-WD01 wholesale inquiry',
  'I would like to discuss QL-WD01 configurations, wholesale pricing and project requirements.',
)

const oemHref = inquiryHref(
  'QL-WD01 OEM project inquiry',
  'I would like to discuss an OEM or private-label QL-WD01 project, including configuration, branding and packaging requirements.',
)

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink/70 sm:text-base">
          <span className="mt-2 block h-2 w-2 shrink-0 rounded-full bg-nordic" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function SparklingWaterDispenserPage() {
  useEffect(() => {
    applySEO({
      title: seoTitle,
      description: seoDescription,
      path: pagePath,
      canonicalUrl: absoluteUrl(pagePath),
      image: absoluteUrl(`${imagePath}/ql-wd01-hero.webp`),
      breadcrumbs: [
        { name: 'Water Dispensers', path: '/water-dispensers' },
        { name: 'QL-WD01 Sparkling Water Dispenser', path: pagePath },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'QL-WD01 Sparkling Water Dispenser',
        model: 'QL-WD01',
        brand: { '@type': 'Brand', name: 'QLORA' },
        category: 'Floor-Standing Water Dispenser',
        description: seoDescription,
        image: [
          absoluteUrl(`${imagePath}/ql-wd01-hero.webp`),
          absoluteUrl(`${imagePath}/ql-wd01-product.avif`),
        ],
        additionalProperty: specifications.map(([name, value]) => ({
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
      <main className="overflow-hidden pt-20">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="shell">
            <nav aria-label="Breadcrumb" className="text-sm text-ink/50">
              <a href="/water-dispensers" className="transition hover:text-nordic">Water Dispensers</a>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page">QL-WD01</span>
            </nav>
            <div className="mt-8 max-w-4xl">
              <p className="eyebrow">QL-WD01 · Floor-Standing Water Dispenser</p>
              <h1 className="mt-6 text-[clamp(2.8rem,6vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-ink">Sparkling Water Dispenser</h1>
              <p className="mt-6 text-[clamp(1.3rem,2.4vw,2rem)] font-medium leading-tight tracking-tight text-ink/75">Hot, Cold &amp; Ambient Water with Optional Sparkling Water</p>
              <p className="body-copy mt-6 max-w-3xl leading-8">Discover QL-WD01, a floor-standing water dispenser combining integrated filtration, heating and cooling, with an optional sparkling water configuration for OEM and wholesale buyers.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={wholesaleHref} className="button-primary">Request Wholesale Quote</a>
                <a href="#technical-specifications" className="button-secondary">View Specifications</a>
              </div>
              <p className="mt-5 text-sm font-medium text-ink/55">Sparkling water is available as an optional configuration for QL-WD01.</p>
            </div>
            <figure className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-soft md:mt-14">
              <img src={`${imagePath}/ql-wd01-hero.webp`} alt="QL-WD01 floor-standing water dispenser with hot cold ambient and optional sparkling water functions" className="aspect-[1672/941] h-auto w-full object-contain" width="1672" height="941" loading="eager" decoding="async" fetchPriority="high" />
            </figure>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[2rem] bg-white p-5 shadow-sm sm:p-8">
                <img src={`${imagePath}/ql-wd01-product.avif`} alt="Complete QL-WD01 floor-standing water dispenser" className="mx-auto h-auto max-h-[650px] w-full object-contain" width="1328" height="1184" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="lg:col-span-6">
              <p className="eyebrow">Product overview</p>
              <h2 className="headline mt-5">All-in-One Water Dispensing Solution</h2>
              <p className="body-copy mt-6 leading-8">Designed for modern homes, offices and commercial environments, QL-WD01 combines multiple drinking water functions in one streamlined floor-standing unit.</p>
              <div className="mt-8"><CheckList items={['Hot, cold and ambient water', 'Optional sparkling water', 'Integrated water filtration', 'Touch control interface', 'Multiple configuration options']} /></div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Four water functions</p>
              <h2 className="headline mt-5">One Dispenser, Flexible Water Choices</h2>
              <p className="body-copy mt-6">Choose the QL-WD01 configuration that fits your market and project requirements.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {functions.map((item) => (
                <article key={item.title} className="rounded-[1.7rem] border border-line bg-white/80 p-6 shadow-sm">
                  <span className={`block h-2.5 w-12 rounded-full ${item.accent}`} aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">{item.value}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <img src={`${imagePath}/ql-wd01-sparkling.webp`} alt="QL-WD01 dispensing optional sparkling water into a glass" className="aspect-[3/2] h-auto w-full object-contain" width="1536" height="1024" loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell grid gap-10 rounded-[2rem] border border-line bg-white/75 p-6 shadow-soft md:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">Integrated filtration</p>
              <h2 className="headline mt-5">Built-in Water Filtration</h2>
              <p className="body-copy mt-6 max-w-2xl leading-8">Filtration configurations may vary depending on the selected model specification. Confirm the required configuration for your market and application.</p>
            </div>
            <div className="rounded-[1.6rem] bg-canvas/80 p-6 lg:col-span-5 md:p-8"><CheckList items={['Five-stage RO filtration configuration', 'UF filtration option', 'Filter replacement reminder']} /></div>
          </div>
        </section>

        <section id="technical-specifications" className="scroll-mt-24 py-14 md:py-20">
          <div className="shell">
            <div className="max-w-3xl"><p className="eyebrow">Product data</p><h2 className="headline mt-5">Technical Specifications</h2></div>
            <div className="mt-10 overflow-hidden rounded-[2rem] border border-line bg-white/80 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left">
                  <thead className="bg-ink text-white"><tr><th className="px-6 py-5 text-sm font-semibold">Specification</th><th className="px-6 py-5 text-sm font-semibold">QL-WD01</th></tr></thead>
                  <tbody>{specifications.map(([label, value]) => <tr key={label} className="border-t border-line first:border-t-0"><th scope="row" className="w-[42%] px-6 py-4 text-sm font-medium text-ink/60">{label}</th><td className="px-6 py-4 text-sm font-medium text-ink">{value}</td></tr>)}</tbody>
                </table>
              </div>
            </div>
            <p className="mt-5 text-sm text-ink/55">Specifications and available configurations are subject to final confirmation.</p>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <p className="eyebrow">OEM support</p>
              <h2 className="headline mt-5">OEM &amp; Private Label Water Dispenser Solutions</h2>
              <p className="body-copy mt-6 leading-8">Configure QL-WD01 for distribution, wholesale and private-label projects with options reviewed against your market requirements.</p>
              <div className="mt-8"><CheckList items={['Custom branding and logo', 'Product color options', 'Plug configurations', 'Filtration configuration', 'Packaging customization subject to confirmation']} /></div>
              <a href={oemHref} className="button-primary mt-9">Discuss Your OEM Project</a>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-soft">
                <img src={`${imagePath}/ql-wd01-oem.avif`} alt="QL-WD01 OEM and private label configuration presentation" className="mx-auto h-auto max-h-[720px] w-full object-contain" width="1865" height="2046" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Supply resources</p><h2 className="headline mt-5">Production &amp; Assembly</h2>
              <p className="body-copy mt-6 leading-8">Explore QLORA&apos;s water dispenser supply solutions, supported by manufacturing and assembly resources for wholesale and OEM projects.</p>
            </div>
            <figure className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-soft"><img src={`${imagePath}/ql-wd01-production.webp`} alt="Water dispenser units undergoing production and assembly" className="aspect-[2821/1280] h-auto w-full object-contain" width="2821" height="1280" loading="lazy" decoding="async" /></figure>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Frequently asked questions</p><h2 className="headline mt-5">QL-WD01 Product Questions</h2></div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4">
              {faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-line bg-white/80 p-6 shadow-sm"><summary className="cursor-pointer list-none pr-8 text-base font-medium text-ink marker:hidden">{faq.question}</summary><p className="mt-4 border-t border-line pt-4 text-sm leading-7 text-ink/65">{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Wholesale &amp; OEM inquiry</p>
            <h2 className="headline mx-auto mt-5 max-w-4xl">Looking for an OEM Sparkling Water Dispenser Supplier?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65">Contact QLORA to discuss QL-WD01 configurations, branding options, wholesale pricing and project requirements.</p>
            <a href={wholesaleHref} className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request a Wholesale Quote</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
