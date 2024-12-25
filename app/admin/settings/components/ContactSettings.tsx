'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Input } from '@/app/components/ui/Input'
import { TextArea } from '@/app/components/ui/TextArea'
import { Button } from '@/app/components/ui/Button'


export default function ContactSettings() {
  const [isSaving, setIsSaving] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async () => {
    setIsSaving(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="البريد الإلكتروني"
          icon={Mail}
          {...register("email", { 
            required: "هذا الحقل مطلوب",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "عنوان بريد إلكتروني غير صالح"
            }
          })}
          error={errors.email?.message as string}
        />
        <Input
          label="رقم الهاتف"
          icon={Phone}
          {...register("phone", { required: "هذا الحقل مطلوب" })}
          error={errors.phone?.message as string}
        />
        <TextArea
          label="العنوان"
          {...register("address", { required: "هذا الحقل مطلوب" })}
          error={errors.address?.message as string}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Facebook"
          icon={Facebook}
          {...register("facebook")}
        />
        <Input
          label="Twitter"
          icon={Twitter}
          {...register("twitter")}
        />
        <Input
          label="Instagram"
          icon={Instagram}
          {...register("instagram")}
        />
        <Input
          label="LinkedIn"
          icon={Linkedin}
          {...register("linkedin")}
        />
      </div>
      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
      </Button>
    </form>
  )
}