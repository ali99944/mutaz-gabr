"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import type Dictionary from "@/src/types/dictionary"
import AppRoutes from "@/src/constants/app_routes"

export default function Navbar({ dictionary }: { dictionary: Dictionary }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
const pathname = usePathname();
const searchParams = useSearchParams();

const current_language = pathname.startsWith('/ar') ? 'العربية' : 'english'

const toggleLocale = () => {
  const newLocale = pathname.startsWith('/ar') ? 'en' : 'ar';

  // Split path into segments and remove empty strings
  const segments = pathname.split('/').filter(Boolean);

  // Replace the first segment (locale) with the new locale
  if (segments.length > 0) {
    segments[0] = newLocale;
  } else {
    segments.unshift(newLocale); // Handle root path (e.g., '/')
  }

  // Rebuild the path and include query parameters
  const newPathname = `/${segments.join('/')}`;
  const queryString = searchParams.toString();
  const newUrl = queryString ? `${newPathname}?${queryString}` : newPathname;

  router.replace(newUrl); // or router.push(newUrl)
};

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [])

  return (
    <nav className="bg-primary text-white sticky top-0 w-full z-50 border-b border-[#9c8a5a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="flex items-center gap-x-2">
                <Image
                  src="/assets/images/studio.png"
                  width={100}
                  height={100}
                  alt="MG Designs"
                  className="h-14 w-auto"
                />
                <p className="text-2xl">{dictionary.navbar.owner_name}</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="mr-10 flex items-baseline space-x-4 space-x-reverse">
              <Link
                href="/"
                className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors"
              >
                {dictionary.navbar.home}
              </Link>
              <Link
                href={AppRoutes.interior}
                className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors"
              >
                {dictionary.navbar.interior}
              </Link>
              <Link
                href={AppRoutes.kithen}
                className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors"
              >
                {dictionary.navbar.kitchen}
              </Link>
              <Link
                href={AppRoutes.about}
                className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors"
              >
                {dictionary.navbar.about}
              </Link>
              <Link
                href={AppRoutes.contact}
                className="text-white hover:text-app-secondary px-3 py-2 rounded-lg text-lg transition-colors"
              >
                {dictionary.navbar.contact}
              </Link>
            </div>
            <button
              onClick={toggleLocale}
              className="ml-4 flex items-center gap-x-2 p-2 rounded-full bg-primary text-white text-primary hover:bg-primary/80 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <p className="text-white">{current_language}</p>
            </button>
          </div>

          {/* Mobile menu button and language toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLocale}
              className="mr-2 flex items-center gap-x-2 p-2 rounded-full bg-primary text-white text-primary hover:bg-primary/80 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <p className="text-white">{current_language}</p>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-app-secondary focus:outline-none"
              aria-label="Toggle menu"
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
            <Link
              href="/"
              className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium"
            >
              {dictionary.navbar.home}
            </Link>
            <Link
              href={AppRoutes.interior}
              className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium"
            >
              {dictionary.navbar.interior}
            </Link>
            <Link
              href={AppRoutes.kithen}
              className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium"
            >
              {dictionary.navbar.kitchen}
            </Link>
            <Link
              href={AppRoutes.about}
              className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium"
            >
              {dictionary.navbar.about}
            </Link>
            <Link
              href={AppRoutes.contact}
              className="text-white hover:text-app-secondary block px-3 py-2 rounded-lg text-base font-medium"
            >
              {dictionary.navbar.contact}
            </Link>
          </div>
        </div>
      )}

      <div className="h-1 w-full bg-gradient-to-r from-[#004851] via-[#ffbe0b] to-[#003840] background-animate"></div>
    </nav>
  )
}

