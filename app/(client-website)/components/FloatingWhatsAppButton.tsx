'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  }

  const linkVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="bg-[#25D366] text-white rounded-full p-4 shadow-lg flex items-center justify-center"
        onClick={toggleOpen}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <MessageCircle size={24} />
      </motion.button>
      <motion.a
        href="https://wa.me/+201270005969"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-16 left-0 bg-black/50 rounded-lg shadow-xl p-4 w-72 md:w-96"
        variants={linkVariants}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        exit="hidden"
      >
        <h3 className="text-lg font-semibold text-white mb-2">تواصل معنا عبر واتساب</h3>
        <p className="text-white mb-4">نحن هنا لمساعدتك! راسلنا على واتساب للإجابة على استفساراتك.</p>
      </motion.a>
    </motion.div>
  )
}

export default FloatingWhatsAppButton


