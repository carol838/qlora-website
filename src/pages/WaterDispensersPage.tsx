import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CatalogDownloadLink from '../components/CatalogDownloadLink'
import { applySEO } from '../lib/seo'
import { getWaterDispenserById, getWaterDispenserHref, type WaterDispenserProduct } from '../data/waterDispenserProducts'

const categoryCards = [
  {
    title: 'Floor-Standing Water Dispensers',
    description: 'Full-size hot and cold water dispenser platforms for offices, commercial spaces and shared environments.',
    imageId: 'QD-MOD-001',
    href: '#featured-floor-standing',
  },
  {
    title: 'Countertop Water Dispensers',
    description: 'Compact dispenser solutions for kitchens, offices, meeting rooms and space-conscious applications.',
    imageId: 'QD-CT-001',
    href: '#countertop-water-dispensers',
  },
  {
    title: 'Bottom-Loading & POU Solutions',
    description: 'Selected dispenser platforms supporting bottom-loading and point-of-use filtration configurations.',
    imageId: 'QD-PREM-002',
    href: '#integrated-filtration-options',
  },
]

const floorStandingIds = ['QD-PREM-001', 'QD-PREM-002', 'QD-MOD-001', 'QD-CLASS-001']
const countertopIds = ['QD-CT-001', 'QD-CT-003', 'QD-CCT-001']

function byIds(ids: string[]) {
  return ids.map((id) => getWaterDispenserById(id)).filter(Boolean) as WaterDispenserProduct[]
}

function ProductImage({ product, priority = false }: { product: WaterDispenserProduct; priority?: boolean }) {
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-white shadow-sm">
      <img
        src={product.image}
        alt={product.imageAlt}
        className="h-full w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
      />
    </div>
  )
}

function ProductCard({ product }: { product: WaterDispenserProduct }) {
  const href = getWaterDispenserHref(product)
  const hasDetail = Boolean(product.slug)
  const tags = product.standardFeatures.slice(0, 3)

  return (
    <a href={href} className="group flex h-full flex-col rounded-[2rem] border border-line bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <ProductImage product={product} />
      <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-nordic/80">{product.category}</p>
        <h3 className="mt-3 text-[clamp(1.25rem,2vw,1.55rem)] font-medium leading-tight tracking-tight text-ink">{product.name}</h3>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line bg-canvas/80 px-3 py-1.5 text-xs font-medium text-ink/55">{tag}</span>
          ))}
        </div>
        <dl className="mt-6 grid gap-3 text-sm text-ink/70">
          <div className="flex items-start justify-between gap-4 border-t border-line pt-3">
            <dt className="text-ink/45">Cooling</dt>
            <dd className="text-right font-medium text-ink">{product.cooling}</dd>
          </div>
          <div className="flex items-start justify-between gap-4 border-t border-line pt-3">
            <dt className="text-ink/45">Heating</dt>
            <dd className="text-right font-medium text-ink">{product.heating}</dd>
          </div>
          <div className="flex items-start justify-between gap-4 border-t border-line pt-3">
            <dt className="text-ink/45">Product Size</dt>
            <dd className="text-right font-medium text-ink">{product.productSize}</dd>
          </div>
        </dl>
        <span className="mt-7 inline-flex w-fit items-center text-sm font-medium text-nordic transition group-hover:translate-x-1">
          {hasDetail ? 'View Details' : 'Request Details'} <span className="ml-1">→</span>
        </span>
      </div>
    </a>
  )
}

function ProductGrid({ products }: { products: WaterDispenserProduct[] }) {
  return <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
}

export default function WaterDispensersPage() {
  const waterDispenserHero = '/images/water-dispensers/water-dispensers-hero.png'
  const featuredProduct = getWaterDispenserById('QD-PREM-001')!
  const displayedProducts = [...byIds(floorStandingIds), ...byIds(countertopIds)]

  useEffect(() => {
    applySEO({
      title: 'Water Dispensers & POU Solutions | QLORA',
      description: 'Explore QLORA floor-standing, countertop and bottom-loading water dispensers with selected POU, RO and UF filtration options for residential and commercial applications.',
      path: '/water-dispensers',
      image: `https://qloratech.com${waterDispenserHero}`,
      breadcrumbs: [{ name: 'Water Dispensers', path: '/water-dispensers' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'QLORA water dispensers',
        itemListElement: displayedProducts.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: product.name,
          url: product.slug ? `https://qloratech.com/water-dispensers/${product.slug}` : 'https://qloratech.com/water-dispensers',
        })),
      }],
    })
  }, [displayedProducts])

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-20">
          <div className="shell grid min-h-[620px] items-center gap-10 py-14 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
            <div className="lg:col-span-6">
              <p className="eyebrow">Water dispenser solutions</p>
              <h1 className="mt-6 max-w-[720px] text-[clamp(2.55rem,4.4vw,4.45rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-ink">
                Water Dispensers for Home &amp; Commercial Applications
              </h1>
              <p className="body-copy mt-7 max-w-[590px] leading-8">
                Explore floor-standing, countertop and integrated water dispenser solutions with flexible hot, cold and filtration configurations.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#explore-water-dispensers" className="button-primary">Explore Water Dispensers</a>
                <a href="/contact" className="button-secondary">Discuss Your Project</a>
                <CatalogDownloadLink label="Download Catalog" pageType="water_dispensers" catalog="waterDispenserSolutions" />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[2rem] bg-white/60 p-4 shadow-soft sm:p-5">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-white shadow-sm">
                    <img
                      src={waterDispenserHero}
                      alt="QLORA water dispenser product lineup for home office and commercial use"
                      className="h-full w-full object-contain"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="explore-water-dispensers" className="scroll-mt-20 py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Explore Water Dispensers</p>
              <h2 className="headline mt-5">Dispenser Platforms for Different Projects</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryCards.map((card) => {
                const product = getWaterDispenserById(card.imageId)!
                return (
                  <a key={card.title} href={card.href} className="group rounded-[2rem] border border-line bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <ProductImage product={product} />
                    <h3 className="mt-6 text-xl font-medium leading-tight tracking-tight text-ink">{card.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-ink/60">{card.description}</p>
                    <span className="mt-6 inline-flex text-sm font-medium text-nordic transition group-hover:translate-x-1">Explore →</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        <section id="featured-floor-standing" className="scroll-mt-20 bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Featured products</p>
              <h2 className="headline mt-5">Featured Floor-Standing Water Dispensers</h2>
              <p className="body-copy mt-5 max-w-2xl">Selected floor-standing platforms for offices, commercial spaces and shared drinking water environments.</p>
            </div>
            <ProductGrid products={byIds(floorStandingIds)} />
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell grid items-center gap-10 rounded-[2.2rem] border border-line bg-white/70 p-6 shadow-soft md:p-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Featured solution</p>
              <h2 className="headline mt-5">Water Dispenser with Integrated Ice Maker</h2>
              <p className="body-copy mt-6">A floor-standing drinking water dispenser combining hot, normal and cold water dispensing with integrated ice-making capability.</p>
              <dl className="mt-8 grid gap-3 text-sm">
                {[['Cooling', featuredProduct.cooling], ['Heating', featuredProduct.heating], ['Product Size', featuredProduct.productSize]].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-6 border-t border-line pt-3">
                    <dt className="text-ink/45">{label}</dt>
                    <dd className="font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <a href={getWaterDispenserHref(featuredProduct)} className="button-primary mt-8">View Product</a>
            </div>
            <div className="lg:col-span-7">
              <ProductImage product={featuredProduct} />
            </div>
          </div>
        </section>

        <section id="countertop-water-dispensers" className="scroll-mt-20 py-14 md:py-20">
          <div className="shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Countertop range</p>
              <h2 className="headline mt-5">Countertop Water Dispensers</h2>
              <p className="body-copy mt-5 max-w-2xl">Compact hot and cold dispenser solutions for kitchens, offices, meeting rooms and space-conscious applications.</p>
            </div>
            <ProductGrid products={byIds(countertopIds)} />
          </div>
        </section>


        <section id="integrated-filtration-options" className="scroll-mt-20 py-14 md:py-20">
          <div className="shell grid gap-8 rounded-[2rem] border border-line bg-white/70 p-6 shadow-soft md:p-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">Configurable options</p>
              <h2 className="headline mt-5">Integrated Filtration Options</h2>
              <p className="body-copy mt-6 max-w-[720px]">
                Selected water dispenser platforms can support point-of-use configurations with RO or UF filtration options for different drinking water applications.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-stretch">
              <a href="/water-filtration" className="button-primary justify-center">Explore Water Filtration</a>
              <a href="/contact" className="button-secondary justify-center">Discuss a POU Project</a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="grid items-center gap-8 rounded-[2rem] border border-line bg-white/70 p-6 shadow-soft md:p-10 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <p className="eyebrow">OEM support</p>
                <h2 className="headline mt-5 max-w-[680px]">OEM &amp; Private Label Water Dispensers</h2>
                <p className="body-copy mt-6 max-w-[720px]">
                  QLORA supports selected water dispenser projects with product selection, configuration planning, branding and packaging coordination for different markets.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
                {['Product Selection', 'Configuration Options', 'Private Label', 'Packaging Support', 'Filtration Integration', 'Project Coordination'].map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-canvas/70 px-4 py-4 text-sm font-medium text-ink/70">{item}</div>
                ))}
              </div>
              <div className="lg:col-span-12">
                <a href="/oem-private-label" className="button-primary">Explore OEM Solutions</a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Start a conversation</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Looking for Water Dispensers for Your Market?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/65">
              Tell us your target application, required configuration and market needs. We can help evaluate suitable water dispenser solutions for your project.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Discuss Your Project</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


