const standards = [['↻', 'Reliable Supply'], ['◇', 'Quality Focused'], ['◎', 'Global Ready'], ['⌁', 'OEM Friendly']]

export default function Standards() {
  return (
    <section className="section-space">
      <div className="shell">
        <p className="eyebrow text-center">Our standards</p>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line lg:grid-cols-4">
          {standards.map(([icon, title]) => (
            <div key={title} className="flex min-h-48 flex-col items-center justify-center bg-canvas p-6 text-center">
              <span className="text-2xl text-nordic">{icon}</span><h3 className="mt-5 text-sm font-medium">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
