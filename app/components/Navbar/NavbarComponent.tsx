'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function NavbarComponent({
    website_name
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  console.log(website_name);
  

  return (
    <nav className="bg-gradient-to-r from-[#004851] to-[#003840] text-[#D3D3D3] sticky top-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-row-reverse">
            <span className="text-2xl font-bold">{website_name}</span>
            <Image
              src="/assets/images/studio.png"
              alt="Moataz Gabr Kitchens"
              width={50}
              height={50}
              className="rounded-lg shadow-sm"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-row-reverse text-lg">
            <Link 
              href="#contact" 
              className="bg-[#DF2935] text-white px-4 py-1 rounded shadow hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg"
            >
              اتصل بنا
            </Link>
            <Link href="/projects" className="hover:text-[#DF2935] transition-colors font-medium text-lg">معرض الأعمال</Link>
            <Link href="/services" className="hover:text-[#DF2935] transition-colors font-medium text-lg">خدماتنا</Link>
            <Link href="/" className="hover:text-[#DF2935] transition-colors font-medium text-lg">الرئيسية</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#D3D3D3] hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-[#003840] rounded-lg mt-2 shadow-lg">
            <Link 
              href="/" 
              className="block py-3 px-4 hover:bg-[#004851] rounded-lg transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              href="/services" 
              className="block py-3 px-4 hover:bg-[#004851] rounded-lg transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              خدماتنا
            </Link>
            <Link 
              href="/projects" 
              className="block py-3 px-4 hover:bg-[#004851] rounded-lg transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              معرض الأعمال
            </Link>
            <Link 
              href="#contact" 
              className="block py-3 px-4 bg-[#DF2935] text-white rounded-lg shadow-md hover:bg-opacity-90 transition-colors text-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

