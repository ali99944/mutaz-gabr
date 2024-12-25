'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGem, FaHandshake, FaLightbulb, FaUsers, FaRecycle, FaHeart } from 'react-icons/fa'

const values = [
  { 
    icon: <FaGem className="text-5xl text-[#DF2935]" />, 
    title: 'الجودة', 
    description: 'نلتزم بأعلى معايير الجودة في كل تفصيل من تصاميمنا، لضمان رضا عملائنا وتجاوز توقعاتهم.'
  },
  { 
    icon: <FaHandshake className="text-5xl text-[#DF2935]" />, 
    title: 'النزاهة', 
    description: 'نؤمن بالشفافية والصدق في جميع تعاملاتنا مع العملاء والشركاء، مما يبني الثقة ويعزز العلاقات طويلة الأمد.'
  },
  { 
    icon: <FaLightbulb className="text-5xl text-[#DF2935]" />, 
    title: 'الإبداع', 
    description: 'نسعى دائمًا لابتكار حلول تصميم فريدة ومبتكرة لكل مشروع، مما يضمن تميز كل عمل نقوم به.'
  },
  { 
    icon: <FaUsers className="text-5xl text-[#DF2935]" />, 
    title: 'التعاون', 
    description: 'نؤمن بقوة العمل الجماعي وأهمية التعاون مع عملائنا لتحقيق رؤيتهم وتجاوز توقعاتهم.'
  },
  { 
    icon: <FaRecycle className="text-5xl text-[#DF2935]" />, 
    title: 'الاستدامة', 
    description: 'نلتزم باستخدام مواد وممارسات صديقة للبيئة في تصاميمنا، للمساهمة في مستقبل أكثر استدامة.'
  },
  { 
    icon: <FaHeart className="text-5xl text-[#DF2935]" />, 
    title: 'الشغف', 
    description: 'نعمل بشغف وحب لما نقوم به، مما ينعكس على جودة أعمالنا ورضا عملائنا.'
  },
]

export default function OurValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">قيمنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            قيمنا هي جوهر عملنا وتوجه كل قرار نتخذه وكل تصميم ننفذه. نحن ملتزمون بهذه المبادئ في كل ما نقوم به.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow text-center transform transition-all duration-300"
            >
              <div className="mb-2 flex justify-center">
                <div className="p-4 rounded-full">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#004851]">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

