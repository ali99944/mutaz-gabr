"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Upload, X, Plus } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { createDesignAttachment } from "@/src/actions/design-actions"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { getProjects } from "@/src/actions/project"

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

export default function NewDesignPage() {
  const [isLoading, setIsLoading] = useState(false)
    const { data: projects } = useGetServerData(getProjects, [])

  const [design, setDesign] = useState({
    title: "",
    category: "interior",
    description: "",
    project_id: null,
    privacy: "public",
    specifications: "",
    area_size: "",
    budget: "",
    amount_of_time: "",
    materials: "",
  })
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [images, setImages] = useState<File[]>([])
  const [openProject, setOpenProject] = useState(false)
  const [subCategory, setSubCategory] = useState<string | null>(null)

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)
    try {
      const formData = new FormData()
      Object.entries(design).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => formData.append(key, item))
        } else {
          formData.append(key, value)
        }
      })
      if (coverImage) formData.append('cover_image', coverImage)
      images.forEach((image) => formData.append('images', image))
      formData.append('sub_category', subCategory)
      await createDesignAttachment(formData)
    //   router.push("/admin/designs")
    } catch (error) {
      console.error("Error creating design:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isCover: boolean) => {
    if (e.target.files) {
      if (isCover) {
        setCoverImage(e.target.files[0])
      } else {
        setImages([...images, ...Array.from(e.target.files)])
      }
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="basic">المعلومات الأساسية</TabsTrigger>
          <TabsTrigger value="details">التفاصيل</TabsTrigger>
          <TabsTrigger value="images">الصور</TabsTrigger>
        </TabsList>
        <form onSubmit={handleSubmit} className="space-y-8">
          <TabsContent value="basic">
            <Card className="shadow-sm rounded">
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">عنوان التصميم</Label>
                    <Input
                      id="title"
                      value={design.title}
                      onChange={(e) => setDesign({ ...design, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">الفئة</Label>
                    <Select
                        required
                      value={design.category}
                      onValueChange={(value) => setDesign({ ...design, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الفئة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="interior">تصميم داخلي</SelectItem>
                        <SelectItem value="kitchen">مطبخ</SelectItem>
                        {/* <SelectItem value="real-estate">عقارات</SelectItem> */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectSubtype">تصنيف فرعي للتصميم</Label>
                    <Select onValueChange={setSubCategory}>
                      <SelectTrigger id="projectSubtype">
                        <SelectValue placeholder="اختر التصنيف الفرعي" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(projectTypes[design.category as 'interior' | 'kitchen']).map(([key, value]) => (
                          <SelectItem key={key} value={value.value}>{value.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">وصف التصميم</Label>
                  <Textarea
                    required
                    id="description"
                    value={design.description}
                    onChange={(e) => setDesign({ ...design, description: e.target.value })}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project">المشروع المرتبط</Label>
                  <Popover open={openProject} onOpenChange={setOpenProject}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        {design.project_id
                          ? projects.find((p) => p.id.toString() === design.project_id)?.name
                          : "اختر المشروع"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="bottom" align="start">
                      <Command>
                        <CommandInput placeholder="ابحث عن مشروع..." />
                        <CommandList>
                          <CommandEmpty>لم يتم العثور على مشروع</CommandEmpty>
                          <CommandGroup>
                            {projects.map((project) => (
                              <CommandItem
                                key={project.id}
                                onSelect={() => {
                                  setDesign({ ...design, project_id: project.id.toString() })
                                  setOpenProject(false)
                                }}
                              >
                                {project.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>خصوصية التصميم</Label>
                  <RadioGroup
                    value={design.privacy}
                    onValueChange={(value) => setDesign({ ...design, privacy: value })}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="public" id="public" />
                      <Label htmlFor="public">عام</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="private" id="private" />
                      <Label htmlFor="private">خاص</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="details">
            <Card className="shadow-sm rounded">
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <Label>مواصفات التصميم</Label>
                  <Textarea
                    required
                    value={design.specifications}
                    onChange={(e) => setDesign({ ...design, specifications: e.target.value })}
                    rows={4}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="area">المساحة (متر مربع)</Label>
                    <Input
                        required
                      id="area"
                      type="number"
                      value={design.area_size}
                      onChange={(e) => setDesign({ ...design, area_size: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">الميزانية (جنيه)</Label>
                    <Input
                        required
                      id="budget"
                      type="number"
                      value={design.budget}
                      onChange={(e) => setDesign({ ...design, budget: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">الجدول الزمني</Label>
                  <Input
                    required
                    id="timeline"
                    value={design.amount_of_time}
                    onChange={(e) => setDesign({ ...design, amount_of_time: e.target.value })}
                    placeholder="مثال: 3 أشهر"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="materials">المواد المستخدمة</Label>
                  <Textarea
                    id="materials"
                    value={design.materials}
                    onChange={(e) => setDesign({ ...design, materials: e.target.value })}
                    rows={3}
                    placeholder="قائمة بالمواد الرئيسية المستخدمة في التصميم"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="images">
            <Card className="shadow-sm rounded">
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-4">
                  <Label htmlFor="coverImage">صورة الغلاف</Label>
                  <div className="flex items-center space-x-4">
                    <Input
                      id="coverImage"
                      type="file"
                      onChange={(e) => handleImageUpload(e, true)}
                      accept="image/*"
                      className="hidden"
                    />
                    <Label
                      htmlFor="coverImage"
                      className="cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md inline-flex items-center transition-colors"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      اختر صورة الغلاف
                    </Label>
                    {coverImage && (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={URL.createObjectURL(coverImage) || "/placeholder.svg"}
                          alt="Cover"
                          width={50}
                          height={50}
                          className="rounded-md object-fill"
                        />
                        <span className="text-sm">{coverImage.name}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <Label htmlFor="images">صور إضافية</Label>
                  <div className="flex items-center space-x-4">
                    <Input
                      id="images"
                      type="file"
                      onChange={(e) => handleImageUpload(e, false)}
                      accept="image/*"
                      multiple
                      className="hidden"
                    />
                    <Label
                      htmlFor="images"
                      className="cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md inline-flex items-center transition-colors"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      إضافة صور
                    </Label>
                  </div>
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3  gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <Image
                            src={URL.createObjectURL(image) || "/placeholder.svg"}
                            alt={`Uploaded ${index + 1}`}
                            width={200}
                            height={200}
                            className="w-full h-40 object-fill rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                جاري الحفظ...
              </>
            ) : (
              "حفظ التصميم"
            )}
          </Button>
        </form>
      </Tabs>
    </div>
  )
}
