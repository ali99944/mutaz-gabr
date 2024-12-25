'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRuler, FaPaintBrush, FaAward, FaTools, FaStar } from 'react-icons/fa'

// Enhanced project data (unchanged)
const projectData = {
  id: '1',
  title: 'مطبخ عصري فاخر',
  description: 'تصميم مطبخ حديث يجمع بين الأناقة والوظائف العملية، مع استخدام أحدث التقنيات والمواد عالية الجودة لخلق مساحة طهي استثنائية تلبي جميع احتياجات العائلة العصرية.',
  client: {
    name: 'عائلة الأحمد',
    location: 'القاهرة الجديدة',
    rating: 5,
    review: 'تجربة لا تُنسى مع فريق معتز جبر. تم تنفيذ كل التفاصيل باحترافية عالية.'
  },
  details: {
    date: '2023',
    duration: '45 يوم',
    area: '24 متر مربع',
    style: 'عصري مودرن',
    category: 'مطابخ'
  },
  features: [
    {
      icon: <FaRuler className="text-2xl text-[#DF2935]" />,
      title: 'تصميم مفتوح',
      description: 'يتكامل مع غرفة الطعام لخلق مساحة اجتماعية مثالية'
    },
    {
      icon: <FaPaintBrush className="text-2xl text-[#DF2935]" />,
      title: 'تشطيبات فاخرة',
      description: 'خامات عالية الجودة مع ضمان 10 سنوات'
    },
    {
      icon: <FaTools className="text-2xl text-[#DF2935]" />,
      title: 'تخزين ذكي',
      description: 'حلول تخزين مبتكرة تستغل كل سنتيمتر'
    },
    {
      icon: <FaAward className="text-2xl text-[#DF2935]" />,
      title: 'أجهزة متطورة',
      description: 'أحدث الأجهزة المنزلية الموفرة للطاقة'
    }
  ],
  specifications: [
    { label: 'نوع الخشب', value: 'زان طبيعي معالج' },
    { label: 'سطح العمل', value: 'رخام كوارتز مقاوم للخدش' },
    { label: 'الإضاءة', value: 'LED قابلة للتحكم' },
    { label: 'المقابض', value: 'ستانلس ستيل مطفي' },
    { label: 'اللون الرئيسي', value: 'أبيض مع لمسات خشبية' },
    { label: 'الضمان', value: '10 سنوات شامل' }
  ],
  process: [
    { stage: 'التصميم المبدئي', duration: '7 أيام' },
    { stage: 'اختيار المواد', duration: '5 أيام' },
    { stage: 'التصنيع', duration: '20 يوم' },
    { stage: 'التركيب', duration: '10 أيام' },
    { stage: 'التشطيبات النهائية', duration: '3 أيام' }
  ],

  images: [
    '/assets/images/kitchens/44.jpg',
    '/assets/images/kitchens/111.jpg',
    '/assets/images/kitchens/44.jpg',
    '/assets/images/kitchens/111.jpg',
    '/assets/images/kitchens/333.jpg',
  ]
}

export default function ProjectDetailsSection() {
  const [currentImage] = useState(0)
  const containerRef = useRef(null)


  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen max-md:h-[60vh] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={'/assets/images/kitchens/44.jpg'}
              alt={`صورة المشروع ${currentImage + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-center"
          >
            {projectData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl text-center"
          >
            {projectData.description}
          </motion.p>
        </div>
      </section>

      {/* Existing Project Details Section */}
      <motion.section 
        ref={containerRef}
        style={{ opacity: 1, scale: 1 }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Improved Project Overview Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#004851] mb-8 text-center">نظرة عامة على المشروع</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(projectData.details).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow"
                >
                  <h3 className="text-2xl text-[#004851] font-semibold mb-2 border-r-4 border-[#DF2935] pr-4">
                    {key === 'date' ? 'تاريخ التنفيذ' :
                     key === 'duration' ? 'مدة التنفيذ' :
                     key === 'area' ? 'المساحة' :
                     key === 'style' ? 'الطراز' : 'الفئة'}
                  </h3>
                  <p className="text-sm font-bold">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Column - Project Details */}
            <div className="lg:col-span-2 space-y-4">
              {/* Project Overview */}
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-3xl font-bold text-[#004851] mb-4 border-r-4 border-[#DF2935] pr-4">
                  تفاصيل المشروع
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {projectData.description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-50 rounded-full p-3">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#004851] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Specifications Table */}
              <div className="bg-white rounded-lg shadow p-8">
                <h2 className="text-3xl font-bold text-[#004851] mb-4 border-r-4 border-[#DF2935] pr-4">
                  المواصفات الفنية
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectData.specifications.map((spec, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center border-b border-gray-100 py-3"
                    >
                      <span className="font-semibold text-[#004851]">{spec.label}</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Client Details & Process */}
            <div className="space-y-4">
              {/* Client Card */}
              <div className="bg-[#004851] text-white rounded-lg shadow p-4">
                <h3 className="text-2xl font-bold mb-4">تفاصيل العميل</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#DF2935] rounded-full p-2">
                      <FaAward className="text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">{projectData.client.name}</p>
                      <p className="text-sm text-gray-300">{projectData.client.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 my-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i}
                        className={`text-xl ${i < projectData.client.rating ? 'text-[#DF2935]' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">&quot;{projectData.client.review}&quot;</p>
                </div>
              </div>

              {/* Project Process Timeline */}
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-2xl font-bold text-[#004851] mb-4 border-r-4 border-[#DF2935] pr-4">مراحل التنفيذ</h3>
                <div className="space-y-6">
                  {projectData.process.map((stage, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#004851] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-[#004851]">{stage.stage}</p>
                          <p className="text-sm text-gray-500">{stage.duration}</p>
                        </div>
                      </div>
                      {index < projectData.process.length - 1 && (
                        <div className="absolute right-4 top-10 w-0.5 h-8 bg-gray-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="mb-20 mt-20">
            <h2 className="text-3xl font-bold text-[#004851] mb-8 text-center">صور المشروع</h2>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {projectData.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg shadow"
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={image}
                    alt={`صورة المشروع ${index + 1}`}
                    width={400}
                    height={400}
                    objectFit="cover"
                    className="w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
          {/* Enhanced Call to Action */}
          <div className="mt-20">
            <div className="relative bg-[#004851] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <div className="relative z-10 p-4 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="text-4xl font-bold mb-4">هل أنت مستعد لتحويل مساحتك؟</h2>
                  <p className="text-xl mb-8 text-gray-100">
                    دعنا نحول أفكارك إلى واقع ملموس. فريقنا المتخصص جاهز لمساعدتك في تحقيق حلمك.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-[#DF2935] px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-opacity-90 transition-colors duration-300">
                      احجز استشارة مجانية
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#004851] transition-colors duration-300">
                      تواصل معنا مباشرة
                    </button>
                  </div>
                </motion.div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute left-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-16 translate-y-16" />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}