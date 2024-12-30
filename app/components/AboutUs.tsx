'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaMedal, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa'

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    { icon: <FaMedal className="text-4xl text-[#DF2935]" />, title: 'الجودة العالية', description: 'نلتزم بأعلى معايير الجودة في كل مشروع نقوم به' },
    { icon: <FaHandshake className="text-4xl text-[#DF2935]" />, title: 'خدمة العملاء', description: 'نضع رضا العملاء في صميم كل ما نقوم به' },
    { icon: <FaLightbulb className="text-4xl text-[#DF2935]" />, title: 'الابتكار', description: 'نسعى دائمًا لتقديم حلول مبتكرة وتصاميم فريدة' },
    { icon: <FaUsers className="text-4xl text-[#DF2935]" />, title: 'فريق متخصص', description: 'يتكون فريقنا من خبراء متخصصين في مجال التصميم والتنفيذ' },
  ]

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">من نحن</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">نحن شركة معتز جبر للمطابخ والديكور، نجمع بين الفن والوظيفة لخلق مساحات استثنائية تعكس شخصيتك وتلبي احتياجاتك</p>
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
              alt="فريق معتز جبر في العمل"
              width={600}
              height={400}
              className="rounded-lg shadow-md z-10 relative"
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
              منذ تأسيسنا في عام 2006، قمنا بتحويل آلاف المنازل والمكاتب إلى أماكن استثنائية. نحن نؤمن بأن كل مساحة لها قصة فريدة، ومهمتنا هي مساعدتك في سرد هذه القصة من خلال التصميم والتنفيذ المتقن.
            </p>
            <p className="text-lg text-gray-600">
              نحن نجمع بين الحرفية التقليدية والتقنيات الحديثة لضمان أن كل مشروع يتم تنفيذه بأعلى مستويات الجودة والدقة. سواء كنت تبحث عن مطبخ عصري أو ديكور داخلي كامل، فإن فريقنا المتخصص على استعداد لتحويل رؤيتك إلى واقع ملموس.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#contact" className="inline-block bg-[#DF2935] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md mt-4">
                تواصل معنا لتحويل مساحتك
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow text-center transform transition-all duration-300"
            >
              <div className="mb-4 text-[#DF2935]">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-2 text-[#004851]">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-[#004851]">شركاؤنا في النجاح</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5].map((partner) => (
              <Image
                key={partner}
                src={`/assets/images/partner-${partner}.png`}
                alt={`Partner ${partner}`}
                width={120}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

