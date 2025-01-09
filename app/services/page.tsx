

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import CallToAction from './components/CallToAction'
import ServicesHero from './components/ServiceHero'
import ServiceProcess from './components/ServiceProcess'
import ServicesList from './components/ServicesList'
import TestimonialsSection from './components/TestimonialsSection'

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </main>
  )
}

