export default function ShowerSolutionsFeature() {
  return (
    <section className="section-space bg-mist">
      <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-[2rem] bg-white p-6 shadow-soft">
            <img
              src="/images/shower-solutions/systems/QS-SYS-001.webp"
              alt="Modern shower system product for residential applications"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-contain"
              loading="lazy"
              decoding="async"
              width="1200"
              height="900"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="eyebrow">Shower Solutions</p>
          <h2 className="headline mt-5 max-w-xl">Complete Shower Solutions for Modern Water Use</h2>
          <p className="body-copy mt-6 max-w-xl">From shower filtration to complete shower systems, heads, hand showers and faucets, QLORA offers selected solutions for residential and OEM applications.</p>
          <p className="mt-6 text-sm font-medium leading-7 text-ink/55">Shower Filters · Shower Systems · Shower Heads · Hand Showers · Shower Faucets</p>
          <div className="mt-9">
            <a href="/shower-solutions" className="button-primary">Explore Shower Solutions</a>
          </div>
        </div>
      </div>
    </section>
  )
}
