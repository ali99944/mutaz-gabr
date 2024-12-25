'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Search, BarChart, Hash } from 'lucide-react'
import { Input } from '@/app/components/ui/Input'
import { TextArea } from '@/app/components/ui/TextArea'
import { Button } from '@/app/components/ui/Button'


interface SEOFormData {
  metaTitle: string
  metaDescription: string
  keywords: string
  googleAnalyticsId: string
  allowIndexing: boolean
}

export default function SEOSettings() {
  const [isSaving, setIsSaving] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<SEOFormData>()

  const onSubmit = async (data: SEOFormData) => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
    setIsSaving(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Right side - Input fields */}
        <div className="md:w-1/2 space-y-6">
          <Input
            label="عنوان الميتا"
            icon={Search}
            {...register("metaTitle", { required: "هذا الحقل مطلوب" })}
            error={errors.metaTitle?.message}
            placeholder="أدخل عنوان الميتا..."
          />
          
          <Input
            label="الكلمات المفتاحية"
            icon={Hash}
            {...register("keywords", { required: "هذا الحقل مطلوب" })}
            error={errors.keywords?.message}
            placeholder="أدخل الكلمات المفتاحية مفصولة بفواصل..."
          />
          
          <Input
            label="معرف Google Analytics"
            icon={BarChart}
            {...register("googleAnalyticsId")}
            placeholder="مثال: UA-XXXXXXXXX-X"
          />
        </div>

        {/* Left side - Text area */}
        <div className="md:w-1/2 h-full">
          <TextArea
            rows={10}
            label="وصف الميتا"
            {...register("metaDescription", { required: "هذا الحقل مطلوب" })}
            error={errors.metaDescription?.message}
            className="h-[calc(100%-1.5rem)]" // Adjust height to match inputs container
            placeholder="أدخل وصف الميتا..."
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2 space-x-reverse">
          <input
            type="checkbox"
            {...register("allowIndexing")}
            className="form-checkbox h-5 w-5 text-[#004851] rounded border-gray-300 focus:ring-[#004851]"
          />
          <span className="text-sm text-gray-700">السماح لمحركات البحث بفهرسة الموقع</span>
        </label>

        <Button type="submit" disabled={isSaving}>
          {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
        </Button>
      </div>
    </form>
  )
}

