"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function RealEstateDesignPage() {
  return (
    <div className="min-h-screen bg-[#003344] text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#FF0000]">التصميم العقاري</h1>

          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="/images/interior/tower.jpg"
              alt="التصميم العقاري"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <p className="text-xl text-gray-300 mb-8">
            نعمل حالياً على تطوير خدمات متميزة في مجال التصميم العقاري. ترقبوا إطلاق خدماتنا قريباً.
          </p>

          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-[#FF0000] transition-colors">
            <ArrowLeft className="ml-2" />
            العودة للصفحة الرئيسية
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

