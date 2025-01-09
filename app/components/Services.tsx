'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaKitchenSet, FaCouch, FaRuler } from 'react-icons/fa6'
import { Landmark, LandPlot } from 'lucide-react'

type ServiceSize = 'small' | 'medium' | 'large' | 'tall' | 'wide'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  size: ServiceSize
  color: string
}

const services: Service[] = [
  {
    icon: <FaKitchenSet className="text-4xl" />,
    title: 'تصميم و تنفيذ مطابخ خشبية',
    description: 'نبتكر مطابخ عصرية تجمع بين الجمال والوظيفة، مع دمج أحدث التقنيات لتحسين تجربة الطهي وتسهيل الحياة اليومية.',
    image: '/assets/home/kitchen.jpg',
    size: 'medium',
    color: '#FF6B6B'
  },
  {
    icon: <LandPlot className="text-4xl" />,
    title: 'تصميم landscape',
    description: 'نستخدم أرقى أنواع الدهانات والتشطيبات لإضفاء لمسة فنية على جدرانك، مع ضمان الجودة والمتانة لسنوات قادمة.',
    image: '/assets/home/balacony.jpg',
    size: 'large',
    color: '#4ECDC4'
  },
  {
    icon: <FaCouch className="text-4xl" />,
    title: 'تصميم داخلي',
    description: 'نحول رؤيتك إلى واقع من خلال تصميمات داخلية مبتكرة تعكس شخصيتك وتلبي احتياجاتك الفريدة.',
    image: '/assets/home/hall1.jpg',
    size: 'tall',
    color: '#45B7D1'
  },
  {
    icon: <Landmark className="text-4xl" />,
    title: 'تخطيط الاراضي',
    description: 'نصمم حلول إضاءة ذكية تجمع بين الوظيفة والجمال، لخلق أجواء مثالية في كل ركن من منزلك.',
    image: '/assets/home/outside.jpg',
    size: 'small',
    color: '#F7B267'
  },
  {
    icon: <FaRuler className="text-4xl" />,
    title: 'اعداد الرسوم و المقايسات',
    description: 'نبتكر تخطيطات ذكية تضمن الاستفادة القصوى من كل مساحة في منزلك، مع مراعاة الراحة والجمال.',
    image: '/assets/home/living.jpg',
    size: 'wide',
    color: '#6B5B95'
  },
]

export default function Services() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} id="services" className="py-20 bg-gradient-to-b from-[#004851] to-[#003840]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">خدماتنا المتميزة</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            نقدم مجموعة متكاملة من الخدمات لتحويل منزلك إلى تحفة معمارية تجمع بين الجمال والراحة
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const getGridClasses = (size: ServiceSize): string => {
    switch (size) {
      case 'small': return 'col-span-12 md:col-span-4 row-span-1'
      case 'medium': return 'col-span-12 md:col-span-6 row-span-2'
      case 'large': return 'col-span-12 md:col-span-8 row-span-2'
      case 'tall': return 'col-span-12 md:col-span-4 row-span-3'
      case 'wide': return 'col-span-12 row-span-1'
      default: return 'col-span-12 md:col-span-6 row-span-2'
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`${getGridClasses(service.size)} relative overflow-hidden rounded-2xl shadow-lg`}
      // initial="hidden"
      // animate={controls}
      // variants={{
      //   hidden: { opacity: 0, scale: 0.8 },
      //   visible: { 
      //     opacity: 1, 
      //     scale: 1, 
      //     transition: { duration: 0.5, delay: index * 0.1 } 
      //   }
      // }}
      // whileHover={{ scale: 1.03 }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent z-10" />
      <Image
        src={service.image}
        alt={service.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out"
        // style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
      />
      <div className="relative z-20 h-full p-6 flex flex-col justify-between">
        <div>
          <motion.div
            // initial={{ scale: 1 }}
            // animate={{ scale: isHovered ? 1.1 : 1 }}
            // transition={{ duration: 0.3 }}
            className="mb-4"
            style={{ color: service.color }}
          >
            {service.icon}
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{service.title}</h3>
          <p className="text-gray-300 text-sm md:text-base line-clamp-3">{service.description}</p>
        </div>
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          // transition={{ duration: 0.3 }}
        >
          <Link href={`/services/${encodeURIComponent(service.title)}`}>
            <span className="inline-block mt-4 px-6 py-2 bg-white text-[#004851] rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300">
              اكتشف المزيد
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

