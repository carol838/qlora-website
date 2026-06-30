const features = [
  ['Private Label', 'Build a branded water filtration line.'],
  ['Custom Packaging', 'Support for retail and e-commerce channels.'],
  ['Export-Ready Supply', 'Flexible cooperation for global markets.'],
]

export default function OEMSolutions() {
  return (
    <section id="oem-solutions" className="section-space scroll-mt-20 bg-[#f1f0eb]">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">OEM solutions</p>
            <h2 className="headline mt-5">Private Label Water Filtration Products</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="body-copy">Branding, packaging and product support for distributors, importers and water filtration brands.</p>
            <a href="/oem-private-label" className="button-primary mt-8">Start an OEM Project</a>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line md:grid-cols-3">
          {features.map(([title, copy]) => (
            <article key={title} className="min-h-52 bg-canvas p-8 sm:p-10">
              <h3 className="text-xl font-medium tracking-tight">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-ink/60">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
