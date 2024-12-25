'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80"
        alt="خدماتنا المميزة"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#004851]/80 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">خدماتنا الاحترافية</h1>
          <p className="text-xl md:text-2xl mb-8 mx-auto">
            نقدم لكم مجموعة متكاملة من الخدمات لتحويل مساحاتكم إلى أعمال فنية وظيفية تعكس أسلوب حياتكم وشخصيتكم الفريدة
          </p>
          <motion.a
            href="#services-list"
            className="bg-[#FF0000] text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            استكشف خدماتنا
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

