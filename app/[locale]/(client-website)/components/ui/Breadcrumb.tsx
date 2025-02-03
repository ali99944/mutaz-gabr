import React from 'react'
import Link from 'next/link'
import { Home, ChevronLeft, type LucideIcon } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: LucideIcon
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const allItems = [
    { label: 'الرئيسية', href: '/', icon: Home },
    ...items
  ]

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-row-reverse">
        {allItems.toReversed().map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== allItems.length - 1 && (
              <ChevronLeft className="w-4 h-4 text-gray-600 mx-1" />
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-[#004851] inline-flex items-center text-sm font-medium text-gray-700 px-2 hover:bg-gray-100">
                {item.icon && <item.icon className="w-4 h-4 ml-2" />}
                <span className='text-lg '>{item.label}</span>
              </Link>
            ) : (
              <span className="inline-flex items-center text-sm font-medium text-gray-500">
                {item.icon && <item.icon className="w-4 h-4 ml-2" />}
                <span className='text-lg '>{item.label}</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

