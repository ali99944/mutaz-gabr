"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const categories = [
  {
    title: "المطابخ",
    description: "تصميمات عصرية للمطابخ تجمع بين الأناقة والوظيفة",
    image: "/assets/home/kitchen.jpeg",
  },
  {
    title: "غرف الملابس",
    description: "حلول تخزين ذكية وتصميمات أنيقة لغرف الملابس",
    image: "/assets/home/living.jpg",
  },
  {
    title: "وحدات الحمام",
    description: "تصميمات عصرية لوحدات الحمام تجمع بين الراحة والأناقة",
    image: "/assets/home/balace.jpg",
  },
  {
    title: "غرف الغسيل",
    description: "حلول عملية ومنظمة لغرف الغسيل",
    image: "/assets/home/living3.jpg",
  },
  {
    title: "المطابخ الصغيرة",
    description: "تصميمات ذكية للمساحات الصغيرة",
    image: "/assets/home/kitchen.jpg",
  },
  {
    title: "تصميمات أخرى",
    description: "حلول مخصصة لاحتياجاتك الفريدة",
    image: "/assets/home/outside.jpg",
  },
]

export default function KitchenDesignPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">

      <main className="">
        {/* Hero Section */}
        <section className="relative h-[60vh] mb-16">
          <Image
            src="/assets/home/kitchen.jpeg"
            alt="Kitchen Design"
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
              <h1 className="text-5xl font-bold text-[#9c8a5a] mb-6">تصميم المطابخ والوحدات</h1>
              <p className="text-xl text-white/90">إبداع يجمع بين الجمال والوظيفة في كل تصميم</p>
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
            <h2 className="text-3xl font-semibold mb-6 text-[#9c8a5a]">خبراء في تصميم المطابخ والوحدات</h2>
            <p className="text-lg max-w-3xl mx-auto">
              نقدم حلولاً متكاملة في تصميم المطابخ والوحدات المنزلية، مع التركيز على الجودة والأناقة والوظيفة. خبرتنا
              تمتد لأكثر من 15 عاماً في تقديم تصاميم تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
            </p>
          </motion.section>

          {/* Categories Grid */}
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-[#9c8a5a] text-center">خدماتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="group relative overflow-hidden rounded-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-[300px] cursor-pointer">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <div className="absolute bottom-0 p-4">
                        <h3 className="text-2xl font-bold mb-2 text-[#9c8a5a]">{category.title}</h3>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
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
                <h2 className="text-3xl font-semibold mb-6 text-[#9c8a5a]">لماذا تختارنا؟</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#9c8a5a] ml-2">•</span>
                    <p>تصميمات مخصصة تناسب احتياجاتك وأسلوب حياتك</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9c8a5a] ml-2">•</span>
                    <p>مواد عالية الجودة وتشطيبات متميزة</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9c8a5a] ml-2">•</span>
                    <p>حلول تخزين ذكية تحقق أقصى استفادة من المساحة</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9c8a5a] ml-2">•</span>
                    <p>فريق محترف من المصممين والفنيين</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9c8a5a] ml-2">•</span>
                    <p>ضمان الجودة على جميع أعمالنا</p>
                  </li>
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

          {/* Call to Action */}
          <motion.section
            className="py-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black/30 p-8 rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-[#9c8a5a]">هل أنت مستعد لبدء مشروعك؟</h2>
              <p className="text-lg mb-6">دعنا نحول أفكارك إلى واقع. اتصل بنا اليوم للحصول على استشارة مجانية.</p>
              <div className="flex justify-center gap-x-2">
                <Link
                    href="/contact"
                    className="inline-block bg-[#9c8a5a] text-white px-8 py-3 rounded-lg hover:bg-[#8a795c] transition-colors"
                >
                    تواصل معنا
                </Link>

                <Link
                    href="/contact"
                    className="inline-block bg-[#9c8a5a] text-white px-8 py-3 rounded-lg hover:bg-[#8a795c] transition-colors"
                >
                    احصل علي استشارة مجانية
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

    </div>
  )
}

