import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO, seoImages } from '../lib/seo'

type WaterDispenserProduct = {
  title: string
  description: string
  tags: string[]
  inquiryHref: string
  futureHref: string
}

const products: WaterDispenserProduct[] = [
  {
    title: 'Floor Standing Water Dispenser',
    description: 'A full-size hot and cold water dispenser designed for offices, schools, hotels and shared commercial spaces.',
    tags: ['Floor Standing', 'Hot & Cold', 'Office & Commercial'],
    inquiryHref: '/contact?product=floor-standing-water-dispenser',
    futureHref: '/products/floor-standing-water-dispenser',
  },
  {
    title: 'Water Dispenser with Ice Maker',
    description: 'A multifunctional floor-standing model combining drinking water dispensing with integrated ice-making capability.',
    tags: ['Built-in Ice Maker', 'Hot & Cold Water', 'Commercial Use'],
    inquiryHref: '/contact?product=water-dispenser-with-ice-maker',
    futureHref: '/products/water-dispenser-with-ice-maker',
  },
  {
    title: 'Desktop Water Dispenser',
    description: 'A compact countertop water dispenser for homes, apartments, meeting rooms and small offices.',
    tags: ['Compact Design', 'Countertop Use', 'Home & Office'],
    inquiryHref: '/contact?product=desktop-water-dispenser',
    futureHref: '/products/desktop-water-dispenser',
  },
]

const applications = ['Offices', 'Hotels', 'Schools', 'Hospitals', 'Factories', 'Residential Spaces']

function ProductVisual({ index }: { index: number }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-white via-[#f7f6f1] to-[#ebe7dd] p-8 shadow-sm">
      <div className="relative flex h-full w-full items-end justify-center">
        <div className={`rounded-[2rem] border border-accent/25 bg-white/75 shadow-soft ${index === 2 ? 'h-[58%] w-[58%]' : 'h-[82%] w-[42%]'}`}>
          <div className="mx-auto mt-[18%] h-3 w-12 rounded-full bg-accent/25" />
          <div className="mx-auto mt-6 h-10 w-10 rounded-full border border-accent/30" />
          <div className="mx-auto mt-5 h-2 w-16 rounded-full bg-line" />
        </div>
        {index === 1 && (
          <div className="absolute bottom-6 right-[18%] grid h-14 w-14 place-items-center rounded-2xl border border-accent/20 bg-white/85 text-xs font-semibold text-accent shadow-sm">
            ICE
          </div>
        )}
      </div>
    </div>
  )
}

export default function WaterDispensersPage() {
  useEffect(() => {
    applySEO({
      title: 'Water Dispenser Manufacturer & OEM Solutions | QLORA',
      description: 'Explore QLORA floor-standing, ice-making and desktop water dispensers for residential, office and commercial applications, with OEM and private label support.',
      path: '/water-dispensers',
      image: seoImages.home,
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
          <div className="shell grid min-h-[620px] items-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
            <div className="lg:col-span-6">
              <p className="eyebrow">Water dispenser solutions</p>
              <h1 className="display mt-6 max-w-2xl">Water Dispensers for Home and Commercial Use</h1>
              <p className="body-copy mt-7 max-w-xl">
                Explore floor-standing, ice-making and desktop water dispenser solutions for residential, office and commercial applications.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="/contact" className="button-primary">Request a Quote</a>
                <a href="/oem-private-label" className="button-secondary">OEM Solutions</a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[2rem] bg-white/60 p-5 shadow-soft">
                <div className="grid aspect-[4/3] grid-cols-3 items-end gap-4 rounded-[1.5rem] bg-gradient-to-br from-white via-[#f7f6f1] to-[#ebe7dd] p-6">
                  {[0, 1, 2].map((item) => (
                    <div key={item} className="flex h-full items-end justify-center">
                      <div className={`rounded-[1.25rem] border border-accent/20 bg-white/80 shadow-sm ${item === 2 ? 'h-[54%] w-[86%]' : 'h-[82%] w-[72%]'}`}>
                        <div className="mx-auto mt-6 h-2 w-10 rounded-full bg-accent/25" />
                        <div className="mx-auto mt-5 h-8 w-8 rounded-full border border-accent/25" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Product range</p>
              <h2 className="headline mt-5">Available Water Dispenser Solutions</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">
                Three practical product formats covering everyday drinking water, office use and enhanced ice-making applications.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <article key={product.title} className="rounded-[2rem] bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <ProductVisual index={index} />
                  <div className="px-2 pb-2 pt-7">
                    <h3 className="text-2xl font-medium tracking-tight">{product.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-ink/60">{product.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-line bg-canvas/70 px-3 py-1.5 text-xs font-medium text-ink/55">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Future detail links can connect product.futureHref when product pages are created. */}
                    <a href={product.inquiryHref} className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-white transition hover:bg-nordic">
                      Request Details
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="headline">Designed for Everyday Drinking Water Applications</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {applications.map((application) => (
                <article key={application} className="rounded-2xl bg-white/70 px-5 py-6 text-center shadow-sm">
                  <h3 className="text-sm font-medium text-ink/75">{application}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="shell">
            <div className="grid items-center gap-10 rounded-[2rem] border border-line bg-white/60 p-6 shadow-soft md:p-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="eyebrow">OEM support</p>
                <h2 className="headline mt-5">OEM &amp; Private Label Water Dispensers</h2>
                <p className="body-copy mt-6 max-w-3xl">
                  QLORA supports product configuration, branding, packaging and market-oriented water dispenser solutions for distributors and importers.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4">
                <a href="/oem-private-label" className="button-primary">Start an OEM Project</a>
                <a href="/contact" className="button-secondary">Contact Sales</a>
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
