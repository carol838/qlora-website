import CatalogDownloadLink from './CatalogDownloadLink'

export default function WaterDispensersEntrance() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden bg-[#f8f7f3]">
      <img
        src="/images/home/home-water-dispenser-banner.webp"
        alt="QLORA water dispenser products in a warm modern commercial pantry"
        className="h-[540px] w-full object-cover object-[63%_center] sm:h-[560px] md:h-auto md:object-center"
        loading="lazy"
        decoding="async"
        width="1881"
        height="836"
      />
      <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-[1200px] items-center px-5 sm:px-8">
        <div className="max-w-[460px]">
          <p className="eyebrow">Water Dispenser Solutions</p>
          <h2 className="headline mt-5">Water Dispensers for<br />Home &amp; Commercial Use</h2>
          <p className="body-copy mt-6">Floor-standing, countertop and ice-making water dispenser platforms for residential and commercial applications.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/water-dispensers" className="button-primary">Explore Water Dispensers</a>
            <CatalogDownloadLink label="Download Water Dispenser Catalog" pageType="homepage" catalog="waterDispenserSolutions" />
          </div>
        </div>
      </div>
    </section>
  )
}

