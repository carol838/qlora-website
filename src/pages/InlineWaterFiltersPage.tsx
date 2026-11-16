import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { absoluteUrl, applySEO } from '../lib/seo'

const pagePath = '/products/inline-water-filters'
const pageTitle = 'Inline Water Filters for OEM & Wholesale | QLORA'
const pageDescription = 'Explore PP, GAC, CTO, UF and post-carbon inline water filter options for residential water purification systems, wholesale supply and private-label projects.'

const filterFamilies = [
  {
    name: 'PP Sediment Inline Filters',
    media: 'PP sediment media',
    description: 'Designed for particulate pre-filtration and relevant to sediment and suspended-particle reduction in compatible residential systems.',
  },
  {
    name: 'GAC Inline Filters',
    media: 'Granular activated carbon media',
    description: 'Commonly used for chlorine, taste and odor reduction, subject to the selected media, product configuration and verified performance data.',
  },
  {
    name: 'CTO Inline Filters',
    media: 'Carbon block filtration',
    description: 'Relevant to chlorine, taste and odor reduction where supported by the specifications and test data for the selected filter.',
  },
  {
    name: 'UF Inline Filters',
    media: 'Ultrafiltration membrane configurations',
    description: 'Available for compatible residential filtration systems. Filtration performance depends on the verified membrane specification and system design.',
  },
  {
    name: 'Post Carbon Inline Filters',
    media: 'Final-stage carbon filtration',
    description: 'Commonly used as a final-stage taste and odor polishing filter in compatible multi-stage water purification systems.',
  },
]

const applications = [
  'Under-sink water purification systems',
  'Residential RO systems',
  'Residential UF filtration systems',
  'Compatible multi-stage water filter systems',
  'Replacement cartridge supply for residential equipment',
]

const cooperationAreas = [
  ['Product configuration', 'Discuss filter sequence and cartridge format according to the intended system.'],
  ['Filter media selection', 'Review PP, GAC, CTO, UF and post-carbon directions for the target application.'],
  ['Branding & labeling', 'Brand and label options can be reviewed for suitable products and project requirements.'],
  ['Packaging customization', 'Packaging direction can be discussed according to the selected product and order requirements.'],
  ['Connection compatibility', 'Confirm cartridge dimensions, connection type and equipment compatibility before quotation.'],
  ['Wholesale cooperation', 'Share the target market and estimated quantity so the appropriate supply direction can be evaluated.'],
]

const buyerInformation = [
  'Required filter type',
  'Application or equipment model',
  'Cartridge dimensions',
  'Connection type and size',
  'Target market',
  'Estimated quantity',
  'Branding and packaging requirements',
]

const inquirySubject = 'Inline Water Filters OEM / Wholesale Inquiry'
const inquiryMessage = 'Hello QLORA, I would like to discuss inline water filters for an OEM or wholesale project.\n\nFilter type:\nApplication or equipment model:\nCartridge dimensions:\nConnection type and size:\nTarget market:\nEstimated quantity:\nBranding or packaging requirements:'
const inquiryHref = `/contact?subject=${encodeURIComponent(inquirySubject)}&message=${encodeURIComponent(inquiryMessage)}`

export default function InlineWaterFiltersPage() {
  useEffect(() => {
    applySEO({
      title: pageTitle,
      description: pageDescription,
      path: pagePath,
      image: absoluteUrl('/images/water-filtration/hero.webp'),
      breadcrumbs: [
        { name: 'Water Filtration', path: '/water-filtration' },
        { name: 'Inline Water Filters', path: pagePath },
      ],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Inline Water Filters for Residential Water Purification Systems',
        url: absoluteUrl(pagePath),
        description: pageDescription,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: filterFamilies.map((filter, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: filter.name,
          })),
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
              <span className="text-ink/70">Inline Water Filters</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
              <div>
                <p className="eyebrow">Residential filtration supply</p>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-ink sm:text-6xl lg:text-7xl">Inline Water Filters for Residential Water Purification Systems</h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-ink/68">QLORA supplies inline water filtration solutions for residential water purifiers, under-sink filtration systems and compatible multi-stage water treatment configurations.</p>
                <p className="mt-4 max-w-xl text-base leading-7 text-ink/58">Explore different filtration media and cartridge options for OEM, private-label and wholesale supply projects.</p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href={inquiryHref} className="button-primary">Request a Quote</a>
                  <a href="#inline-filter-range" className="button-secondary">Explore Filter Types</a>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-line bg-white/75 p-3 shadow-soft sm:p-5">
                <img src="/images/water-filtration/hero.webp" alt="Residential water filter cartridge family including an inline filter format" className="aspect-[16/10] w-full rounded-[1.5rem] object-cover" loading="eager" fetchPriority="high" decoding="async" width="1680" height="945" />
              </div>
            </div>
          </div>
        </section>

        <section id="inline-filter-range" className="scroll-mt-24 bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Product family</p>
              <h2 className="headline mt-5">Inline Filter Product Range</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">Select filter media and cartridge formats according to the equipment design, water-treatment sequence and verified project requirements.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {filterFamilies.map((filter) => (
                <article key={filter.name} className="flex h-full flex-col rounded-[1.5rem] border border-line bg-white/70 p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{filter.media}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.02em]">{filter.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{filter.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Residential applications</p>
              <h2 className="headline mt-5">Designed Around Compatible Home Water Systems</h2>
              <p className="body-copy mt-6">Inline cartridge selection should be matched to the system layout, equipment connection and intended filtration sequence.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {applications.map((application, index) => (
                <article key={application} className={`${index === applications.length - 1 ? 'sm:col-span-2' : ''} rounded-[1.5rem] border border-line bg-white/55 p-6 shadow-sm`}>
                  <span className="text-xs font-semibold tracking-[0.18em] text-accent">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold leading-7">{application}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f1f0eb] py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">OEM &amp; private label</p>
              <h2 className="headline mt-5">Cooperation Support for Your Filter Program</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">Available options depend on the selected filter, compatibility requirements and project details. Confirm the final configuration before ordering.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cooperationAreas.map(([title, copy]) => (
                <article key={title} className="rounded-[1.5rem] border border-line bg-white/65 p-7 shadow-sm">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{copy}</p>
                </article>
              ))}
            </div>
            <div className="mt-9 text-center">
              <a href="/oem-private-label" className="button-secondary">Explore OEM &amp; Private Label Support</a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow">Quotation checklist</p>
              <h2 className="headline mt-5">Information Buyers Should Provide</h2>
              <p className="body-copy mt-6">Providing these details helps identify a compatible product direction without assuming one cartridge suits every system.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2" aria-label="Inline water filter quotation information">
              {buyerInformation.map((item) => (
                <li key={item} className="flex min-h-16 items-center gap-3 rounded-2xl border border-line bg-white/60 px-5 py-4 text-sm font-medium shadow-sm">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Inline filter inquiry</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Source Inline Water Filters for Your Product Range</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65">Share your filter type, equipment, connection and target-market requirements for an OEM or wholesale discussion.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={inquiryHref} className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request Quote</a>
              <a href="/water-filtration" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">View Water Filtration</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
