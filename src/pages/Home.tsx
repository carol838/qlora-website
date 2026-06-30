import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ValueStrip from '../components/ValueStrip'
import ROSystem from '../components/ROSystem'
import LifestyleSolutions from '../components/LifestyleSolutions'
import OEMSolutions from '../components/OEMSolutions'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { applySEO, seoImages } from '../lib/seo'

export default function Home() {
  useEffect(() => {
    applySEO({
      title: 'QLORA | Better Water for Everyday Life',
      description: 'Premium water filtration solutions including RO systems, replacement filters and OEM manufacturing support for global brands and distributors.',
      path: '/',
      image: seoImages.home,
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'QLORA water filtration solutions',
        itemListElement: ['RO Water Systems', 'Replacement Water Filters', 'Under Sink Filtration', 'OEM Manufacturing', 'Private Label Products'].map((name, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name,
        })),
      }],
    })
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueStrip />
        <ROSystem />
        <LifestyleSolutions />
        <OEMSolutions />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
