'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const FloatingWhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 }
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.button
        className="bg-[#25D366] text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        onClick={toggleOpen}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl p-6 w-72"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h3 className="text-lg font-semibold text-[#4A1D1F] mb-2">تواصل معنا عبر واتساب</h3>
            <p className="text-gray-600 mb-4">نحن هنا لمساعدتك! راسلنا على واتساب للإجابة على استفساراتك.</p>
            <a
              href="https://wa.me/01270005969"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] text-white text-center py-2 px-4 rounded-full font-semibold hover:bg-[#128C7E] transition-colors duration-300"
            >
              بدء المحادثة
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FloatingWhatsAppButton

