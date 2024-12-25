'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ServiceCard from './ServiceCard'

const kitchenServices = [
  { name: 'مطابخ', image: '/assets/images/services/kitchen.jpg' },
  { name: 'غرف ملابس', image: '/assets/images/services/dressing.jpg' },
  { name: 'وحدات حمام', image: '/assets/images/services/toilet.jpg' },
  { name: 'غرف غسيل', image: '/assets/images/services/laundry.jpg' },
  { name: 'مطابخ صغيرة', image: '/assets/images/services/kitchenette.jpg' },
  { name: 'خدمات أخرى', image: '/assets/images/services/other-kitchen.jpg' },
]

const interiorServices = [
  { name: 'تصميم داخلي', image: '/assets/images/services/interior-design.jpg' },
]

export default function ServiceCategories() {
  const [activeCategory, setActiveCategory] = useState('kitchens')

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <motion.button
            className={`px-6 py-3 mx-2 rounded-lg text-lg font-bold transition-colors ${
              activeCategory === 'kitchens' ? 'bg-[#004851] text-white' : 'bg-white text-[#004851]'
            }`}
            onClick={() => setActiveCategory('kitchens')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            المطابخ والوحدات
          </motion.button>
          <motion.button
            className={`px-6 py-3 mx-2 rounded-lg text-lg font-bold transition-colors ${
              activeCategory === 'interior' ? 'bg-[#004851] text-white' : 'bg-white text-[#004851]'
            }`}
            onClick={() => setActiveCategory('interior')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            التصميم الداخلي
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeCategory === 'kitchens' ? kitchenServices : interiorServices).map((service, index) => (
              <ServiceCard key={index} name={service.name} image={service.image} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

