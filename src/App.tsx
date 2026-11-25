import Home from './pages/Home'
import ROSystems from './pages/ROSystems'
import WaterFiltration from './pages/WaterFiltration'
import WaterDispensersPage from './pages/WaterDispensersPage'
import WaterDispenserProductPage from './pages/WaterDispenserProductPage'
import OEMPrivateLabel from './pages/OEMPrivateLabel'
import ShowerSolutions from './pages/ShowerSolutions'
import TechnicalKnowledge from './pages/TechnicalKnowledge'
import TechnicalGuidePlaceholder from './pages/TechnicalGuidePlaceholder'
import TanklessROComparisonArticle from './pages/TanklessROComparisonArticle'
import ShowerFilterMediaGuideArticle from './pages/ShowerFilterMediaGuideArticle'
import WaterDispenserB2BBuyersGuideArticle from './pages/WaterDispenserB2BBuyersGuideArticle'
import QuickConnectInlineFilterGuide from './pages/QuickConnectInlineFilterGuide'
import quickConnectGuide from './data/quickConnectInlineFilterGuide.json'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import NotFoundPage from './pages/NotFoundPage'
import { RoutePathContext } from './lib/RoutePathContext'

type AppProps = {
  initialPath?: string
}

export default function App({ initialPath }: AppProps) {
  const requestPath = initialPath ?? window.location.pathname
  const path = requestPath.replace(/\/+$/, '') || '/'
  let page = path === '/' ? <Home /> : <NotFoundPage />

  if (path.startsWith('/products/')) page = <ProductPage slug={path.replace('/products/', '')} />
  else if (path === '/ro-systems') page = <ROSystems />
  else if (path === '/water-dispensers') page = <WaterDispensersPage />
  else if (path.startsWith('/water-dispensers/')) page = <WaterDispenserProductPage slug={path.replace('/water-dispensers/', '')} />
  else if (path === '/water-filtration') page = <WaterFiltration />
  else if (path === '/shower-solutions') page = <ShowerSolutions />
  else if (path === '/oem-private-label') page = <OEMPrivateLabel />
  else if (path === '/technical-knowledge') page = <TechnicalKnowledge />
  else if (path === '/technical-knowledge/how-to-choose-the-right-water-filter') page = <TechnicalGuidePlaceholder />
  else if (path === '/technical-knowledge/tankless-ro-vs-traditional-ro-systems') page = <TanklessROComparisonArticle />
  else if (path === '/technical-knowledge/shower-filter-media-guide') page = <ShowerFilterMediaGuideArticle />
  else if (path === '/technical-knowledge/water-dispenser-b2b-buyers-guide') page = <WaterDispenserB2BBuyersGuideArticle />
  else if (path === quickConnectGuide.path) page = <QuickConnectInlineFilterGuide />
  else if (path === '/contact') page = <ContactPage />
  else if (path === '/about') page = <AboutPage />

  return (
    <RoutePathContext.Provider value={path}>
      {page}
      <FloatingWhatsApp />
    </RoutePathContext.Provider>
  )
}

