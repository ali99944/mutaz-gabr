// app/(admin)/managers/[id]/page.tsx
"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import useServerAction from "@/src/hooks/use-server-action"
import permissions from "@/src/constants/permissions"
import AppRoutes from "@/src/constants/app_routes"
import { getManagerById, updateManager } from "@/src/actions/manager"
import { addPermission, removePermission } from "@/src/actions/security"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader, Save } from "lucide-react"
import ErrorComponent from "../../../components/error-component"

const categoryLabels: { [key: string]: string } = {
  projects: "المشاريع",
  designs: "التصميمات",
  consultations: "الاستشارات",
  contact_messages: "رسائل التواصل",
  managers: "المديرين",
  permissions: "الصلاحيات",
  achievements: "الأنجازات",
};

export default function ManagerDetailsPage() {
  const { id } = useParams()
  const { toast } = useToast()


  const { mutation: getManager, data: manager, isLoading, error: getManagerError } = useServerAction(getManagerById)
  const { mutation: updateManagerExecute, isLoading: isUpdating } = useServerAction(updateManager)
  const { mutation: addPermExecute, isLoading: adding } = useServerAction(addPermission)
  const { mutation: removePermExecute, isLoading: removing } = useServerAction(removePermission)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [permissionsState, setPermissionsState] = useState<{
    name: string,
    value: string
  }[]>(manager?.permissions ?? [])

  useEffect(() => {
    getManager(+id, {
        onSuccess(data) {
          console.log(data)
          if(data) {
            setPermissionsState(data.permissions)
            setName(data.name)
            setEmail(data.email)
            setPassword(data.password)
          }
        },
    })
  }, [id, getManager])

  const handlePermissionChange = async (permission: { name: string, value: string}, isChecked: boolean) => {

    try {
      if (isChecked) {
        await addPermExecute({manager_id: +id, permission}, {
            onSuccess(data) {
                setPermissionsState(data.permissions)
                toast({
                    title: "نجاح",
                    description: "تمت إضافة الصلاحية بنجاح إلى المدير.",
                })
            },
            onFailure(error) {
                toast({
                    title: "حدث مشكلة",
                    description: error,
                    variant: "destructive"
                })
            },
        })
      } else {
        await removePermExecute({manager_id: +id, permission_value: permission.value}, {
            onSuccess(data) {
                setPermissionsState(data.permissions)
                toast({
                    title: "نجاح",
                    description: "تم حذف الصلاحية من المدير بنجاح.",
                })
            },
            onFailure(error) {
                toast({
                    title: "حدث مشكلة",
                    description: error,
                    variant: "destructive"
                })
            },
        })
      }
      
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: (error as Error).message,
        variant: "destructive"
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const data = {
        name: name,
        email: email,
        password: password
      }

      await updateManagerExecute({
        data,
        manager_id: +id
      }, {
        onSuccess() {
          toast({
            title: "نجاح",
            description: "تم تحديث المدير بنجاح.",
          })
        },
        onFailure(error) {
          toast({
            title: "حدث مشكلة",
            description: error,
            variant: "destructive"
          })
        }
      })
    }
    catch (error) {
      toast({
        title: "حدث خطاء",
        description: (error as Error).message,
        variant: "destructive"
      })
    }
  }

  if (isLoading) return <div className="p-4">جار التحميل...</div>
  if (!manager) return <div className="p-4">المدير غير موجود</div>

  if (getManagerError) return (
    <ErrorComponent error={getManagerError} />
  )


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8 text-primary">
        <h1 className="text-2xl font-bold">تفاصيل المدير</h1>
        <Link href={AppRoutes.admin.managers}>
          <Button variant="ghost">العودة إلى القائمة</Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <Card className="p-4 border rounded shadow-none">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم</Label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </Card>
        <div className="flex justify-end">
          <Button type="submit" disabled={isUpdating}>
            {isUpdating && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            {isUpdating ? "جاري الحفظ..." : "حفظ التغييرات"}
            <Save className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>

      <div className="space-y-6">

        {Object.entries(permissions.general_permissions).map(([category, perms]) => (
          <Card key={category} className="p-4 border rounded shadow-none">
            <h3 className="text-lg font-bold mb-4">{categoryLabels[category]}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.values(perms).map((perm) => (
                <label
                  key={perm.value}
                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                    permissionsState.some(perms => perms.value == perm.value)
                      ? "bg-primary/10 border-primary"
                      : "hover:bg-accent"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={permissionsState.some(perms => perms.value == perm.value)}
                    onChange={(e) => handlePermissionChange(perm, e.target.checked)}
                    disabled={adding || removing}
                    className="w-5 h-5 accent-primary"
                  />
                  <span>{perm.name}</span>
                </label>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}