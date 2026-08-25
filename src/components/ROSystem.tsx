import roSystemBanner from '../assets/home-ro-tank-tankless-banner.webp'

export default function ROSystem() {
  return (
    <section id="ro-systems" className="scroll-mt-20 bg-mist py-16 md:py-20 lg:py-24">
      <div className="shell">
        <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-white shadow-soft md:min-h-[620px] lg:min-h-[680px]">
          <img
            src={roSystemBanner}
            alt="Tank and tankless reverse osmosis water filtration systems"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-[60%_center] lg:object-center"
            loading="lazy"
            decoding="async"
            width="1717"
            height="916"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f7f3] via-[#f8f7f3]/85 to-transparent md:via-[#f8f7f3]/62 lg:via-[#f8f7f3]/35" />
          <div className="relative z-10 flex min-h-[560px] items-center px-6 py-12 sm:px-10 md:min-h-[620px] lg:min-h-[680px] lg:px-14">
            <div className="max-w-[480px]">
              <p className="eyebrow">RO systems</p>
              <h2 className="headline mt-5">RO Solutions for<br />Modern Water Needs</h2>
              <p className="body-copy mt-6">From proven tank RO systems to compact tankless platforms, QLORA supports flexible residential, commercial and OEM water purification projects.</p>
              <a href="/ro-systems" className="button-primary mt-9">Explore RO Systems</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
