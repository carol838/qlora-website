import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'

export default function AboutPage() {
  useEffect(() => {
    applySEO({
      title: 'About QLORA | Water Filtration Solutions',
      description: 'Learn about QLORA and our mission to provide premium water filtration products and OEM support for global partners.',
      path: '/about',
      image: 'https://qloratech.com/images/about-lab-hero.webp',
      breadcrumbs: [{ name: 'About', path: '/about' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About QLORA',
        url: 'https://qloratech.com/about',
        description: 'QLORA provides water filtration solutions including RO systems, replacement filters and OEM manufacturing support for distributors and brands worldwide.',
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow">About QLORA</p>
              <h1 className="display mt-6 max-w-3xl">About QLORA</h1>
              <p className="body-copy mt-7 max-w-2xl">QLORA provides water filtration solutions including RO systems, replacement filters and OEM manufacturing support for distributors and brands worldwide.</p>
              <a href="/contact" className="button-primary mt-10">Contact QLORA</a>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white lg:col-span-6">
              <img src="/images/about-lab-hero.webp" alt="Water filtration products evaluated in a clean laboratory with microscope and glassware" className="aspect-[4/3] w-full object-cover" loading="eager" fetchPriority="high" decoding="async" width="1536" height="1024" />
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Global cooperation</p>
              <h2 className="headline mt-5">Built for Brands and Distributors</h2>
              <p className="body-copy mt-6">We support product selection, packaging direction and long-term cooperation for global water filtration markets.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="/oem-private-label" className="button-primary">Explore OEM Support</a>
                <a href="/contact" className="button-secondary">Contact Us</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-white lg:col-span-7">
              <img src="/images/about-global-shipping.webp" alt="Water filtration products prepared for container shipping and global distribution" className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" width="1400" height="933" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
