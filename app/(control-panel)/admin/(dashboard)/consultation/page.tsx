'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import Table, { Column } from "../../components/ui/table"
import Consultant from "@/src/types/consultant"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { closeConsultation, deleteConsultation, getConsultations } from "@/src/actions/consultation"
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
import { Loader2 } from "lucide-react"
import ErrorComponent from "../../components/error-component"

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

export default function ConsultationsPage() {
  const { data: consultations, isLoading, error } = useGetServerData(getConsultations, [])

  // State for managing the confirmation dialogs
  const [isCloseDialogOpen, setIsCloseDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedConsultation, setSelectedConsultation] = useState<Consultant | null>(null)

  const columns: Column<Consultant>[] = [
    { header: 'الرقم التعريفي', accessor: 'id' },
    { header: 'الإسم', accessor: 'name' },
    { header: 'رقم الهاتف', accessor: 'phone' },
    { header: 'البريد الإلكتروني', accessor: 'email' },
    {
      header: "الرسالة",
      accessor: "message",
      render: (value) => <div className="max-w-xs text-wrap">{value}</div>,
    },
    { header: 'تاريخ الإرسال', accessor: 'sent_at', render: (value) => new Date(value).toLocaleString("ar-EG") },
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
  ]

  // Handle Close Action
  const handleCloseConsultation = (consultation: Consultant) => {
    setSelectedConsultation(consultation)
    setIsCloseDialogOpen(true)
  }

  // Handle Delete Action
  const handleDeleteConsultation = (consultation: Consultant) => {
    setSelectedConsultation(consultation)
    setIsDeleteDialogOpen(true)
  }

  const { mutation: executeConsultationClose, isLoading: isClosing } = useServerAction(closeConsultation)
  const { mutation: executeConsultationDelete, isLoading: isDeleting } = useServerAction(deleteConsultation)
  const { toast } = useToast()

  // Confirm Close Action
  const confirmClose = async () => {
    if (selectedConsultation) {
      await executeConsultationClose({ consultation_id: selectedConsultation.id }, {
        onSuccess() {
          toast({
            title: 'نجاح',
            description: `تم إغلاق الاستشارة`
          })

          setIsCloseDialogOpen(false)
          setSelectedConsultation(null)
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

  // Confirm Delete Action
  const confirmDelete = async () => {
    if (selectedConsultation) {
      await executeConsultationDelete({ consultation_id: selectedConsultation.id }, {
        onSuccess() {
          toast({
            title: 'نجاح',
            description: `تم حذف الاستشارة`
          })

          setIsDeleteDialogOpen(false)
          setSelectedConsultation(null)
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

  if (isClosing || isDeleting || isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-white animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <ErrorComponent error={error} />
    )
  }

  return (
    <div className="min-h-screen text-white p-4">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <Table
          loading={isLoading}
          data={consultations}
          columns={columns}
          actions={(row) => (
            <div className="flex gap-2">
              {row.status === 'pending' && (
                <button
                  onClick={() => handleCloseConsultation(row)}
                  className="px-2 py-1 text-green-500 hover:text-green-600 transition-colors flex items-center gap-x-2"
                >
                  <span>إغلاق</span>
                </button>
              )}
              <button
                onClick={() => handleDeleteConsultation(row)}
                className="px-2 py-1 text-red-500 hover:text-red-600 transition-colors"
              >
                حذف
              </button>
            </div>
          )}
          emptyMessage="لا توجد استشارات حالياً"
        />
      </motion.div>

      {/* Close Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={isCloseDialogOpen}
        onClose={() => setIsCloseDialogOpen(false)}
        onConfirm={confirmClose}
        title="إغلاق الاستشارة"
        description="هل أنت متأكد من رغبتك في إغلاق هذه الاستشارة؟"
        confirmText="إغلاق"
        cancelText="إلغاء"
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="حذف الاستشارة"
        description="هل أنت متأكد من رغبتك في حذف هذه الاستشارة؟"
        confirmText="حذف"
        cancelText="إلغاء"
      />
    </div>
  )
}