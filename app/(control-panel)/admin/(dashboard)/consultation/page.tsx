"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Eye, Trash2 } from "lucide-react"
import Table, { Column } from "../../components/ui/table"

interface Consultation {
  id: number
  name: string
  email: string
  phone: string
  projectType: string
  message: string
  createdAt: string
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AdminConsultations() {
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setConsultations([
        {
          id: 1,
          name: "أحمد محمد",
          email: "ahmed@example.com",
          phone: "01234567890",
          projectType: "تصميم داخلي",
          message: "أرغب في تصميم غرفة المعيشة بأسلوب عصري.",
          createdAt: "2023-06-15T10:30:00Z",
        },
        {
          id: 2,
          name: "فاطمة علي",
          email: "fatima@example.com",
          phone: "01098765432",
          projectType: "تصميم مطبخ",
          message: "أحتاج إلى تصميم مطبخ عصري لشقتي الجديدة.",
          createdAt: "2023-06-14T15:45:00Z",
        },
        // Add more mock data as needed
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const columns: Column<Consultation>[] = [
    {
      header: "الاسم",
      accessor: "name",
      pinned: true,
    },
    {
      header: "البريد الإلكتروني",
      accessor: "email",
    },
    {
      header: "رقم الهاتف",
      accessor: "phone",
    },
    {
      header: "نوع المشروع",
      accessor: "projectType",
    },
    {
      header: "الرسالة",
      accessor: "message",
      render: (value) => <div className="max-w-xs truncate">{value}</div>,
    },
    {
      header: "تاريخ الطلب",
      accessor: "createdAt",
      render: (value) => new Date(value).toLocaleString("ar-EG"),
    },
  ]

  const handleViewConsultation = (consultation: Consultation) => {
    // Implement view consultation functionality
    console.log("View consultation:", consultation)
  }

  const handleDeleteConsultation = (consultation: Consultation) => {
    // Implement delete consultation functionality
    console.log("Delete consultation:", consultation)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-[#9c8a5a] mb-6">طلبات الاستشارة</h1>
        <Table
          loading={loading}
          data={consultations}
          columns={columns}
          actions={(row) => (
            <div className="flex justify-end space-x-2 space-x-reverse">
              <button
                onClick={() => handleViewConsultation(row)}
                className="p-1 text-[#9c8a5a] hover:text-[#8a795c] transition-colors"
              >
                <Eye size={18} />
              </button>
              <button
                onClick={() => handleDeleteConsultation(row)}
                className="p-1 text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          )}
          emptyMessage="لا توجد طلبات استشارة حالياً"
        />
      </motion.div>
    </div>
  )
}

