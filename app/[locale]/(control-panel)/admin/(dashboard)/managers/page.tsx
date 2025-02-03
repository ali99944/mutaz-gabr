"use client"

import { useState } from "react"
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
import { Plus } from "lucide-react"
import Table, { Column } from "../../components/ui/table"
import Manager from "@/src/types/manager"

// Mock data for managers
const initialManagers = [
  { id: 1, name: "أحمد محمد", username: "ahmed", password: "********" },
  { id: 2, name: "فاطمة علي", username: "fatima", password: "********" },
  { id: 3, name: "محمود حسن", username: "mahmoud", password: "********" },
  { id: 4, name: "نورا سعيد", username: "noura", password: "********" },
]

export default function ManagersPage() {
  const [managers, setManagers] = useState(initialManagers)
  const [newManager, setNewManager] = useState({ name: "", username: "", password: "" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleAddManager = () => {
    if (newManager.name && newManager.username && newManager.password) {
      setManagers([...managers, { id: Date.now(), ...newManager }])
      setNewManager({ name: "", username: "", password: "" })
      setIsDialogOpen(false)
    }
  }

//   const handleDelete = (id: number) => {
//     setManagers(managers.filter((manager) => manager.id !== id))
//   }

  const columns: Column<Manager>[] = [
    { header: "اسم المدير", accessor: "name" },
    { header: "اسم المستخدم", accessor: "username" },
    { header: "كلمة المرور", accessor: "password" },
  ]

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900">المدراء</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              إضافة مدير جديد
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>إضافة مدير جديد</DialogTitle>
              <DialogDescription>أدخل بيانات المدير الجديد هنا. اضغط على حفظ عند الانتهاء.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  الاسم
                </Label>
                <Input
                  id="name"
                  value={newManager.name}
                  onChange={(e) => setNewManager({ ...newManager, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  اسم المستخدم
                </Label>
                <Input
                  id="username"
                  value={newManager.username}
                  onChange={(e) => setNewManager({ ...newManager, username: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  كلمة المرور
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={newManager.password}
                  onChange={(e) => setNewManager({ ...newManager, password: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddManager}>حفظ</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table
        columns={columns}
        data={managers}
        loading={false}
      />
    </div>
  )
}

