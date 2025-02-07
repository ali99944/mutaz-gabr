import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Plus, Edit } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { ServiceItem } from "@/src/types/settings"

export function ServicesSection({
  services,
  onChange,
}: {
  services: ServiceItem[]
  onChange: (services: ServiceItem[]) => void
}) {
  const [newService, setNewService] = useState<Omit<ServiceItem, "id">>({ title: "" })
  const [editingService, setEditingService] = useState<ServiceItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddService = () => {
    onChange([...services, { ...newService, id: Date.now().toString() }])
    setNewService({ title: "" })
    setIsDialogOpen(false)
  }

  const handleEditService = () => {
    if (editingService) {
      onChange(services.map((service) => (service.id === editingService.id ? editingService : service)))
      setEditingService(null)
      setIsDialogOpen(false)
    }
  }

  const handleDeleteService = (id: string) => {
    onChange(services.filter((service) => service.id !== id))
  }

  return (
    <Card className="shadow-sm rounded">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>الخدمات</span>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-primary">
                <Plus className="h-4 w-4 ml-2" />
                إضافة خدمة
              </Button>
            </DialogTrigger>
            <DialogContent className="p-4">
              <DialogHeader>
                <DialogTitle>{editingService ? "تعديل خدمة" : "إضافة خدمة جديدة"}</DialogTitle>
                <DialogDescription>
                  {editingService ? "قم بتعديل معلومات الخدمة" : "أدخل معلومات الخدمة الجديدة"}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>عنوان الخدمة</Label>
                  <Input
                    value={editingService ? editingService.title : newService.title}
                    onChange={(e) =>
                      editingService
                        ? setEditingService({ ...editingService, title: e.target.value })
                        : setNewService({ ...newService, title: e.target.value })
                    }
                  />
                </div>
              </div>
              <DialogFooter className="gap-x-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  إلغاء
                </Button>
                <Button
                  onClick={editingService ? handleEditService : handleAddService}
                >
                  {editingService ? "تحديث" : "إضافة"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardTitle>
        <CardDescription>إدارة الخدمات المقدمة</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between rounded-lg border p-4">
              <span>{service.title}</span>
              <div className="flex gap-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary"
                  onClick={() => {
                    setEditingService(service)
                    setIsDialogOpen(true)
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive"
                  onClick={() => handleDeleteService(service.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

