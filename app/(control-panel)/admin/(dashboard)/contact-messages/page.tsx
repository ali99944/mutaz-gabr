"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Table, { Column } from "../../components/ui/table"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { closeContactMessage, deleteContactMessage, getContactMessages } from "@/src/actions/contact"
import ContactMessage from "@/src/types/contact-message"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import useServerAction from "@/src/hooks/use-server-action"
import { useToast } from "@/hooks/use-toast"
import { Loader2, XCircle } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Reusable Confirmation Dialog Component
function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText,
  cancelText,
}: {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText: string
  cancelText: string
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default function ContactMessages() {
  const { data: messages, isLoading, error } = useGetServerData(getContactMessages, [])

  // State for managing the confirmation dialogs
  const [isCloseDialogOpen, setIsCloseDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)

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
      header: "الحالة",
      accessor: "status",
      render: (status) => {
        return (
          <div className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
            status === 'pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'
          }`}>
            {status === 'pending' ? 'في الانتظار' : 'تم اغلاقها'}
          </div>
        )
      }
    },
    {
      header: "تاريخ الإرسال",
      accessor: "sent_at",
      render: (value) => new Date(value).toLocaleString("ar-EG"),
    },
  ]

  // Handle Close Action
  const handleCloseMessage = (message: ContactMessage) => {
    setSelectedMessage(message)
    setIsCloseDialogOpen(true)
  }

  // Handle Delete Action
  const handleDeleteMessage = (message: ContactMessage) => {
    setSelectedMessage(message)
    setIsDeleteDialogOpen(true)
  }

  const { mutation: executeMessageClose, isLoading: isClosing } = useServerAction(closeContactMessage)
  const { mutation: executeMessageDelete, isLoading: isDeleting } = useServerAction(deleteContactMessage)
  const { toast } = useToast()

  // Confirm Close Action
  const confirmClose = async () => {
    if (selectedMessage) {
      await executeMessageClose({ contact_message_id: selectedMessage.id }, {
        onSuccess() {
          toast({
            title: 'Success',
            description: `Contact message with id ${selectedMessage.id} was closed`
          })

          setIsCloseDialogOpen(false)
          setSelectedMessage(null)
        },

        onFailure(error) {
          toast({
            title: 'Failure',
            description: error,
            variant: 'destructive'
          })
        },
      })
    }
  }

  // Confirm Delete Action
  const confirmDelete = async () => {
    if (selectedMessage) {
      await executeMessageDelete({ contact_message_id: selectedMessage.id }, {
        onSuccess() {
          toast({
            title: 'نجاح',
            description: `تم اغلاق رسالة التواصل`
          })

          setIsCloseDialogOpen(false)
          setSelectedMessage(null)
        },

        onFailure(error) {
          toast({
            title: 'حدثت مشكلة',
            description: error,
            variant: 'destructive'
          })
        },
      })
    }
  }

  if(isClosing || isDeleting || isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-white animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="  z-50 p-4 flex items-center justify-center">
        <div className="bg-red-500 p-4 rounded-md shadow-none">
          <div className="flex items-center gap-x-2">
            <XCircle className="h-6 w-6 text-white" />
            <span className="text-white">{error}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-white p-4">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <Table
          loading={isLoading}
          data={messages}
          columns={columns}
          actions={(row) => (
            <div className="flex gap-2">
              {row.status === 'pending' && (
                <button
                  onClick={() => handleCloseMessage(row)}
                  className="px-2 py-1 text-green-500 hover:text-green-600 transition-colors flex items-center gap-x-2"
                >
                  <span>إغلاق</span>
                </button>
              )}
              <button
                onClick={() => handleDeleteMessage(row)}
                className="px-2 py-1 text-red-500 hover:text-red-600 transition-colors"
              >
                حذف
              </button>
            </div>
          )}
          emptyMessage="لا توجد رسائل تواصل حالياً"
        />
      </motion.div>

      {/* Close Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={isCloseDialogOpen}
        onClose={() => setIsCloseDialogOpen(false)}
        onConfirm={confirmClose}
        title="إغلاق الرسالة"
        description="هل أنت متأكد من رغبتك في إغلاق هذه الرسالة؟"
        confirmText="إغلاق"
        cancelText="إلغاء"
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="حذف الرسالة"
        description="هل أنت متأكد من رغبتك في حذف هذه الرسالة؟"
        confirmText="حذف"
        cancelText="إلغاء"
      />
    </div>
  )
}