'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import { Building2, Target, Eye, Heart } from 'lucide-react'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'
import { Input } from '@/app/components/ui/Input'
import { TextArea } from '@/app/components/ui/TextArea'
import { Button } from '@/app/components/ui/Button'

interface AboutFormData {
  companyName: string
  aboutContent: string
  mission: string
  vision: string
  values: string
}

export default function AboutSettings() {
  const [isSaving, setIsSaving] = useState(false)
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<AboutFormData>({
    defaultValues: {
      companyName: 'معتز جابر للتصميم الداخلي',
      mission: 'نسعى لتحويل المساحات إلى تجارب معمارية استثنائية تجمع بين الجمال والوظيفة',
      vision: 'أن نكون الخيار الأول في مجال التصميم الداخلي والمطابخ الفاخرة في الشرق الأوسط',
      values: 'الجودة، الابتكار، الالتزام، رضا العملاء'
    }
  })

  const onSubmit = async (data: AboutFormData) => {
    setIsSaving(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log(data)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
          <Input
            label="اسم الشركة"
            icon={Building2}
            {...register("companyName", { 
              required: "هذا الحقل مطلوب",
              minLength: { value: 3, message: "يجب أن يكون الاسم 3 أحرف على الأقل" }
            })}
            error={errors.companyName?.message}
            placeholder="أدخل اسم الشركة"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            محتوى &quot;من نحن&quot;
          </label>
          <div className="prose max-w-none">
            <ReactQuill
              theme="snow"
              onChange={(content) => setValue('aboutContent', content)}
              className="h-64 mb-12 rounded-lg"
            //   style={{
            //     direction: 'rtl',
            //     textAlign: 'right'
            //   }}
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  [{ 'align': [] }],
                  [{ 'direction': 'rtl' }],
                  ['link'],
                  ['clean']
                ],
              }}
              placeholder="أدخل محتوى صفحة من نحن..."
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <TextArea
            label="مهمتنا"
            icon={Target}
            {...register("mission", { 
              required: "هذا الحقل مطلوب",
              minLength: { value: 20, message: "يجب أن يكون النص 20 حرف على الأقل" }
            })}
            error={errors.mission?.message}
            rows={4}
            placeholder="أدخل مهمة الشركة..."
          />
        </div>

        <div className="md:col-span-2">
          <TextArea
            label="رؤيتنا"
            icon={Eye}
            {...register("vision", { 
              required: "هذا الحقل مطلوب",
              minLength: { value: 20, message: "يجب أن يكون النص 20 حرف على الأقل" }
            })}
            error={errors.vision?.message}
            rows={4}
            placeholder="أدخل رؤية الشركة..."
          />
        </div>

        <div className="md:col-span-2">
          <TextArea
            label="قيمنا"
            icon={Heart}
            {...register("values", { 
              required: "هذا الحقل مطلوب",
              minLength: { value: 10, message: "يجب أن يكون النص 10 أحرف على الأقل" }
            })}
            error={errors.values?.message}
            rows={4}
            placeholder="أدخل قيم الشركة..."
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          type="submit" 
          disabled={isSaving}
          className="w-full md:w-auto"
        >
          {isSaving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
        </Button>
      </div>
    </form>
  )
}

