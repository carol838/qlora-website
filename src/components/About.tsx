export default function About() {
  return (
    <section id="about" className="section-space scroll-mt-20 border-y border-line">
      <div className="shell text-center">
        <p className="eyebrow">About QLORA</p>
        <h2 className="headline mx-auto mt-5 max-w-3xl">We design water experiences,<br className="hidden sm:block" /> not just filters.</h2>
        <p className="body-copy mx-auto mt-7 max-w-2xl">QLORA provides water filtration solutions including RO systems, replacement filters and OEM manufacturing support for distributors and brands worldwide.</p>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-ink/50">Serving distributors, importers and home water brands across global markets.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/about" className="button-secondary">Learn About QLORA</a>
          <a href="/contact" className="button-primary">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
