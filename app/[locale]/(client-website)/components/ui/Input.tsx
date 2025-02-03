import React from 'react'
import { LucideIcon } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: LucideIcon
  error?: string
}

export const Input: React.FC<InputProps> = ({ label, icon: Icon, error, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          {...props}
          className={`block w-full bg-white border rounded-md shadow-sm pl-3 pr-10 py-2 text-right cursor-text focus:outline-none focus:ring-1 focus:ring-[#004851] focus:border-[#004851] sm:text-sm ${
            error ? 'border-red-300' : 'border-gray-300'
          } ${className}`}
        />
        {Icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

