import React from 'react'
import { type LucideIcon } from 'lucide-react'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  icon?: LucideIcon
  error?: string
}

export const TextArea: React.FC<TextAreaProps> = ({ label, icon: Icon, error, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          {...props}
          className={`block w-full bg-white border rounded-md shadow-sm pl-3 pr-10 py-2 text-right focus:outline-none focus:ring-1 focus:ring-[#004851] focus:border-[#004851] sm:text-sm ${
            error ? 'border-red-300' : 'border-gray-300'
          } ${className}`}
        />
        {Icon && (
          <div className="absolute top-2 right-0 flex items-start pr-3 pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

