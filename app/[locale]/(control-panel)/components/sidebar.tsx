"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Home,
  Users,
  Settings,
  LogOut,
  Palette,
  Coffee,
  FolderOpen,
  PlusCircle,
  FileText,
  X,
} from "lucide-react"

interface AdminSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "100%" },
}

export default function AdminSidebar({ open, setOpen }: AdminSidebarProps) {
  return (
    <motion.aside
      className="bg-[#2a2a2a] w-64 min-h-screen overflow-y-auto fixed right-0 top-0 bottom-0 z-50"
      variants={sidebarVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#9c8a5a]">لوحة التحكم</h2>
          <X className="w-6 h-6 cursor-pointer" onClick={() => setOpen(false)} />
        </div>
        <hr />
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/admin" className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors">
                <Home className="ml-2" />
                <span>الرئيسية</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Users className="ml-2" />
                <span>المستخدمون</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/interior-design"
                className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Palette className="ml-2" />
                <span>التصميم الداخلي</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/kitchen-design"
                className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Coffee className="ml-2" />
                <span>تصميم المطابخ</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/projects"
                className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <FolderOpen className="ml-2" />
                <span>المشاريع</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/projects/new"
                className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <PlusCircle className="ml-2" />
                <span>مشروع جديد</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/policy"
                className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <FileText className="ml-2" />
                <span>سياسة الخصوصية</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/settings"
                className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Settings className="ml-2" />
                <span>الإعدادات</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute bottom-0 w-full p-4">
        <button className="flex items-center justify-center w-full p-2 rounded-md bg-red-500 hover:bg-red-600 transition-colors">
          <LogOut className="ml-2" />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </motion.aside>
  )
}

