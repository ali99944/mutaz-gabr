"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Eye } from "lucide-react"

// Mock data for designs
const mockDesigns = [
  { id: 1, title: "تصميم غرفة المعيشة الحديثة", category: "interior", isPublic: true, coverImage: "/placeholder.svg" },
  { id: 2, title: "مطبخ عصري بألوان زاهية", category: "kitchen", isPublic: true, coverImage: "/placeholder.svg" },
  { id: 3, title: "تصميم شقة فاخرة", category: "real-estate", isPublic: false, coverImage: "/placeholder.svg" },
  { id: 4, title: "غرفة نوم هادئة", category: "interior", isPublic: true, coverImage: "/placeholder.svg" },
  { id: 5, title: "مطبخ تقليدي", category: "kitchen", isPublic: true, coverImage: "/placeholder.svg" },
  { id: 6, title: "تصميم فيلا مع حديقة", category: "real-estate", isPublic: true, coverImage: "/placeholder.svg" },
]

export default function DesignsPage() {
  const [designs] = useState(mockDesigns)

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mb-6">
        <Button asChild>
          <Link href="/admin/designs/new">
            <Plus className="mr-2 h-4 w-4" />
            إضافة تصميم جديد
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {designs.map((design) => (
          <Card key={design.id} className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={design.coverImage || "/placeholder.svg"}
                alt={design.title}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-2 right-2 ${design.isPublic ? "bg-green-500" : "bg-red-500"}`}>
                {design.isPublic ? "عام" : "خاص"}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1 truncate">{design.title}</h3>
              <p className="text-sm text-muted-foreground">
                {design.category === "interior" ? "تصميم داخلي" : design.category === "kitchen" ? "مطبخ" : "عقارات"}
              </p>
            </CardContent>
            <CardFooter className="bg-muted p-2">
              <Button variant="ghost" className="w-full" asChild>
                <Link href={`/admin/designs/${design.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  عرض التفاصيل
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

