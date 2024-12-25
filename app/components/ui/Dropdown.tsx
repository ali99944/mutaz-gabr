import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface DropdownProps {
  label?: string
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  error?: string
}

export const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="mt-1 relative">
        <button
          type="button"
          className={`relative w-full bg-white border rounded-md shadow-sm pl-3 pr-10 py-2 text-right cursor-default focus:outline-none focus:ring-1 focus:ring-[#004851] focus:border-[#004851] sm:text-sm ${
            error ? 'border-red-300' : 'border-gray-300'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="block truncate">
            {options.find((option) => option.value === value)?.label || 'Select an option'}
          </span>
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </button>

        {isOpen && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={`cursor-default select-none relative py-2 pl-3 pr-9 ${
                  option.value === value ? 'text-white bg-[#004851]' : 'text-gray-900'
                }`}
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
              >
                <span className={`block truncate ${option.value === value ? 'font-semibold' : 'font-normal'}`}>
                  {option.label}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

