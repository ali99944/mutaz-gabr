"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface DesignItem {
  id: string
  title: string
  description: string
  image: string
}

const designItems: DesignItem[] = [
  {
    id: "1",
    title: "مطبخ عصري مفتوح",
    description: "تصميم مطبخ عصري مفتوح يجمع بين الأناقة والوظيفة",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "2",
    title: "مطبخ كلاسيكي فاخر",
    description: "تصميم مطبخ كلاسيكي فاخر يعكس الأصالة والرقي",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "3",
    title: "مطبخ صغير ذكي",
    description: "تصميم مطبخ صغير يستغل المساحة بذكاء وكفاءة",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "3",
    title: "مطبخ صغير ذكي",
    description: "تصميم مطبخ صغير يستغل المساحة بذكاء وكفاءة",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "3",
    title: "مطبخ صغير ذكي",
    description: "تصميم مطبخ صغير يستغل المساحة بذكاء وكفاءة",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "3",
    title: "مطبخ صغير ذكي",
    description: "تصميم مطبخ صغير يستغل المساحة بذكاء وكفاءة",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "3",
    title: "مطبخ صغير ذكي",
    description: "تصميم مطبخ صغير يستغل المساحة بذكاء وكفاءة",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "3",
    title: "مطبخ صغير ذكي",
    description: "تصميم مطبخ صغير يستغل المساحة بذكاء وكفاءة",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "3",
    title: "مطبخ صغير ذكي",
    description: "تصميم مطبخ صغير يستغل المساحة بذكاء وكفاءة",
    image: "/images/kitchen/logo.png",
  },
  {
    id: "3",
    title: "مطبخ صغير ذكي",
    description: "تصميم مطبخ صغير يستغل المساحة بذكاء وكفاءة",
    image: "/images/kitchen/logo.png",
  },
  // Add more design items as needed
]

export default function KitchenDesigns() {
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null)

  return (
    <div className="min-h-screen text-white">
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {designItems.map((item) => (
              <motion.div
                key={item.id}
                className=" rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedDesign(item)}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <div className="relative h-64">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} layout="fill" objectFit="fill" />
                  <div className="p-4 absolute bottom-0 left-0 w-full">
                  <h2 className="text-xl font-semibold text-app-secondary mb-2">{item.title}</h2>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {selectedDesign && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedDesign(null)}
        >
          <motion.div
            className=" rounded-lg overflow-hidden max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <Image
                src={selectedDesign.image || "/placeholder.svg"}
                alt={selectedDesign.title}
                layout="fill"
                objectFit="fill"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-primary mb-4">{selectedDesign.title}</h2>
              <p className="text-gray-300">{selectedDesign.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

