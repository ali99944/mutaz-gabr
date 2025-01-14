'use client'

import { useState, useEffect } from 'react'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import { Mail, MapPin, Phone, Clock, ChevronUp } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'

const socialLinks = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/MoatazGabrDesignStudio?mibextid=ZbWKwL', label: 'Facebook', color: '#1877F2' },
  { icon: FaWhatsapp, href: 'https://wa.me/+201270005969', label: 'WhatsApp', color: '#25D366' },
]

const quickLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/projects', label: 'معرض الأعمال' },
  { href: '/#contact', label: 'اتصل بنا' },
]

const contactInfo = [
  { icon: Phone, content: '01270005969', href: 'tel:+201270005969' },
  { icon: Mail, content: 'moataz.rabei.gabr2006@gmail.com', href: 'mailto:moataz.rabei.gabr2006@gmail.com' },
  { icon: MapPin, content: 'مدينة الشروق..فيلا القوات المسلحة.. الحي التاسع..فيلا ١١٢' },
]

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    controls.start({
      y: isVisible ? 0 : 100,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.3 }
    })
  }, [isVisible, controls])

  return (
    <footer className="relative bg-gradient-to-b from-[#003840] to-[#002A30] text-[#E6E6E6] overflow-hidden">
      
      <svg className="absolute top-0 left-0 w-full h-20 text-[#003840]" preserveAspectRatio="none" viewBox="0 0 1440 120">
        <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" fill="currentColor"></path>
      </svg>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="flex flex-col items-center md:items-start mb-6">
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src="/assets/images/studio.png"
                  alt="Moataz Gabr Kitchens"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="absolute inset-0 rounded bg-gradient-to-br from-[#1A202C] to-[#FFFFFF] opacity-40 animate-pulse"></div>
              </div>
              <h3 className="text-3xl font-bold text-white text-shadow">Moataz Gabr</h3>
            </div>
            <p className="text-[#E6E6E6] leading-relaxed mb-6 text-center md:text-right text-shadow">
              نحن متخصصون في تصميم وتنفيذ الديكورات الداخلية والخارجية و المطابخ الخشبية بأعلى مستويات الجودة والإبداع لنحول مساحتك إلى تحفة فنية تعكس أسلوب حياتك
            </p>
            <div className="flex space-x-2 justify-center md:justify-end flex-row-reverse">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300 group`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className={`text-2xl group-hover:text-white transition-colors duration-300`} style={{ color: social.color }} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center  md:items-start"
          >
            <h4 className="text-2xl font-semibold mb-6 text-white text-shadow">روابط سريعة</h4>
            <ul className="space-y-4 md:flex md:justify-center md:flex-col md:items-center md:w-full">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }} className="max-md:text-center w-full">
                  <Link href={link.href} className="hover:text-[#e63946] text-lg transition-colors relative group">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e63946] transition-all group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h4 className="text-2xl font-semibold mb-6 text-white text-shadow">تواصل معنا</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse group"
                >
                  <info.icon className="text-[#e63946] text-xl flex-shrink-0 transition-transform group-hover:scale-110" />
                  {info.href ? (
                    <a href={info.href} className="hover:text-[#e63946] transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <span>{info.content}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-2xl font-semibold mb-6 text-white text-shadow">ساعات العمل</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 rtl:space-x-reverse group">
                <Clock className="text-[#e63946] text-xl transition-transform group-hover:rotate-12" />
                <span>الأحد - الخميس: 9 صباحًا - 6 مساءً</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse group">
                <Clock className="text-[#e63946] text-xl transition-transform group-hover:rotate-12" />
                <span>الجمعة - السبت: 10 صباحًا - 4 مساءً</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-[#E6E6E6]/20 text-center md:flex md:justify-between md:items-center"
        >
          <div className="space-y-2 md:space-y-0 md:flex md:space-x-4 md:rtl:space-x-reverse">
            <p className="text-sm">السجل التجاري: 157438</p>
            <p className="text-sm">الرقم الضريبي: 007-129-609</p>
            <p className="text-sm">{new Date().getFullYear()} معتز جبر للمطابخ. جميع الحقوق محفوظة.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="https://wa.me/+201205064049" target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center group">
              <div className="h-10 w-28 relative mb-2 overflow-hidden rounded-lg">
                <Image
                  src="/handsa.png"
                  alt="Handsa Media"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-xs text-white group-hover:text-[#e63946] transition-colors">Powered by Handsa Media</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="fixed bottom-4 right-4 bg-[#DF2935] text-white p-2 rounded-full shadow-lg z-50"
        onClick={scrollToTop}
        animate={controls}
        initial={{ y: 100, opacity: 0 }}
      >
        <ChevronUp size={24} />
      </motion.button>

      <svg className="absolute bottom-0 left-0 w-full h-20 text-[#002A30] transform rotate-180" preserveAspectRatio="none" viewBox="0 0 1440 120">
        <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" fill="currentColor"></path>
      </svg>
    </footer>
  )
}

