export default function ShowerSolutionsFeature() {
  return (
    <section className="section-space bg-mist">
      <div className="shell grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center overflow-hidden rounded-[2rem] bg-white p-8 shadow-soft md:p-10">
            <img
              src="/images/shower-solutions/20-stage-shower-filter-overview.webp"
              alt="20-stage shower filter product cross-section with surrounding feature icons"
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
              width="679"
              height="679"
            />
          </div>
        </div>
        <div className="lg:col-span-6">
          <p className="eyebrow">Shower Filtration</p>
          <h2 className="headline mt-5 max-w-xl">20-Stage Shower Filtration Solutions</h2>
          <p className="body-copy mt-6 max-w-xl">Explore inline shower filters with flexible filtration media configurations, replacement options, and OEM/private-label supply support.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/products/inline-shower-filter" className="button-primary">Explore Shower Filters</a>
          </div>
        </div>
      </div>
    </section>
  )
}


