import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'
import { getWaterDispenserById, getWaterDispenserBySlug, getWaterDispenserHref, waterDispenserDetailProducts, type WaterDispenserProduct } from '../data/waterDispenserProducts'
import Home from './Home'

const specRows = (product: WaterDispenserProduct) => [
  ['Cooling Capacity', product.cooling],
  ['Heating Capacity', product.heating],
  ['Product Size', product.productSize],
  ['Packing Size', product.packingSize],
  ['N.W. / G.W.', product.netGross],
  ['Loading Quantity', product.loadingQty],
]

const relatedIds: Record<string, string[]> = {
  'QD-PREM-001': ['QD-PREM-002', 'QD-CT-001', 'QD-TEA-007'],
  'QD-PREM-002': ['QD-MOD-001', 'QD-CT-001', 'QD-TEA-007'],
  'QD-MOD-001': ['QD-PREM-002', 'QD-CCT-001', 'QD-TEA-007'],
  'QD-CT-001': ['QD-CCT-001', 'QD-PREM-002', 'QD-TEA-007'],
  'QD-CCT-001': ['QD-CT-001', 'QD-MOD-001', 'QD-TEA-007'],
  'QD-TEA-007': ['QD-TEA-001', 'QD-CT-001', 'QD-PREM-002'],
}

const faqs = [
  {
    question: 'Can this water dispenser support OEM or private label projects?',
    answer: 'Yes. QLORA can support selected projects with product selection, branding, packaging coordination and configuration planning.',
  },
  {
    question: 'Are POU, RO or UF configurations standard?',
    answer: 'No. POU, RO and UF filtration are available options on selected platforms and should be confirmed according to the project requirements.',
  },
  {
    question: 'Can I request product details for my market?',
    answer: 'Yes. Share your application, configuration needs and target market so we can help evaluate a suitable water dispenser solution.',
  },
  {
    question: 'Do the specifications include logistics information?',
    answer: 'Yes. Product size, packing size, N.W. / G.W. and loading quantity are shown where confirmed in the product master.',
  },
]

function Breadcrumb({ product }: { product: WaterDispenserProduct }) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-ink/50" aria-label="Breadcrumb">
      <a href="/" className="transition hover:text-ink">Home</a>
      <span>›</span>
      <a href="/water-dispensers" className="transition hover:text-ink">Water Dispensers</a>
      <span>›</span>
      <span className="text-ink/80">{product.name}</span>
    </nav>
  )
}

function ProductImage({ product, priority = false }: { product: WaterDispenserProduct; priority?: boolean }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2rem] bg-white p-5 shadow-soft">
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
      <p className="eyebrow">{label}</p>
      <h2 className="headline mt-5">{title}</h2>
      {copy && <p className="body-copy mx-auto mt-5 max-w-2xl">{copy}</p>}
    </div>
  )
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item} className="rounded-2xl border border-line bg-white/75 px-5 py-5 shadow-sm">
          <h3 className="text-base font-medium text-ink">{item}</h3>
        </article>
      ))}
    </div>
  )
}

function RelatedCard({ product }: { product: WaterDispenserProduct }) {
  const hasDetail = Boolean(product.slug)
  return (
    <a href={getWaterDispenserHref(product)} className="group rounded-[1.6rem] border border-line bg-white/75 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.2rem] bg-white p-4">
        <img src={product.image} alt={product.imageAlt} className="h-full w-full object-contain" loading="lazy" decoding="async" />
      </div>
      <h3 className="mt-5 text-lg font-medium leading-tight text-ink">{product.name}</h3>
      <p className="mt-2 text-sm text-ink/50">{product.category}</p>
      <span className="mt-4 inline-flex text-sm font-medium text-nordic transition group-hover:translate-x-1">{hasDetail ? 'View Product' : 'Request Details'} →</span>
    </a>
  )
}

export default function WaterDispenserProductPage({ slug }: { slug: string }) {
  const product = getWaterDispenserBySlug(slug)
  if (!product) return <Home />

  const related = (relatedIds[product.id] || [])
    .map((id) => getWaterDispenserById(id))
    .filter(Boolean) as WaterDispenserProduct[]

  useEffect(() => {
    applySEO({
      title: product.seoTitle || `${product.name} | QLORA`,
      description: product.seoDescription || `Explore ${product.name} for home, office and commercial water dispenser applications with OEM and private label support from QLORA.`,
      path: `/water-dispensers/${product.slug}`,
      image: `https://qloratech.com${product.image}`,
      breadcrumbs: [
        { name: 'Water Dispensers', path: '/water-dispensers' },
        { name: product.name, path: `/water-dispensers/${product.slug}` },
      ],
      schemas: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          brand: { '@type': 'Brand', name: 'QLORA' },
          image: `https://qloratech.com${product.image}`,
          description: product.description,
          category: product.category,
          additionalProperty: specRows(product).map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
        },
      ],
    })
  }, [product])

  return (
    <>
      <Header />
      <main>
        <section className="pt-28 md:pt-32">
          <div className="shell pb-14 md:pb-20">
            <Breadcrumb product={product} />
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <ProductImage product={product} priority />
              </div>
              <div className="lg:col-span-6">
                <p className="eyebrow">{product.category}</p>
                <h1 className="mt-6 text-[clamp(2.4rem,4vw,4.1rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-ink">{product.name}</h1>
                <p className="body-copy mt-7 max-w-[620px] leading-8">{product.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {[product.cooling, product.heating, product.productSize].map((tag) => (
                    <span key={tag} className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-medium text-ink/65">{tag}</span>
                  ))}
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a href="/contact" className="button-primary">Discuss Your Project</a>
                  <a href="/oem-private-label" className="button-secondary">OEM Support</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow">Product overview</p>
              <h2 className="headline mt-5">Built for Practical Water Dispensing Projects</h2>
              <p className="body-copy mt-6">{product.description}</p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {[['Cooling', product.cooling], ['Heating', product.heating], ['Size', product.productSize]].map(([label, value]) => (
                  <article key={label} className="rounded-2xl border border-line bg-white/75 p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/35">{label}</p>
                    <p className="mt-3 text-lg font-semibold text-ink">{value}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Key features" title="Confirmed Standard Features" copy="Standard features are kept separate from optional configurations." />
            <div className="mt-10"><FeatureList items={product.standardFeatures} /></div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Technical specifications" title="Technical Specifications" />
            <div className="mx-auto mt-10 max-w-[900px] overflow-hidden rounded-xl border border-[#E8E8E8] bg-white shadow-sm">
              {specRows(product).map(([label, value], index) => (
                <div key={label} className={`grid gap-2 px-6 py-5 md:grid-cols-2 md:px-7 ${index % 2 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                  <dt className="text-base font-medium text-ink/55">{label}</dt>
                  <dd className="text-lg font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Available options" title="Configurable Options" copy="These items come from Optional / Choice fields and are not presented as standard features." />
            <div className="mt-10"><FeatureList items={product.options} /></div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Applications" title="Where This Product Fits" />
            <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {product.applications.map((application) => (
                <article key={application} className="flex min-h-[92px] items-center justify-center rounded-2xl bg-white/75 px-4 py-5 text-center shadow-sm">
                  <h3 className="text-sm font-medium text-ink/75">{application}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid items-center gap-8 rounded-[2rem] border border-line bg-white/70 p-6 shadow-soft md:p-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">OEM &amp; private label</p>
              <h2 className="headline mt-5">Support for Market-Ready Water Dispenser Projects</h2>
              <p className="body-copy mt-6 max-w-[720px]">QLORA supports selected water dispenser projects with product selection, configuration planning, private label coordination and packaging support.</p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
              <a href="/oem-private-label" className="button-primary justify-center">Explore OEM Solutions</a>
              <a href="/contact" className="button-secondary justify-center">Request Support</a>
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <SectionHeader label="Related products" title="Related Water Dispensers" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((item) => <RelatedCard key={item.id} product={item} />)}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell max-w-[900px]">
            <SectionHeader label="FAQ" title="Water Dispenser FAQ" />
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-line bg-white/75 p-5 shadow-sm">
                  <summary className="cursor-pointer list-none text-lg font-medium text-ink">{faq.question}</summary>
                  <p className="mt-4 text-base leading-7 text-ink/60">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Inquiry</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Discuss This Water Dispenser Project</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65">Tell us your target application, configuration needs and market requirements.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request a Quote</a>
              <a href="/water-dispensers" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition hover:bg-white/10">Back to Water Dispensers</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
