'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Grid, Save } from 'lucide-react'
import { Breadcrumb } from '@/app/components/ui/Breadcrumb'
import { Input } from '@/app/components/ui/Input'
import { TextArea } from '@/app/components/ui/TextArea'
import { Dropdown } from '@/app/components/ui/Dropdown'
import { FileUpload } from '@/app/components/ui/FileUpload'
import { Button } from '@/app/components/ui/Button'

const serviceCategories = [
  { value: 'مطابخ', label: 'مطابخ' },
  { value: 'غرف معيشة', label: 'غرف معيشة' },
  { value: 'غرف نوم', label: 'غرف نوم' },
  { value: 'حمامات', label: 'حمامات' },
  { value: 'مكاتب', label: 'مكاتب' },
  { value: 'واجهات خارجية', label: 'واجهات خارجية' },
]

export default function AddService() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    features: '',
    process: '',
  })
  const [mainImage, setMainImage] = useState<File | null>(null)
  const [portfolioImages, setPortfolioImages] = useState<File[]>([])

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

  const handlePortfolioImagesUpload = (files: FileList | null) => {
    if (files) {
      setPortfolioImages(Array.from(files))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log('Form submitted:', { ...formData, mainImage, portfolioImages })
    // Redirect to services list after submission
    router.push('/admin/services')
  }

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'الخدمات', href: '/admin/services', icon: Grid },
          { label: 'إضافة خدمة جديدة' },
        ]}
      />
      <h1 className="admin-heading-xl mb-6">إضافة خدمة جديدة</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <Input
          label="اسم الخدمة"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <TextArea
          label="وصف الخدمة"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <Dropdown
          label="فئة الخدمة"
          options={serviceCategories}
          value={formData.category}
          onChange={handleDropdownChange('category')}
        />
        <TextArea
          label="مميزات الخدمة"
          name="features"
          value={formData.features}
          onChange={handleInputChange}
          placeholder="أدخل كل ميزة في سطر منفصل"
        />
        <TextArea
          label="مراحل العمل"
          name="process"
          value={formData.process}
          onChange={handleInputChange}
          placeholder="أدخل كل مرحلة في سطر منفصل"
        />
        <FileUpload
          label="الصورة الرئيسية"
          accept="image/*"
          onChange={handleMainImageUpload}
        />
        <FileUpload
          label="صور الأعمال السابقة"
          accept="image/*"
        //   multiple
          onChange={(files) => console.log(files)}
          
        />
        <Button type="submit" icon={Save}>حفظ الخدمة</Button>
      </form>
    </div>
  )
}

