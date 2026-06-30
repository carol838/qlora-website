import { type FormEvent, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { WhatsAppIcon, whatsappUrl } from '../components/FloatingWhatsApp'
import { applySEO, seoImages } from '../lib/seo'

const reasons = [
  ['Product Expertise', 'Guidance across RO systems, replacement filters and application needs.'],
  ['OEM Support', 'Private label, packaging and product configuration support.'],
  ['Global Supply', 'Export-ready cooperation for distributors and water brands.'],
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    applySEO({
      title: 'Contact QLORA | Water Filtration & OEM Inquiries',
      description: 'Contact QLORA for RO systems, replacement filters, OEM projects and private label water filtration solutions.',
      path: '/contact',
      image: seoImages.home,
      breadcrumbs: [{ name: 'Contact', path: '/contact' }],
      schemas: [{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact QLORA',
        url: 'https://qloratech.com/contact',
        description: 'Contact QLORA for water filtration inquiry, OEM water filter supplier support and RO systems supplier questions.',
      }],
    })
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setSubmitting(true)
    setSubmitError(false)

    try {
      const formData = new FormData(form)
      formData.append('_subject', 'New QLORA inquiry from qloratech.com')
      formData.append('_template', 'table')

      const response = await fetch('https://formsubmit.co/ajax/sales@qloratech.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!response.ok) throw new Error('Form submission failed')
      setSubmitted(true)
      form.reset()
    } catch {
      setSubmitError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="shell text-center">
            <div className="mx-auto max-w-[320px] sm:max-w-4xl">
            <p className="eyebrow">Contact QLORA</p>
            <h1 className="mx-auto mt-6 text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">Let&apos;s Talk About Your Project</h1>
            <p className="body-copy mx-auto mt-7 sm:max-w-2xl">Whether you need an RO systems supplier, replacement filters or an OEM water filter supplier, we&apos;re ready to help.</p>
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-16">
          <div className="shell grid gap-5 md:grid-cols-3">
            <a href="mailto:sales@qloratech.com" className="rounded-2xl border border-line bg-white/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-nordic">Email</p>
              <p className="mt-4 text-lg font-medium text-ink">sales@qloratech.com</p>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-line bg-white/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-nordic">WhatsApp</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span className="text-lg font-medium text-ink">Chat on WhatsApp</span>
              </div>
            </a>

            <a href="#inquiry-form" className="rounded-2xl border border-line bg-white/60 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-nordic">Response Time</p>
              <p className="mt-4 text-lg font-medium text-ink">Usually within 24 hours</p>
            </a>
          </div>
        </section>

        <section id="inquiry-form" className="scroll-mt-20 section-space bg-mist">
          <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">Inquiry form</p>
              <h2 className="headline mt-5">Send Your Inquiry</h2>
              <p className="body-copy mt-6">Share a water filtration inquiry and QLORA will help route your request.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl bg-white/60 p-6 sm:p-8 lg:col-span-8">
              {submitted && (
                <div role="status" aria-live="polite" className="rounded-xl border border-nordic/20 bg-nordic/10 px-4 py-3 text-sm font-medium text-ink">
                  Thank you. Your inquiry has been received. You can also contact us directly by email or WhatsApp.
                </div>
              )}
              {submitError && (
                <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-ink">
                  The form could not be submitted right now. Please email sales@qloratech.com or chat with us on WhatsApp.
                </div>
              )}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-ink/75">Name
                  <input name="Name" required autoComplete="name" className="mt-2 min-h-12 w-full rounded-xl border border-line bg-canvas px-4 outline-none transition focus:border-nordic" />
                </label>
                <label className="text-sm font-medium text-ink/75">Company
                  <input name="Company" required autoComplete="organization" className="mt-2 min-h-12 w-full rounded-xl border border-line bg-canvas px-4 outline-none transition focus:border-nordic" />
                </label>
                <label className="text-sm font-medium text-ink/75">Country
                  <input name="Country" required autoComplete="country-name" className="mt-2 min-h-12 w-full rounded-xl border border-line bg-canvas px-4 outline-none transition focus:border-nordic" />
                </label>
                <label className="text-sm font-medium text-ink/75">Email
                  <input name="Email" type="email" required autoComplete="email" className="mt-2 min-h-12 w-full rounded-xl border border-line bg-canvas px-4 outline-none transition focus:border-nordic" />
                </label>
              </div>

              <label className="text-sm font-medium text-ink/75">Product Interest
                <select name="Product Interest" required className="mt-2 min-h-12 w-full rounded-xl border border-line bg-canvas px-4 outline-none transition focus:border-nordic">
                  <option>RO Systems</option>
                  <option>Replacement Filters</option>
                  <option>Refrigerator Filters</option>
                  <option>Coffee Machine Filters</option>
                  <option>Shower Filters</option>
                  <option>OEM & Private Label</option>
                </select>
              </label>

              <label className="text-sm font-medium text-ink/75">Message
                <textarea name="Message" required rows={6} className="mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 outline-none transition focus:border-nordic" />
              </label>

              <button type="submit" disabled={submitting} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit">
                {submitting ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </section>

        <section className="section-space">
          <div className="shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Why contact QLORA</p>
              <h2 className="headline mt-5">Clear Support for Your Next Step</h2>
            </div>
            <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line md:grid-cols-3">
              {reasons.map(([title, copy]) => (
                <article key={title} className="min-h-56 bg-canvas p-8 sm:p-10">
                  <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-16 text-center text-white sm:px-10 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Final step</p>
            <h2 className="headline mx-auto mt-5 max-w-3xl">Ready to Discuss Your Project?</h2>
            <div className="mt-10">
              <a href="#inquiry-form" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Send Inquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
