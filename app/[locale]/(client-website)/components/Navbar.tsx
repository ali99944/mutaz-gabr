'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Dictionary from '@/src/types/dictionary'
import AppRoutes from '@/src/constants/app_routes'

export default function Navbar({ dictionary }: { dictionary: Dictionary }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-white fixed top-0 w-full z-50 border-b border-[#9c8a5a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center gap-x-2">
                <Image src="/assets/images/studio.png" width={100} height={100} alt="MG Designs" className="h-14 w-auto" />
                <p className='text-2xl'>{dictionary.navbar.owner_name}</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
              <Link href="/" className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors">
                {dictionary.navbar.home}
              </Link>
              <Link href={AppRoutes.interior} className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors">
                {dictionary.navbar.interior_design}
              </Link>
              <Link href={AppRoutes.kithen} className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors">
                {dictionary.navbar.kitchen_design}
              </Link>
              <Link href={AppRoutes.about} className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors">
                {dictionary.navbar.about}
              </Link>
              <Link href={AppRoutes.contact} className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors">
                {dictionary.navbar.contact}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-app-secondary focus:outline-none"
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
            <Link href="/" className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium">
              {dictionary.navbar.home}
            </Link>
            <Link href={AppRoutes.interior} className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium">
              {dictionary.navbar.interior_design}
            </Link>
            <Link href={AppRoutes.kithen} className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium">
              {dictionary.navbar.kitchen_design}
            </Link>
            <Link href={AppRoutes.about} className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium">
              {dictionary.navbar.about}
            </Link>
            <Link href={AppRoutes.contact} className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium">
              {dictionary.navbar.contact}
            </Link>
          </div>
        </div>
      )}

<div className="h-1 w-full bg-gradient-to-r from-[#004851] via-[#ffbe0b] to-[#003840] background-animate"></div>

    </nav>
  )
}
