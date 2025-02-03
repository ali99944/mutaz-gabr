"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/+20XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={24} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

