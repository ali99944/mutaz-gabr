"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, AlertTriangle } from "lucide-react"

export default function AdminNotFound() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          className="text-[#9c8a5a] mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AlertTriangle size={100} className="mx-auto" />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold text-[#9c8a5a] mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404 - صفحة الإدارة غير موجودة
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          عذراً، صفحة الإدارة التي تبحث عنها غير موجودة.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/admin"
            className="inline-flex items-center bg-[#9c8a5a] text-white px-6 py-3 rounded-lg hover:bg-[#8a795c] transition-colors"
          >
            <Home className="ml-2" size={20} />
            العودة للوحة التحكم
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

