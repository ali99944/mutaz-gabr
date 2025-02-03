import { Modal } from './Modal'
import { Button } from './Button'
import { AlertTriangle } from 'lucide-react'

interface DangerModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
  title: string
  message: string
}

export const DangerModal: React.FC<DangerModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  title,
  message,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="mb-6 flex items-center">
        <AlertTriangle className="text-red-500 ml-2" size={24} />
        <p className="text-gray-700">{message}</p>
      </div>
      <div className="flex justify-end space-x-2 space-x-reverse">
        <Button variant="outline" onClick={onClose}>
          إلغاء
        </Button>
        <Button variant="danger" onClick={onAccept}>
          تأكيد الحذف
        </Button>
      </div>
    </Modal>
  )
}

