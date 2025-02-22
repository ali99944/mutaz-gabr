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
} from "@/components/ui/dialog"
import Table, { Column } from "../../components/ui/table"
import Manager from "@/src/types/manager"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { deleteManager, getManagers } from "@/src/actions/manager"
import useServerAction from "@/src/hooks/use-server-action"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import AppRoutes from "@/src/constants/app_routes"
import { signOut, useSession } from "next-auth/react"
import ErrorComponent from "../../components/error-component"

export default function ManagersPage() {
    const { toast } = useToast()
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [selectedManager, setSelectedManager] = useState<Manager | null>(null)
    const session = useSession()


    // Server data
    const { data: managers, isLoading, refetch, error } = useGetServerData<Manager[]>(getManagers, [])

    const deleteManagerMutation = useServerAction(deleteManager)


    const handleDelete = async () => {
        if (!selectedManager) return
        
        await deleteManagerMutation.mutation(selectedManager.id, {
            onSuccess: async (data) => {
                toast({ title: "تم حذف المدير بنجاح" })
                if(data.isCurrentManager) {
                    await signOut({
                        callbackUrl: AppRoutes.admin.login,
                        redirect: true
                    })
                }else {
                    refetch()
                    setIsDeleteModalOpen(false)
                }
            },

            onFailure(error) {
                toast({
                    title: "Error",
                    description: error,
                    variant: "destructive"
                })
            },
        })
    }

    const columns: Column<Manager>[] = [
        { header: "اسم المدير", accessor: "name" },
        { header: "البريد الإلكتروني", accessor: "email" },
        { 
            header: "النوع", 
            accessor: "role"
        },
        { 
            header: "الصلاحيات", 
            accessor: "permissions",
            render: (_, row) => {
                return (
                    <div className="flex flex-wrap gap-1">
                        {
                            row.permissions?.map(p => (
                                <div key={p.name} className="bg-gray-200 px-2 py-1 rounded">
                                    {p.name}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        }
    ]

    const actions = (row: Manager) => session.data.user.email == 'test@gmail.com' && session.data.user.email != row.email && (
        <div className="flex gap-2">
            <Button variant="ghost" className="text-red-500" 
                onClick={() => {
                    setSelectedManager(row)
                    setIsDeleteModalOpen(true)
                }}>
                حذف
            </Button>
        </div>
    )

    if (error) {
        return (
            <ErrorComponent error={error} />
        )
    }

    return (
        <div className="p-4">
            <Link href={AppRoutes.admin.create_manager}>
                <Button variant='outline' className="text-primary mb-4 rounded-sm shaod-sm">
                    اضافة مدير
                </Button>
            </Link>

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
                        <DialogDescription>
                            هل أنت متأكد من رغبتك في حذف المدير {selectedManager?.name}؟
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex items-center gap-x-2">
                        <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
                            إلغاء
                        </Button>
                        <Button variant="destructive" onClick={handleDelete}>
                            حذف
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}