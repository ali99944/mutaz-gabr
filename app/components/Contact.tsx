'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">تواصل معنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">نحن هنا لمساعدتك في تحويل أفكارك إلى واقع. اتصل بنا اليوم للحصول على استشارة مجانية</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white shadow-md rounded-lg p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-[#004851]">ارسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#004851] focus:ring-0 transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#004851] focus:ring-0 transition duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#004851] focus:ring-0 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-[#004851] focus:ring-0 transition duration-300"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#DF2935] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  إرسال الرسالة
                </button>
              </div>
            </form>
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-[#004851] text-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6">معلومات الاتصال</h3>
                <p className="mb-8 text-lg">نحن نتطلع للتواصل معك ومساعدتك في تحقيق حلم منزلك المثالي</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <FaPhone className="text-2xl mt-1 text-[#DF2935]" />
                    <div>
                      <h4 className="font-semibold text-xl mb-1">الهاتف</h4>
                      <p className="text-[#D3D3D3]">123-456-7890</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaEnvelope className="text-2xl mt-1 text-[#DF2935]" />
                    <div>
                      <h4 className="font-semibold text-xl mb-1">البريد الإلكتروني</h4>
                      <p className="text-[#D3D3D3]">info@moatazgaber.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-2xl mt-1 text-[#DF2935]" />
                    <div>
                      <h4 className="font-semibold text-xl mb-1">العنوان</h4>
                      <p className="text-[#D3D3D3]">شارع التحرير، القاهرة، مصر</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-12 border-t border-[#D3D3D3]/20 pt-6">
                <h4 className="font-semibold text-xl mb-4">ساعات العمل</h4>
                <p className="text-[#D3D3D3]">الأحد - الخميس: 9 صباحًا - 6 مساءً</p>
                <p className="text-[#D3D3D3]">الجمعة - السبت: 10 صباحًا - 4 مساءً</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

