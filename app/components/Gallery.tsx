'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const projects = [
  { 
    src: "/assets/home/kitchen.jpg", 
    alt: "مطبخ عصري فاخر",
    title: "مطبخ الأحلام العصري",
    description: "تصميم مطبخ حديث يجمع بين الأناقة والوظائف العملية"
  },
  { 
    src: "/assets/home/living2.jpg", 
    alt: "غرفة معيشة أنيقة",
    title: "غرفة معيشة فاخرة",
    description: "مساحة معيشة مريحة تجمع بين الرفاهية والراحة"
  },
  { 
    src: "/assets/home/hall1.jpg", 
    alt: "حمام فاخر",
    title: "واحة الاسترخاء",
    description: "حمام فاخر يوفر تجربة سبا في منزلك"
  },
  { 
    src: "/assets/home/living3.jpg", 
    alt: "غرفة نوم هادئة",
    title: "ملاذ النوم الهادئ",
    description: "غرفة نوم مصممة للراحة والاسترخاء التام"
  },
  { 
    src: "/assets/home/outside.jpg", 
    alt: "مساحة عمل مبتكرة",
    title: "مكتب المستقبل",
    description: "مساحة عمل عصرية تعزز الإنتاجية والإبداع"
  },
  { 
    src: "/assets/home/balacony.jpg", 
    alt: "ديكور داخلي مميز",
    title: "لمسة الفخامة",
    description: "تصميم داخلي يجمع بين الكلاسيكية والحداثة"
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="gallery" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">معرض أعمالنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">اكتشف روعة التصميم من خلال مجموعة مختارة من أحدث مشاريعنا</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white"
            >
              <div className="relative h-[300px]">
                <Image
                  src={project.src}
                  alt={project.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004851]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#D3D3D3] mb-4">{project.description}</p>
                <a href={`/projects/${index + 1}`}>
                  <button className="bg-[#DF2935] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300 shadow-md">
                    عرض التفاصيل
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a href="/projects">
          <button className="bg-[#DF2935] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md">
            عرض جميع المشاريع
          </button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

