'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, Briefcase, Users, FileText, Settings, ChevronRight, ChevronLeft, Grid, Image, List, LogOut } from 'lucide-react'

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { icon: <Home size={24} />, label: 'الرئيسية', href: '/admin' },
    { icon: <Briefcase size={24} />, label: 'المشاريع', href: '/admin/projects' },
    { icon: <Users size={24} />, label: 'العملاء', href: '/admin/clients' },
    { icon: <Grid size={24} />, label: 'الخدمات', href: '/admin/services' },
    { icon: <List size={24} />, label: 'الفئات', href: '/admin/categories' },
    { icon: <Image size={24} />, label: 'معرض الصور', href: '/admin/gallery' },
    { icon: <FileText size={24} />, label: 'التقارير', href: '/admin/reports' },
    { icon: <Settings size={24} />, label: 'الإعدادات', href: '/admin/settings' },
  ]

  return (
    <div className={`bg-[#004851] text-white transition-all duration-300 flex flex-col ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex justify-start p-4">
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="text-white hover:bg-[#003840] p-2 rounded-full transition-colors duration-200">
          {isCollapsed ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className={`flex items-center px-4 py-3 hover:bg-[#003840] transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}>
              <div className="text-white">{item.icon}</div>
              {!isCollapsed && <span className="mr-4">{item.label}</span>}
            </div>
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <button className={`flex items-center w-full px-4 py-2 text-white bg-[#003840] rounded-md hover:bg-opacity-90 transition-colors duration-200 ${isCollapsed ? 'justify-center' : ''}`}>
          <LogOut size={24} />
          {!isCollapsed && <span className="mr-2">تسجيل الخروج</span>}
        </button>
      </div>
    </div>
  )
}

