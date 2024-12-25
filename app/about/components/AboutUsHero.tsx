'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutUsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="/assets/images/kitchens/333.jpg"
        alt="معتز جبر - خبراء التصميم الداخلي"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#004851]/80 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">من نحن</h1>
          <p className="text-xl md:text-2xl mb-8 mx-auto">
            نحن معتز جبر، رواد في مجال التصميم الداخلي والمطابخ الفاخرة. نجمع بين الإبداع والحرفية لتحويل مساحاتك إلى أعمال فنية وظيفية.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

