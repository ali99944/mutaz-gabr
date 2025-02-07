// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Loader2, Save, ExternalLink } from 'lucide-react'
// import { useToast } from "@/hooks/use-toast"
// import { ImageGallery } from "@/app/(control-panel)/components/image-gallery"
// import { ImageUploader } from "@/app/(control-panel)/components/image-uploader"
// import { getProjectById } from "@/src/actions/project"
// import { useFormState } from "react-dom"

// enum ProjectCategory {
//   interior = "interior",
//   kitchen = "kitchen"
// }

// interface ProjectImage {
//   id: number
//   name: string
//   src: string
// }


// export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
//   const [project, setProject] = useFormState(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [isSaving, setIsSaving] = useState(false)
//   const { toast } = useToast()

//   useEffect(() => {
//     const fetchProject = async () => {
//       setIsLoading(true)
//       try {
//         // Replace with actual API call
//         const data = await getProjectById(Number(params.id))
//         setProject(data)
//       } catch (error) {
//         console.error("Failed to fetch project", error)
//         toast({
//           title: "خطأ",
//           description: "فشل في جلب تفاصيل المشروع",
//           variant: "destructive",
//         })
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchProject()
//   }, [params.id, toast])

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setProject((prev) => (prev ? { ...prev, [name]: value } : null))
//   }

//   const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setProject((prev) => (prev ? { ...prev, [name]: parseFloat(value) || 0 } : null))
//   }

//   const handleCategoryChange = (value: ProjectCategory) => {
//     setProject((prev) => (prev ? { ...prev, category: value } : null))
//   }

//   const handleImageChange = (imageUrl: string) => {
//     setProject((prev) => (prev ? { ...prev, image: imageUrl } : null))
//   }

//   const handleGalleryImageAdd = (imageUrl: string) => {
//     setProject((prev) =>
//       prev
//         ? {
//             ...prev,
//             gallery: [...prev.gallery, { id: Date.now(), name: "New Image", src: imageUrl }],
//           }
//         : null
//     )
//   }

//   const handleGalleryImageDelete = (imageId: number) => {
//     setProject((prev) =>
//       prev ? { ...prev, gallery: prev.gallery.filter((img) => img.id !== imageId) } : null
//     )
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSaving(true)
//     try {
//       // Replace with actual API call
//       await fetch(`/api/projects/${params.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(project),
//       })
//       toast({
//         title: "تم الحفظ",
//         description: "تم حفظ تغييرات المشروع بنجاح",
//       })
//     } catch (error) {
//       console.error("Failed to save project", error)
//       toast({
//         title: "خطأ",
//         description: "فشل في حفظ تغييرات المشروع",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSaving(false)
//     }
//   }

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Loader2 className="h-8 w-8 animate-spin" />
//       </div>
//     )
//   }

//   if (!project) {
//     return <div>المشروع غير موجود</div>
//   }

//   return (
//     <div className="container mx-auto py-10 px-4">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Card className="shadow-sm rounded">
//             <CardHeader>
//               <CardTitle>المعلومات الأساسية</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="name">اسم المشروع</Label>
//                 <Input id="name" name="name" value={project.name} onChange={handleInputChange} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="client_name">اسم العميل</Label>
//                 <Input id="client_name" name="client_name" value={project.client_name} onChange={handleInputChange} />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="area_size">المساحة (متر مربع)</Label>
//                 <Input
//                   id="area_size"
//                   name="area_size"
//                   type="number"
//                   value={project.area_size}
//                   onChange={handleNumberInputChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="budget">الميزانية</Label>
//                 <Input
//                   id="budget"
//                   name="budget"
//                   type="number"
//                   value={project.budget}
//                   onChange={handleNumberInputChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="execution_days">مدة التنفيذ (بالأيام)</Label>
//                 <Input
//                   id="execution_days"
//                   name="execution_days"
//                   type="number"
//                   value={project.execution_days}
//                   onChange={handleNumberInputChange}
//                 />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="shadow-sm rounded">
//             <CardHeader>
//               <CardTitle>التصنيف والوصف</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="category">التصنيف</Label>
//                 <Select
//                   value={project.category}
//                   onValueChange={(value) => handleCategoryChange(value as ProjectCategory)}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="اختر التصنيف" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value={ProjectCategory.interior}>تصميم داخلي</SelectItem>
//                     <SelectItem value={ProjectCategory.kitchen}>مطبخ</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="sub_category">التصنيف الفرعي</Label>
//                 <Input
//                   id="sub_category"
//                   name="sub_category"
//                   value={project.sub_category}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="description">وصف المشروع</Label>
//                 <Textarea
//                   id="description"
//                   name="description"
//                   value={project.description}
//                   onChange={handleInputChange}
//                   rows={4}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="specifications">المواصفات</Label>
//                 <Textarea
//                   id="specifications"
//                   name="specifications"
//                   value={project.specifications}
//                   onChange={handleInputChange}
//                   rows={4}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         <Card className="shadow-sm rounded">
//           <CardHeader>
//             <CardTitle>الصورة الرئيسية</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ImageUploader
//               currentImage={project.image}
//               onImageUpload={handleImageChange}
//               className="w-64 h-64"
//             />
//           </CardContent>
//         </Card>

//         <Card className="shadow-sm rounded">
//           <CardHeader>
//             <CardTitle>معرض الصور</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ImageGallery
//               images={project.gallery}
//               onDelete={handleGalleryImageDelete}
//               onAdd={handleGalleryImageAdd}
//             />
//           </CardContent>
//         </Card>

//         {project.design && (
//           <Card className="shadow-sm rounded">
//             <CardHeader>
//               <CardTitle>التصميم المرتبط</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center justify-between">
//                 <span>{project.design.name}</span>
//                 <Link href={`/admin/designs/${project.design.id}`} passHref>
//                   <Button variant="outline">
//                     عرض التصميم
//                     <ExternalLink className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         <div className="flex justify-end">
//           <Button type="submit" disabled={isSaving}>
//             {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//             {isSaving ? "جاري الحفظ..." : "حفظ التغييرات"}
//             <Save className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }


export default function Page() {
    return (
        <div>
            
        </div>
    )
}