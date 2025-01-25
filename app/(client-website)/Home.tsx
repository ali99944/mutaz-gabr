"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import StatisticCounter from "./components/statistics-counter"

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q070hb0ZAeTxjv8EFhftQxueXLFeDI.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZNKqTfjrax3OSKMfKVKnj632GrXrg9.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OnswRq0tIpjLwJwfYXW5Qd5jkRUS0h.png",
]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f5f5]">

      {/* Hero Section */}
      <div className="relative h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={image || "/placeholder.svg"} alt={`Hero image ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">معتز جابر للتصميم الداخلي</h1>
            <p className="text-xl md:text-2xl mb-8">نحول رؤيتك إلى واقع ملموس</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">خدماتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "التصميم الداخلي",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q070hb0ZAeTxjv8EFhftQxueXLFeDI.png",
              },
              {
                title: "تصميم المطابخ",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZNKqTfjrax3OSKMfKVKnj632GrXrg9.png",
              },
              {
                title: "العقارات",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OnswRq0tIpjLwJwfYXW5Qd5jkRUS0h.png",
              },
            ].map((service, index) => (
              <Link href="/services" key={index} className="group relative rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-100 transition-colors duration-300 group-hover:bg-black/70">
                  <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    

      {/* About Section */}
      <section className="py-20 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#9c8a5a]">معتز جابر للتصميم</h2>
              <p className="text-lg mb-6 leading-relaxed">
                تأسست شركة معتز جابر للتصميم الداخلي والمطابخ في عام 2008 في الغردقة وأسيوط، مصر الجديدة وحالياً في مدينة
                الشروق ومدينة نصر.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                نحن متخصصون في خدمات التصميم الداخلي والهندسة المعمارية، ونقدم حلولاً مبتكرة تلبي احتياجات عملائنا
                وتتجاوز توقعاتهم.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OnswRq0tIpjLwJwfYXW5Qd5jkRUS0h.png"
                alt="About MG Group"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

                  {/* Statistics Section */}
                  <div className="py-12 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#9c8a5a]">إنجازاتنا بالأرقام</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatisticCounter end={500} title="مشروع مكتمل" />
            <StatisticCounter end={50} title="جائزة تصميم" />
            <StatisticCounter end={15} title="سنوات خبرة" />
            <StatisticCounter end={1000} title="عميل راضٍ" />
          </div>
        </div>
      </div>


      {/* Contact Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#1a1a1a]">اتصل بنا</h2>
              <p className="text-lg mb-8 text-gray-600">
                نحن هنا للإجابة على جميع استفساراتكم. يرجى ملء النموذج وسنقوم بالرد عليكم في أقرب وقت ممكن.
              </p>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-center">
                  <span className="font-bold ml-2">العنوان:</span>
                  الشروق سيتي ومدينة نصر
                </p>
                <p className="flex items-center">
                  <span className="font-bold ml-2">هاتف:</span>
                  +20 XXX XXX XXX
                </p>
                <p className="flex items-center">
                  <span className="font-bold ml-2">البريد الإلكتروني:</span>
                  info@moatazgabr.com
                </p>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">الاسم</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#9c8a5a]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#9c8a5a]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">الرسالة</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#9c8a5a]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a1a1a] text-white py-3 rounded-lg hover:bg-[#9c8a5a] transition-colors"
              >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

