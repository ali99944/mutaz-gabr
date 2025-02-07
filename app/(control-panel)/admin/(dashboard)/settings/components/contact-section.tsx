// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Phone, Mail, MapPin, MessageCircle, Trash2, Plus } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { useState } from "react"

// export function ContactSection({
//   contact,
//   workingHours,
//   socialMedia,
//   onChange,
// }: {
//   contact: any
//   workingHours: any
//   socialMedia: any[]
//   onChange: (data: any) => void
// }) {
//   const [newSocialMedia, setNewSocialMedia] = useState({ platform: "", url: "" })
//   const [dialogOpen, setDialogOpen] = useState(false)

//   const handleAddSocialMedia = () => {
//     onChange({
//       socialMedia: [...socialMedia, { ...newSocialMedia, id: Date.now() }],
//     })
//     setNewSocialMedia({ platform: "", url: "" })
//     setDialogOpen(false)
//   }

//   return (
//     <div className="grid gap-6 md:grid-cols-2">
//       <Card className="shadow-sm rounded">
//         <CardHeader>
//           <CardTitle>معلومات الاتصال</CardTitle>
//           <CardDescription>معلومات الاتصال الأساسية التي تظهر في الموقع</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="space-y-2">
//             <Label>رقم الهاتف</Label>
//             <div className="flex items-center gap-x-2">
//               <Phone className="h-4 w-4 text-muted-foreground" />
//               <Input
//                 value={contact.phone}
//                 onChange={(e) => onChange({ contact: { ...contact, phone: e.target.value } })}
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label>البريد الإلكتروني</Label>
//             <div className="flex items-center gap-x-2">
//               <Mail className="h-4 w-4 text-muted-foreground" />
//               <Input
//                 type="email"
//                 value={contact.email}
//                 onChange={(e) => onChange({ contact: { ...contact, email: e.target.value } })}
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label>العنوان</Label>
//             <div className="flex items-center gap-x-2">
//               <MapPin className="h-4 w-4 text-muted-foreground" />
//               <Input
//                 value={contact.address}
//                 onChange={(e) => onChange({ contact: { ...contact, address: e.target.value } })}
//               />
//             </div>
//           </div>
//           <div className="space-y-2">
//             <Label>رقم الواتساب</Label>
//             <div className="flex items-center gap-x-2">
//               <MessageCircle className="h-4 w-4 text-muted-foreground" />
//               <Input
//                 value={contact.whatsapp}
//                 onChange={(e) => onChange({ contact: { ...contact, whatsapp: e.target.value } })}
//               />
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="space-y-6">
//         <Card className="shadow-sm rounded">
//           <CardHeader>
//             <CardTitle>مواعيد العمل</CardTitle>
//             <CardDescription>حدد مواعيد العمل خلال الأسبوع ونهاية الأسبوع</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label>أيام الأسبوع</Label>
//               <div className="grid grid-cols-2 gap-2">
//                 <div className="space-y-2">
//                   <Label className="text-sm text-muted-foreground">من</Label>
//                   <Input
//                     type="time"
//                     value={workingHours.weekdays.from}
//                     onChange={(e) =>
//                       onChange({
//                         workingHours: {
//                           ...workingHours,
//                           weekdays: { ...workingHours.weekdays, from: e.target.value },
//                         },
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label className="text-sm text-muted-foreground">إلى</Label>
//                   <Input
//                     type="time"
//                     value={workingHours.weekdays.to}
//                     onChange={(e) =>
//                       onChange({
//                         workingHours: {
//                           ...workingHours,
//                           weekdays: { ...workingHours.weekdays, to: e.target.value },
//                         },
//                       })
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label>نهاية الأسبوع</Label>
//               <div className="grid grid-cols-2 gap-2">
//                 <div className="space-y-2">
//                   <Label className="text-sm text-muted-foreground">من</Label>
//                   <Input
//                     type="time"
//                     value={workingHours.weekend.from}
//                     onChange={(e) =>
//                       onChange({
//                         workingHours: {
//                           ...workingHours,
//                           weekend: { ...workingHours.weekend, from: e.target.value },
//                         },
//                       })
//                     }
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label className="text-sm text-muted-foreground">إلى</Label>
//                   <Input
//                     type="time"
//                     value={workingHours.weekend.to}
//                     onChange={(e) =>
//                       onChange({
//                         workingHours: {
//                           ...workingHours,
//                           weekend: { ...workingHours.weekend, to: e.target.value },
//                         },
//                       })
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="shadow-sm rounded">
//           <CardHeader>
//             <CardTitle className="flex items-center justify-between">
//               <span>وسائل التواصل الاجتماعي</span>
//               <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
//                 <DialogTrigger asChild>
//                   <Button variant="outline" size="sm" className="text-primary">
//                     <Plus className="h-4 w-4 ml-2" />
//                     إضافة
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>إضافة وسيلة تواصل جديدة</DialogTitle>
//                     <DialogDescription>أدخل معلومات وسيلة التواصل الاجتماعي</DialogDescription>
//                   </DialogHeader>
//                   <div className="space-y-4 py-4">
//                     <div className="space-y-2">
//                       <Label>المنصة</Label>
//                       <Input
//                         value={newSocialMedia.platform}
//                         onChange={(e) => setNewSocialMedia({ ...newSocialMedia, platform: e.target.value })}
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label>الرابط</Label>
//                       <Input
//                         value={newSocialMedia.url}
//                         onChange={(e) => setNewSocialMedia({ ...newSocialMedia, url: e.target.value })}
//                       />
//                     </div>
//                   </div>
//                   <DialogFooter>
//                     <Button variant="outline" onClick={() => setDialogOpen(false)}>
//                       إلغاء
//                     </Button>
//                     <Button variant="outline" className="text-primary" onClick={handleAddSocialMedia}>
//                       إضافة
//                     </Button>
//                   </DialogFooter>
//                 </DialogContent>
//               </Dialog>
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               {socialMedia.map((platform, index) => (
//                 <div key={index} className="flex items-center justify-between rounded-lg border p-3">
//                   <div className="space-y-1">
//                     <p className="font-medium">{platform.platform}</p>
//                     <p className="text-sm text-muted-foreground">{platform.url}</p>
//                   </div>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={() =>
//                       onChange({
//                         socialMedia: socialMedia.filter((_, i) => i !== index),
//                       })
//                     }
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

