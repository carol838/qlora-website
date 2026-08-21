import Home from './pages/Home'
import ROSystems from './pages/ROSystems'
import WaterFiltration from './pages/WaterFiltration'
import WaterDispensersPage from './pages/WaterDispensersPage'
import WaterDispenserProductPage from './pages/WaterDispenserProductPage'
import OEMPrivateLabel from './pages/OEMPrivateLabel'
import ShowerSolutions from './pages/ShowerSolutions'
import TechnicalKnowledge from './pages/TechnicalKnowledge'
import TechnicalGuidePlaceholder from './pages/TechnicalGuidePlaceholder'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  let page = <Home />

  if (path.startsWith('/products/')) page = <ProductPage slug={path.replace('/products/', '')} />
  else if (path === '/ro-systems') page = <ROSystems />
  else if (path === '/water-dispensers') page = <WaterDispensersPage />
  else if (path.startsWith('/water-dispensers/')) page = <WaterDispenserProductPage slug={path.replace('/water-dispensers/', '')} />
  else if (path === '/water-filtration') page = <WaterFiltration />
  else if (path === '/shower-solutions') page = <ShowerSolutions />
  else if (path === '/oem-private-label') page = <OEMPrivateLabel />
  else if (path === '/technical-knowledge') page = <TechnicalKnowledge />
  else if (path === '/technical-knowledge/how-to-choose-the-right-water-filter') page = <TechnicalGuidePlaceholder />
  else if (path === '/contact') page = <ContactPage />
  else if (path === '/about') page = <AboutPage />

  return (
    <>
      {page}
      <FloatingWhatsApp />
    </>
  )
}

