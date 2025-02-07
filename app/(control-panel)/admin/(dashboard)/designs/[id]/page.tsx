import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Edit, Palette, Trash } from "lucide-react"
import Link from "next/link"

export default async function AdminDesignDetails() {
  const design = {
    id: 1,
    title: "تصميم غرفة المعيشة الحديثة",
    category: "interior",
    project: { id: 1, name: "فيلا الساحل" },
    privacy: "public",
    area: 100,
    budget: 5000,
    timeline: "3-6 months",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xU5zW7AFiOWZP6Rxf4ydLx46mV6P0f.png",
    description: "something",
    specifications: "something",
    gallery: [
        
    ],
    materials: "something",
    
  }

  if (!design) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-primary font-bold">{design.title}</h1>
        <div className="gap-x-2 flex items-center">
          <Button variant="outline" asChild className="text-primary">
            <Link href="/admin/designs">
              <Palette className="mr-2 h-4 w-4" /> Back to Designs
            </Link>
          </Button>
          <Button variant="outline" asChild className="text-primary">
            <Link href="/admin/designs/new">
              <Palette className="mr-2 h-4 w-4" /> Add design
            </Link>
          </Button>
          <Button variant="outline" className="text-primary">
            <Edit className="mr-2 h-4 w-4" /> Edit
          </Button>
          <Button variant="destructive">
            <Trash className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="details" className="shadow-sm p-2">Details</TabsTrigger>
          <TabsTrigger value="specifications" className="shadow-sm p-2">Specifications</TabsTrigger>
          <TabsTrigger value="images" className="shadow-sm p-2">Images</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card className="shadow-sm rounded">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-medium">Category</dt>
                      <dd>{design.category}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Project</dt>
                      <dd>{design.project?.name || "N/A"}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Privacy</dt>
                      <dd>
                        <Badge variant={design.privacy === "public" ? "default" : "secondary"}>{design.privacy}</Badge>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Additional Details</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-medium">Area</dt>
                      <dd>{design.area} sq m</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Budget</dt>
                      <dd>{design.budget} EGP</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Timeline</dt>
                      <dd>{design.timeline}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p>{design.description}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Materials Used</h3>
                <p>{design.materials}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications">
          <Card className="shadow-sm rounded">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Design Specifications</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {design.specifications.split(",").map((spec) => (
                  <Badge key={spec} variant="outline">
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images">
          <Card className="shadow-sm rounded">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Cover Image</h3>
              <Image
                src={design.coverImage || "/placeholder.svg"}
                alt={design.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-lg font-semibold mb-4">Additional Images</h3>
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {design.gallery.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Design image ${index + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

