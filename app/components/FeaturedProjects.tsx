'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

interface Project {
  id: number
  name: string
  image: string
  size: 'small' | 'medium' | 'large'
}

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2, once: true })

  const projects: Project[] = [
    {
      id: 1,
      name: 'فيلا العائلة السعيدة - القاهرة الجديدة',
      image: '/assets/home/kitchen.jpg',
      size: 'large'
    },
    {
      id: 2,
      name: 'حديقة منزل الدكتور أحمد - الشيخ زايد',
      image: '/assets/home/balacony.jpg',
      size: 'medium'
    },
    {
      id: 3,
      name: 'شقة السيد محمود - المعادي',
      image: '/assets/home/hall1.jpg',
      size: 'small'
    },
    {
      id: 4,
      name: 'مجمع سكني النخيل - 6 أكتوبر',
      image: '/assets/home/outside.jpg',
      size: 'small'
    },
    {
      id: 5,
      name: 'فيلا الدكتورة سارة - التجمع الخامس',
      image: '/assets/home/living.jpg',
      size: 'small'
    }
  ]

  return (
    <section ref={ref} id="projects" className="py-20 bg-white text-[#004851]">
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
        <div className="grid grid-cols-12 gap-4 auto-rows-[minmax(200px,auto)]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="inline-flex items-center text-[#DF2935] font-bold hover:underline transition duration-300">
            <span className="ml-2">عرض جميع المشاريع</span>
            <ArrowLeft size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { once: true, amount: 0.2 })

  const getGridClasses = (size: Project['size']): string => {
    switch (size) {
      case 'small': return 'col-span-12 sm:col-span-6 lg:col-span-4 row-span-1'
      case 'medium': return 'col-span-12 sm:col-span-6 lg:col-span-4 row-span-2'
      case 'large': return 'col-span-12 lg:col-span-8 row-span-2'
      default: return 'col-span-12 sm:col-span-6 lg:col-span-4 row-span-1'
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={`${getGridClasses(project.size)} relative overflow-hidden rounded-xl shadow`}
      initial={{ opacity: 0, y: 50 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#004851]/50 to-transparent z-10" />
      <Image
        src={project.image}
        alt={project.name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="relative z-20 h-full p-4 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex-1">{project.name}</h3>
          <Link href={`/projects/${project.id}`}>
            <span className="text-white text-sm hover:underline">
              عرض التفاصيل
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

