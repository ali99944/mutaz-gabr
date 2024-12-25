'use client'

import { motion } from 'framer-motion'

interface ProjectNavigationProps {
  categories: string[]
  activeCategory: string
}

export default function ProjectNavigation({ categories, activeCategory }: ProjectNavigationProps) {
  return (
    <nav className="bg-white rounded-lg shadow p-2">
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category} className='text-center'>
            <a
              href={`#${category}`}
              className={`block py-2 px-2 rounded-md transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-[#004851] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

