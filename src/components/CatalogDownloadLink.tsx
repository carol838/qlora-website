const catalogs = {
  tanklessRO: {
    href: '/catalogs/QLORA-Tankless-RO-Systems-Catalog-2026.pdf',
    fileName: 'QLORA-Tankless-RO-Systems-Catalog-2026.pdf',
    analyticsName: 'tankless_ro_systems',
    year: '2026',
    ariaLabel: 'Download QLORA Tankless RO Systems Catalog 2026',
  },
  showerSolutions: {
    href: '/catalogs/QLORA-Shower-Solutions-Catalog-2026.pdf',
    fileName: 'QLORA-Shower-Solutions-Catalog-2026.pdf',
    analyticsName: 'shower_solutions',
    year: '2026',
    ariaLabel: 'Download QLORA Shower Solutions Catalog 2026',
  },
  waterDispenserSolutions: {
    href: '/catalogs/QLORA-Water-Dispenser-Solutions-Catalog-2026.pdf',
    fileName: 'QLORA-Water-Dispenser-Solutions-Catalog-2026.pdf',
    analyticsName: 'water_dispenser_solutions',
    year: '2026',
    ariaLabel: 'Download QLORA Water Dispenser Solutions Catalog 2026',
  },
} as const

type CatalogDownloadLinkProps = {
  label: string
  pageType: 'homepage' | 'ro_systems' | 'tankless_ro' | 'shower_solutions' | 'water_dispensers' | 'product_detail'
  catalog?: keyof typeof catalogs
  className?: string
}

function trackCatalogDownload(catalog: (typeof catalogs)[keyof typeof catalogs], pageType: CatalogDownloadLinkProps['pageType']) {
  const analyticsWindow = window as typeof window & {
    gtag?: (command: 'event', eventName: string, parameters: Record<string, string>) => void
  }

  analyticsWindow.gtag?.('event', 'catalog_download', {
    catalog_name: catalog.analyticsName,
    catalog_year: catalog.year,
    page_type: pageType,
    page_path: window.location.pathname,
  })
}

export default function CatalogDownloadLink({ label, pageType, catalog = 'tanklessRO', className = 'button-secondary' }: CatalogDownloadLinkProps) {
  const selectedCatalog = catalogs[catalog]

  return (
    <a
      href={selectedCatalog.href}
      download={selectedCatalog.fileName}
      className={className}
      aria-label={selectedCatalog.ariaLabel}
      onClick={() => trackCatalogDownload(selectedCatalog, pageType)}
    >
      {label}
    </a>
  )
}

