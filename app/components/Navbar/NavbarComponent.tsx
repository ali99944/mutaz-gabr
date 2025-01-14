'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'الرئيسية', href: '/' },
  { name: 'خدماتنا', href: '/services' },
  { name: 'معرض الأعمال', href: '/projects' },
  { name: 'من نحن', href: '/about' },
  { name: 'اتصل بنا', href: '/contact' },
]

export default function NavbarComponent({ website_name }: { website_name: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`bg-gradient-to-r from-[#004851] to-[#003840] text-white sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-row-reverse">
            <motion.span
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {website_name}
            </motion.span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Image
                src="/assets/images/studio.png"
                alt="Moataz Gabr Kitchens"
                width={50}
                height={50}
                className="rounded-full shadow-sm"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-row-reverse">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-[#DF2935] transition-colors font-medium text-lg text-white"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white hover:text-[#DF2935] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 space-y-2 bg-[#003840] rounded-lg mt-2 shadow-lg overflow-hidden"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="block py-3 px-4 hover:bg-[#004851] rounded-lg transition-colors text-lg font-medium text-[#D3D3D3]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.2, delay: navItems.length * 0.1 }}
              >
                <Link
                  href="#contact"
                  className="block py-3 px-4 bg-[#DF2935] text-white rounded-lg shadow-md hover:bg-opacity-90 transition-colors text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  اتصل بنا
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Animated Gradient bottom border */}
      <div className="h-1 w-full bg-gradient-to-r from-[#004851] via-[#DF2935] to-[#003840] background-animate"></div>
    </motion.nav>
  )
}

