'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaAward, FaUsers, FaProjectDiagram, FaSmile } from 'react-icons/fa'

const stats = [
  { icon: <FaAward />, value: 20, label: 'سنوات من الخبرة' },
  { icon: <FaUsers />, value: 1000, label: 'عميل راضٍ' },
  { icon: <FaProjectDiagram />, value: 500, label: 'مشروع مكتمل' },
  { icon: <FaSmile />, value: 100, label: 'نسبة رضا العملاء' },
]

export default function EngagingAboutUs() {
  const [activeTab, setActiveTab] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const tabs = [
    { title: 'رؤيتنا', content: 'نسعى لأن نكون الخيار الأول في مجال تصميم وتنفيذ المطابخ والديكورات الداخلية، من خلال تقديم حلول مبتكرة وعالية الجودة تلبي تطلعات عملائنا وتتجاوز توقعاتهم.' },
    { title: 'مهمتنا', content: 'مهمتنا هي تحويل المساحات إلى أماكن استثنائية تعكس شخصية وأسلوب حياة عملائنا، من خلال الجمع بين التصميم الإبداعي والتنفيذ الدقيق والخدمة المتميزة.' },
    { title: 'قيمنا', content: 'نؤمن بالجودة العالية، والابتكار المستمر، والنزاهة في التعامل، والتركيز على رضا العملاء. هذه القيم هي أساس نجاحنا وتميزنا في السوق.' },
  ]

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">تعرف علينا أكثر</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">نحن شركة معتز جبر للمطابخ والديكور، نجمع بين الفن والوظيفة لخلق مساحات استثنائية تعكس شخصيتك وتلبي احتياجاتك</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/assets/images/mutaz.jpg"
              alt="لمحة عن أعمالنا"
              width={600}
              height={400}
              className="rounded-lg shadow-lg z-10 relative"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#004851]">خبرة تمتد لأكثر من 20 عامًا</h3>
            <p className="text-lg text-gray-600">
              منذ تأسيسنا، قمنا بتحويل آلاف المنازل والمكاتب إلى أماكن استثنائية. نحن نؤمن بأن كل مساحة لها قصة فريدة، ومهمتنا هي مساعدتك في سرد هذه القصة من خلال التصميم والتنفيذ المتقن.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === index
                      ? 'bg-[#004851] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <p className="text-gray-600">{tabs[activeTab].content}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-[#004851cc] mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#004851] mb-1">
                {stat.value}{stat.label === 'نسبة رضا العملاء' ? '%' : '+'}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <a href="#contact" className="inline-block bg-[#DF2935] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md">
            ابدأ رحلة تحويل مساحتك معنا
          </a>
        </motion.div>
      </div>
    </section>
  )
}

