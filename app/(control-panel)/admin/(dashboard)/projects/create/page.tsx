"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { createProject } from "@/src/actions/project"

export default function NewProject() {
  const [projectType, setProjectType] = useState("interior")

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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)])
    }
  }

  // const removeImage = (index: number) => {
  //   setImages(images.filter((_, i) => i !== index))
  // }



  const [name, setName] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)
  const [clientName, setClientName] = useState<string | null>(null)
  const [areaSize, setAreaSize] = useState<number | null>(null)
  const [budget, setBudget] = useState<number | null>(null)
  const [specifications, setSpecifications] = useState<string | null>(null)
  const [executionDays, setExecutionDays] = useState<number | null>(null)

  const [subCategory, setSubCategory] = useState<string | null>(null)

  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(mainImage == null) {
      toast({
        title: "Image Error",
        description: "Project Image is missing",
        variant: 'destructive'
      })
      return
    }

    const errors = []
    if(!name) errors.push("Name is missing")
    if(!description) errors.push("Description is missing")
    if(!clientName) errors.push("Client Name is missing")
    if(!areaSize) errors.push("Area Size is missing")
    if(!budget) errors.push("Budget is missing")
    if(!specifications) errors.push("Specifications is missing")
    if(!executionDays) errors.push("Execution days is missing")
    if(!projectType) errors.push("Project type is missing")
    if(!subCategory) errors.push("Sub category is missing")

    if(errors.length != 0) {
      const error_message = errors.join('\n\n')
      toast({
        title: 'Missing Fields',
        description: error_message,
        variant: 'destructive'
      })

      return
    }

    try {
      console.log(
        URL.createObjectURL(mainImage)
      );
      
      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('client_name', clientName)
      formData.append('specifications', specifications)
      formData.append('budget', budget.toString())
      formData.append('area_size', areaSize.toString())
      formData.append('category', projectType as 'interior' | 'kitchen')
      formData.append('sub_category', subCategory)
      formData.append('execution_days', executionDays.toString())
      formData.append('main_image', mainImage)

      for (let i = 0; i < images.length; i++) {
        formData.append('gallery', images[i])
      }

      const response = await createProject(formData)

      if(response) {
        toast({
          title: "Success",
          description: "Project is created successfully"
        })
      }
    }catch(error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="rounded shadow-sm">
        <CardHeader>
          <CardTitle>إضافة مشروع جديد</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">معلومات أساسية</TabsTrigger>
              <TabsTrigger value="details">تفاصيل المشروع</TabsTrigger>
              <TabsTrigger value="media">الصور والوسائط</TabsTrigger>
            </TabsList>
            <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
              <TabsContent value="basic">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectName">اسم المشروع</Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} id="projectName" placeholder="أدخل اسم المشروع" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clientName">اسم العميل</Label>
                    <Input value={clientName} onChange={e => setClientName(e.target.value)} id="clientName" placeholder="أدخل اسم العميل" />
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
                    <Select onValueChange={setSubCategory}>
                      <SelectTrigger id="projectSubtype">
                        <SelectValue placeholder="اختر التصنيف الفرعي" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(projectTypes[projectType as 'interior' | 'kitchen']).map(([key, value]) => (
                          <SelectItem key={key} value={value.value}>{value.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectArea">مساحة المشروع (متر مربع)</Label>
                    <Input value={areaSize} onChange={e => setAreaSize(+e.target.value)} id="projectArea" type="number" placeholder="أدخل مساحة المشروع" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectBudget">ميزانية المشروع</Label>
                    <Input value={budget} onChange={e => setBudget(+e.target.value)} id="projectBudget" type="number" placeholder="أدخل ميزانية المشروع" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="details">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">وصف المشروع</Label>
                    <Textarea value={description} onChange={e => setDescription(e.target.value)} rows={6} id="projectDescription" placeholder="أدخل وصفًا مفصلاً للمشروع" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="technicalSpecs">المواصفات الفنية</Label>
                    <Textarea value={specifications} onChange={e => setSpecifications(e.target.value)} rows={6} id="technicalSpecs" placeholder="أدخل المواصفات الفنية للمشروع" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="executionPeriod">مدة التنفيذ (بالأيام)</Label>
                    <Input value={executionDays} onChange={e => setExecutionDays(+e.target.value)} id="executionPeriod" type="number" placeholder="أدخل مدة تنفيذ المشروع" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="media">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="mainImage">الصورة الرئيسية</Label>
                    <Input
                      id="mainImage"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setMainImage(e.target.files ? e.target.files[0] : null)}
                    />
                    {mainImage && (
                      <div className="mt-2">
                        <img
                          src={URL.createObjectURL(mainImage)}
                          alt="Uploaded image"
                          className=" h-40"
                        />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="galleryImages">معرض الصور (اختياري)</Label>
                    <Input id="galleryImages" type="file" accept="image/*" multiple onChange={handleImageUpload} />
                    {
                      images.length > 0 && (
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
                      )
                    }
                  </div>

                </div>
              </TabsContent>
              <Button type="submit" className="w-full mt-6">
                إضافة المشروع
              </Button>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

