import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { applySEO } from '../lib/seo'

export default function NotFoundPage() {
  useEffect(() => {
    applySEO({
      title: 'Page Not Found | QLORA',
      description: 'The requested QLORA page could not be found.',
      path: '/404',
      robots: 'noindex, nofollow',
    })
  }, [])

  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] items-center pt-20">
        <section className="shell w-full py-20 text-center md:py-28">
          <p className="eyebrow">404 error</p>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">Page Not Found</h1>
          <p className="body-copy mx-auto mt-7 max-w-xl">The page you requested may have moved or is no longer available.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/" className="button-primary">Return Home</a>
            <a href="/contact" className="button-secondary">Contact QLORA</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
