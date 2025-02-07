"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Loader2, Calendar, DollarSign, Maximize, Clock, FileText, Grid } from 'lucide-react'
import { getDesignById } from "@/src/actions/design-actions"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function DesignDetailsPage({ params }: { params: { id: string } }) {
  const [design, setDesign] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const fetchDesign = async () => {
      try {
        const fetchedDesign = await getDesignById(Number(params.id))
        setDesign(fetchedDesign)
      } catch (error) {
        console.error("Error fetching design:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchDesign()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
      </div>
    )
  }

  if (!design) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-2xl text-gray-600">التصميم غير موجود</p>
      </div>
    )
  }

  const categoryMap = {
    interior: "Interior Design",
    kitchen: "Kitchen Design",
    real_estate: "Real Estate",
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded overflow-hidden"
        >
          {/* Hero Section */}
          <div className="relative h-96 lg:h-[70vh] max-w-5xl mx-auto">
            <Image
              src={design.cover_image || "/placeholder.svg"}
              alt={design.name}
              layout="fill"
              objectFit="fill"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
              <div className="p-4">
                <h1 className="text-4xl font-bold text-white mb-2">{design.name}</h1>
                <div className="flex items-center gap-x-2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {categoryMap[design.category]}
                  </span>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {design.sub_category}
                  </span>

                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">تفاصيل التصميم</h2>
                <p className="text-gray-600 mb-6">{design.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center text-primary gap-x-2 mb-2">
                      <Maximize className="w-5 h-5 " />
                      <span className="font-semibold">المساحة</span>
                    </div>
                    <p className="text-2xl font-bold">{design.area_size} م²</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center text-primary gap-x-2 mb-2">
                      <DollarSign className="w-5 h-5 " />
                      <span className="font-semibold">الميزانية</span>
                    </div>
                    <p className="text-2xl font-bold">{design.budget} ج.م</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center text-primary gap-x-2 mb-2">
                      <Clock className="w-5 h-5 " />
                      <span className="font-semibold">المدة الزمنية</span>
                    </div>
                    <p className="text-2xl font-bold">{design.amount_of_time}</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-center text-primary gap-x-2 mb-2">
                      <Calendar className="w-5 h-5 " />
                      <span className="font-semibold">تاريخ الإنشاء</span>
                    </div>
                    <p className="text-lg">{design.created_at}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">المواصفات</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-start gap-x-2">
                      <FileText className="w-5 h-5  text-gray-500 mt-1" />
                      <p className="text-gray-700">{design.specifications}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">المواد المستخدمة</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex items-start gap-x-2">
                      <Grid className="w-5 h-5  text-gray-500 mt-1" />
                      <p className="text-gray-700">{design.used_materials_content}</p>
                    </div>
                  </div>
                </div>

                {design.connected_project && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">المشروع المرتبط</h3>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <p className="text-blue-800">{design.connected_project.name}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Image Gallery */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">معرض الصور</h2>
                <div className="relative w-full h-64 lg:h-96 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={design.gallery[activeImage]?.src || "/placeholder.svg"}
                    alt={design.gallery[activeImage]?.name || "صورة التصميم"}
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {design.gallery.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setActiveImage(index)}
                      className={`relative h-28 rounded-md overflow-hidden ${
                        index === activeImage ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.name}
                        layout="fill"
                        objectFit="fill"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}