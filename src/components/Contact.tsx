export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-ink px-6 py-16 text-white sm:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">Start a conversation</p>
          <h2 className="headline mx-auto mt-5 max-w-3xl">Let&apos;s Build Better Water Together</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60">Tell us what you need: RO water systems, replacement filters, OEM water filtration products or private label support for your next market.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-sm text-white/70 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-medium text-white">For home water</h3>
            <p className="mt-2 leading-6">Find the right filtration route for kitchens, coffee and wellness.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-medium text-white">For distributors</h3>
            <p className="mt-2 leading-6">Discuss product categories, supply needs and market fit.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-medium text-white">For OEM brands</h3>
            <p className="mt-2 leading-6">Start a private label or custom packaging conversation.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-ink transition hover:bg-mist">Get in Touch</a>
          <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">Request a Quote</a>
          <a href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium transition hover:bg-white/10">Inquiry Form</a>
        </div>
      </div>
    </section>
  )
}
