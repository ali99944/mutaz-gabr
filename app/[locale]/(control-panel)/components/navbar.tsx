import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Layout, Menu, MessageSquare, Newspaper, Palette, Users, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/admin" className="text-lg font-bold text-gray-800">
                لوحة تحكم معتز جبر
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-gray-700 mr-4">معتز جبر</span>
            <Button variant="ghost" className="mr-2 text-app-secondary hover:text-app-secondary/85">
              تسجيل الخروج
            </Button>
          </div>
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" className="text-primary" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-12 w-12" /> : <Menu className="h-12 w-12" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <span className="block text-gray-700">معتز جبر</span>
              <Button variant="ghost" className="w-full text-left text-app-secondary hover:text-app-secondary/85">
                تسجيل الخروج
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto bg-white px-4 py-2 min-h-14 flex items-center flex-wrap gap-2">
        <Button variant={'ghost'} className=" flex items-center text-primary">
          <Link href="/admin">الرئيسية</Link>
          <Home className="ml-2" />
        </Button>
        <Button variant={'ghost'} className=" flex items-center text-primary">
          <Link href="/admin/projects">المشاريع</Link>
          <Layout className="ml-2" />
        </Button>
        <Button variant={'ghost'} className=" flex items-center text-primary">
          <Link href="/admin/designs">التصاميم</Link>
          <Palette className="ml-2" />
        </Button>
        <Button variant={'ghost'} className=" flex items-center text-primary">
          <Link href="/admin/managers">المديرين</Link>
          <Users className="ml-2" />
        </Button>
        <Button variant={'ghost'} className=" flex items-center text-primary">
          <Link href="/admin/consultation">استشارات</Link>
          <Newspaper className="ml-2" />
        </Button>
        <Button variant={'ghost'} className=" flex items-center text-primary">
          <Link href="/admin/contact-messages">رسائل التواصل</Link>
          <MessageSquare className="ml-2" />
        </Button>
      </div>
    </nav>
  )
}

