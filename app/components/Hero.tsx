'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import AppRoutes from '../constants/app_routes'

const images = [
  '/assets/home/balace.jpg',
  '/assets/home/balacony.jpg',
  '/assets/home/hall1.jpg',
  '/assets/home/kitchen.jpeg',
  '/assets/home/kitchen.jpg',
  '/assets/home/living.jpg',
  '/assets/home/living2.jpg',
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    console.log(isVisible);
    
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`معتز جبر - تصميمات داخلية راقية ${index + 1}`}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={index === 0}
          className={`transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-[#004851] bg-opacity-50 flex flex-col items-center justify-center text-[#D3D3D3] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">معتز جبر</h1>
          <p className="text-xl md:text-2xl mb-8 mx-auto">
            نبدع في تصميم وتنفيذ الديكورات الداخلية و الخارجية و المطابخ الخشبية لنحول مساحتك إلى تحفة فنية تعكس أسلوب حياتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link legacyBehavior href={AppRoutes.getFreeConsultation}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-[#DF2935] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md"
              >
                احجز استشارة مجانية
              </motion.button>
            </Link>
            <a href={AppRoutes.projects}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-[#D3D3D3] text-[#D3D3D3] font-bold py-3 px-8 rounded-lg text-lg hover:bg-[#D3D3D3] hover:text-[#004851] transition duration-300 shadow-md"
              >
                تصفح أعمالنا
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

