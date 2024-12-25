'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Users, DollarSign, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

// Dummy data for demonstration
const dashboardData = {
  totalProjects: 150,
  activeProjects: 42,
  totalClients: 98,
  revenue: 1500000,
}

const recentProjects = [
  { id: 1, name: 'فيلا الساحل الشمالي', client: 'أحمد محمود', status: 'جاري التنفيذ' },
  { id: 2, name: 'شقة القاهرة الجديدة', client: 'سارة علي', status: 'مكتمل' },
  { id: 3, name: 'مكتب المعادي', client: 'شركة الأفق', status: 'قيد الموافقة' },
]

const monthlyRevenueData = {
  labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
  datasets: [
    {
      label: 'الإيرادات الشهرية',
      data: [650000, 590000, 800000, 810000, 560000, 550000],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
}

const projectCategoriesData = {
  labels: ['فلل', 'شقق', 'مكاتب', 'مطاعم', 'فنادق'],
  datasets: [
    {
      label: 'عدد المشاريع',
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
}

export default function AdminHome() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#004851] mb-8">لوحة التحكم</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'إجمالي المشاريع', value: dashboardData.totalProjects, icon: <Briefcase size={24} />, color: 'bg-blue-500', change: 5, isIncrease: true },
          { title: 'المشاريع النشطة', value: dashboardData.activeProjects, icon: <TrendingUp size={24} />, color: 'bg-green-500', change: 2, isIncrease: true },
          { title: 'العملاء', value: dashboardData.totalClients, icon: <Users size={24} />, color: 'bg-yellow-500', change: 3, isIncrease: true },
          { title: 'الإيرادات', value: `${dashboardData.revenue.toLocaleString()} ج.م`, icon: <DollarSign size={24} />, color: 'bg-purple-500', change: 7, isIncrease: false },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={isLoading ? "hidden" : "visible"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${item.color} rounded-lg shadow border p-6 text-white`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.icon}
            </div>
            <p className="text-3xl font-bold mb-2">{item.value}</p>
            <div className={`flex items-center text-white font-semibold`}>
              {item.isIncrease ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              <span className="ml-1 text-sm">{item.change}% منذ الشهر الماضي</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow border p-12 h-[440px]"
        >
          <h2 className="text-xl font-bold text-[#004851] mb-4">الإيرادات الشهرية</h2>
          <Line data={monthlyRevenueData} options={{ responsive: true, maintainAspectRatio: false }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-lg shadow border p-12 h-[440px]"
        >
          <h2 className="text-xl font-bold text-[#004851] mb-4">فئات المشاريع</h2>
          <Bar data={projectCategoriesData} options={{ responsive: true, maintainAspectRatio: false }} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg shadow border p-6"
      >
        <h2 className="text-xl font-bold text-[#004851] mb-4">المشاريع الحديثة</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-sm font-semibold tracking-wide">رقم المشروع</th>
                <th className="p-3 text-sm font-semibold tracking-wide">اسم المشروع</th>
                <th className="p-3 text-sm font-semibold tracking-wide">العميل</th>
                <th className="p-3 text-sm font-semibold tracking-wide">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project) => (
                <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 text-sm">{project.id}</td>
                  <td className="p-3 text-sm">{project.name}</td>
                  <td className="p-3 text-sm">{project.client}</td>
                  <td className="p-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === 'مكتمل' ? 'bg-green-200 text-green-800' :
                      project.status === 'جاري التنفيذ' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-blue-200 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}

