'use client'

import { motion } from 'framer-motion'
import { Lightbulb, PenTool, Hammer, Sparkles } from 'lucide-react'

const processSteps = [
  { icon: <Lightbulb className="w-12 h-12 text-[#FF0000]" />, title: 'استشارة مجانية', description: 'نستمع لأفكارك واحتياجاتك لفهم رؤيتك بشكل كامل' },
  { icon: <PenTool className="w-12 h-12 text-[#FF0000]" />, title: 'التصميم', description: 'نقوم بإنشاء تصاميم مخصصة تلبي تطلعاتك وتناسب ميزانيتك' },
  { icon: <Hammer className="w-12 h-12 text-[#FF0000]" />, title: 'التنفيذ', description: 'ننفذ المشروع بدقة وحرفية عالية مع الالتزام بالجداول الزمنية' },
  { icon: <Sparkles className="w-12 h-12 text-[#FF0000]" />, title: 'التسليم', description: 'نسلم مشروعك مكتملاً ونضمن رضاك التام عن النتيجة النهائية' },
]

export default function ServiceProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow text-center"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-[#004851]">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

