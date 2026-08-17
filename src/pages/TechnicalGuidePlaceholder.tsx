import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'

export default function TechnicalGuidePlaceholder() {
  useEffect(() => {
    applySEO({
      title: 'How to Choose the Right Water Filter | QLORA',
      description: 'A practical QLORA technical guide placeholder for selecting water filters by water condition and application.',
      path: '/technical-knowledge/how-to-choose-the-right-water-filter',
      breadcrumbs: [
        { name: 'Technical Knowledge', path: '/technical-knowledge' },
        { name: 'How to Choose the Right Water Filter', path: '/technical-knowledge/how-to-choose-the-right-water-filter' },
      ],
    })
  }, [])

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="shell py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Water Quality</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">How to Choose the Right Water Filter for Different Water Problems</h1>
            <p className="body-copy mx-auto mt-7 max-w-2xl">This technical guide page is reserved for the upcoming full article. For product selection support, contact QLORA with your application and water condition requirements.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/technical-knowledge" className="button-secondary">Back to Technical Knowledge</a>
              <a href="/contact" className="button-primary">Discuss Your Project</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
