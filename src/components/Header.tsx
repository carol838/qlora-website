import { useState } from 'react'

type DropdownItem = {
  label: string
  subtitle?: string
  href: string
}

type DropdownMenu = {
  label: string
  href: string
  items: DropdownItem[]
}

const dropdownMenus: DropdownMenu[] = [
  {
    label: 'RO Systems',
    href: '/ro-systems',
    items: [
      {
        label: 'Tankless RO System',
        subtitle: '600G / 800G / 1000G Direct Flow',
        href: '/products/tankless-ro-system',
      },
      {
        label: 'Under Sink RO System',
        subtitle: '75G / 100G Traditional Tank',
        href: '/products/under-sink-ro-system',
      },
    ],
  },
  {
    label: 'Water Filtration',
    href: '/water-filtration',
    items: [
      { label: 'Under Sink Filtration', href: '/water-filtration' },
      { label: 'Shower Filters', href: '/products/shower-filter' },
      { label: 'Refrigerator Filters', href: '/products/refrigerator-water-filter' },
      { label: 'Coffee Machine Filters', href: '/products/coffee-machine-filter' },
    ],
  },
]

const simpleNav = [
  ['OEM', '/oem-private-label'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

function DesktopDropdown({
  menu,
  isActive,
  isMenuActive,
}: {
  menu: DropdownMenu
  isActive: (href: string) => boolean
  isMenuActive: boolean
}) {
  return (
    <div className="group relative -mb-4 pb-4">
      <a
        href={menu.href}
        className={`inline-flex items-center gap-1.5 py-3 text-sm transition hover:text-ink ${isMenuActive ? 'text-ink' : 'text-ink/65'}`}
        aria-haspopup="true"
      >
        {menu.label}
        <span className="text-xs text-ink/35 transition group-hover:rotate-180" aria-hidden="true">▼</span>
      </a>

      <div className="invisible pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 rounded-2xl border border-line bg-canvas/95 p-2 opacity-0 shadow-soft backdrop-blur-md transition delay-150 duration-200 ease-out group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-75">
        {menu.items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`group/item relative block cursor-pointer rounded-xl py-3 pl-5 pr-4 text-sm transition duration-200 hover:bg-white/70 hover:text-ink hover:shadow-sm ${isActive(item.href) ? 'bg-white text-ink shadow-sm' : 'text-ink/65'}`}
          >
            <span className={`absolute left-2 top-3 bottom-3 w-0.5 rounded-full bg-accent transition duration-200 ${isActive(item.href) ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'}`} />
            <span className="block font-medium">{item.label}</span>
            {item.subtitle && (
              <span className="mt-1 block text-xs leading-5 text-ink/45">{item.subtitle}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const isActive = (href: string) => path === href
  const isMenuActive = (menu: DropdownMenu) => isActive(menu.href) || menu.items.some((item) => isActive(item.href))

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/20 bg-canvas/80 backdrop-blur-md">
      <div className="shell flex h-20 items-center justify-between">
        <a href="/" aria-label="QLORA home" className="leading-none">
          <span className="block text-xl font-semibold tracking-[0.22em]">QLORA</span>
          <span className="mt-1 block text-[9px] tracking-[0.08em] text-ink/55">Better Water for Everyday Life</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          <a href="/" className={`text-sm transition hover:text-ink ${isActive('/') ? 'text-ink' : 'text-ink/65'}`}>Home</a>

          {dropdownMenus.map((menu) => (
            <DesktopDropdown
              key={menu.label}
              menu={menu}
              isActive={isActive}
              isMenuActive={isMenuActive(menu)}
            />
          ))}

          {simpleNav.map(([label, href]) => (
            <a key={label} href={href} className={`text-sm transition hover:text-ink ${isActive(href) ? 'text-ink' : 'text-ink/65'}`}>{label}</a>
          ))}
        </nav>

        <a href="/contact" className="button-primary hidden xl:inline-flex">Get in Touch</a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="text-xl" aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-canvas px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <a onClick={() => setOpen(false)} href="/" className={`block border-b border-line py-3 text-base ${isActive('/') ? 'text-ink' : 'text-ink/75'}`}>Home</a>

          {dropdownMenus.map((menu) => {
            const expanded = mobileDropdown === menu.label
            return (
              <div key={menu.label} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setMobileDropdown(expanded ? null : menu.label)}
                  className={`flex w-full items-center justify-between py-3 text-left text-base ${isMenuActive(menu) ? 'text-ink' : 'text-ink/75'}`}
                  aria-expanded={expanded}
                >
                  <span>{menu.label}</span>
                  <span className={`text-sm text-ink/45 transition ${expanded ? 'rotate-180' : ''}`} aria-hidden="true">▼</span>
                </button>

                {expanded && (
                  <div className="pb-3 pl-4">
                    <a
                      onClick={() => setOpen(false)}
                      href={menu.href}
                      className={`block rounded-xl px-4 py-3 text-sm transition hover:bg-white/70 ${isActive(menu.href) ? 'bg-white text-ink shadow-sm' : 'text-ink/60'}`}
                    >
                      View {menu.label}
                    </a>
                    {menu.items.map((item) => (
                      <a
                        onClick={() => setOpen(false)}
                        key={item.label}
                        href={item.href}
                        className={`block rounded-xl px-4 py-3 text-sm transition hover:bg-white/70 ${isActive(item.href) ? 'bg-white text-ink shadow-sm' : 'text-ink/60'}`}
                      >
                        <span className="block font-medium">{item.label}</span>
                        {item.subtitle && (
                          <span className="mt-1 block text-xs leading-5 text-ink/45">{item.subtitle}</span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )
          })}

          {simpleNav.map(([label, href]) => (
            <a onClick={() => setOpen(false)} key={label} href={href} className={`block border-b border-line py-3 text-base ${isActive(href) ? 'text-ink' : 'text-ink/75'}`}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}
