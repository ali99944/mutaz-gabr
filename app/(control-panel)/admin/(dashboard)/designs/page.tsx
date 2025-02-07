"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import useGetServerData from "@/src/hooks/use-get-server-data";
import { getDesigns } from "@/src/actions/design-actions";
import { Empty } from "../../../components/empty";

export default function DesignsPage() {

    const { data: designs } = useGetServerData(getDesigns, [])

  return (
    <div className="container mx-auto py-10 p-4">
      <div className="flex justify-end mb-4">
        <Button asChild variant="outline" className="text-primary">
          <Link href="/admin/designs/new">
            <Plus className="mr-2 h-4 w-4" />
            إضافة تصميم جديد
          </Link>
        </Button>
      </div>

      {
        designs.length == 0 && (
            <Empty 
                message="لا يوجد تصميمات"
            />
        )
      }

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {designs.map((design) => (
          <Link key={design.id} href={`/admin/designs/${design.id}`}>
            <Card className="overflow-hidden shadow-sm rounded cursor-pointer">
            <div className="relative h-48">
              <img
                src={design.cover_image || "/placeholder.svg"}
                alt={design.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-75 bg-black">
                <p className="text-xl text-white font-semibold">{design.name}</p>
              </div>
              <Badge className={`absolute top-2 right-2 ${design.privacy == 'public' ? "bg-green-500" : "bg-red-500"}`}>
                {design.privacy == 'public' ? "عام" : "خاص"}
              </Badge>
            </div>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


