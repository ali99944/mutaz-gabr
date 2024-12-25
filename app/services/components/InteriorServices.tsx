'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const interiorServices = [
  { name: 'تصميم غرف المعيشة', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80' },
  { name: 'تصميم غرف النوم', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80' },
  { name: 'تصميم المساحات المكتبية', image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=1200&q=80' },
]

export default function InteriorServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#004851]">خدمات التصميم الداخلي</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نبدع في تحويل مساحاتك الداخلية إلى أماكن استثنائية تعكس شخصيتك وأسلوب حياتك
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interiorServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-96 rounded-lg overflow-hidden group"
            >
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004851]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="mb-4">نصمم مساحات فريدة تجمع بين الجمال والوظائفية لتلبية احتياجاتك الخاصة</p>
                <motion.button
                  className="bg-[#DF2935] text-white px-6 py-2 rounded-lg font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  استكشف التصاميم
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

