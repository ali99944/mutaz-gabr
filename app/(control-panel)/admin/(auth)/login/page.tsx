"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    // For this example, we'll just redirect to the admin home page
    router.push("/admin")
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center">
      <motion.div
        className="bg-white/5 p-8 rounded-lg shadow-lg w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-8">
          <Image
            src="/assets/images/studio.png"
            alt="MG Group Logo"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold text-[#9c8a5a]">تسجيل دخول الإدارة</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              اسم المستخدم
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-[#9c8a5a]"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-[#9c8a5a]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#9c8a5a] text-white py-3 rounded-lg hover:bg-[#8a795c] transition-colors"
          >
            تسجيل الدخول
          </button>
        </form>
      </motion.div>
    </div>
  )
}

