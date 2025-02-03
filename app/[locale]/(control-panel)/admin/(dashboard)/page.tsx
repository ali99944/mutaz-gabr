"use client"

import { motion } from "framer-motion"
import {
  Users,
  Briefcase,
  DollarSign,
  Plus,
  FileText,
  Layout,
  MessageSquare,
  SettingsIcon,
  UserIcon,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const quickActions = [
  { title: "إضافة مشروع", icon: Plus, color: "bg-blue-200 text-blue-600", link: '/admin/projects/create' },
  { title: "رسائل التواصل", icon: MessageSquare, color: "bg-green-200 text-green-600", link: '/admin/contact-messages' },
  { title: "الاستشارات", icon: MessageSquare, color: "bg-yellow-200 text-yellow-600", link: '/admin/consultation' },
  { title: "المشاريع", icon: Layout, color: "bg-purple-200 text-purple-600", link: '/admin/projects' },
  { title: "الاعدادات", icon: SettingsIcon, color: "bg-pink-200 text-pink-600", link: '/admin/website-settings' },
  { title: "المديرين", icon: UserIcon, color: "bg-indigo-200 text-indigo-600", link: '/admin/managers' },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" dir="rtl">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[
            { title: "إجمالي المشاريع", value: "150", icon: Briefcase, color: " text-blue-600" },
            { title: "العملاء النشطين", value: "45", icon: Users, color: "text-green-600" },
            { title: "المشاريع الجارية", value: "12", icon: FileText, color: "text-yellow-600" },
            {
              title: "الإيرادات الشهرية",
              value: "75,000 ج.م",
              icon: DollarSign,
              color: " text-purple-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="rounded shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="rounded shadow-sm mb-4">
          <CardHeader>
            <CardTitle>الإجراءات السريعة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={action.link}>
                    <Button
                      className={`w-full h-full hover:bg-opacity-85 flex flex-col items-center justify-center p-4 ${action.color} rounded shadow-sm`}
                    >
                      <action.icon className="h-8 w-8 mb-2" />
                      <span className="text-sm text-center">{action.title}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

