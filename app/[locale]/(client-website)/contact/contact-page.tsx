'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import Dictionary from '@/src/types/dictionary'
import { createContactMessage } from '@/src/actions/contact'

export default function ContactContent({ dictionary }: { dictionary: Dictionary }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      await createContactMessage({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phone_number: formData.phone
      })

      setIsSubmitted(true)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-4">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">{dictionary.contact_page.form.name}</label>
                <input
                  placeholder={dictionary.contact_page.form.name_placeholder}
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
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{dictionary.contact_page.form.email}</label>
                <input
                  placeholder={dictionary.contact_page.form.email_placeholder}
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
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">{dictionary.contact_page.form.phone}</label>
                <input
                  placeholder={dictionary.contact_page.form.phone_placeholder}
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
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">{dictionary.contact_page.form.message}</label>
                <textarea
                  placeholder={dictionary.contact_page.form.message_placeholder}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004851]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out"
              >
                {dictionary.contact_page.form.submit}
              </button>
            </form>

            {isSubmitted && (
              <motion.div
                className="mt-6 p-4 bg-green-600 rounded-lg text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {dictionary.contact_page.form.success_message}
              </motion.div>
            )}
          </motion.div>

          

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="bg-white shadow-sm rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-6 text-[#004851]">{dictionary.contact_page.contact_information.title}</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-x-4">
                  <MapPin className="text-app-secondary w-5 h-5" />
                  <span>{dictionary.contact_page.contact_information.address}</span>
                </li>
                <li className="flex items-center gap-x-4">
                  <Phone className="text-app-secondary w-5 h-5" />
                  <span>01270005969</span>
                </li>
                <li className="flex items-center gap-x-4">
                  <Mail className="text-app-secondary w-5 h-5" />
                  <span>moataz.rabei.gabr2006@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse group ">
                <Clock className="text-app-secondary w-5 h-5" />
                <span>الأحد - الخميس: 9 صباحًا - 6 مساءً</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse group ">
                <Clock className="text-app-secondary w-5 h-5" />
                <span>الجمعة - السبت: 10 صباحًا - 4 مساءً</span>
              </li>
              </ul>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-6 text-[#004851]">{dictionary.contact_page.follow_on_social_media.title}</h2>
              <div className="flex justify-center gap-x-4">
                <a 
                  href="https://www.facebook.com/MoatazGabrDesignStudio?mibextid=ZbWKwL" 
                  target="_blank" 
                  className="flex-1 flex flex-col justify-center text-white bg-[#3b5998] hover:bg-opacity-90 transition duration-300 text-center py-3 rounded-lg shadow-sm">
                  <FaFacebook size={24} className="mx-auto" />
                  <span className="">{dictionary.contact_page.follow_on_social_media.decors_design}</span>
                </a>
                <a 
                  href="https://web.facebook.com/MoatazGabrKitchens" 
                  target="_blank" 
                  className="flex-1 flex flex-col justify-center text-white bg-[#3b5998] hover:bg-opacity-90 transition duration-300 text-center py-3 rounded-lg shadow-sm">
                  <FaFacebook size={24} className="mx-auto" />
                  <span className="">{dictionary.contact_page.follow_on_social_media.kitchen_design}</span>
                </a>
                <a 
                  href="https://wa.me/+201270005969" 
                  target="_blank" 
                  className="flex-1 flex flex-col justify-center text-white bg-[#25D366] hover:bg-opacity-90 transition duration-300 text-center py-3 rounded-lg shadow-sm"
                >
                  <FaWhatsapp size={24} className="mx-auto" />
                  <span className="">{dictionary.contact_page.follow_on_social_media.whatsapp}</span>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-6 text-[#004851]">{dictionary.contact_page.our_location}</h2>
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
