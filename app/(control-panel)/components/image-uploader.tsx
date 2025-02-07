"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"

interface ImageUploaderProps {
  currentImage: string
  onImageUpload: (imageUrl: string) => void
  className?: string
}

export function ImageUploader({ currentImage, onImageUpload, className }: ImageUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
      // In a real application, you would upload the file to your server here
      // and then call onImageUpload with the returned URL
      onImageUpload(URL.createObjectURL(file))
    }
  }

  const handleRemoveImage = () => {
    setPreviewUrl(null)
    onImageUpload("")
  }

  return (
    <div className={`relative ${className}`}>
      {(previewUrl || currentImage) && (
        <Image src={previewUrl || currentImage} alt="Preview" layout="fill" objectFit="cover" className="rounded-md" />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
        <div className="text-center">
          <Label htmlFor="image-upload" className="cursor-pointer">
            <div className="bg-white text-black rounded-full p-2 mb-2 inline-block">
              <Upload className="h-6 w-6" />
            </div>
            <span className="text-white block">تغيير الصورة</span>
          </Label>
          <Input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          {(previewUrl || currentImage) && (
            <Button variant="destructive" size="sm" className="mt-2" onClick={handleRemoveImage}>
              <X className="h-4 w-4 mr-2" />
              إزالة الصورة
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

