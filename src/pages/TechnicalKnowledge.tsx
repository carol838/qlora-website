import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'

const technicalTopics = [
  {
    title: 'Filtration Basics',
    description: 'Understand common filtration technologies including sediment filtration, activated carbon, UF, RO, resin and specialty media.',
  },
  {
    title: 'Water Quality',
    description: 'Learn how sediment, chlorine, hardness, TDS, scale and other water conditions affect filtration decisions.',
  },
  {
    title: 'Application Guides',
    description: 'Explore filtration requirements for drinking water systems, coffee machines, refrigerators, RV systems and other applications.',
  },
  {
    title: 'Buyer Guides',
    description: 'Practical guidance on flow rate, capacity, micron ratings, OEM specifications and technical requirements.',
  },
]

const featuredGuides = [
  {
    slug: 'how-to-choose-the-right-water-filter',
    category: 'Water Quality',
    title: 'How to Choose the Right Water Filter for Different Water Problems',
    excerpt: 'Learn how sediment, chlorine, hardness, scale and other common water conditions affect filter selection.',
    href: '/technical-knowledge/how-to-choose-the-right-water-filter',
  },
]

export default function TechnicalKnowledge() {
  useEffect(() => {
    applySEO({
      title: 'Water Filtration Technical Knowledge | QLORA',
      description: 'Explore practical water filtration knowledge covering filtration technologies, water quality, product selection, applications and OEM technical requirements.',
      path: '/technical-knowledge',
      image: 'https://qloratech.com/images/about-lab-hero.webp',
      breadcrumbs: [{ name: 'Technical Knowledge', path: '/technical-knowledge' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Water Filtration Technical Knowledge',
        description: 'Practical water filtration knowledge for product selection, system design and OEM projects.',
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-20">
          <div className="shell grid min-h-[500px] items-center gap-12 py-12 lg:grid-cols-12 lg:py-16">
            <div className="lg:col-span-6">
              <p className="eyebrow">Resource center</p>
              <h1 className="display mt-6 max-w-xl">Technical Knowledge</h1>
              <p className="body-copy mt-7 max-w-xl">Practical water filtration knowledge for product selection, system design and OEM projects.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#technical-guides" className="button-primary">Explore Guides</a>
                <a href="/contact" className="button-secondary">Ask QLORA</a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[2rem] bg-[#f4f2ec] p-4 shadow-soft sm:p-6">
                <img
                  src="/images/about-lab-hero.webp"
                  alt="Water filtration products and testing equipment in a clean laboratory"
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

        <section className="py-14 md:py-20">
          <div className="shell">
            <p className="body-copy mx-auto max-w-4xl text-center">
              Understanding filtration technology is essential when selecting the right product for a specific water condition or application. QLORA Technical Knowledge provides practical guidance on filtration methods, water quality, product specifications and application requirements to help buyers make better-informed decisions.
            </p>
          </div>
        </section>

        <section className="bg-mist py-14 md:py-20">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Technical topics</p>
              <h2 className="headline mt-5">Explore Technical Topics</h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {technicalTopics.map((topic) => (
                <article key={topic.title} className="rounded-[1.5rem] border border-line bg-white/65 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                  <h3 className="text-xl font-medium tracking-tight">{topic.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{topic.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="technical-guides" className="scroll-mt-20 py-14 md:py-20">
          <div className="shell">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Practical guides</p>
                <h2 className="headline mt-5">Featured Technical Guides</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-ink/55">A growing library for buyers comparing filtration methods, product specifications and application needs.</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featuredGuides.map((guide) => (
                <a key={guide.slug} href={guide.href} className="group block rounded-[1.75rem] border border-line bg-white/70 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-nordic">{guide.category}</p>
                  <h3 className="mt-5 text-2xl font-medium leading-tight tracking-[-0.03em]">{guide.title}</h3>
                  <p className="mt-5 text-sm leading-6 text-ink/60">{guide.excerpt}</p>
                  <p className="mt-7 text-sm font-medium text-nordic transition group-hover:translate-x-1">Read Guide {'\u2192'}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8 md:pb-20">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-14 text-center text-white sm:px-10 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Technical support</p>
            <h2 className="headline mx-auto mt-5 max-w-4xl">Not Sure Which Filtration Solution Fits Your Application?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60">Tell us about your water conditions, application and technical requirements. We can help you evaluate suitable filtration options.</p>
            <div className="mt-9">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Discuss Your Project</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
