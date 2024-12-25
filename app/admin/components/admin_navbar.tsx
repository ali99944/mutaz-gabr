'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'الرئيسية', href: '/admin' },
  { label: 'المشاريع', href: '/admin/projects' },
  { label: 'العملاء', href: '/admin/clients' },
  { label: 'الخدمات', href: '/admin/services' },
  { label: 'الفئات', href: '/admin/categories' },
  { label: 'معرض الصور', href: '/admin/gallery' },
  { label: 'الإعدادات', href: '/admin/settings' },
]

export default function AdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image 
              src={'/assets/images/logo.png'}
              alt="Moataz Gabr Kitchens"
              width={40}
              height={40}
              className="rounded-lg shadow-sm ml-2"
            />
            <div className="flex-shrink-0">
              <span className="text-2xl  text-[#004851]">لوحة تحكم معتز جبر</span>
            </div>

          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 flex-row-reverse space-x-4">
              <button className="text-[#FF0000] font-medium hover:underline">
                تسجيل الخروج
              </button>
              <span className="text-gray-600">مرحباً، الأدمن</span>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-gray-600 hover:text-[#004851] hover:underline block px-3 py-2 rounded-md text-base font-medium">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-gray-600">مرحباً، الأدمن</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-[#FF0000] hover:underline">
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

