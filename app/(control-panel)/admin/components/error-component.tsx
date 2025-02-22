import { XCircle } from 'lucide-react'
import React from 'react'

interface ErrorComponentProps {
    error: string   
}

const ErrorComponent:React.FC<ErrorComponentProps> = ({ error }) => {
  return (
    <div className="z-50 p-4 flex items-center justify-center">
        <div className="bg-red-500 p-4 rounded-md shadow-none">
          <div className="flex items-center gap-x-2">
            <XCircle className="h-6 w-6 text-white" />
            <span className="text-white">{error}</span>
          </div>
        </div>
      </div>
  )
}

export default ErrorComponent