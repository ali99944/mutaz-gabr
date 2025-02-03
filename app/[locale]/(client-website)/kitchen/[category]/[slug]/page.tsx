"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, DollarSign, Ruler, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// This would typically come from your API or database
const projectData = {
  id: 1,
  name: "فيلا الساحل الفاخرة",
  client_name: "أحمد محمد",
  area_size: 450,
  budget: 2000000,
  description:
    "تصميم داخلي فاخر لفيلا ساحلية تجمع بين الأناقة والراحة. يتميز المشروع بمساحات مفتوحة وإطلالات بانورامية على البحر، مع استخدام مواد طبيعية وألوان مستوحاة من الساحل.",
  specifications: "تصميم مخصص للأثاث، إضاءة ذكية، نظام تكييف متطور، مسبح لانهائي، مطبخ فاخر مجهز بالكامل",
  execution_days: 180,
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xU5zW7AFiOWZP6Rxf4ydLx46mV6P0f.png",
  category: "interior",
  sub_category: "Residential",
  gallery: [
    {
      id: 1,
      name: "غرفة المعيشة",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xU5zW7AFiOWZP6Rxf4ydLx46mV6P0f.png",
    },
    {
      id: 2,
      name: "المطبخ",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xU5zW7AFiOWZP6Rxf4ydLx46mV6P0f.png",
    },
    {
      id: 3,
      name: "غرفة النوم الرئيسية",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xU5zW7AFiOWZP6Rxf4ydLx46mV6P0f.png",
    },
    {
      id: 4,
      name: "الحمام",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xU5zW7AFiOWZP6Rxf4ydLx46mV6P0f.png",
    },
  ],
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectDetails() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-app-secondary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image src={projectData.image || "/placeholder.svg"} alt={projectData.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white text-center">{projectData.name}</h1>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/projects">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> العودة إلى المشاريع
          </Button>
        </Link>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div className="md:col-span-2" initial="hidden" animate="visible" variants={fadeIn}>
            <Card>
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
            className="md:col-span-1"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">معرض الصور</h2>
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    {projectData.gallery.map((image) => (
                      <CarouselItem key={image.id}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.name}
                                width={300}
                                height={300}
                                className="object-cover rounded-md"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20 px-4 mt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أعجبك هذا المشروع؟</h2>
          <p className="text-xl mb-8">دعنا نناقش كيف يمكننا تحويل مساحتك إلى شيء مميز.</p>
          <Button size="lg" className="bg-app-secondary hover:bg-app-secondary/90 text-white">
            احصل على استشارة مجانية
          </Button>
        </div>
      </section>
    </div>
  )
}

