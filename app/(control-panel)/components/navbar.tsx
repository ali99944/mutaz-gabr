import { Menu, Bell, User } from "lucide-react"

interface AdminNavbarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function AdminNavbar({ sidebarOpen, setSidebarOpen }: AdminNavbarProps) {
  return (
    <nav className="bg-[#2a2a2a] border-b border-[#3a3a3a] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white focus:outline-none focus:text-[#9c8a5a] transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold text-[#9c8a5a] mr-4">لوحة التحكم - معتز جبر</h1>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="text-white focus:outline-none focus:text-[#9c8a5a] transition-colors">
          <Bell className="h-6 w-6" />
        </button>
        <button className="text-white focus:outline-none focus:text-[#9c8a5a] transition-colors">
          <User className="h-6 w-6" />
        </button>
      </div>
    </nav>
  )
}

