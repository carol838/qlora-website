export default function Footer() {
  const links = [
    ['RO Systems', '/ro-systems'],
    ['Water Dispensers', '/water-dispensers'],
    ['Water Filtration', '/water-filtration'],
    ['Shower Solutions', '/shower-solutions'],
    ['OEM Solutions', '/oem-private-label'],
    ['Technical Knowledge', '/technical-knowledge'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ]

  return (
    <footer className="border-t border-line pb-28 pt-12 sm:py-12">
      <div className="shell grid gap-10 text-center sm:text-left lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-4">
          <p className="text-lg font-semibold tracking-[0.22em]">QLORA</p>
          <p className="mt-2 text-xs text-ink/50">Better Water for Everyday Life</p>
          <div className="mt-4 flex flex-col gap-1 text-xs text-ink/55">
            <a href="mailto:sales@qloratech.com" className="transition hover:text-ink">sales@qloratech.com</a>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs text-ink/50 sm:justify-start lg:col-span-6" aria-label="Footer navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-ink">{label}</a>
          ))}
        </nav>

        <p className="text-xs text-ink/45 lg:col-span-2 lg:text-right">&copy; 2026 QLORA</p>
      </div>
    </footer>
  )
}
