"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Eye, Trash2 } from "lucide-react"
import Table, { Column } from "../../components/ui/table"

interface Client {
  id: number
  name: string
  phone_number: string
  email: string
}

interface ContactMessage {
  id: number
  client: Client
  message: string
  sent_at: string
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          client: {
            id: 1,
            name: "أحمد محمد",
            phone_number: "01234567890",
            email: "ahmed@example.com",
          },
          message: "أنا مهتم بخدماتكم في تصميم المطابخ. هل يمكنكم تقديم عرض سعر؟",
          sent_at: "2023-06-15T10:30:00Z",
        },
        {
          id: 2,
          client: {
            id: 2,
            name: "فاطمة علي",
            phone_number: "01098765432",
            email: "fatima@example.com",
          },
          message: "هل لديكم خبرة في تصميم الفلل؟ أود رؤية بعض أعمالكم السابقة.",
          sent_at: "2023-06-14T15:45:00Z",
        },
        // Add more mock data as needed
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const columns: Column<ContactMessage>[] = [
    {
      header: "اسم العميل",
      accessor: ["client", "name"],
      pinned: true,
    },
    {
      header: "رقم الهاتف",
      accessor: ["client", "phone_number"],
    },
    {
      header: "البريد الإلكتروني",
      accessor: ["client", "email"],
    },
    {
      header: "الرسالة",
      accessor: "message",
      render: (value) => <div className="max-w-xs truncate">{value}</div>,
    },
    {
      header: "تاريخ الإرسال",
      accessor: "sent_at",
      render: (value) => new Date(value).toLocaleString("ar-EG"),
    },
  ]

  const handleViewMessage = (message: ContactMessage) => {
    // Implement view message functionality
    console.log("View message:", message)
  }

  const handleDeleteMessage = (message: ContactMessage) => {
    // Implement delete message functionality
    console.log("Delete message:", message)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-[#9c8a5a] mb-6">رسائل التواصل</h1>
        <Table
          loading={loading}
          data={messages}
          columns={columns}
          actions={(row) => (
            <div className="flex justify-end space-x-2 space-x-reverse">
              <button
                onClick={() => handleViewMessage(row)}
                className="p-1 text-[#9c8a5a] hover:text-[#8a795c] transition-colors"
              >
                <Eye size={18} />
              </button>
              <button
                onClick={() => handleDeleteMessage(row)}
                className="p-1 text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          )}
          emptyMessage="لا توجد رسائل تواصل حالياً"
        />
      </motion.div>
    </div>
  )
}

