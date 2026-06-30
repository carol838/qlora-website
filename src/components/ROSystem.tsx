import roSystem from '../assets/ro-system.webp'

export default function ROSystem() {
  return (
    <section id="ro-systems" className="section-space scroll-mt-20 bg-mist">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">RO systems</p>
          <h2 className="headline mt-5">Pure Water,<br />Pure Life</h2>
          <p className="body-copy mt-6">Premium RO water systems designed for cleaner daily drinking water, modern kitchens and global home water brands.</p>
          <a href="/ro-systems" className="button-primary mt-9">Explore RO Systems</a>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white lg:col-span-7">
          <img src={roSystem} alt="Premium compact reverse osmosis water system" className="aspect-[4/3] h-full w-full object-cover" loading="lazy" decoding="async" width="1200" height="960" />
        </div>
      </div>
    </section>
  )
}
