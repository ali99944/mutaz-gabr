// app/(admin)/managers/create/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import useServerAction from "@/src/hooks/use-server-action"
import { createManager } from "@/src/actions/manager"
import permissions from "@/src/constants/permissions"
import { Loader } from "lucide-react"

const categoryLabels: { [key: string]: string } = {
  projects: "المشاريع",
  designs: "التصميمات",
  consultations: "الاستشارات",
  contact_messages: "رسائل التواصل",
  managers: "المديرين",
  permissions: "الصلاحيات",
  statistics: "الاحصائيات",
  teams: "اعضاء الفريق"
};

export default function CreateManagerPage() {
  const { toast } = useToast()
  const [selectedPermissions, setSelectedPermissions] = useState<{ name:string, value: string }[]>([])

  const { isLoading: creating, mutation: createManagerExecute } = useServerAction(createManager)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const formValues = Object.fromEntries(formData.entries())

    try {
      await createManagerExecute({
        name: formValues.name as string,
        email: formValues.email as string,
        password: formValues.password as string,
        permissions: selectedPermissions
      }, {
        onSuccess(data) {
          console.log(data)
        },

        onFailure(error) {
          console.log(error)
        },
      })
      
      toast({ title: "تم إنشاء المدير بنجاح" })
      window.location.href = '/admin/managers'
    } catch (error) {
      toast({
        title: "حدث خطأ",
        description: (error as Error).message,
        variant: "destructive"
      })
    }
  }

  const togglePermission = (permValue: { name: string, value: string }) => {
    setSelectedPermissions(prev =>
      prev.includes(permValue)
        ? prev.filter(p => p !== permValue)
        : [...prev, permValue]
    )
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8 text-primary">
        <h1 className="text-2xl font-bold">إنشاء مدير جديد</h1>
        <Link href={'/admin/managers'}>
          <Button variant="ghost">العودة إلى القائمة</Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Input name="name" placeholder="الاسم الكامل" required />
          <Input name="email" type="email" placeholder="البريد الإلكتروني" required />
          <Input name="password" type="password" placeholder="كلمة المرور" required />
        </div>

        <div className="space-y-6">

          {Object.entries(permissions.general_permissions).map(([category, perms]) => (
            <Card key={category} className="p-4 shadow-none rounded border ">
              <h3 className="text-lg font-bold mb-4">{categoryLabels[category]}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.values(perms).map((perm) => (
                  <label
                    key={perm.value}
                    className={`flex items-center gap-3 p-4 border rounded cursor-pointer transition-colors ${
                      selectedPermissions.some(sperm => sperm.value ==  perm.value)
                        ? "bg-primary/10 border-primary"
                        : "hover:bg-accent"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedPermissions.some(sperm => sperm.value ==  perm.value)}
                      onChange={() => togglePermission(perm)}
                      className="w-5 h-5 accent-primary"
                    />
                    <span>{perm.name}</span>
                  </label>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="flex gap-3 justify-end">
          <Button type="submit" className="px-8" disabled={creating}>
            إنشاء
            {creating && <Loader className="mr-2 h-4 w-4 animate-spin" />}
          </Button>
        </div>
      </form>
    </div>
  )
}