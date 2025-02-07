"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Upload, Plus } from "lucide-react"

interface ProjectImage {
    id: number
    name: string
    src: string
  }

interface ImageGalleryProps {
  images: ProjectImage[]
  onDelete: (imageUrl: number) => void
  onAdd: (imageUrl: string) => void
}

export function ImageGallery({ images, onDelete, onAdd }: ImageGalleryProps) {
  const [newImage, setNewImage] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setNewImage(file)
    }
  }

  const handleAddImage = () => {
    if (newImage) {
      // In a real application, you would upload the file to your server here
      // and then call onAdd with the returned URL
      onAdd(URL.createObjectURL(newImage))
      setNewImage(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={() => onDelete(image.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <div className="relative aspect-square bg-muted rounded-md flex items-center justify-center">
          <Label htmlFor="gallery-upload" className="cursor-pointer text-center">
            <Plus className="h-8 w-8 mb-2 mx-auto" />
            <span>إضافة صورة</span>
          </Label>
          <Input id="gallery-upload" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        </div>
      </div>
      {newImage && (
        <div className="flex items-center space-x-2">
          <Button onClick={handleAddImage}>
            <Upload className="h-4 w-4 mr-2" />
            إضافة الصورة الجديدة
          </Button>
          <span>{newImage.name}</span>
        </div>
      )}
    </div>
  )
}

