"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface DesignItem {
  id: string
  title: string
  description: string
  image: string
  features: string[]
}

interface DesignCategory {
  id: string
  title: string
  designs: DesignItem[]
}

const designCategories: DesignCategory[] = [
  {
    id: "living-rooms",
    title: "تصاميم غرف المعيشة",
    designs: [
      {
        id: "modern-living",
        title: "غرفة معيشة عصرية",
        description: "تصميم عصري يجمع بين الأناقة والراحة، مع استخدام الألوان الهادئة والأثاث الأنيق.",
        image: "/assets/home/living2.jpg",
        features: [
          "إضاءة متعددة المستويات",
          "أثاث عصري بخطوط نظيفة",
          "لوحة ألوان محايدة مع لمسات من الألوان الزاهية",
          "مساحة مفتوحة للتفاعل الاجتماعي",
        ],
      },
      {
        id: "classic-living",
        title: "غرفة معيشة كلاسيكية",
        description: "تصميم كلاسيكي فخم يعكس الأناقة التقليدية مع لمسات عصرية.",
        image: "/assets/home/living2.jpg",
        features: [
          "أثاث فاخر بتفاصيل منحوتة",
          "ثريا كريستال مركزية",
          "ستائر حريرية وسجاد شرقي",
          "جدران مزخرفة بألواح خشبية",
        ],
      },
    ],
  },
  {
    id: "bedrooms",
    title: "تصاميم غرف ��لنوم",
    designs: [
      {
        id: "minimalist-bedroom",
        title: "غرفة نوم بسيطة",
        description: "تصميم بسيط وهادئ يركز على الراحة والاسترخاء.",
        image: "/assets/home/living2.jpg",
        features: ["لوحة ألوان هادئة", "أثاث وظيفي بخطوط بسيطة", "إضاءة خافتة وناعمة", "مساحة تخزين مدمجة"],
      },
      {
        id: "luxury-bedroom",
        title: "غرفة نوم فاخرة",
        description: "تصميم فاخر يوفر تجربة نوم استثنائية مع أقصى درجات الراحة.",
        image: "/assets/home/living2.jpg",
        features: ["سرير كبير مع رأس سرير مبطن", "أقمشة فاخرة وستائر ثقيلة", "منطقة جلوس خاصة", "حمام داخلي فاخر"],
      },
    ],
  },
  {
    id: "home-offices",
    title: "تصاميم المكاتب المنزلية",
    designs: [
      {
        id: "modern-office",
        title: "مكتب منزلي عصري",
        description: "مساحة عمل عصرية تجمع بين الوظيفة والأناقة لزيادة الإنتاجية.",
        image: "/assets/home/living2.jpg",
        features: ["مكتب قابل للتعديل", "كرسي مريح بدعم للظهر", "إضاءة موجهة للعمل", "تنظيم ذكي للكابلات والأجهزة"],
      },
      {
        id: "creative-studio",
        title: "استوديو إبداعي",
        description: "مساحة عمل ملهمة للمبدعين والفنانين.",
        image: "/assets/home/living2.jpg",
        features: [
          "إضاءة طبيعية وفيرة",
          "مساحة تخزين مرنة للأدوات والمواد",
          "لوحة مزاجية للإلهام",
          "منطقة عرض للأعمال الفنية",
        ],
      },
    ],
  },
]

export default function InteriorDesigns() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null)

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <main className="pt-4  pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-8">
            {designCategories.map((category) => (
              <motion.div
                key={category.id}
                className="bg-[#2a2a2a] rounded-lg overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-xl font-semibold text-[#9c8a5a]"
                  onClick={() => toggleCategory(category.id)}
                >
                  {category.title}
                </button>
                {(
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.designs.map((design) => (
                      <div key={design.id} className="bg-[#3a3a3a] h-96 rounded-lg overflow-hidden relative cursor-pointer" onClick={() => setSelectedDesign(design)}>
                        <Image
                          src={design.image || "/placeholder.svg"}
                          alt={design.title}
                          layout="fill"
                          objectFit="cover"
                        />
                        
                        <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-50 text-right w-full">
                          <h3 className="text-xl font-semibold text-[#9c8a5a] mb-1">{design.title}</h3>
                          <p className="text-gray-300">{design.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
            className="bg-[#2a2a2a] rounded-lg overflow-hidden max-w-3xl w-full mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <Image
                src={selectedDesign.image || "/placeholder.svg"}
                alt={selectedDesign.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#9c8a5a] mb-4">{selectedDesign.title}</h2>
              <p className="text-gray-300 mb-4">{selectedDesign.description}</p>
              <h3 className="text-xl font-semibold text-[#9c8a5a] mb-2">المميزات:</h3>

              <Link
                href={`/interior-design/${selectedDesign.id}`}
                className="bg-[#9c8a5a] text-white px-4 py-2 rounded-lg hover:bg-[#8a795c] transition-colors inline-block"
              >
                عرض التفاصيل الكاملة
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

