// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import FeaturedProjects from './components/FeaturedProjects'
// import Services from './components/Services'
// import Gallery from './components/Gallery'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import AboutUs from './components/AboutUs'
// import EngagingAboutUs from './components/EngagingAboutUs'

import { Metadata } from "next"
import Home from "./Home"




export const metadata: Metadata = {
  title: 'معتز جبر - تشطيبات المطابخ والديكور',
  description: 'تصميم وتنفيذ أفخم المطابخ والديكورات الداخلية بأعلى جودة',
}

export default async function Page () {
  return <Home />
}