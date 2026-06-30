const cards = [
  { title: 'Under Sink Filtration', copy: 'Clean drinking water for everyday kitchens.', cta: 'Learn More', position: 'left' },
  { title: 'Coffee & Beverage', copy: 'Better water for better flavor.', cta: 'Learn More', position: 'center' },
  { title: 'Shower & Wellness', copy: 'Daily water care for skin and hair.', cta: 'Learn More', position: 'right' },
]

export default function LifestyleSolutions() {
  return (
    <section id="water-filtration" className="section-space scroll-mt-20">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Water filtration</p>
          <h2 className="headline mt-5">Filtration for Everyday Water Moments</h2>
          <p className="body-copy mt-5">Simple routes for kitchens, coffee, showers and daily home water use.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map(card => (
            <article key={card.title} className="group relative min-h-[500px] overflow-hidden rounded-xl bg-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft">
              <div className="absolute inset-0 bg-[url('/images/lifestyle-triptych.png')] bg-cover transition duration-700 group-hover:scale-105" style={{ backgroundPosition: card.position }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <h3 className="text-2xl font-medium tracking-tight">{card.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">{card.copy}</p>
                <a href="/water-filtration" className="mt-7 inline-block border-b border-white/60 pb-1 text-sm font-medium">{card.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
