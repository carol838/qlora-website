import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'

type WaterDispenserProduct = {
  title: string
  description: string
  tags: string[]
  inquiryHref: string
  futureHref: string
  image: string
  imageAlt: string
  imagePosition: string
}

const waterDispenserHero = '/images/water-dispensers/water-dispensers-hero.png'

const products: WaterDispenserProduct[] = [
  {
    title: 'Floor Standing Water Dispenser',
    description: 'A full-size hot and cold water dispenser designed for offices, schools, hotels and shared commercial spaces.',
    tags: ['Floor Standing', 'Hot & Cold', 'Office & Commercial'],
    inquiryHref: '/contact?product=floor-standing-water-dispenser',
    futureHref: '/products/floor-standing-water-dispenser',
    image: '/images/water-dispensers/floor-standing-water-dispenser.png',
    imageAlt: 'Floor standing hot and cold water dispenser for office and commercial use',
    imagePosition: 'center 42%',
  },
  {
    title: 'Water Dispenser with Ice Maker',
    description: 'A multifunctional floor-standing model combining drinking water dispensing with integrated ice-making capability.',
    tags: ['Built-in Ice Maker', 'Hot & Cold Water', 'Commercial Use'],
    inquiryHref: '/contact?product=water-dispenser-with-ice-maker',
    futureHref: '/products/water-dispenser-with-ice-maker',
    image: '/images/water-dispensers/water-dispenser-with-ice-maker.png',
    imageAlt: 'Floor standing water dispenser with built-in ice maker',
    imagePosition: 'center 40%',
  },
  {
    title: 'Desktop Water Dispenser',
    description: 'A compact countertop water dispenser for homes, apartments, meeting rooms and small offices.',
    tags: ['Compact Design', 'Countertop Use', 'Home & Office'],
    inquiryHref: '/contact?product=desktop-water-dispenser',
    futureHref: '/products/desktop-water-dispenser',
    image: '/images/water-dispensers/desktop-water-dispenser.png',
    imageAlt: 'Compact desktop water dispenser for home and office use',
    imagePosition: 'center center',
  },
]

const applications = ['Offices', 'Hotels', 'Schools', 'Hospitals', 'Factories', 'Residential Spaces']

function ProductImage({ product }: { product: WaterDispenserProduct }) {
  return (
    <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-[#f7f6f1] to-[#ebe7dd] shadow-sm">
      <img
        src={product.image}
        alt={product.imageAlt}
        className="h-full w-full object-cover"
        style={{ objectPosition: product.imagePosition }}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function WaterDispensersPage() {
  useEffect(() => {
    applySEO({
      title: 'Water Dispenser Manufacturer & OEM Solutions | QLORA',
      description: 'Explore QLORA floor-standing, ice-making and desktop water dispensers for residential, office and commercial applications, with OEM and private label support.',
      path: '/water-dispensers',
      image: `https://qloratech.com${waterDispenserHero}`,
      breadcrumbs: [{ name: 'Water Dispensers', path: '/water-dispensers' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'QLORA water dispenser solutions',
        itemListElement: products.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: product.title,
        })),
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-20">
          <div className="shell grid min-h-[620px] items-center gap-10 py-14 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
            <div className="lg:col-span-6">
              <p className="eyebrow">Water dispenser solutions</p>
              <h1 className="mt-6 max-w-[650px] text-[clamp(2.5rem,4vw,3.05rem)] font-semibold leading-[1.04] tracking-[-0.065em] text-ink">
                Water Dispensers for<br />
                Home &amp; Commercial Use
              </h1>
              <p className="body-copy mt-7 max-w-[560px] leading-8">
                Explore floor-standing, ice-making and desktop water dispenser solutions for residential, office and commercial applications.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/contact" className="button-primary">Request a Quote</a>
                <a href="/oem-private-label" className="button-secondary">OEM Solutions</a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[2rem] bg-white/60 p-2 shadow-soft sm:p-3">
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-[#f7f6f1] to-[#ebe7dd] p-2 sm:p-3">
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

        <section className="py-16 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Product range</p>
              <h2 className="headline mt-5">Available Water Dispenser Solutions</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">
                Three practical product formats covering everyday drinking water, office use and enhanced ice-making applications.
              </p>
            </div>

            <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article key={product.title} className="flex h-full flex-col rounded-[2rem] bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <ProductImage product={product} />
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-7">
                    <h3 className="min-h-[3.45rem] text-[clamp(1.35rem,2vw,1.6rem)] font-medium leading-[1.15] tracking-tight">{product.title}</h3>
                    <p className="mt-4 min-h-[4.5rem] text-sm leading-[1.6] text-ink/60">{product.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-line bg-canvas/70 px-3 py-1.5 text-xs font-medium text-ink/55">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Future detail links can connect product.futureHref when product pages are created. */}
                    <a href={product.inquiryHref} className="mt-auto inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-white transition hover:bg-nordic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nordic">
                      Request Details
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-[4.5rem] lg:py-20">
          <div className="shell">
            <div className="mx-auto max-w-[720px] text-center">
              <p className="eyebrow">Applications</p>
              <h2 className="headline mt-5">Built for Everyday Applications</h2>
              <p className="body-copy mx-auto mt-5 max-w-[680px]">
                Flexible solutions for offices, hospitality, education, healthcare, factories and residential spaces.
              </p>
            </div>
            <div className="mt-9 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {applications.map((application) => (
                <article key={application} className="flex min-h-[92px] items-center justify-center rounded-2xl bg-white/70 px-4 py-5 text-center shadow-sm">
                  <h3 className="text-sm font-medium text-ink/75">{application}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-[4.5rem] lg:py-20">
          <div className="shell">
            <div className="grid items-center gap-8 rounded-[2rem] border border-line bg-white/60 p-6 shadow-soft md:p-10 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-8">
                <p className="eyebrow">OEM support</p>
                <h2 className="headline mt-5 max-w-[680px]">OEM &amp; Private Label<br className="hidden sm:block" /> Water Dispensers</h2>
                <p className="body-copy mt-6 max-w-[720px]">
                  QLORA supports product configuration, branding, packaging and market-oriented water dispenser solutions for distributors and importers.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 lg:col-span-4 lg:items-stretch">
                <a href="/oem-private-label" className="button-primary w-full justify-center whitespace-nowrap">Start an OEM Project</a>
                <a href="/contact" className="button-secondary w-full justify-center whitespace-nowrap">Contact Sales</a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Start a conversation</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Discuss Your Water Dispenser Project</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/65">
              Tell us your target market, product format and branding requirements.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request a Quote</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
