'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

interface Project {
  id: number
  name: string
  image: string
  description: string
  category: string
}

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects: Project[] = [
    {
      id: 1,
      name: 'مطبخ عصري فاخر',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80',
      description: 'تصميم مطبخ حديث بألوان متناسقة ومساحات تخزين ذكية',
      category: 'مطابخ'
    },
    {
      id: 2,
      name: 'غرفة معيشة أنيقة',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      description: 'ديكور غرفة جلوس بأسلوب عصري ومريح',
      category: 'غرف معيشة'
    },
    {
      id: 3,
      name: 'حمام فندقي راقي',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      description: 'تصميم حمام فاخر بلمسات رخامية وإضاءة مميزة',
      category: 'حمامات'
    },
    {
      id: 4,
      name: 'غرفة نوم هادئة',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      description: 'تصميم غرفة نوم تجمع بين الراحة والأناقة',
      category: 'غرف نوم'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white text-[#004851]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">مشاريعنا المميزة</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">نفخر بتقديم مجموعة من أفضل مشاريعنا التي تعكس التزامنا بالجودة والإبداع في كل تفصيل</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004851]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: '100%' }}
                animate={{ y: hoveredProject === project.id ? 0 : '100%' }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block px-3 py-1 bg-[#DF2935] text-white text-sm font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-[#D3D3D3] mb-4">{project.description}</p>
                <button className="bg-white text-[#004851] px-4 py-2 rounded-lg hover:bg-[#D3D3D3] transition-colors duration-300">
                  عرض التفاصيل
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-[#DF2935] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md">
            عرض جميع المشاريع
          </button>
        </motion.div>
      </div>
    </section>
  )
}

