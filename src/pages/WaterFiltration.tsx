import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'

const imageBase = '/images/water-filtration'

const filterProducts = [
  {
    title: 'PP Sediment Filter',
    description: 'Removes sand, rust and suspended particles before water reaches later filtration stages.',
    function: 'Particle reduction and system protection',
    application: 'First-stage residential and light commercial filtration',
    image: `${imageBase}/pp-filter.webp`,
    alt: 'PP sediment replacement water filter cartridge',
  },
  {
    title: 'Carbon Filter',
    description: 'Reduces chlorine, odors and unwanted taste to improve everyday drinking water quality.',
    function: 'Taste, odor and chlorine reduction',
    application: 'Under sink filters, drinking water systems and beverage preparation',
    image: `${imageBase}/carbon-filter.webp`,
    alt: 'Carbon replacement water filter with activated carbon media',
  },
  {
    title: 'UF Filter',
    description: 'Provides fine filtration while retaining beneficial minerals for clean daily water use.',
    function: 'Fine filtration without wastewater',
    application: 'Residential drinking water and compact filtration systems',
    image: `${imageBase}/uf-filter.webp`,
    alt: 'UF replacement filter cartridge for drinking water filtration',
  },
  {
    title: 'Mineral Filter',
    description: 'Adds beneficial minerals and improves the overall drinking experience.',
    function: 'Mineral enhancement and taste refinement',
    application: 'Drinking water systems and post-filtration taste improvement',
    image: `${imageBase}/mineral-filter.webp`,
    alt: 'Mineral replacement water filter cartridge',
  },
  {
    title: 'Alkaline Filter',
    description: 'Helps increase pH and improve water taste for balanced drinking water lines.',
    function: 'pH support and taste improvement',
    application: 'Alkaline drinking water systems and private label filter programs',
    image: `${imageBase}/alkaline-filter.webp`,
    alt: 'Alkaline replacement water filter cartridge',
  },
]

const replacementBenefits = [
  ['Better Taste', 'Fresh filtration supports cleaner and better-tasting water.'],
  ['Longer System Life', 'Regular replacement helps protect filtration equipment.'],
  ['Consistent Performance', 'Maintain stable filtration efficiency over time.'],
]

const applicationShowcase = [
  {
    title: 'Coffee & Beverage',
    description: 'Replacement filters designed to support better flavor and reliable beverage equipment performance.',
    image: `${imageBase}/coffee-machine-filter.webp`,
    alt: 'Coffee machine replacement water filter product family',
    href: '/products/coffee-machine-filter',
  },
  {
    title: 'Shower & Wellness',
    description: 'Shower filtration products for everyday comfort, cleaner water feel and wellness-focused routines.',
    image: `${imageBase}/shower-filter.webp`,
    alt: 'Handheld shower water filter with transparent cartridge',
    href: '/products/shower-filter',
  },
  {
    title: 'Refrigerator Filter',
    description: 'Compatible refrigerator filter solutions for fresh water, ice makers and home appliance programs.',
    image: `${imageBase}/refrigerator-filter.webp`,
    alt: 'Refrigerator replacement water filter product lineup',
    href: '/products/refrigerator-water-filter',
  },
]

const faqs = [
  ['What types of replacement filters do you offer?', 'QLORA supports PP, carbon, UF, mineral, alkaline and appliance-focused replacement water filters.'],
  ['Can you support OEM or private label filter products?', 'Yes. We support OEM water filters, private label branding, packaging and configurable filter solutions for global partners.'],
  ['Do you offer refrigerator and coffee machine filters?', 'Yes. Compatible refrigerator filters and coffee machine filters are available for selected applications and systems.'],
  ['What information is needed for a filter inquiry?', 'Share the application, dimensions, connection type, target quantity, compatibility needs and any branding or packaging requirements.'],
]

export default function WaterFiltration() {
  useEffect(() => {
    applySEO({
      title: 'Replacement Water Filters & Filtration Solutions | QLORA',
      description: 'Discover replacement water filters including under sink, refrigerator, coffee machine and shower filtration solutions.',
      path: '/water-filtration',
      image: 'https://qloratech.com/images/water-filtration/hero.webp',
      breadcrumbs: [{ name: 'Water Filtration', path: '/water-filtration' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Replacement water filter solutions',
        itemListElement: filterProducts.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.title,
        })),
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
              <p className="eyebrow">Everyday filtration, refined</p>
              <h1 className="display mt-6 max-w-xl">Water Filtration Solutions</h1>
              <p className="body-copy mt-7 max-w-lg">Clean, reliable replacement filters for kitchens, coffee machines, showers and everyday home water systems.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#replacement-filter-solutions" className="button-primary">Explore Filter Solutions</a>
                <a href="/oem-private-label" className="button-secondary">Request OEM Quote</a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[2rem] bg-[#f4f2ec] p-4 shadow-soft sm:p-6">
                <img
                  src={`${imageBase}/hero.webp`}
                  alt="Replacement water filter family displayed in a warm Nordic kitchen"
                  className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="1200"
                  height="900"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Everyday applications</p>
              <h2 className="headline mt-5">Filtration for Home Appliances</h2>
              <p className="body-copy mx-auto mt-6 max-w-2xl">Focused product lines for coffee, showers and refrigerator water applications.</p>
            </div>

            <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-3">
              {applicationShowcase.map(item => (
                <a href={item.href} key={item.title} className="block cursor-pointer rounded-[1.75rem] bg-white/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="rounded-[1.25rem] bg-[#f7f6f1] p-5">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="aspect-[4/3] w-full object-contain"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="600"
                    />
                  </div>
                  <div className="px-2 pb-2 pt-7">
                    <h3 className="text-2xl font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-ink/60">{item.description}</p>
                    <p className="mt-5 text-sm font-medium text-nordic">Learn More →</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="replacement-filter-solutions" className="scroll-mt-20 bg-mist py-12 md:py-16 lg:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="headline">Replacement Filter Solutions</h2>
              <p className="body-copy mt-6">Explore filtration solutions designed for cleaner, safer and better-tasting water.</p>
            </div>

            <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
              {filterProducts.map((product, index) => (
                <article key={product.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} lg:col-span-6`}>
                    <div className="rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
                      <img src={product.image} alt={product.alt} className="mx-auto aspect-[4/3] w-full object-contain" loading="lazy" decoding="async" width="900" height="675" />
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} lg:col-span-6`}>
                    <p className="eyebrow">Replacement filter</p>
                    <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">{product.title}</h3>
                    <p className="body-copy mt-6 max-w-xl">{product.description}</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/70 p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nordic">Function</p>
                        <p className="mt-3 text-sm leading-6 text-ink/65">{product.function}</p>
                      </div>
                      <div className="rounded-2xl bg-white/70 p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nordic">Application</p>
                        <p className="mt-3 text-sm leading-6 text-ink/65">{product.application}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#filter-contact" className="button-primary">Discuss Filter Requirements</a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Replacement rhythm</p>
              <h2 className="headline mt-5">Why Replace Filters Regularly</h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:mt-12 md:grid-cols-3">
              {replacementBenefits.map(([title, copy]) => (
                <article key={title} className="text-center">
                  <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-ink/60">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="filter-oem" className="scroll-mt-20 bg-[#f1f0eb] py-12 md:py-16 lg:py-20">
          <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">OEM &amp; private label</p>
              <h2 className="headline mt-5">Build Your Own Filter Product Line</h2>
              <p className="body-copy mt-6">Private label, packaging and product configuration support for distributors and water filtration brands.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="/oem-private-label" className="button-primary">Start OEM Project</a>
                <a href="/contact" className="button-secondary">Contact Us</a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
                <img
                  src={`${imageBase}/private-label.webp`}
                  alt="Private label replacement water filter and custom packaging box"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="1600"
                  height="1000"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[900px] px-5 sm:px-8">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em]">Water Filtration FAQ</h2>
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

        <section id="filter-contact" className="scroll-mt-20 px-5 pb-12 md:px-8 md:pb-16 lg:pb-20">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Start a conversation</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Find the Right Filter Solution</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60">Tell us your application, product type or branding needs.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Request Quote</a>
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}


