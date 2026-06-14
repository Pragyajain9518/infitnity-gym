import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import FeatureSection from './components/FeatureSection'
import ServicesSection from './components/ServicesSection'
import ValueSection from './components/ValueSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <FeatureSection />
        <ServicesSection />
        <ValueSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App
