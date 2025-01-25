import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Users, Briefcase, Settings, LogOut, X } from "lucide-react"

interface AdminSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "300px" },
}

export default function AdminSidebar({ open, setOpen }: AdminSidebarProps) {
  return (
    <motion.aside
      className="bg-[#2a2a2a] w-64 min-h-screen overflow-y-auto absolute right-0 top-0 z-50"
      variants={sidebarVariants}
      animate={open ? "open" : "closed"}
      transition={{ duration: 0.3 }}
      initial="closed"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#9c8a5a]">لوحة التحكم</h2>
            <X className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>
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
                href="/admin/projects"
                className="flex items-center p-2 rounded-lg hover:bg-[#3a3a3a] transition-colors"
              >
                <Briefcase className="ml-2" />
                <span>المشاريع</span>
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
        <button className="flex items-center justify-center w-full p-2 rounded bg-red-600 hover:bg-red-700 transition-colors">
          <LogOut className="ml-2" />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </motion.aside>
  )
}

