"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import CTA from "./cta"

interface Project {
  id: number
  title: string
  description: string
  image: string
}

interface CategoryProjectsProps {
  category: string
  projects: Project[]
  hero_image: string
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function CategoryProjects({ category, projects, hero_image }: CategoryProjectsProps) {
  const categoryTitles: { [key: string]: string } = {
    apartments: "الشقق",
    villas: "الفيلات",
    "towers-and-buildings": "الأبراج والمباني",
    chalets: "الشاليهات",
    "shops-and-cafes": "المحلات والمقاهي",
  }

  const categoryTitle = categoryTitles[category] || category

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] mb-16">
          <Image
            src={hero_image}
            alt={`مشاريع ${categoryTitle}`}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.div
              className="text-center max-w-4xl mx-auto px-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-[#9c8a5a] mb-6">مشاريع {categoryTitle}</h1>
              <p className="text-xl text-white/90">استعرض أحدث وأفضل تصاميمنا في فئة {categoryTitle}</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Grid */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white/5 rounded-lg overflow-hidden shadow"
                >
                  <div className="relative h-52">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#9c8a5a]">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    <Link
                      href={`/project/${project.id}`}
                      className="inline-block bg-[#9c8a5a] text-white px-4 py-2 rounded hover:bg-[#8a795c] transition-colors"
                    >
                      عرض التفاصيل
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <CTA />
        </div>
      </main>
    </div>
  )
}

