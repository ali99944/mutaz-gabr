import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Edit } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { StatisticItem } from "@/src/types/settings"

export function StatisticsSection() {
  const [newStatistic, setNewStatistic] = useState<Omit<StatisticItem, "id">>({ value: "", label: "" })
  const [editingStatistic, setEditingStatistic] = useState<StatisticItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddStatistic = () => {
    
  }

  const handleEditStatistic = () => {
    if (editingStatistic) {
      // onChange(statistics.map((stat) => (stat.id === editingStatistic.id ? editingStatistic : stat)))
      // setEditingStatistic(null)
      // setIsDialogOpen(false)
    }
  }

  const statistics = []
  return (
    <Card className="shadow-sm rounded">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>الإحصائيات</span>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            {/* <DialogTrigger asChild>
              <Button variant="outline" className="text-primary">
                <Plus className="h-4 w-4 ml-2" />
                إضافة إحصائية
              </Button>
            </DialogTrigger> */}
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingStatistic ? "تعديل إحصائية" : "إضافة إحصائية جديدة"}</DialogTitle>
                <DialogDescription>
                  {editingStatistic ? "قم بتعديل معلومات الإحصائية" : "أدخل معلومات الإحصائية الجديدة"}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>القيمة</Label>
                  <Input
                    value={editingStatistic ? editingStatistic.value : newStatistic.value}
                    onChange={(e) =>
                      editingStatistic
                        ? setEditingStatistic({ ...editingStatistic, value: e.target.value })
                        : setNewStatistic({ ...newStatistic, value: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>الاسم</Label>
                  <Input
                    value={editingStatistic ? editingStatistic.label : newStatistic.label}
                    onChange={(e) =>
                      editingStatistic
                        ? setEditingStatistic({ ...editingStatistic, label: e.target.value })
                        : setNewStatistic({ ...newStatistic, label: e.target.value })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  إلغاء
                </Button>
                <Button
                  variant="outline"
                  className="text-primary"
                  onClick={editingStatistic ? handleEditStatistic : handleAddStatistic}
                >
                  {editingStatistic ? "تحديث" : "إضافة"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardTitle>
        <CardDescription>إدارة الإحصائيات المعروضة في الصفحة الرئيسية</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {statistics.map((statistic) => (
            <div key={statistic.id} className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <span className="font-semibold">{statistic.value}</span>
                <span className="ml-2">{statistic.label}</span>
              </div>
              <div className="flex gap-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary"
                  onClick={() => {
                    setEditingStatistic(statistic)
                    setIsDialogOpen(true)
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

