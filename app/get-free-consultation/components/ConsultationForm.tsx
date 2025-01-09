'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    })
  }

  return (
    <section id="consultation-form" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#004851]">احجز استشارتك المجانية</h2>
          <p className="text-xl text-gray-600">
            دعنا نساعدك في تحويل مساحتك إلى عمل فني. املأ النموذج أدناه وسنتواصل معك قريبًا
          </p>
        </motion.div>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center shadow"
            role="alert"
          >
            <strong className="font-bold">شكرًا لك!</strong>
            <span className="block sm:inline"> تم استلام طلبك بنجاح. سنتواصل معك قريبًا.</span>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center border-b-2 border-[#004851] py-2">
              <FaUser className="text-[#004851] ml-2 text-2xl" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="الاسم الكامل"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b-2 border-[#004851] py-2">
              <FaEnvelope className="text-[#004851] ml-2 text-2xl" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
            <div className="flex items-center border-b-2 border-[#004851] py-2">
              <FaPhone className="text-[#004851] ml-2 text-2xl" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="رقم الهاتف"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
            
            <div className="flex items-center border-b-2 border-[#004851] py-2">
              <FaComments className="text-[#004851] ml-2 text-2xl" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                placeholder="اخبرنا المزيد عن مشروعك وأفكارك"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none resize-none"
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                className={`bg-[#DF2935] text-white px-8 py-2 hover:bg-opacity-80 rounded-md text-lg font-bold  transition duration-300 shadow ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب الاستشارة'}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}

