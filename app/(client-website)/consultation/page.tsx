"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Send } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    })
    // Show success message for 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <main className="pb-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] mb-16">
          <Image
            src="/images/interior/chalet.jpg"
            alt="Free Consultation"
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
              <h1 className="text-5xl font-bold text-[#9c8a5a] mb-6">استشارة مجانية</h1>
              <p className="text-xl text-white/90">دعنا نساعدك في تحويل أفكارك إلى واقع ملموس</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4">
          <motion.section
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#9c8a5a] text-center">احصل على استشارتك المجانية</h2>
            <p className="text-lg mb-8 text-center">
              املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن لتقديم استشارة مجانية حول مشروعك.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9c8a5a]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9c8a5a]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9c8a5a]"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  نوع المشروع
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9c8a5a]"
                >
                  <option value="">اختر نوع المشروع</option>
                  <option value="interior">تصميم داخلي</option>
                  <option value="kitchen">تصميم مطبخ</option>
                  <option value="exterior">تصميم خارجي</option>
                  <option value="other">أخرى</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  تفاصيل المشروع
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9c8a5a]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#9c8a5a] text-white py-3 rounded-lg hover:bg-[#8a795c] transition-colors flex items-center justify-center"
              >
                <Send className="ml-2" size={20} />
                إرسال طلب الاستشارة
              </button>
            </form>
            {isSubmitted && (
              <motion.div
                className="mt-6 p-4 bg-green-600 text-white rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                تم إرسال طلب الاستشارة بنجاح! سنتواصل معك قريبًا.
              </motion.div>
            )}
          </motion.section>
        </div>
      </main>
    </div>
  )
}

