const values = [
  ['○', 'Better Water', 'Cleaner water, made beautifully simple.'],
  ['◇', 'Reliable Performance', 'Designed for consistent everyday use.'],
  ['⌁', 'Healthier Living', 'Thoughtful comfort for your whole home.'],
  ['◎', 'Global Standards', 'Quality considered at every stage.'],
]

export default function ValueStrip() {
  return (
    <section className="border-y border-line">
      <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
        {values.map(([icon, title, copy], i) => (
          <div key={title} className={`py-8 sm:px-7 lg:py-10 ${i > 0 ? 'border-t border-line sm:border-t-0 sm:border-l' : ''} ${i === 2 ? 'sm:border-l-0 lg:border-l' : ''}`}>
            <span className="text-xl text-nordic">{icon}</span>
            <h3 className="mt-4 text-sm font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-ink/55">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
