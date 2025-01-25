"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"
import CTA from "./cta"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] mb-16">
          <Image src="/images/interior/logo.png" alt="اتصل بنا" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.div
              className="text-center max-w-4xl mx-auto px-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-[#9c8a5a] mb-6">اتصل بنا</h1>
              <p className="text-xl text-white/90">نحن هنا لمساعدتك في تحويل مساحتك إلى عمل فني</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.section
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-[#9c8a5a]">معلومات الاتصال</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#9c8a5a] ml-4" />
                  <p>+20 XXX XXX XXXX</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#9c8a5a] ml-4" />
                  <p>info@moatazgabr.com</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-[#9c8a5a] ml-4" />
                  <p>الشروق سيتي ومدينة نصر، القاهرة، مصر</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-[#9c8a5a]">تابعنا على وسائل التواصل الاجتماعي</h3>
              <div className="flex gap-x-4">
                <a href="#" className="text-[#9c8a5a] hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#9c8a5a] hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#9c8a5a] hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#9c8a5a]">موقعنا</h3>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.345345345345!2d31.33611111111111!3d30.045555555555554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f9e9f5f1b5d%3A0x62b6f6f1d9f1f7a9!2zMzIwMzQgU29sdGFuIE1hbmRyYSBNYWxlcyBTdGF0aWM!5e0!3m2!1sar!2seg!4v1667407405548!5m2!1sar!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.section>

            {/* Contact Form */}
            <motion.section
              className="mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-[#9c8a5a]">ارسل لنا رسالة</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-[#9c8a5a]"
                    required
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
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-[#9c8a5a]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-[#9c8a5a]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#9c8a5a] text-white py-3 rounded-lg hover:bg-[#8a795c] transition-colors"
                >
                  إرسال الرسالة
                </button>
              </form>
            </motion.section>
          </div>

          {/* CTA Section */}
          <CTA />
        </div>
      </main>
    </div>
  )
}

