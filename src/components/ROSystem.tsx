import roSystemBanner from '../assets/home-ro-tank-tankless-banner.webp'
import CatalogDownloadLink from './CatalogDownloadLink'

export default function ROSystem() {
  return (
    <section id="ro-systems" className="relative scroll-mt-20 overflow-hidden bg-[#f8f7f3]">
      <img
        src={roSystemBanner}
        alt="Tank and tankless reverse osmosis water filtration systems"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
        decoding="async"
        width="1717"
        height="916"
      />
      <div className="relative z-10 mx-auto flex h-[560px] w-full max-w-[1200px] items-center px-5 sm:px-8 md:h-[clamp(500px,53vw,620px)]">
        <div className="max-w-[450px]">
          <p className="eyebrow">RO systems</p>
          <h2 className="headline mt-5">RO Solutions for<br />Modern Water Needs</h2>
          <p className="body-copy mt-6">Tank and tankless RO platforms for residential, commercial and OEM water purification projects.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/ro-systems" className="button-primary">Explore RO Systems</a>
            <CatalogDownloadLink label="Download Tankless RO Catalog" pageType="homepage" />
          </div>
        </div>
      </div>
    </section>
  )
}

