'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    id: '1',
    name: 'تصميم المطابخ',
    description: 'نصمم مطابخ عصرية تجمع بين الأناقة والوظيفة، مع دمج أحدث التقنيات لتحسين تجربة الطهي وتسهيل الحياة اليومية.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
    icon: '/icons/kitchen.svg',
  },
  {
    id: '2',
    name: 'تصميم غرف المعيشة',
    description: 'نبتكر مساحات معيشة مريحة وأنيقة تعكس شخصيتك وتوفر بيئة مثالية للاسترخاء والترفيه.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80',
    icon: '/icons/living-room.svg',
  },
  {
    id: '3',
    name: 'تصميم غرف النوم',
    description: 'نصمم غرف نوم هادئة ومريحة توفر الراحة المثالية وتعزز جودة النوم.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    icon: '/icons/bedroom.svg',
  },
  {
    id: '4',
    name: 'تصميم الحمامات',
    description: 'نبتكر حمامات أنيقة وعملية تجمع بين الراحة والفخامة لتوفير تجربة استجمام فريدة.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    icon: '/icons/bathroom.svg',
  },
  {
    id: '5',
    name: 'تصميم المكاتب',
    description: 'نصمم مساحات عمل محفزة وعملية لزيادة الإنتاجية والإبداع في بيئة العمل.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    icon: '/icons/office.svg',
  },
  {
    id: '6',
    name: 'تصميم الواجهات الخارجية',
    description: 'نبدع في تصميم واجهات خارجية جذابة تعزز المظهر العام للمبنى وتترك انطباعًا أول رائعًا.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    icon: '/icons/exterior.svg',
  },
  {
    id: '7',
    name: 'تصميم المساحات التجارية',
    description: 'نصمم مساحات تجارية جذابة وعملية تعزز تجربة العملاء وتدعم نمو الأعمال.',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80',
    icon: '/icons/commercial.svg',
  },
  {
    id: '8',
    name: 'تصميم الحدائق والمساحات الخارجية',
    description: 'نبتكر حدائق ومساحات خارجية تمزج بين الجمال الطبيعي والتصميم الوظيفي لخلق واحات استرخاء مثالية.',
    image: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?auto=format&fit=crop&w=800&q=80',
    icon: '/icons/landscape.svg',
  },
]

export default function ServicesList() {
  return (
    <section id="services-list" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#004851]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          خدماتنا المتميزة
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center">
                  <div className="bg-white p-2 rounded-full mr-3">
                    <Image
                      src={service.icon}
                      alt={`${service.name} icon`}
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="text-white text-xl font-bold">{service.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4 h-20 overflow-hidden">{service.description}</p>
                <Link href={`/services/${service.id}`} legacyBehavior>
                  <a className="text-[#FF0000] font-semibold hover:underline">اكتشف المزيد</a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

