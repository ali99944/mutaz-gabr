"use client"

import AppRoutes from "@/src/constants/app_routes"
import Dictionary from "@/src/types/dictionary"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function KitchenDesignPage({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.kitchen_design_page

  return (
    <div className="min-h-screen text-white">
      <main className="">
        <section className="relative h-[100vh] mb-16">
          <Image
            src="/images/kitchen/logo.png"
            alt="Kitchen Design"
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
          <motion.section
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-primary">{t.introduction.title}</h2>
            <p className="text-lg max-w-3xl mx-auto text-primary">{t.introduction.description}</p>
          </motion.section>
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-primary text-center">{t.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="group relative overflow-hidden rounded-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/kitchen-design/${index + 1}`}>
                  <div className="relative h-[300px] cursor-pointer">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-bold mb-2 text-app-secondary">{category.title}</h3>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-primary">{t.whyChooseUs.title}</h2>
                <ul className="space-y-4">
                  {t.whyChooseUs.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary ml-2">•</span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q070hb0ZAeTxjv8EFhftQxueXLFeDI.png"
                  alt="Kitchen Features"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.section>
          <motion.section
            className="py-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-primary p-8 rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-white">{t.cta.title}</h2>
              <p className="text-lg mb-6">{t.cta.description}</p>
              <div className="flex justify-center gap-x-2">
                <Link
                  href={AppRoutes.contact}
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/85 transition-colors"
                >
                  {t.cta.buttons.contact}
                </Link>
                <Link
                  href={AppRoutes.getFreeConsultation}
                  className="inline-block bg-app-secondary text-white px-8 py-3 rounded-lg hover:bg-app-secondary/85 transition-colors"
                >
                  {t.cta.buttons.consultation}
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  )
}

