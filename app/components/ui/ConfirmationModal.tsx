import { Modal } from './Modal'
import { Button } from './Button'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
  title: string
  message: string
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onAccept,
  title,
  message,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="mb-6">
        <p className="text-gray-700">{message}</p>
      </div>
      <div className="flex justify-end space-x-4 space-x-reverse">
        <Button variant="outline" onClick={onClose}>
          إلغاء
        </Button>
        <Button onClick={onAccept}>
          تأكيد
        </Button>
      </div>
    </Modal>
  )
}

