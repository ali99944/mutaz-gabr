'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import Dictionary from '@/src/types/dictionary'

export default function Contact({ dictionary }: { dictionary: Dictionary }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    { icon: FaPhone, label: dictionary.contact_us_component.contact_information.phone, value: '01270005969', href: 'tel:+201270005969' },
    { icon: FaEnvelope, label: dictionary.contact_us_component.contact_information.email, value: 'moataz.rabei.gabr2006@gmail.com', href: 'mailto:moataz.rabei.gabr2006@gmail.com' },
    { icon: FaMapMarkerAlt, label: dictionary.contact_us_component.contact_information.address, value: 'مدينة الشروق..فيلا القوات المسلحة.. الحي التاسع..فيلا ١١٢' },
  ]

  const socialMedia = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/MoatazGabrDesignStudio', label: 'Facebook' },
    { icon: FaWhatsapp, href: 'https://wa.me/+201270005969', label: 'WhatsApp' },
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-gray-100 to-white" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{dictionary.contact_us_component.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{dictionary.contact_us_component.description}</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <motion.div
            ref={formRef}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white shadow-sm rounded-lg p-4"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="text-2xl font-semibold text-primary mb-2">تم إرسال رسالتك بنجاح!</h4>
                <p className="text-gray-600">سنتواصل معك في أقرب وقت ممكن.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {dictionary.contact_us_component.form.name}
                    </label>
                    <input
                      placeholder={dictionary.contact_us_component.form.name_placeholder}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0 transition duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {dictionary.contact_us_component.form.phone}
                    </label>
                    <input
                      placeholder={dictionary.contact_us_component.form.phone_placeholder}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0 transition duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {dictionary.contact_us_component.form.email}
                  </label>
                  <input
                    placeholder={dictionary.contact_us_component.form.email_placeholder}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0 transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {dictionary.contact_us_component.form.message}
                  </label>
                  <textarea
                    placeholder={dictionary.contact_us_component.form.message_placeholder}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0 transition duration-300"
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    {dictionary.contact_us_component.form.submit}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-primary text-white p-6 rounded-lg shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">{dictionary.contact_us_component.contact_information.title}</h3>
                <p className="mb-8 text-sm text-center">{dictionary.contact_us_component.contact_information.description}</p>
                <ul className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <item.icon className="w-6 h-6 mt-1 text-[#e63946]" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{item.label}</h4>
                        {item.href ? (
                          <a href={item.href} className="text-[#D3D3D3] text-sm hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#D3D3D3] text-sm">{item.value}</p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 border-t border-[#D3D3D3]/20 pt-6">
                <h4 className="font-semibold text-sm mb-4">{dictionary.contact_us_component.contact_information.social_contact_title}</h4>
                <div className="flex justify-center gap-x-4">
                  {socialMedia.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-primary p-2 rounded-full"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="sr-only">{item.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6661300472024!2d31.224127615471!3d30.05115132484714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458409a89a14b0d%3A0x14f6e5c1a8a9a8c0!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1625581524562!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

