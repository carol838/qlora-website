const reasons = [
  ['01', 'Premium Focus', 'Water solutions selected for modern homes and global brands.'],
  ['02', 'Clear Positioning', 'Simple product routes without technical overload.'],
  ['03', 'OEM Ready', 'Private label and packaging support for growing partners.'],
]

export default function WhyQLORA() {
  return (
    <section className="section-space border-t border-line">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why QLORA</p>
          <h2 className="headline mx-auto mt-5">Premium Water Solutions, Made Simple</h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-line md:grid-cols-3">
          {reasons.map(([number, title, copy]) => (
            <article key={title} className="min-h-56 bg-canvas p-8 sm:p-10">
              <span className="text-xs font-semibold tracking-[0.24em] text-nordic" aria-hidden="true">{number}</span>
              <h3 className="mt-8 text-xl font-medium tracking-tight">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-ink/60">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
