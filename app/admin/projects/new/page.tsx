'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Briefcase, Save } from 'lucide-react'
import { Breadcrumb } from '@/app/components/ui/Breadcrumb'
import { Input } from '@/app/components/ui/Input'
import { TextArea } from '@/app/components/ui/TextArea'
import { FileUpload } from '@/app/components/ui/FileUpload'
import { Button } from '@/app/components/ui/Button'
import { Dropdown } from '@/app/components/ui/Dropdown'


const projectCategories = [
  { value: 'فلل', label: 'فلل' },
  { value: 'شقق', label: 'شقق' },
  { value: 'مكاتب', label: 'مكاتب' },
  { value: 'مطاعم', label: 'مطاعم' },
  { value: 'فنادق', label: 'فنادق' },
]

const projectStatuses = [
  { value: 'pending', label: 'قيد المراجعة' },
  { value: 'in_progress', label: 'قيد التنفيذ' },
  { value: 'completed', label: 'مكتمل' },
]

export default function AddProject() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    status: '',
    area: '',
    location: '',
    startDate: '',
    duration: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
  })
  const [mainImage, setMainImage] = useState<File | null>(null)
  const [galleryImages, setGalleryImages] = useState<File[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDropdownChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleMainImageUpload = (file: File | null) => {
    setMainImage(file)
  }

//   const handleGalleryImagesUpload = (files: FileList | null) => {
//     if (files) {
//       setGalleryImages(Array.from(files))
//     }
//   }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log('Form submitted:', { ...formData, mainImage, galleryImages })
    // Redirect to projects list after submission
    router.push('/admin/projects')
  }

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'المشاريع', href: '/admin/projects', icon: Briefcase },
          { label: 'إضافة مشروع جديد' },
        ]}
      />
      <h1 className="admin-heading-xl mb-6">إضافة مشروع جديد</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <Input
          label="عنوان المشروع"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <TextArea
          label="وصف المشروع"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Dropdown
            label="فئة المشروع"
            options={projectCategories}
            value={formData.category}
            onChange={handleDropdownChange('category')}
          />
          <Dropdown
            label="حالة المشروع"
            options={projectStatuses}
            value={formData.status}
            onChange={handleDropdownChange('status')}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="المساحة"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
          />
          <Input
            label="الموقع"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="تاريخ البدء"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleInputChange}
          />
          <Input
            label="مدة المشروع"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
          />
        </div>
        <h2 className="admin-heading-lg">معلومات العميل</h2>
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="اسم العميل"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
          />
          <Input
            label="رقم الهاتف"
            name="clientPhone"
            value={formData.clientPhone}
            onChange={handleInputChange}
          />
        </div>
        <Input
          label="البريد الإلكتروني"
          name="clientEmail"
          type="email"
          value={formData.clientEmail}
          onChange={handleInputChange}
        />
        <FileUpload
          label="الصورة الرئيسية"
          accept="image/*"
          onChange={handleMainImageUpload}
        />
        <FileUpload
          label="صور المعرض"
          accept="image/*"
          onChange={(files) => console.log(files)}
        />
        <Button type="submit" icon={Save}>حفظ المشروع</Button>
      </form>
    </div>
  )
}

