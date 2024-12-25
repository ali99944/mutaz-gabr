'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Lightbulb, TrendingUp, HandshakeIcon } from 'lucide-react'

const benefits = [
  {
    icon: <Clock className="w-12 h-12 text-[#DF2935]" />,
    title: 'توفير الوقت والجهد',
    description: 'نساعدك في تجنب الأخطاء المكلفة وتوفير وقتك الثمين من خلال خبرتنا الواسعة'
  },
  {
    icon: <Lightbulb className="w-12 h-12 text-[#DF2935]" />,
    title: 'أفكار إبداعية فريدة',
    description: 'نقدم لك حلولًا مبتكرة وأفكارًا إبداعية تناسب ذوقك واحتياجاتك الخاصة'
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-[#DF2935]" />,
    title: 'تحسين قيمة العقار',
    description: 'تصميم داخلي مميز يزيد من قيمة عقارك ويجعله أكثر جاذبية في السوق'
  },
  {
    icon: <HandshakeIcon className="w-12 h-12 text-[#DF2935]" />,
    title: 'خبرة متخصصة',
    description: 'استفد من خبرتنا الواسعة في مجال التصميم الداخلي والمطابخ الفاخرة'
  }
]

export default function ConsultationBenefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#004851]">لماذا تحتاج إلى استشارتنا؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف كيف يمكن لاستشارتنا المجانية أن تساعدك في تحقيق منزل أحلامك وتوفير الوقت والمال
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 p-4 rounded-lg shadow text-center transition-shadow duration-300"
            >
              <motion.div 
                className="mb-2 flex justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-[#004851]">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

