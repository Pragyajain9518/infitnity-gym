import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import FeatureSection from './components/FeatureSection'
import ServicesSection from './components/ServicesSection'
import ValueSection from './components/ValueSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import AboutPage from './components/AboutPage'
import AboutUsPage from './components/AboutUsPage'

function App() {
  const getPageFromHash = () => {
    if (window.location.hash === '#services') return 'services'
    if (window.location.hash === '#about') return 'about'
    return 'home'
  }

  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getPageFromHash())
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const showHome = () => setPage('home')
  const showServices = () => {
    setPage('services')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Navbar currentPage={page} onHome={showHome} onServices={showServices} />
      {page === 'services' ? (
        <AboutPage />
      ) : page === 'about' ? (
        <AboutUsPage />
      ) : (
        <main>
          <Hero />
          <StatsBar />
          <FeatureSection />
          <ServicesSection />
          <ValueSection />
          <Testimonials />
        </main>
      )}
      <Footer />
    </>
  )
}

export default App
