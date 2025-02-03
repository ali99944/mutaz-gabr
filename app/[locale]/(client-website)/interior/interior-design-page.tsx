"use client"

import Dictionary from "@/src/types/dictionary"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const categories = [
  {
    title: "residential",
    subcategories: [
      { title: "apartments", image: "/images/interior/apartment.jpg" },
      { title: "villas", image: "/images/interior/villas.jpg" },
      { title: "towers", image: "/images/interior/tower.jpg" },
      { title: "chalets", image: "/images/interior/chalet.jpg" },
      { title: "shops", image: "/images/interior/cafe.jpg" },
    ],
  },
  {
    title: "commercial",
    image: "/images/interior/commercial.jpg",
  },
]

const galleryImages = [
  "/images/interior/projects/image copy 2.png",
  "/images/interior/projects/image copy 3.png",
  "/images/interior/projects/image copy 4.png",
  "/images/interior/projects/image copy 5.png",
]

export default function InteriorDesignPage({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.interior_design_page

  return (
    <div className="min-h-screen bg-background text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[100vh] mb-16">
          <Image
            src="/images/interior/projects/image copy 11.png"
            alt="Interior Design"
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
              <h1 className="text-5xl font-bold text-app-secondary mb-6">{t.hero.title}</h1>
              <p className="text-xl text-white/90">{t.hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <motion.section
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-app-secondary">{t.introduction.title}</h2>
            <p className="text-lg max-w-3xl mx-auto text-primary">{t.introduction.description}</p>
          </motion.section>

          {/* Categories Section */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.title} className="rounded-lg overflow-hidden">
                  {/* <div className="p-4 text-xl text-primary">{t.categories[category.title].title}</div> */}
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.subcategories ? (
                      category.subcategories.map((subcat) => (
                        <Link
                          href={`/interior/${subcat.title}`}
                          className="relative h-60 rounded-lg overflow-hidden"
                          key={subcat.title}
                        >
                          <div>
                            <Image
                              src={subcat.image || "/placeholder.svg"}
                              alt={t.categories[category.title].subcategories[subcat.title]}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <h3 className="text-xl font-semibold text-white">
                                {t.categories[category.title].subcategories[subcat.title]}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <Link href={"#"} className="relative h-96 rounded-lg overflow-hidden md:col-span-2 lg:col-span-3">
                        <div>
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={t.categories[category.title].title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h3 className="text-xl font-semibold text-white">{t.categories[category.title].title}</h3>
                          </div>
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us Section */}
          {/* <motion.section
            className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            {t.whyChooseUs.points.map((point, index) => (
              <div key={index} className="bg-primary/90 rounded-lg px-4 py-4 text-center">
                <p className="text-white/85 text-md font-semibold">{point}</p>
              </div>
            ))}
          </motion.section> */}

          {/* Creative Gallery */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

