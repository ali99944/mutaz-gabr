'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaUser } from 'react-icons/fa'

// Mock data for the service
const serviceData = {
  id: '1',
  title: 'تصميم وتنفيذ الديكورات الداخلية',
  description: 'نقدم خدمات شاملة لتصميم وتنفيذ الديكورات الداخلية التي تجمع بين الأناقة والوظائفية. نحن نهتم بكل التفاصيل لضمان مساحة تلبي احتياجاتك وتعكس أسلوبك الشخصي.',
  image: '/assets/images/interior/living-room.jpg',
  features: [
    {
      title: 'تصميم مخصص',
      description: 'نصمم كل مشروع بشكل فريد ليناسب ذوقك وأسلوب حياتك',
      icon: '🎨'
    },
    {
      title: 'جودة عالية',
      description: 'نستخدم أفضل الخامات والتقنيات لضمان نتائج استثنائية',
      icon: '✨'
    },
    {
      title: 'فريق متخصص',
      description: 'يعمل معنا نخبة من المصممين والحرفيين ذوي الخبرة',
      icon: '👥'
    },
    {
      title: 'التزام بالمواعيد',
      description: 'نحرص على إنجاز المشاريع في الوقت المحدد دون تأخير',
      icon: '⏱️'
    },
    {
      title: 'دعم ما بعد التنفيذ',
      description: 'نقدم خدمات الصيانة والدعم لضمان رضاك الدائم',
      icon: '🛠️'
    },
    {
      title: 'تصميم مستدام',
      description: 'نراعي الاستدامة في اختياراتنا للمواد والتصاميم',
      icon: '🌿'
    }
  ],
  gallery: [
    '/assets/images/kitchens/1.jpeg',
    '/assets/images/kitchens/2.jpeg',
    '/assets/images/kitchens/3.jpeg',
    '/assets/images/kitchens/4.jpeg',
    '/assets/images/kitchens/5.jpeg',
    '/assets/images/kitchens/6.jpeg',
  ],
  testimonials: [
    { 
      name: 'عائلة الأحمد',
      location: 'القاهرة الجديدة',
      comment: 'تجربة لا تنسى مع فريق معتز جبر تم تنفيذ كل التفاصيل باحترافية عالية',
      rating: 5 
    },
    { 
      name: 'عائلة المنصور',
      location: 'المعادي',
      comment: 'احترافية عالية في التنفيذ ودقة في المواعيد. أنصح بهم بشدة',
      rating: 5 
    },
    { 
      name: 'عائلة العربي',
      location: 'الشيخ زايد',
      comment: 'جودة الخامات والتشطيب فاقت توقعاتي. شكراً لفريق معتز جبر',
      rating: 5 
    },
    { 
      name: 'عائلة السيد',
      location: 'التجمع الخامس',
      comment: 'تصميم راقي وتنفيذ محترف. سعداء جداً بالنتيجة النهائية',
      rating: 5 
    }
  ]
}

export default function ServiceDetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={'/assets/images/kitchens/44.jpg'}
          alt={serviceData.title}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0  bg-[#004851] opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {serviceData.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl"
            >
              {serviceData.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Features Section */}
        <section className="mb-20" ref={ref}>
          <h2 className="text-4xl font-bold text-[#004851] mb-12 text-center">مميزات خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#004851] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#004851] mb-12 text-center">معرض الصور</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {serviceData.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow"
              >
                <Image
                  src={image}
                  alt={`معرض الصور ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-[#004851] mb-12 text-center">آراء عملائنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#004851] text-white rounded-lg p-6 shadow"
              >
                <h3 className="text-xl font-bold mb-4">تفاصيل العميل</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#DF2935] rounded-full p-2">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-300">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-[#DF2935]" />
                  ))}
                </div>
                <p className="italic text-gray-100">&quot;{testimonial.comment}&quot;</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-[#004851] text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">هل أنت مستعد لتحويل مساحتك؟</h2>
            <p className="text-xl mb-6">دعنا نساعدك في تحقيق المساحة المثالية التي تحلم بها. اتصل بنا اليوم لجدولة استشارة مجانية.</p>
            <button className="bg-[#DF2935] text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition duration-300 transform hover:scale-105">
              احجز استشارة مجانية
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

