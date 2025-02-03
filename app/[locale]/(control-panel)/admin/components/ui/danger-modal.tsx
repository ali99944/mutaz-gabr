import React from 'react'
import Modal from './modal'
import Button from './button'

interface DangerModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
}

const DangerModal: React.FC<DangerModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'حذف',
  cancelText = 'إلغاء',
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p className="text-white mb-6">{message}</p>
      <div className="flex justify-end space-x-2 space-x-reverse">
        <Button onClick={onClose} variant="secondary">
          {cancelText}
        </Button>
        <Button onClick={onConfirm} variant="danger">
          {confirmText}
        </Button>
      </div>
    </Modal>
  )
}

export default DangerModal
