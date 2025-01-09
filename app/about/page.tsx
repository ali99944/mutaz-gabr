
import Contact from '../components/Contact'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import AboutUsHero from './components/AboutUsHero'
import OurStory from './components/OurStories'
import OurValues from './components/OurValues'
import TeamSection from './components/TeamSection'
import AboutCTA from './components/AboutCTA'
import Testimonials from './components/Testimonials'

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <AboutUsHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <Testimonials />
      <AboutCTA />
      <Contact />
      <Footer />
    </main>
  )
}

