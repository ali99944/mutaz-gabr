"use client"

import { motion } from "framer-motion"
import { Trash2 } from "lucide-react"
import Table, { Column } from "../../components/ui/table"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { getContactMessages } from "@/src/actions/contact"
import ContactMessage from "@/src/types/contact-message"


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactMessages() {

  const { data: messages, isLoading } = useGetServerData(getContactMessages, [])

  const columns: Column<ContactMessage>[] = [
    {
      header: "اسم العميل",
      accessor: 'name',
      pinned: true,
    },
    {
      header: "رقم الهاتف",
      accessor: 'phone',
    },
    {
      header: "البريد الإلكتروني",
      accessor: 'email',
    },
    {
      header: "الرسالة",
      accessor: "message",
      render: (value) => <div className="max-w-xs text-wrap">{value}</div>,
    },
    {
      header: "تاريخ الإرسال",
      accessor: "sent_at",
      render: (value) => new Date(value).toLocaleString("ar-EG"),
    },
  ]

  // const handleViewMessage = (message: ContactMessage) => {
  //   // Implement view message functionality
  //   console.log("View message:", message)
  // }

  const handleDeleteMessage = (message: ContactMessage) => {
    // Implement delete message functionality
    console.log("Delete message:", message)
  }

  return (
    <div className="min-h-screen text-white p-4">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <Table
          loading={isLoading}
          data={messages}
          columns={columns}
          actions={(row) => (
            <button
                onClick={() => handleDeleteMessage(row)}
                className="p-1 text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 size={18} />
              </button>
          )}
          emptyMessage="لا توجد رسائل تواصل حالياً"
        />
      </motion.div>
    </div>
  )
}

