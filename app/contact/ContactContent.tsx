'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-[#004851] mb-8">اتصل بنا</h1>
          <p className="text-xl text-center text-gray-600 mb-12">نحن هنا لمساعدتك في تحويل مساحتك إلى تحفة فنية. لا تتردد في التواصل معنا لأي استفسارات أو لحجز استشارة مجانية.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-6 text-[#004851]">أرسل لنا رسالة</h2>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">الاسم</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004851]"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004851]"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004851]"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">الرسالة</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004851]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#004851] text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                إرسال الرسالة
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-6 text-[#004851]">معلومات الاتصال</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="text-[#DF2935] ml-4" />
                  <span>123 شارع النيل، القاهرة، مصر</span>
                </li>
                <li className="flex items-center">
                  <Phone className="text-[#DF2935] ml-4" />
                  <span>+20 123 456 7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-[#DF2935] ml-4" />
                  <span>info@moatazgaber.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="text-[#DF2935] ml-4" />
                  <span>الأحد - الخميس: 9 صباحًا - 6 مساءً</span>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-6 text-[#004851]">تابعنا على مواقع التواصل الاجتماعي</h2>
              <div className="flex justify-center space-x-4 flex-row-reverse">
                <a 
                  href="https://www.facebook.com/MoatazGabrDesignStudio?mibextid=ZbWKwL" 
                  target="_blank" 
                  className="flex-1 text-white bg-[#1E90FF] hover:bg-opacity-90 transition duration-300 text-center py-3 rounded-lg shadow">
                  <FaFacebook size={24} className="mx-auto" />
                </a>
                <a 
                  href="https://wa.me/+201270005969?text=مرحبًا، أود الاستفسار عن خدماتكم." 
                  target="_blank" 
                  className="flex-1 text-white bg-[#25D366] hover:bg-opacity-90 transition duration-300 text-center py-3 rounded-lg shadow"
                >
                  <FaWhatsapp size={24} className="mx-auto" />
                </a>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-6 text-[#004851]">موقعنا</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6661300472024!2d31.224127615471!3d30.05115132484714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458409a89a14b0d%3A0x14f6e5c1a8a9a8c0!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1625581524562!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

