'use client'

import { Button } from '@/app/components/ui/Button'
import { Dropdown } from '@/app/components/ui/Dropdown'
import { FileUpload } from '@/app/components/ui/FileUpload'
import { Input } from '@/app/components/ui/Input'
import { Text } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function GeneralSettings() {
  const [isSaving, setIsSaving] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const onSubmit = async (data) => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
    setIsSaving(false)
  }

  const timezoneOptions = [
    { value: 'Africa/Cairo', label: 'توقيت القاهرة (EET)' },
    { value: 'Asia/Riyadh', label: 'توقيت الرياض (AST)' },
    { value: 'Asia/Dubai', label: 'توقيت دبي (GST)' },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
            icon={Text}
          label="اسم الموقع"
          {...register("siteName", { required: "هذا الحقل مطلوب" })}
          error={errors.siteName?.message}
        />
        <Dropdown
          label="المنطقة الزمنية"
          options={timezoneOptions}
          value={register("timezone").value}
          onChange={(value) => setValue("timezone", value)}
          error={errors.timezone?.message}
        />
        <FileUpload
          label="شعار الموقع"
          accept="image/*"
          onChange={(file) => setValue("logo", file)}
        />
        <FileUpload
          label="أيقونة الموقع"
          accept="image/x-icon,image/png"
          onChange={(file) => setValue("favicon", file)}
        />
      </div>
      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
      </Button>
    </form>
  )
}

