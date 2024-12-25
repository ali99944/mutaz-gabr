'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaQuoteRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'أحمد محمود',
    role: 'مالك منزل',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'تجربة رائعة مع معتز جابر! تم تصميم وتنفيذ مطبخي بدقة وجودة عالية تفوق توقعاتي. أنصح بشدة بالتعامل معهم.',
    rating: 5,
  },
  {
    name: 'سارة علي',
    role: 'مصممة داخلية',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    content: 'كمصممة داخلية، أقدر العمل الاحترافي الذي يقدمه فريق معتز جابر. إنهم يجمعون بين الإبداع والدقة في التنفيذ.',
    rating: 5,
  },
  {
    name: 'محمد خالد',
    role: 'صاحب شركة',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    content: 'قام فريق معتز جابر بتصميم وتنفيذ المكاتب الخاصة بشركتنا. النتيجة كانت مبهرة وعززت من إنتاجية الموظفين.',
    rating: 5,
  },
  {
    name: 'فاطمة حسن',
    role: 'ربة منزل',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    content: 'تعاملت مع معتز جابر لتجديد مطبخي وغرفة المعيشة. كانت التجربة سلسة والنتيجة رائعة. شكراً لكم على الإبداع!',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">ماذا يقول عملاؤنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفخر بثقة عملائنا وآرائهم الإيجابية حول خدماتنا وجودة عملنا
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <div className="p-8 relative">
                <FaQuoteRight className="absolute top-4 left-4 text-[#DF2935] opacity-10 text-4xl" />
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden ml-4 border-4 border-[#004851]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#004851]">{testimonial.name}</h3>
                    <p className="text-lg text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="inline-block text-yellow-400 ml-1 text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg relative z-10 leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

