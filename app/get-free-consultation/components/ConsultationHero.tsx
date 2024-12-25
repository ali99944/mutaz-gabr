'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ConsultationHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        alt="استشارة تصميم داخلي مع معتز جابر"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#004851]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#004851]/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">حول أفكارك إلى واقع</h1>
          <p className="text-xl md:text-2xl mb-8 mx-auto">
            احصل على استشارة مجانية مع خبراء التصميم الداخلي لدينا واكتشف كيف يمكننا تحويل مساحتك إلى عمل فني
          </p>
          <motion.a
            href="#consultation-form"
            className="bg-[#DF2935] text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition duration-300 inline-block shadow"
            whileTap={{ scale: 0.95 }}
          >
            احجز استشارتك المجانية الآن
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

