import { useEffect } from 'react'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CatalogDownloadLink from '../components/CatalogDownloadLink'
import { applySEO } from '../lib/seo'

const articlePath = '/technical-knowledge/shower-filter-media-guide'
const canonicalUrl = 'https://www.qloratech.com/technical-knowledge/shower-filter-media-guide'
const seoDescription = 'Learn how 15-stage, 20-stage and 25-stage shower filters differ, what common shower filter media are used, and how to choose a configuration for your market.'
const heroImage = '/images/shower-solutions/shower-filter-installation-hero.png'
const structureImage = '/images/products/inline-shower-filter/filtration-structure.jpg'
const productImage = '/images/products/inline-shower-filter/product-design.png'
const socialImage = `https://qloratech.com${heroImage}`

const mediaGroups = [
  {
    title: 'Mechanical Filtration',
    media: 'Stainless Steel Mesh / PP Cotton',
    description: 'Used as physical filtration or support layers for particulate interception and media containment within the cartridge structure.',
  },
  {
    title: 'Redox / Chlorine-Oriented Media',
    media: 'KDF-55 / Calcium Sulfite',
    description: 'Commonly selected for shower-filter configurations where chlorine-oriented treatment is part of the product positioning. Actual performance depends on the complete cartridge design and water conditions.',
  },
  {
    title: 'Carbon-Based Media',
    media: 'Activated Carbon / Activated Carbon Ball',
    description: 'Activated carbon is commonly used in water-treatment applications for adsorption of certain compounds and odor-related treatment, depending on contact time, media quantity and incoming water quality.',
  },
  {
    title: 'Mineral / Ceramic / Conditioning Media',
    media: 'Mineral Ball / Maifan Stone / Tourmaline Ball / Alkaline Ball / Ceramic-type media',
    description: 'Optional mineral, ceramic and conditioning media may be used in different configurations for product differentiation and formulation flexibility.',
  },
  {
    title: 'Specialty Media',
    media: 'Vitamin C Ball / Negative Ion Ball / Far Infrared Ball / Antibacterial Ball / Aluminum Oxide Ball / other specialty media balls',
    description: 'Supplier terminology and claimed functions can vary. For OEM projects, marketing claims should be supported by technical documentation or testing before being used in consumer-facing materials.',
  },
]

const comparisonRows = [
  ['15-Stage', 'More streamlined multi-media configuration', 'Projects requiring a simpler configuration and lower configuration complexity'],
  ['20-Stage', 'Expanded selection of media layers', 'Broader product positioning where buyers want additional media options'],
  ['25-Stage', 'Extended media configuration with more room for media combinations', 'Projects where additional customization flexibility is part of the product brief'],
]

const selectionFactors = [
  'Target retail positioning',
  'Target price range',
  'Local water characteristics',
  'Desired media composition',
  'Replacement cartridge strategy',
  'Required consumer claims',
  'Testing and certification requirements',
  'Packaging and private-label positioning',
]

const performanceFactors = [
  'Media quantity',
  'Particle or granule size',
  'Layer thickness',
  'Water flow rate',
  'Contact time',
  'Incoming water conditions',
  'Cartridge construction',
]

function ArticleSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink md:text-4xl">{title}</h2>
      <div className="mt-6 space-y-5 text-base leading-8 text-ink/68 md:text-lg md:leading-9">
        {children}
      </div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-nordic" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ShowerFilterMediaGuideArticle() {
  useEffect(() => {
    applySEO({
      title: 'Shower Filter Media Guide: 15, 20 & 25 Stage Filters | QLORA',
      description: seoDescription,
      path: articlePath,
      canonicalUrl,
      image: socialImage,
      type: 'article',
      breadcrumbs: [
        { name: 'Technical Knowledge', path: '/technical-knowledge' },
        { name: 'Shower Filter Media Guide', path: articlePath },
      ],
      schemas: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Shower Filter Media Guide: Understanding 15-, 20- and 25-Stage Filtration',
          description: seoDescription,
          image: socialImage,
          author: { '@type': 'Organization', name: 'QLORA' },
          publisher: { '@type': 'Organization', name: 'QLORA' },
          mainEntityOfPage: canonicalUrl,
          about: [
            'shower filter media',
            'multi-stage shower filter',
            'shower filter cartridge',
            'shower filtration media',
          ],
        },
      ],
    })
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-x-hidden pt-20">
        <article>
          <section className="shell py-14 md:py-20">
            <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink/45" aria-label="Breadcrumb">
              <a href="/" className="transition hover:text-ink">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/technical-knowledge" className="transition hover:text-ink">Technical Knowledge</a>
              <span aria-hidden="true">/</span>
              <span className="text-ink/70">Shower Filter Media Guide</span>
            </nav>

            <div className="mx-auto max-w-4xl text-center">
              <p className="eyebrow">Shower filtration guide</p>
              <h1 className="mt-6 text-[clamp(2.5rem,5.4vw,5.7rem)] font-semibold leading-[0.98] tracking-[-0.07em] text-ink">
                Shower Filter Media Guide: Understanding 15-, 20- and 25-Stage Filtration
              </h1>
              <p className="body-copy mx-auto mt-8 max-w-3xl">
                A practical B2B guide for evaluating multi-stage shower filter media, cartridge structure and OEM configuration choices.
              </p>
            </div>

            <div className="mt-12 overflow-hidden rounded-[2rem] bg-white/70 p-4 shadow-soft sm:p-6">
              <img
                src={heroImage}
                alt="Inline shower filter installed between shower arm and shower head"
                className="aspect-[16/8] w-full rounded-[1.5rem] object-cover object-[42%_50%]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="1600"
                height="800"
              />
            </div>
          </section>

          <section className="shell pb-16 md:pb-24">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-5 text-base leading-8 text-ink/68 md:text-lg md:leading-9">
                <p>Shower filters are commonly marketed as 15-stage, 20-stage or 25-stage products. These labels are useful for describing a configuration, but the number of stages does not by itself determine filtration performance.</p>
                <p>Different shower filter cartridges may use different filtration media, media quantities, layer arrangements and target applications. For importers, distributors and private-label buyers, the actual media composition is therefore more important than simply comparing stage count.</p>
                <p>This article explains how multi-stage shower filters are structured, what common media categories may be used, and how B2B buyers can evaluate a configuration without relying on unsupported performance claims.</p>
              </div>

              <ArticleSection title="What Does “15-Stage” or “20-Stage” Actually Mean?">
                <p>In multi-media shower filters, a stage generally refers to a filtration layer or media layer within the cartridge.</p>
                <p>A higher stage count may mean additional media types, additional layers, repeated layers or a different media arrangement. It does not automatically mean better filtration.</p>
                <p>The effectiveness of a configuration depends on the selected media, media quantity, water conditions, contact time and overall cartridge design.</p>
              </ArticleSection>

              <figure className="my-14 overflow-hidden rounded-[2rem] bg-white/70 p-4 shadow-soft sm:p-6">
                <img
                  src={structureImage}
                  alt="Inline shower filter media structure showing multi-stage cartridge layers"
                  className="aspect-[16/10] w-full rounded-[1.5rem] object-contain"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="750"
                />
              </figure>

              <ArticleSection title="Common Media Used in Multi-Stage Shower Filters">
                <p>Supplier media sheets for 15-stage, 20-stage and 25-stage shower filter configurations include a mix of mechanical support layers, established water-treatment media and optional specialty media. Instead of publishing a long formulation table, it is more useful to group them by function.</p>
                <div className="grid gap-4">
                  {mediaGroups.map((group) => (
                    <div key={group.title} className="rounded-2xl border border-line bg-white/65 p-5 shadow-sm">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">{group.title}</h3>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-nordic">{group.media}</p>
                      <p className="mt-4 text-sm leading-6 text-ink/60 md:text-base md:leading-7">{group.description}</p>
                    </div>
                  ))}
                </div>
                <p>These media names should be treated carefully. Supplier terminology can vary, and claimed functions should be confirmed by technical documentation or testing before they are used in consumer-facing marketing.</p>
              </ArticleSection>

              <ArticleSection title="15-Stage vs 20-Stage vs 25-Stage Shower Filters">
                <div className="overflow-x-auto rounded-2xl border border-line bg-white/70 shadow-sm">
                  <table className="min-w-[720px] w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-line bg-white">
                        <th className="px-5 py-4 font-semibold text-ink">Configuration</th>
                        <th className="px-5 py-4 font-semibold text-ink">General Structure</th>
                        <th className="px-5 py-4 font-semibold text-ink">Typical B2B Fit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, index) => (
                        <tr key={row[0]} className={`border-b border-line last:border-0 ${index % 2 === 1 ? 'bg-[#faf9f6]' : ''}`}>
                          {row.map((cell) => <td key={cell} className="px-5 py-4 align-top text-ink/65">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p><strong className="font-semibold text-ink">Stage count should be treated as a configuration descriptor, not as a standalone measure of filtration performance.</strong></p>
                <p>A 25-stage configuration may provide more room for media combinations, while a 15-stage configuration may be appropriate for a simpler product brief. The right option depends on the market, cartridge design and validated claims required for the project.</p>
              </ArticleSection>

              <ArticleSection title="Media Type Is Only Part of the Story">
                <p>Two cartridges can contain the same media name and still perform differently. Supplier documentation shows that different media can be used in different quantities across configurations, but a product page should not expose pricing or reproduce confidential formulation details as a complete manufacturing recipe.</p>
                <p>When evaluating a shower filter cartridge, buyers should also consider:</p>
                <BulletList items={performanceFactors} />
                <p>This is why technical review and application context matter. A media list is helpful, but it is not a substitute for configuration-level testing when specific consumer claims are required.</p>
              </ArticleSection>

              <ArticleSection title="How to Choose a Shower Filter Configuration for Your Market">
                <p>Importers and private-label buyers should evaluate the configuration around the intended market rather than selecting a stage count in isolation.</p>
                <BulletList items={selectionFactors} />
                <p>For markets where specific contaminant-reduction claims are required, buyers should confirm that the selected configuration is supported by appropriate test data before using those claims in marketing.</p>
                <p>OEM teams should also consider how the replacement cartridge strategy, package claims and retail price need to work together.</p>
              </ArticleSection>

              <ArticleSection title="Configurable Shower Filtration from QLORA">
                <p>QLORA&apos;s <a href="/products/inline-shower-filter" className="font-medium text-nordic underline decoration-nordic/30 underline-offset-4">Inline Shower Filter</a> is available with 15-stage, 20-stage and 25-stage media configurations for different market and OEM requirements.</p>
                <p>These configurations should be selected according to product positioning, application needs and available technical support rather than assuming one stage count is universally superior.</p>
                <p>For broader product selection, visit <a href="/shower-solutions" className="font-medium text-nordic underline decoration-nordic/30 underline-offset-4">QLORA Shower Solutions</a> or review <a href="/oem-private-label" className="font-medium text-nordic underline decoration-nordic/30 underline-offset-4">OEM and private-label support</a>.</p>
              </ArticleSection>
            </div>
          </section>

          <section className="px-5 pb-16 md:px-8 md:pb-24">
            <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[2rem] bg-ink text-white shadow-soft lg:grid-cols-12">
              <div className="p-6 sm:p-10 lg:col-span-7 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Shower filter configuration</p>
                <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Build the Right Shower Filter for Your Market</h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">Compare inline shower filter structures, media configurations and private-label requirements with the QLORA team.</p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="/products/inline-shower-filter" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Explore Inline Shower Filter</a>
                  <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition hover:bg-white/10">Discuss Filter Configuration</a>
                  <CatalogDownloadLink label="Download Shower Solutions Catalog" pageType="technical_knowledge" catalog="showerSolutions" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white transition hover:bg-white/10" />
                </div>
              </div>
              <div className="min-h-[300px] bg-white/5 p-4 lg:col-span-5 lg:p-6">
                <img
                  src={productImage}
                  alt="Inline shower filter product design for OEM configuration review"
                  className="h-full min-h-[300px] w-full rounded-[1.5rem] object-contain"
                  loading="lazy"
                  decoding="async"
                  width="900"
                  height="900"
                />
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}

