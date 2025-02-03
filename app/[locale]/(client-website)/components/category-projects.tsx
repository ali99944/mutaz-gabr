"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface CategoryProjectsProps {
  category: string
  projects
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
    <div className="min-h-screen  text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] mb-16">
          <Image
            src={hero_image}
            alt={`مشاريع ${categoryTitle}`}
            fill
            className="object-fill object-center"
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
              <h1 className="text-5xl font-bold text-app-secondary mb-6">مشاريع {categoryTitle}</h1>
              <p className="text-xl text-white/90">استعرض أحدث وأفضل تصاميمنا في فئة {categoryTitle}</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {
            projects.length == 0 && (
              <div className="w-full flex items-center flex-col justify-center">
                <Image 
                  src={'/assets/images/studio.png'}
                  alt=""
                  width={120}
                  height={120}
                  className="mb-6"
                />
                <p className="text-2xl text-primary">No Projects where found here</p>
              </div>
            )
          }
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
              {projects.map((project, index) => (
                <Link key={index} href={project.id.toString()}>
                  <motion.div
                  key={project.id}
                  className="bg-primary rounded-lg overflow-hidden shadow"
                >
                  <div className="relative h-52">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />

                    <div className="inset-0 w-full h-full bg-black/15 absolute top-0 left-0"></div>

<div className="absolute inset-0 bg-black/50 flex flex-col items-end justify-end px-4 opacity-100 transition-colors duration-300 group-hover:bg-black/70">
                    <h3 className="text-xl font-semibold mb-2 text-app-secondary">{project.name}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                  </div>
                  </div>
                </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

