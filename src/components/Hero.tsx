import heroKitchen from '../assets/hero-kitchen.webp'

export default function Hero() {
  return (
    <section id="home" className="min-h-[760px] pt-20 lg:min-h-screen">
      <div className="grid min-h-[680px] lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2">
        <div className="flex items-center">
          <div className="ml-auto w-full max-w-[600px] px-5 py-16 sm:px-8 lg:pl-8 lg:pr-16">
            <p className="eyebrow mb-6">Home wellness, refined</p>
            <h1 className="display max-w-xl">Better Water for Everyday Life</h1>
            <p className="body-copy mt-7 max-w-lg">Premium RO water systems, under sink filtration and replacement water filters for kitchens, coffee, showers and everyday home comfort.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#ro-systems" className="button-primary">Explore Products <span className="ml-2">↗</span></a>
              <a href="/contact" className="button-secondary">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="min-h-[420px] overflow-hidden bg-[#e9e6df]">
          <img src={heroKitchen} alt="Serene Nordic kitchen with modern drinking water tap" className="h-full w-full object-cover" loading="eager" fetchPriority="high" decoding="async" width="1600" height="900" />
        </div>
      </div>
    </section>
  )
}
