'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const teamMembers = [
  {
    name: 'معتز جابر',
    role: 'المؤسس والمدير التنفيذي',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'خبرة تمتد لأكثر من 20 عامًا في مجال التصميم الداخلي والمطابخ الفاخرة.',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:moataz@example.com'
  },
  {
    name: 'سارة أحمد',
    role: 'كبير المصممين',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80',
    bio: 'مصممة موهوبة بخبرة 10 سنوات في تصميم المطابخ والمساحات الداخلية.',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:sarah@example.com'
  },
  {
    name: 'محمد علي',
    role: 'مدير المشاريع',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    bio: 'خبير في إدارة المشاريع مع سجل حافل في تسليم المشاريع في الوقت المحدد وضمن الميزانية.',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:mohamed@example.com'
  },
  {
    name: 'نور حسن',
    role: 'مصمم داخلي',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'مصممة مبدعة تجلب رؤية فريدة لكل مشروع، مع التركيز على التصاميم المستدامة.',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:noor@example.com'
  },
  {
    name: 'عمر محمد',
    role: 'مصمم داخلي',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    bio: 'مصمم داخلي مبدع مع خبرة 5 سنوات في تصميم المساحات الداخلية والخارجية.',
    linkedin: 'https://www.linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:omar@example.com'
  },
]


export default function TeamSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">فريقنا المتميز</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعرف على الخبراء الذين يقودون رحلة الإبداع والتميز في معتز جابر للتصميم الداخلي
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004851]/90 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <p className="text-white text-center">{member.bio}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-[#004851]">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4 flex-row-reverse">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:text-[#004851] transition-colors duration-300">
                    <FaLinkedin size={24} />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-[#004851] transition-colors duration-300">
                    <FaTwitter size={24} />
                  </a>
                  <a href={member.email} className="text-[#DF2935] hover:text-[#004851] transition-colors duration-300">
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

