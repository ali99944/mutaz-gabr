'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

interface ServiceFeature {
  icon: React.ReactNode
  title: string
  description: string
}

interface ServiceStep {
  title: string
  description: string
  image: string
}

interface Testimonial {
  name: string
  role: string
  comment: string
  avatar: string
  rating: number
}

interface ServiceDetails {
  slug: string
  title: string
  description: string
  heroImage: string
  features: ServiceFeature[]
  steps: ServiceStep[]
  testimonials: Testimonial[]
  videoUrl: string
}

export default function ServiceDetails({ service }: { service: ServiceDetails }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#004851]/80 to-transparent" />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">{service.title}</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">{service.description}</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-[#DF2935] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-base md:text-lg font-bold transition duration-300"
            >
              احجز استشارة مجانية
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#004851] mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            مميزات خدماتنا
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <div className="mb-3 flex justify-center text-[#DF2935]">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[#004851] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#004851] mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            خطوات العمل
          </motion.h2>
          {service.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 last:mb-0`}
            >
              <div className="md:w-1/2 mb-6 md:mb-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  objectFit="cover"
                  className="rounded-lg shadow"
                />
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="flex items-center mb-4">
                  {/* <div className="w-12 h-12 bg-[#004851] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {index + 1}
                  </div> */}
                  <h3 className="text-2xl font-bold text-[#004851]">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="list-none mb-4">
                  <li className="flex items-start mb-2">
                    <span className="w-6 h-6 bg-[#004851] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      
                    </span>
                    نهتم بأدق التفاصيل
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="w-6 h-6 bg-[#004851] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      
                    </span>
                    نستخدم أحدث التقنيات
                  </li>
                  <li className="flex items-start">
                    <span className="w-6 h-6 bg-[#004851] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      
                    </span>
                    نضمن رضا العملاء
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Card Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-[#004851] text-white rounded-lg shadow overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4 md:p-4 flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">استكشف معرض أعمالنا</h2>
                <p className="text-sm text-center mb-6">شاهد مجموعة متنوعة من مشاريعنا السابقة واستلهم أفكارًا لمطبخك الجديد.</p>
                <div className="flex items-center justify-center">
                  <a href="/projects">
                  <button 
                  className="bg-[#DF2935] text-white px-6 py-2 rounded-lg text-xs font-bold transition duration-300"
                  >
                    عرض المعرض
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-[#004851] text-white rounded-lg shadow overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-4 md:p-12 flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-2/3 text-center">
                <h2 className="text-xl md:text-2xl font-bold mb-4">هل أنت مستعد لتحويل مطبخك إلى تحفة فنية؟</h2>
                <p className="text-sm mb-6">دعنا نساعدك في تحقيق حلم مطبخك المثالي. اتصل بنا اليوم للحصول على استشارة مجانية.</p>
                <a href="/get-free-consultation">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#DF2935] text-white px-6 py-2 rounded-lg text-sm font-bold transition duration-300"
                >
                  احجز استشارة مجانية
                </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

