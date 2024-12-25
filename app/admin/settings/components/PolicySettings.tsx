'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'
import { Button } from '@/app/components/ui/Button'

export default function PolicySettings() {
  const [isSaving, setIsSaving] = useState(false)
  const { handleSubmit, setValue } = useForm()

  const onSubmit = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            سياسة الخصوصية
          </label>
          <ReactQuill
            theme="snow"
            onChange={(content) => setValue('privacyPolicy', content)}
            className="h-64 mb-12"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            شروط الخدمة
          </label>
          <ReactQuill
            theme="snow"
            onChange={(content) => setValue('termsOfService', content)}
            className="h-64 mb-12"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            سياسة الاسترجاع
          </label>
          <ReactQuill
            theme="snow"
            onChange={(content) => setValue('refundPolicy', content)}
            className="h-64 mb-12"
          />
        </div>
      </div>
      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
      </Button>
    </form>
  )
}

