"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2, Trophy, Users, Building, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const icons = {
  Trophy,
  Users,
  Building,
  Star,
}

type Achievement = {
  id: number
  title: string
  value: string
  icon: keyof typeof icons
}

export default function AchievementsManager() {
  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: 1, title: "مشاريع منجزة", value: "150+", icon: "Trophy" },
    { id: 2, title: "عملاء راضون", value: "200+", icon: "Users" },
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [editingAchievement, setEditingAchievement] = useState<Achievement | null>(null)

  const handleSave = (achievement: Omit<Achievement, "id">) => {
    if (editingAchievement) {
      setAchievements(
        achievements.map((a) => (a.id === editingAchievement.id ? { ...achievement, id: editingAchievement.id } : a)),
      )
    } else {
      setAchievements([...achievements, { ...achievement, id: Date.now() }])
    }
    setIsOpen(false)
    setEditingAchievement(null)
  }

  const handleDelete = (id: number) => {
    setAchievements(achievements.filter((a) => a.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">الإنجازات</h2>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="ml-2 h-4 w-4" />
              إضافة إنجاز
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AchievementForm
              onSave={handleSave}
              initialData={editingAchievement}
              onClose={() => {
                setIsOpen(false)
                setEditingAchievement(null)
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement) => {
          const Icon = icons[achievement.icon]
          return (
            <div key={achievement.id} className="p-4 border rounded-lg flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{achievement.title}</h3>
                  <p className="text-2xl font-bold">{achievement.value}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingAchievement(achievement)
                    setIsOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(achievement.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AchievementForm({
  onSave,
  initialData,
  onClose,
}: {
  onSave: (achievement: Omit<Achievement, "id">) => void
  initialData?: Achievement | null
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    value: initialData?.value || "",
    icon: initialData?.icon || "Trophy",
  })

  return (
    <>
      <DialogHeader>
        <DialogTitle>{initialData ? "تعديل إنجاز" : "إضافة إنجاز جديد"}</DialogTitle>
        <DialogDescription>أدخل تفاصيل الإنجاز الذي تريد إضافته</DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-4">
        <div className="space-y-2">
          <Label>العنوان</Label>
          <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>القيمة</Label>
          <Input value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} />
        </div>
        <div className="space-y-2">
          <Label>الأيقونة</Label>
          <Select
            value={formData.icon}
            onValueChange={(value) => setFormData({ ...formData, icon: value as keyof typeof icons })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(icons).map((icon) => (
                <SelectItem key={icon} value={icon}>
                  {icon}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>
          إلغاء
        </Button>
        <Button onClick={() => onSave(formData)}>{initialData ? "تحديث" : "إضافة"}</Button>
      </DialogFooter>
    </>
  )
}

