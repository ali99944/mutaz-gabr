"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import CTA from "./cta"

interface Project {
  id: number
  title: string
  category: string
  location: string
  area: string
  completionDate: string
  description: string
  specs: string[]
  tags: string[]
  gallery: string[]
  similarProjects: {
    id: number
    title: string
    image: string
  }[]
}

interface ProjectDetailsProps {
  project: Project
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] mb-16">
          <Image
            src={project.gallery[0] || "/placeholder.svg"}
            alt={project.title}
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
              <h1 className="text-5xl font-bold text-[#9c8a5a] mb-6">{project.title}</h1>
              <p className="text-xl text-white/90">{project.category}</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Basic Information */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <h3 className="text-[#9c8a5a] font-semibold mb-2">الموقع</h3>
                <p>{project.location}</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#9c8a5a] font-semibold mb-2">المساحة</h3>
                <p>{project.area}</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#9c8a5a] font-semibold mb-2">تاريخ الإنجاز</h3>
                <p>{project.completionDate}</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#9c8a5a] font-semibold mb-2">تاريخ الإنجاز</h3>
                <p>{project.completionDate}</p>
              </div>
            </div>
          </motion.section>

          {/* Project Description */}
          <motion.section
            className="mb-16 bg-black/30 rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#9c8a5a]">وصف المشروع</h2>
            <p className="text-lg leading-relaxed">{project.description}</p>
          </motion.section>

          {/* Project Specs */}
          <motion.section
            className="mb-16 p-4 rounded-lg bg-black/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#9c8a5a]">مواصفات المشروع</h2>
            <ul className="list-disc list-inside grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {project.specs.map((spec, index) => (
                <div key={index} className="p-2 bg-black/40 text-center rounded-lg">
                  {spec}
                </div>
              ))}
            </ul>
          </motion.section>

          {/* Project Gallery */}
          <motion.section
            className="mb-16 bg-black/30 p-4 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#9c8a5a]">معرض الصور</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`صورة المشروع ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section>

          {/* Similar Projects */}
          <motion.section
            className="bg-black/30 rounded-lg p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-[#9c8a5a]">مشاريع مشابهة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.similarProjects.map((similarProject) => (
                <Link href={`/project/${similarProject.id}`} key={similarProject.id}>
                  <motion.div
                    className="bg-white/5 rounded-lg overflow-hidden"
                  >
                    <div>
                      <div className="relative h-48">
                        <Image
                          src={similarProject.image || "/placeholder.svg"}
                          alt={similarProject.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <h3 className="text-lg font-semibold text-white">{similarProject.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>

          <CTA />
        </div>
      </main>
    </div>
  )
}

