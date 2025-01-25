import React, { useRef, useState } from 'react'
import { Upload } from 'lucide-react'

interface FileUploadProps {
  label?: string
  accept?: string
  onChange: (file: File | null) => void
  error?: string
}

export const FileUpload: React.FC<FileUploadProps> = ({ label, accept, onChange, error }) => {
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    if (file) {
      setFileName(file.name)
      onChange(file)
    } else {
      setFileName(null)
      onChange(null)
    }
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-[#004851] hover:text-[#003840] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#004851]"
            >
              <span>Upload a file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
                accept={accept}
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          {fileName && <p className="text-sm text-gray-500">{fileName}</p>}
        </div>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

