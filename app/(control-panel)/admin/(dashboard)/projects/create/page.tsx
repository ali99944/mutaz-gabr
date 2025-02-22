"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { createProject } from "@/src/actions/project"

export default function NewProject() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [projectType, setProjectType] = useState("interior")
  const [subCategory, setSubCategory] = useState<string | null>(null)

  const projectTypes = {
    interior: [
      {label: "شقق", value: "apartments"},
      {label: "فيلات", value: "villas"},
      {label: "ابراج", value: "towers"},
      {label: "شاليه", value: "chalet"},
      {label: "محلات", value: "shop"},
      {label: "تجاري", value: "commercial"},
    ],
    kitchen: [
      {label: 'مطابخ', value: 'kitchens'},
      {label: 'مغاسل', value: 'dressing'},
      {label: 'مراحيض', value: 'toilet'},
      {label: 'غرف غسيل', value: 'laundary'},
      {label: 'مطابخ صغيرة', value: 'kitchenette'},
      {label: 'أخرى', value: 'others'},
    ],
  }

  const [mainImage, setMainImage] = useState<File | null>(null)
  const [images, setImages] = useState<File[]>([])

  // Form fields state
  const [name, setName] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)
  const [clientName, setClientName] = useState<string | null>(null)
  const [areaSize, setAreaSize] = useState<number | null>(null)
  const [budget, setBudget] = useState<number | null>(null)
  const [specifications, setSpecifications] = useState<string | null>(null)
  const [executionDays, setExecutionDays] = useState<number | null>(null)

  const { toast } = useToast()

  useEffect(() => {
    setSubCategory(null)
  }, [projectType])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)])
    }
  }

  const validateStep1 = () => {
    const errors = []
    if(!name) errors.push("اسم المشروع مطلوب")
    if(!clientName) errors.push("اسم العميل مطلوب")
    if(!projectType) errors.push("نوع المشروع مطلوب")
    if(!subCategory) errors.push("التصنيف الفرعي مطلوب")
    if(!areaSize) errors.push("مساحة المشروع مطلوبة")
    if(!budget) errors.push("ميزانية المشروع مطلوبة")

    if(errors.length > 0) {
      toast({
        title: 'حقول مطلوبة',
        description: errors.join('\n\n'),
        variant: 'destructive'
      })
      return false
    }
    return true
  }

  const validateStep2 = () => {
    const errors = []
    if(!description) errors.push("وصف المشروع مطلوب")
    if(!specifications) errors.push("المواصفات الفنية مطلوبة")
    if(!executionDays) errors.push("مدة التنفيذ مطلوبة")

    if(errors.length > 0) {
      toast({
        title: 'حقول مطلوبة',
        description: errors.join('\n\n'),
        variant: 'destructive'
      })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if(mainImage == null) {
        toast({
          title: "صورة رئيسية مطلوبة",
          description: "يرجى إضافة صورة رئيسية للمشروع",
          variant: 'destructive'
        })
        return
      }

      const formData = new FormData()
      formData.append('name', name!)
      formData.append('description', description!)
      formData.append('client_name', clientName!)
      formData.append('specifications', specifications!)
      formData.append('budget', budget!.toString())
      formData.append('area_size', areaSize!.toString())
      formData.append('category', projectType as 'interior' | 'kitchen')
      formData.append('sub_category', subCategory!)
      formData.append('execution_days', executionDays!.toString())
      formData.append('main_image', mainImage)

      for (let i = 0; i < images.length; i++) {
        formData.append('gallery', images[i])
      }

      const response = await createProject(formData)

      if(response) {
        toast({
          title: "تمت الإضافة",
          description: "تم إضافة المشروع بنجاح"
        })
      }
    } catch(error) {
      toast({
        variant: 'destructive',
        title: 'خطأ',
        description: error.message
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="rounded shadow-sm">
        <CardHeader>
          <CardTitle>إضافة مشروع جديد</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Step 1 - Basic Information */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectName">اسم المشروع</Label>
                  <Input value={name || ""} onChange={(e) => setName(e.target.value)} id="projectName" placeholder="أدخل اسم المشروع" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientName">اسم العميل</Label>
                  <Input value={clientName || ""} onChange={e => setClientName(e.target.value)} id="clientName" placeholder="أدخل اسم العميل" />
                </div>
                <div className="space-y-2">
                  <Label>نوع المشروع</Label>
                  <RadioGroup defaultValue="interior" onValueChange={setProjectType}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="interior" id="interior" />
                      <Label htmlFor="interior">تصميم داخلي</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="kitchen" id="kitchen" />
                      <Label htmlFor="kitchen">تصميم مطبخ</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectSubtype">تصنيف فرعي للمشروع</Label>
                  <Select onValueChange={setSubCategory} value={subCategory || ""}>
                    <SelectTrigger id="projectSubtype">
                      <SelectValue placeholder="اختر التصنيف الفرعي" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes[projectType as 'interior' | 'kitchen'].map((item) => (
                        <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectArea">مساحة المشروع (متر مربع)</Label>
                  <Input value={areaSize || ""} onChange={e => setAreaSize(+e.target.value)} id="projectArea" type="number" placeholder="أدخل مساحة المشروع" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectBudget">ميزانية المشروع</Label>
                  <Input value={budget || ""} onChange={e => setBudget(+e.target.value)} id="projectBudget" type="number" placeholder="أدخل ميزانية المشروع" />
                </div>
              </div>
            )}

            {/* Step 2 - Project Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">وصف المشروع</Label>
                  <Textarea value={description || ""} onChange={e => setDescription(e.target.value)} rows={6} id="projectDescription" placeholder="أدخل وصفًا مفصلاً للمشروع" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="technicalSpecs">المواصفات الفنية</Label>
                  <Textarea value={specifications || ""} onChange={e => setSpecifications(e.target.value)} rows={6} id="technicalSpecs" placeholder="أدخل المواصفات الفنية للمشروع" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="executionPeriod">مدة التنفيذ (بالأيام)</Label>
                  <Input value={executionDays || ""} onChange={e => setExecutionDays(+e.target.value)} id="executionPeriod" type="number" placeholder="أدخل مدة تنفيذ المشروع" />
                </div>
              </div>
            )}

            {/* Step 3 - Media Upload */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="mainImage">الصورة الرئيسية</Label>
                  <Input
                    id="mainImage"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setMainImage(e.target.files?.[0] || null)}
                  />
                  {mainImage && (
                    <div className="mt-2">
                      <img
                        src={URL.createObjectURL(mainImage)}
                        alt="Uploaded image"
                        className="h-40"
                      />
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="galleryImages">معرض الصور (اختياري)</Label>
                  <Input id="galleryImages" type="file" accept="image/*" multiple onChange={handleImageUpload} />
                  {images.length > 0 && (
                    <div className="mt-2">
                      <div className="grid grid-cols-2 gap-4">
                        {images.map((image, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(image)}
                            alt={`Uploaded image ${index}`}
                            className="h-40"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {currentStep > 1 && (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  disabled={isSubmitting}
                >
                  السابق
                </Button>
              )}
              
              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={() => {
                    if (currentStep === 1 && validateStep1()) {
                      setCurrentStep(2)
                    } else if (currentStep === 2 && validateStep2()) {
                      setCurrentStep(3)
                    }
                  }}
                  disabled={isSubmitting}
                >
                  التالي
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -mr-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري الإضافة...
                    </span>
                  ) : (
                    'إضافة المشروع'
                  )}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}