'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function OurStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">قصتنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            منذ بداياتنا المتواضعة وحتى أصبحنا روادًا في مجال التصميم الداخلي، ظل شغفنا بالإبداع والتميز هو محرك نجاحنا
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/assets/images/kitchens/44.jpg"
              alt="قصة معتز جبر"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#004851]">رحلة من الشغف إلى الريادة</h3>
            <p className="text-lg text-gray-600">
              بدأت قصتنا عام 2003 بحلم بسيط: تقديم تصاميم داخلية استثنائية تجمع بين الجمال والوظيفة. مع مرور السنين، نمت خبرتنا وتوسعت رؤيتنا، لنصبح اليوم اسمًا موثوقًا في عالم التصميم الداخلي والمطابخ الفاخرة.
            </p>
            <p className="text-lg text-gray-600">
              نفخر بأننا قمنا بتحويل آلاف المساحات إلى بيوت أحلام وأماكن عمل ملهمة. كل مشروع هو رحلة فريدة نخوضها مع عملائنا، نستمع لأحلامهم ونترجمها إلى واقع ملموس يتجاوز توقعاتهم.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

