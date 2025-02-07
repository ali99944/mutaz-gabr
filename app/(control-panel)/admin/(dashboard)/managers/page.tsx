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
import useGetServerData from "@/src/hooks/use-get-server-data"
import { createManager, deleteManager, getManagers } from "@/src/actions/manager"
import useServerAction from "@/src/hooks/use-server-action"
import { useToast } from "@/hooks/use-toast"


export default function ManagersPage() {
    const [newManager, setNewManager] = useState({ name: "", email: "", password: "" })
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const createManagerMutation = useServerAction(createManager)
    const deleteManagerMutation = useServerAction(deleteManager)
    const { toast } = useToast()
    const { data: managers, isLoading, refetch } = useGetServerData<Manager[]>(getManagers, [])
    const [selectedManager, setSelectedManager] = useState<Manager | null>(null)

    const handleAddManager = async () => {
        if (!newManager.name || !newManager.email || !newManager.password) {
            toast({
                title: "يرجى ملئ جميع الحقول",
                variant: "destructive",
            })
            return
        }

        if (newManager.name && newManager.email && newManager.password) {
            await createManagerMutation.mutation(newManager, {
                onSuccess: () => {
                    setNewManager({ name: "", email: "", password: "" })
                    toast({
                        title: "تم اضافة المدير بنجاح",
                        variant: "default",
                    })
                    setIsDialogOpen(false)
                    refetch()
                },

                onFailure() {
                    toast({
                        title: "حدث خطأ اثناء اضافة المدير",
                        variant: "destructive",
                    })
                },
            })
            setIsDialogOpen(false)
        }
    }

      const handleDelete = async () => {
        await deleteManagerMutation.mutation(selectedManager.id, {
            onSuccess: () => {
                toast({
                    title: "تم حذف المدير بنجاح",
                    variant: "default",
                })
                refetch()
                setIsDeleteModalOpen(false)
            },
            onFailure() {
                toast({
                    title: "حدث خطأ اثناء حذف المدير",
                    variant: "destructive",
                })}
            })
      }

      const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

      const handleDeleteModalOpen = (id: number) => {
        setSelectedManager(managers?.find(manager => manager.id === id))
        setIsDeleteModalOpen(true)
      }


    const columns: Column<Manager>[] = [
        { header: "اسم المدير", accessor: "name" },
        { header: "البريدالالكتروني", accessor: "email" },
        { header: "كلمة المرور", accessor: "password" },
    ]

    const actions = (row: Manager) => (
        <div>
            <Button variant="ghost" className="text-app-secondary" onClick={() => handleDeleteModalOpen(row.id)}>حذف</Button>
        </div>
    )
    
    



    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="text-primary">
                            <Plus className="h-4 w-4 mr-2" />
                            إضافة مدير جديد
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-4">
                        <DialogHeader>
                            <DialogTitle>إضافة مدير جديد</DialogTitle>
                            <DialogDescription>أدخل بيانات المدير الجديد هنا. اضغط على حفظ عند الانتهاء.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="flex  flex-col items-start gap-2">
                                <Label htmlFor="name" className="text-right">
                                    الاسم
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="الاسم"
                                    value={newManager.name}
                                    onChange={(e) => setNewManager({ ...newManager, name: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Label htmlFor="email" className="text-right">
                                    البريد الالكتروني
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="الايميل"
                                    value={newManager.email}
                                    onChange={(e) => setNewManager({ ...newManager, email: e.target.value })}
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <Label htmlFor="password" className="text-right">
                                    كلمة المرور
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="كلمة المرور"
                                    type="password"
                                    value={newManager.password}
                                    onChange={(e) => setNewManager({ ...newManager, password: e.target.value })}
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
                loading={isLoading}
                actions={actions}
            />

            <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
                <DialogContent className="p-4">
                    <DialogHeader>
                        <DialogTitle>حذف مدير</DialogTitle>
                        <DialogDescription>هل تريد حذف {selectedManager?.name}</DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex items-center gap-x-2">
                        <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>الغاء</Button>
                        <Button variant="destructive" onClick={handleDelete}>حذف</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

