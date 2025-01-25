'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav dir="rtl" className="bg-[#1a1a1a]/90 text-white sticky top-0 w-full z-50 border-b border-[#9c8a5a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <span className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-[#FFA07A] transition-colors duration-200 ease-in-out">
                  MG Designs
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
              <Link href="/" className="text-white hover:text-[#9c8a5a] px-3 py-2 rounded-lg text-lg transition-colors">
                الرئيسية
              </Link>
              <Link href="/portfolio" className="text-white hover:text-[#9c8a5a] px-3 py-2 rounded-lg text-lg transition-colors">
                تصميم داخلي
              </Link>
              <Link href="/services" className="text-white hover:text-[#9c8a5a] px-3 py-2 rounded-lg text-lg transition-colors">
                مطابخ
              </Link>
              <Link href="/about" className="text-white hover:text-[#9c8a5a] px-3 py-2 rounded-lg text-lg transition-colors">
                من نحن
              </Link>
              <Link href="/contact" className="text-white hover:text-[#9c8a5a] px-3 py-2 rounded-lg text-lg transition-colors">
                اتصل بنا
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-[#9c8a5a] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a]/95 border-t border-[#9c8a5a]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white hover:text-[#9c8a5a] block px-3 py-2 rounded-lg text-base font-medium">
              الرئيسية
            </Link>
            <Link href="/services" className="text-white hover:text-[#9c8a5a] block px-3 py-2 rounded-lg text-base font-medium">
              خدماتنا
            </Link>
            <Link href="/portfolio" className="text-white hover:text-[#9c8a5a] block px-3 py-2 rounded-lg text-base font-medium">
              أعمالنا
            </Link>
            <Link href="/about" className="text-white hover:text-[#9c8a5a] block px-3 py-2 rounded-lg text-base font-medium">
              من نحن
            </Link>
            <Link href="/contact" className="text-white hover:text-[#9c8a5a] block px-3 py-2 rounded-lg text-base font-medium">
              اتصل بنا
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
