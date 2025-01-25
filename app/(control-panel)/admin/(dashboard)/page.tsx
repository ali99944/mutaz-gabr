"use client"

import { motion } from "framer-motion"
import { BarChart, Users, Briefcase, DollarSign, Plus, FileText, Calendar, Settings } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const projectData = [
  { month: "يناير", completed: 4, ongoing: 2 },
  { month: "فبراير", completed: 3, ongoing: 3 },
  { month: "مارس", completed: 5, ongoing: 2 },
  { month: "أبريل", completed: 4, ongoing: 4 },
  { month: "مايو", completed: 6, ongoing: 3 },
  { month: "يونيو", completed: 4, ongoing: 5 },
]

const revenueData = [
  { month: "يناير", revenue: 50000 },
  { month: "فبراير", revenue: 55000 },
  { month: "مارس", revenue: 60000 },
  { month: "أبريل", revenue: 58000 },
  { month: "مايو", revenue: 65000 },
  { month: "يونيو", revenue: 70000 },
]

export default function AdminContent() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#9c8a5a] mb-6">مرحبًا بك في لوحة التحكم</h2>

      <div className="mb-6 flex flex-wrap gap-4">
        <button className="flex items-center px-4 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-colors">
          <Plus className="ml-2 h-4 w-4" /> إضافة مشروع جديد
        </button>
        <button className="flex items-center px-4 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-colors">
          <FileText className="ml-2 h-4 w-4" /> إنشاء تقرير
        </button>
        <button className="flex items-center px-4 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-colors">
          <Calendar className="ml-2 h-4 w-4" /> جدولة اجتماع
        </button>
        <button className="flex items-center px-4 py-2 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#3a3a3a] transition-colors">
          <Settings className="ml-2 h-4 w-4" /> إعدادات اللوحة
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "إجمالي المشاريع", value: "150", icon: Briefcase, color: "bg-blue-500" },
          { title: "العملاء النشطين", value: "45", icon: Users, color: "bg-green-500" },
          { title: "المشاريع الجارية", value: "12", icon: BarChart, color: "bg-yellow-500" },
          { title: "الإيرادات الشهرية", value: "75,000 ج.م", icon: DollarSign, color: "bg-purple-500" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`${item.color} rounded-lg p-4 text-white`}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold mb-2">{item.title}</p>
                <p className="text-3xl font-bold">{item.value}</p>
              </div>
              <item.icon className="h-12 w-12 opacity-80" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#2a2a2a] rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#9c8a5a] mb-2">حالة المشاريع</h3>
          <p className="text-sm text-gray-400 mb-4">مقارنة بين المشاريع المكتملة والجارية</p>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#9c8a5a" />
                <YAxis stroke="#9c8a5a" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #444" }}
                  labelStyle={{ color: "#9c8a5a" }}
                />
                <Legend />
                <Line type="monotone" dataKey="completed" stroke="#3b82f6" name="المشاريع المكتملة" />
                <Line type="monotone" dataKey="ongoing" stroke="#22c55e" name="المشاريع الجارية" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#2a2a2a] rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#9c8a5a] mb-2">الإيرادات الشهرية</h3>
          <p className="text-sm text-gray-400 mb-4">تطور الإيرادات على مدار الأشهر الستة الماضية</p>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#9c8a5a" />
                <YAxis stroke="#9c8a5a" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #444" }}
                  labelStyle={{ color: "#9c8a5a" }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#a855f7" name="الإيرادات" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

