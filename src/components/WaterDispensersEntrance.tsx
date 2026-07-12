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
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-[#f7f6f1] to-[#ebe7dd] p-4">
              <img
                src="/images/water-dispensers/water-dispensers-hero.png"
                alt="QLORA water dispenser product lineup"
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
