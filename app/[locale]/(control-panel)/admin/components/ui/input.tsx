import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full px-4 py-2 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#9c8a5a] ${
          error ? "border-red-500" : "border-gray-600"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default Input

