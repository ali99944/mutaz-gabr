"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { DollarSign, Ruler, Calendar, User, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import BoxesLoader from "@/app/[locale]/(client-website)/components/boxes-loader"
import { getProjectById } from "@/src/actions/project"
import CTA from "@/app/[locale]/(client-website)/components/cta"


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState(true)
  const [projectData, setProjectData] = useState(null)
  
  const getProject = async () => {
    try {
      const data = await getProjectById(+params.id)
      setProjectData(data)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching project data:", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  if (isLoading) {
    return (
      <BoxesLoader />
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <div className="relative h-[50vh] lg:h-[70vh]">
        <Image src={projectData.image || "/placeholder.svg"} alt={projectData.name} fill className="object-fill" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-center">{projectData.name}</h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="px-4 py-8">

        {/* Project Details */}
        <div className="flex flex-col gap-y-4">
          <motion.div className="md:col-span-2" initial="hidden" animate="visible" variants={fadeIn}>
            <Card className="rounded shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">تفاصيل المشروع</h2>
                <p className="text-gray-700 mb-6">{projectData.description}</p>
                <h3 className="text-xl font-semibold mb-2">المواصفات</h3>
                <p className="text-gray-700 mb-6">{projectData.specifications}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-app-secondary" />
                    <span>العميل: {projectData.client_name}</span>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="h-5 w-5 mr-2 text-app-secondary" />
                    <span>المساحة: {projectData.area_size} م²</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-app-secondary" />
                    <span>الميزانية: {projectData.budget.toLocaleString()} ج.م</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-app-secondary" />
                    <span>مدة التنفيذ: {projectData.execution_days} يوم</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-app-secondary" />
                    <span>الفئة: {projectData.category}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-5 w-5 mr-2 text-app-secondary" />
                    <span>الفئة الفرعية: {projectData.sub_category}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="md:col-span-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            {projectData.gallery.map((image) => (
              <div key={image.id} className="p-1">
                <motion.div className="relative h-48 rounded-lg overflow-hidden">
                                  <Image
                                    src={image.src || "/placeholder.svg"}
                                    alt={`Gallery Image`}
                                    fill
                                    className="object-cover"
                                  />
                                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}

