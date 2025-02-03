"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Send } from "lucide-react"
import { useRouter } from "next/navigation"
import AppRoutes from "@/src/constants/app_routes"
import Dictionary from "@/src/types/dictionary"


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ConsultationPage({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.consultation_page
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    })
    setTimeout(() => {
      setIsSubmitted(false)
      router.push(AppRoutes.home)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="pb-16">
        {/* Hero Section */}
        <section className="relative h-[100vh] mb-16">
          <Image
            src="/images/interior/chalet.jpg"
            alt={t.free_consultation}
            fill
            className="object-fill object-center"
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
              <h1 className="text-5xl font-bold text-app-secondary mb-6">{t.free_consultation}</h1>
              <p className="text-xl text-white/90">{t.hero_subtitle}</p>
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
            <h2 className="text-3xl font-semibold mb-6 text-app-secondary text-center">{t.get_your_consultation}</h2>
            <p className="text-lg mb-8 text-center">{t.form_description}</p>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-4 rounded-lg shadow">
              <div>
                <label htmlFor="name" className="block text-md font-medium text-primary mb-2">
                  {t.name_label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/90 border border-gray-600 rounded-md focus:outline-none focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-md font-medium text-primary mb-2">
                  {t.email_label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/90 border border-gray-600 rounded-md focus:outline-none focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-md font-medium text-primary mb-2">
                  {t.phone_label}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/90 border border-gray-600 rounded-md focus:outline-none focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-md font-medium text-primary mb-2">
                  {t.project_details_label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className="w-full px-4 py-2 bg-white/90 border border-gray-600 rounded-md focus:outline-none focus:ring-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center gap-x-2 bg-primary text-white py-3 rounded-lg hover:bg-opacity-80 transition-opacity justify-center"
              >
                <Send size={20} />
                <p>{t.submit_button}</p>
              </button>
            </form>
            {isSubmitted && (
              <motion.div
                className="mt-6 p-4 bg-green-600 rounded-lg text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {t.success_message}
              </motion.div>
            )}
          </motion.section>
        </div>
      </main>
    </div>
  )
}
