'use client'

import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import EngagingAboutUs from "./components/EngagingAboutUs"
import FeaturedProjects from "./components/FeaturedProjects"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className=""> {/* Add padding-top to account for fixed navbar */}
        <Hero />
        <AboutUs />
        <FeaturedProjects />
        <Services />
        <EngagingAboutUs />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}