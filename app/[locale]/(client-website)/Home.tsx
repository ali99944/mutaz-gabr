"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import StatisticCounter from "./components/statistics-counter"
import { motion } from "framer-motion"
import { Users, Palette, CheckCircle, Star } from "lucide-react"
import Contact from "./components/contact-form"
import AboutUsSection from "./components/about-us-section"
import { Button } from "@/components/ui/button"
import AppRoutes from "@/src/constants/app_routes"
import Dictionary from "@/src/types/dictionary"

const heroImages = [
  "/images/interior/apartment.jpg",
  "/images/interior/cafe.jpg",
  "/images/interior/chalet.jpg",
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Home({ dictionary }: { dictionary: Dictionary }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)


  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* Hero Section */}
      <div className="relative h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image || "/placeholder.svg"} alt={`Hero image ${index + 1}`} fill className="object-fill hover:scale-105 transition-all duration-300" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center">
          <div className="text-center  px-4">
            <h1 className="text-4xl text-app-secondary md:text-6xl font-bold mb-4">{dictionary.home_page.hero.title}</h1>
            <p className="text-2xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">{dictionary.home_page.hero.description}</p>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <Link href={AppRoutes.getFreeConsultation}>
              <Button size="lg" className="py-4 px-8 bg-app-secondary hover:text-app-secondary hover:bg-white">
                {dictionary.home_page.hero.get_consultation_button_text}
              </Button>
            </Link>

            <Link href={AppRoutes.contact}>
              <Button size="lg" className="py-4 px-8 hover:bg-opacity-85">
                {dictionary.home_page.hero.contact_us_button_text}
              </Button>
            </Link>
          </div>
        </div>
      </div>


      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="mx-auto">
          {/* <h2 className="text-4xl font-bold text-center mb-8 text-black">خدماتنا</h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto text-primary">
            نحن شركة رائدة في مجال التصميم الداخلي، نقدم خدماتنا في مجال التصميم الداخلي والتصميم المعماري والديكورات الداخلية، بالإضافة إلى خدمات تصميم المطابخ والوحدات والديكورات الخارجية. مع سنوات من الخبرة وفريق من المصممين الموهوبين، نسعى دائمًا لتقديم أعلى مستويات الجودة والتميز في كل مشروع.
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: dictionary.home_page.services.interior_design,
                image:
                  "/images/special/1.jpg",
                  link: '/interior'
              },
              {
                title: dictionary.home_page.services.kitchen_design,
                image:
                  "/images/special/4.jpg",
                  link: '/kitchen'
              },
              {
                title: dictionary.home_page.services.real_estate,
                image:
                  "/images/interior/tower.jpg",
                  link: '/real-estate'
              },
            ].map((service, index) => (
              <Link href={service.link} key={index} className="group relative rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={500}
                  className="w-full h-[300px] object-fill hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end justify-start p-4 opacity-100 transition-colors duration-300 group-hover:bg-black/70">
                  <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    

      {/* About Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-app-secondary">{dictionary.home_page.about.title}</h2>
              <p className="text-lg mb-6 leading-relaxed">
                {dictionary.home_page.about.paragraph1}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {dictionary.home_page.about.paragraph2}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {dictionary.home_page.about.paragraph3}
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OnswRq0tIpjLwJwfYXW5Qd5jkRUS0h.png"
                alt="About MG Group"
                fill
                className="object-fill rounded-lg"
              />
            </div>
          </div>

          <div className="mt-8">
          <AboutUsSection dictionary={dictionary}/>
          </div>
        </div>
      </section>

                  {/* Statistics Section */}
                  <div className="py-12 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-app-secondary">{dictionary.home_page.achievments}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatisticCounter end={500} title="مشروع مكتمل" />
            <StatisticCounter end={50} title="جائزة تصميم" />
            <StatisticCounter end={15} title="سنوات خبرة" />
            <StatisticCounter end={1000} title="عميل راضٍ" />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {dictionary.home_page.why_choose_us.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: dictionary.home_page.why_choose_us.experience.title, description: dictionary.home_page.why_choose_us.experience.description, icon: <Users className="h-12 w-12 mb-4 text-app-secondary" /> },
              { title: dictionary.home_page.why_choose_us.creative_innovations.title, description: dictionary.home_page.why_choose_us.creative_innovations.description, icon: <Palette className="h-12 w-12 mb-4 text-app-secondary" /> },
              { title: dictionary.home_page.why_choose_us.high_quality.title, description: dictionary.home_page.why_choose_us.high_quality.description, icon: <CheckCircle className="h-12 w-12 mb-4 text-app-secondary" /> },
              { title: dictionary.home_page.why_choose_us.customer_satisfaction.title, description: dictionary.home_page.why_choose_us.customer_satisfaction.description, icon: <Star className="h-12 w-12 mb-4 text-app-secondary" /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#f5f5f5]">
  <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
    <div className="relative lg:row-span-2 h-full">
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm h-full">
          <div className=" overflow-hidden bg-gray-900 h-full">
            <img className="h-full object-fill hover:scale-105 transition-all duration-300 object-top" src="/images/special/9.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 shadow-sm ring-black/5"></div>
    </div>
    <div className="relative max-lg:row-start-1">
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="flex flex-1 items-center justify-center">
          <img className="w-full h-96 object-fill hover:scale-105 transition-all duration-300" src="/images/special/7.jpg" alt="" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 shadow-sm ring-black/5"></div>
    </div>
    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="w-full items-center max-lg:py-6">
          <img className="w-full h-96 object-fill hover:scale-105 transition-all duration-300" src="/images/special/5.jpg" alt="" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 shadow-sm ring-black/5"></div>
    </div>
    <div className="relative lg:row-span-2">
      <div className="absolute inset-0 bg-white"></div>
      <div className="relative flex h-full flex-col overflow-hidden">
        <div className="flex flex-1 items-center max-lg:py-6">
          <img className="h-full object-fill hover:scale-105 transition-all duration-300" src="/images/interior/tower.jpg" alt="" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 shadow-sm ring-black/5"></div>
    </div>
  </div>
</section>


<Contact dictionary={dictionary} />


    </div>
  )
}

