import Home from './pages/Home'
import ROSystems from './pages/ROSystems'
import WaterFiltration from './pages/WaterFiltration'
import OEMPrivateLabel from './pages/OEMPrivateLabel'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  let page = <Home />

  if (path.startsWith('/products/')) page = <ProductPage slug={path.replace('/products/', '')} />
  else if (path === '/ro-systems') page = <ROSystems />
  else if (path === '/water-filtration') page = <WaterFiltration />
  else if (path === '/oem-private-label') page = <OEMPrivateLabel />
  else if (path === '/contact') page = <ContactPage />
  else if (path === '/about') page = <AboutPage />

  return (
    <>
      {page}
      <FloatingWhatsApp />
    </>
  )
}
