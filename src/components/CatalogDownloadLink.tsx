const tanklessCatalog = {
  href: '/catalogs/QLORA-Tankless-RO-Systems-Catalog-2026.pdf',
  fileName: 'QLORA-Tankless-RO-Systems-Catalog-2026.pdf',
  analyticsName: 'tankless_ro_systems',
  year: '2026',
}

type CatalogDownloadLinkProps = {
  label: string
  pageType: 'homepage' | 'ro_systems' | 'tankless_ro' | 'product_detail'
  className?: string
}

function trackCatalogDownload(pageType: CatalogDownloadLinkProps['pageType']) {
  const analyticsWindow = window as typeof window & {
    gtag?: (command: 'event', eventName: string, parameters: Record<string, string>) => void
  }

  analyticsWindow.gtag?.('event', 'catalog_download', {
    catalog_name: tanklessCatalog.analyticsName,
    catalog_year: tanklessCatalog.year,
    page_type: pageType,
    page_path: window.location.pathname,
  })
}

export default function CatalogDownloadLink({ label, pageType, className = 'button-secondary' }: CatalogDownloadLinkProps) {
  return (
    <a
      href={tanklessCatalog.href}
      download={tanklessCatalog.fileName}
      className={className}
      aria-label="Download QLORA Tankless RO Systems Catalog 2026"
      onClick={() => trackCatalogDownload(pageType)}
    >
      {label}
    </a>
  )
}
