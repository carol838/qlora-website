import CatalogDownloadLink from './CatalogDownloadLink'

const filtrationCategories = [
  {
    title: 'I-Shape Inline Filters',
    description: 'Korean-style I-shape cartridges for residential water purifier and replacement filter programs.',
    image: '/images/products/i-shape-inline-filter/i-shape-inline-filter-set.png',
    alt: 'Set of I-shape inline water filter cartridges for residential water purifiers',
    href: '/products/i-shape-inline-filter',
    width: 1254,
    height: 1254,
  },
  {
    title: 'U-Shape Inline Filters',
    description: 'Korean-style U-shape cartridges with flexible media and connection options.',
    image: '/images/products/korean-style-inline-filter/u-shape-inline-filter-set.png',
    alt: 'Set of Korean-style U-shape inline water filter cartridges',
    href: '/products/korean-style-inline-filter',
    width: 1398,
    height: 1125,
  },
  {
    title: 'Replacement Filter Cartridges',
    description: 'Replacement media options for residential and light commercial filtration systems.',
    image: '/images/water-filtration/pp-filter.webp',
    alt: 'PP sediment replacement water filter cartridge',
    href: '/water-filtration',
    width: 800,
    height: 800,
  },
  {
    title: 'Refrigerator Water Filters',
    description: 'Compatible filtration solutions for refrigerator water and ice applications.',
    image: '/images/water-filtration/refrigerator-filter.webp',
    alt: 'Refrigerator replacement water filter product lineup',
    href: '/products/refrigerator-water-filter',
    width: 900,
    height: 600,
  },
  {
    title: 'Coffee Machine Water Filters',
    description: 'Appliance filter options for coffee preparation and beverage equipment programs.',
    image: '/images/water-filtration/coffee-machine-filter.webp',
    alt: 'Coffee machine replacement water filter product family',
    href: '/products/coffee-machine-filter',
    width: 900,
    height: 600,
  },
  {
    title: 'Shower Filters',
    description: 'Inline shower filtration with replacement and OEM supply support.',
    image: '/images/shower-solutions/20-stage-shower-filter-overview.webp',
    alt: 'Inline shower filter with multi-stage filtration media cross-section',
    href: '/products/inline-shower-filter',
    width: 679,
    height: 679,
  },
]

export default function WaterFiltrationSolutionsGrid() {
  return (
    <section id="water-filtration" className="section-space scroll-mt-20 bg-mist">
      <div className="shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Product categories</p>
          <h2 className="headline mt-5">Water Filtration Solutions</h2>
          <p className="body-copy mx-auto mt-5 max-w-2xl">Reliable filtration components and replacement solutions for residential and commercial water applications.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href="/products/inline-water-filters" className="button-primary">Explore Inline Water Filters</a>
            <CatalogDownloadLink label="Download Water Filtration Catalog" pageType="homepage" catalog="waterFiltration" />
          </div>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {filtrationCategories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-white/75 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-nordic/25 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nordic focus-visible:ring-offset-2"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.35rem] bg-[#f7f6f1] p-5 sm:p-6">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]"
                  loading="lazy"
                  decoding="async"
                  width={category.width}
                  height={category.height}
                />
              </div>
              <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
                <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">{category.title}</h3>
                <p className="mt-3 flex-1 text-base leading-7 text-ink/60">{category.description}</p>
                <span className="mt-6 w-fit border-b border-nordic/35 pb-1 text-sm font-medium text-nordic transition group-hover:border-nordic">Learn More</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
