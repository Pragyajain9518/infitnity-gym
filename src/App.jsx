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
import CoachesPage from './components/CoachesPage'
import TestimonialsPage from './components/TestimonialsPage'
import ContactPage from './components/ContactPage'
import FaqAssistant from './components/FaqAssistant'

const pages = {
  home: 'Home',
  services: 'Services',
  about: 'About Us',
  coaches: 'Our Coaches',
  testimonials: 'Testimonials',
  contact: 'Contact Us',
}
function readLocation() {
  const [route, anchor] = window.location.hash.slice(1).split('/')
  if (pages[route]) return { page: route, anchor }
  const sectionPages = {
    stats: 'home',
    'home-about': 'home',
    programs: 'home',
    'services-method': 'services',
    'services-plan': 'services',
    'about-story': 'about',
  }
  return {
    page: sectionPages[route] || 'home',
    anchor: sectionPages[route] ? route : '',
  }
}
export default function App() {
  const [location, setLocation] = useState(readLocation)
  useEffect(() => {
    const update = () => setLocation(readLocation())
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => {
    document.title = `${pages[location.page]} | Infitnity — We Take It Personally`
    const frame = requestAnimationFrame(() => {
      if (location.anchor)
        document
          .getElementById(location.anchor)
          ?.scrollIntoView({ block: 'start' })
      else window.scrollTo({ top: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [location])
  const screens = {
    services: <AboutPage />,
    about: <AboutUsPage />,
    coaches: <CoachesPage />,
    testimonials: <TestimonialsPage />,
    contact: <ContactPage />,
  }
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main-content')?.focus()
        }}
      >
        Skip to content
      </a>
      <Navbar key={location.page} currentPage={location.page} />
      <div id="main-content" tabIndex={-1}>
        {screens[location.page] || (
          <main>
            <Hero />
            <StatsBar />
            <FeatureSection />
            <ServicesSection />
            <ValueSection />
            <Testimonials />
          </main>
        )}
      </div>
      <Footer />
      <FaqAssistant />
    </>
  )
}
