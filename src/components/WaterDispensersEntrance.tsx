export default function WaterDispensersEntrance() {
  return (
    <section className="py-14 md:py-20">
      <div className="shell">
        <a href="/water-dispensers" className="group grid items-center gap-8 rounded-[2rem] border border-line bg-white/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft md:p-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">New category</p>
            <h2 className="headline mt-5">Water Dispenser Solutions</h2>
            <p className="body-copy mt-5 max-w-2xl">
              Floor-standing, ice-making and desktop water dispenser formats for residential, office and commercial applications.
            </p>
            <span className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-white transition group-hover:bg-nordic">
              Explore Water Dispensers
            </span>
          </div>
          <div className="lg:col-span-5">
            <div className="grid aspect-[4/3] grid-cols-3 items-end gap-3 rounded-[1.5rem] bg-gradient-to-br from-white via-[#f7f6f1] to-[#ebe7dd] p-5">
              {[0, 1, 2].map((item) => (
                <div key={item} className={`rounded-2xl border border-accent/20 bg-white/80 shadow-sm ${item === 2 ? 'h-[54%]' : 'h-[82%]'}`}>
                  <div className="mx-auto mt-5 h-2 w-8 rounded-full bg-accent/25" />
                  <div className="mx-auto mt-4 h-6 w-6 rounded-full border border-accent/25" />
                </div>
              ))}
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
