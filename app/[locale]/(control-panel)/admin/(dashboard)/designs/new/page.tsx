"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Upload, X } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// Mock data for projects
const projects = [
  { id: 1, name: "فيلا الساحل" },
  { id: 2, name: "شقة المدينة" },
  { id: 3, name: "مكتب الشركة" },
  { id: 4, name: "مطعم البحر" },
]

// Design specifications
const specifications = [
  { id: "modern", label: "عصري" },
  { id: "classic", label: "كلاسيكي" },
  { id: "minimalist", label: "بسيط" },
  { id: "luxurious", label: "فاخر" },
  { id: "eco-friendly", label: "صديق للبيئة" },
  { id: "smart-home", label: "منزل ذكي" },
]

export default function NewDesignPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [design, setDesign] = useState({
    title: "",
    category: "",
    description: "",
    projectId: "",
    privacy: "public",
    specifications: [] as string[],
    area: "",
    budget: "",
    timeline: "",
    materials: "",
  })
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [images, setImages] = useState<File[]>([])
  const [openProject, setOpenProject] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating API call
    setTimeout(() => {
      console.log("Design saved:", { ...design, coverImage, images })
      setIsLoading(false)
      router.push("/admin/designs")
    }, 1500)
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
    <div className="container mx-auto py-10 px-4">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">المعلومات الأساسية</TabsTrigger>
          <TabsTrigger value="details">التفاصيل</TabsTrigger>
          <TabsTrigger value="images">الصور</TabsTrigger>
        </TabsList>
        <form onSubmit={handleSubmit} className="space-y-8 mt-8">
          <TabsContent value="basic">
            <Card>
              <CardContent className="space-y-4 pt-6">
                <div className="grid grid-cols-2 gap-4">
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
                      value={design.category}
                      onValueChange={(value) => setDesign({ ...design, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الفئة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="interior">تصميم داخلي</SelectItem>
                        <SelectItem value="kitchen">مطبخ</SelectItem>
                        <SelectItem value="real-estate">عقارات</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">وصف التصميم</Label>
                  <Textarea
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
                        {design.projectId
                          ? projects.find((p) => p.id.toString() === design.projectId)?.name
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
                                  setDesign({ ...design, projectId: project.id.toString() })
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
            <Card>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                  <Label>مواصفات التصميم</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {specifications.map((spec) => (
                      <div key={spec.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={spec.id}
                          checked={design.specifications.includes(spec.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setDesign({ ...design, specifications: [...design.specifications, spec.id] })
                            } else {
                              setDesign({
                                ...design,
                                specifications: design.specifications.filter((id) => id !== spec.id),
                              })
                            }
                          }}
                        />
                        <Label htmlFor={spec.id}>{spec.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="area">المساحة (متر مربع)</Label>
                    <Input
                      id="area"
                      type="number"
                      value={design.area}
                      onChange={(e) => setDesign({ ...design, area: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">الميزانية (جنيه)</Label>
                    <Input
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
                    id="timeline"
                    value={design.timeline}
                    onChange={(e) => setDesign({ ...design, timeline: e.target.value })}
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
            <Card>
              <CardContent className="space-y-4 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="coverImage">صورة الغ��اف</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="coverImage"
                      type="file"
                      onChange={(e) => handleImageUpload(e, true)}
                      accept="image/*"
                      className="hidden"
                    />
                    <Label
                      htmlFor="coverImage"
                      className="cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md inline-flex items-center"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      اختر صورة الغلاف
                    </Label>
                    {coverImage && <span>{coverImage.name}</span>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="images">صور إضافية</Label>
                  <div className="flex items-center space-x-2">
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
                      className="cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md inline-flex items-center"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      إضافة صور
                    </Label>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(image) || "/placeholder.svg"}
                          alt={`Uploaded ${index + 1}`}
                          className="w-full h-32 object-cover rounded-md"
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

