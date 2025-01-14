'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaMedal, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa'

const features = [
  { icon: <FaMedal />, title: 'الجودة العالية', description: 'نلتزم بأعلى معايير الجودة في كل مشاريعنا' },
  { icon: <FaHandshake />, title: 'خدمة العملاء', description: 'رضا العملاء هو محور اهتمامنا الأساسي' },
  { icon: <FaLightbulb />, title: 'الابتكار', description: 'نقدم حلولاً إبداعية وتصاميم فريدة لكل عميل' },
  { icon: <FaUsers />, title: 'فريق متخصص', description: 'خبراء متميزون في التصميم والتنفيذ' },
]

const tabs = [
  { title: 'رؤيتنا', content: 'نطمح لأن نكون الاختيار الأول في مجال تصميم وتنفيذ المطابخ والديكورات الداخلية، من خلال تقديم حلول مبتكرة وعالية الجودة تفوق توقعات عملائنا.' },
  { title: 'مهمتنا', content: 'تحويل المساحات إلى أماكن استثنائية تعكس شخصية وأسلوب حياة عملائنا، من خلال الجمع بين التصميم الإبداعي والتنفيذ الدقيق والخدمة المتميزة.' },
  { title: 'قيمنا', content: 'نؤمن بالجودة العالية، الابتكار المستمر، النزاهة في التعامل، والتركيز على رضا العملاء. هذه القيم هي أساس نجاحنا وتميزنا في السوق.' },
]

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section ref={ref} className="py-20 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">من نحن</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            معتز جبر -               نحن متخصصون في تصميم وتنفيذ الديكورات الداخلية والخارجية و المطابخ الخشبية بأعلى مستويات الجودة والإبداع لنحول مساحتك إلى تحفة فنية تعكس أسلوب حياتك

          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/assets/home/living.jpg"
              alt="فريق معتز جبر في العمل"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#004851]">خبرة تمتد لأكثر من 18 عامًا</h3>
            <p className="text-lg text-gray-600">
              منذ تأسيسنا في عام 2006، قمنا بتحويل آلاف المساحات إلى أماكن استثنائية. نؤمن بأن لكل مساحة قصة فريدة، ومهمتنا هي مساعدتك في سردها من خلال التصميم والتنفيذ المتقن.
            </p>
            <p className="text-lg text-gray-600">
              نجمع بين الحرفية التقليدية والتقنيات الحديثة لضمان تنفيذ كل مشروع بأعلى مستويات الجودة والدقة. سواء كنت تبحث عن مطبخ عصري أو ديكور داخلي متكامل، فريقنا المتخصص جاهز لتحويل رؤيتك إلى واقع ملموس.
            </p>

            <div className="space-y-4">
              <div className="flex space-x-2 rtl:space-x-reverse">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-4 py-1 rounded transition-colors ${
                      activeTab === index
                        ? 'bg-[#004851] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              <p className="text-gray-600 bg-white p-4 rounded-lg shadow">{tabs[activeTab].content}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center"
            >
              <a 
                href="#contact" 
                className="inline-block bg-[#DF2935] text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-opacity-90 transition duration-300 shadow-md"
              >
                تواصل معنا لتحويل مساحتك
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white p-2 rounded-lg shadow text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h4 className="text-2xl font-bold mb-2 text-[#004851]">{feature.title}</h4>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

