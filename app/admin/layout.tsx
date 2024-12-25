import { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import AdminNavbar from './components/admin_navbar'
import AdminSidebar from './components/admin_sidebar'
import './index.css'
const cairo = Cairo({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'لوحة التحكم - معتز جابر للتصميم الداخلي',
  description: 'لوحة التحكم الإدارية لموقع معتز جابر للتصميم الداخلي',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${cairo.className} flex h-screen bg-gray-100`} dir='rtl'>
      <AdminSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminNavbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="container mx-auto">
            <div className="bg-white rounded-lg shadow">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

