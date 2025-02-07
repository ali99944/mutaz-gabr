import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Plus, User } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { createTeamMember, deleteTeamMember, getTeamMembers, updateTeamMember } from "@/src/actions/team-member-action"
import TeamMember from "@/src/types/team-member"

export function TeamSection() {
  const [newMember, setNewMember] = useState<Omit<TeamMember, "id">>({ name: "", position: "", email: "" })
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { data: teams } = useGetServerData(getTeamMembers, [])

  const handleAddMember = async () => {
    try{ 
      await createTeamMember({
        name: newMember.name,
        position: newMember.position,
        email: newMember.email
      })

      alert("تم اضافة العضو بنجاح")

      setIsDialogOpen(false)
      setNewMember({ name: "", position: "", email: "" })
    }catch(error) {
      alert(error.message)
    }
    // onChange([...team, { ...newMember, id: Date.now().toString() }])
    // setNewMember({ name: "", title: "", email: "" })
    // setIsDialogOpen(false)
  }

  const handleEditMember = async () => {
    if (editingMember) {
      try {
        await updateTeamMember(editingMember.id, {
          name: editingMember.name,
          position: editingMember.position,
          email: editingMember.email
        })
      } catch (error) {
        alert(error.message)
      }
    }
  }

  const handleDeleteMember = async (id: number) => {
    try{
      await deleteTeamMember(id)
      alert("تم حذف العضو بنجاح")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Card className="shadow-sm rounded">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>فريق العمل</span>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-primary">
                <Plus className="h-4 w-4 ml-2" />
                إضافة عضو
              </Button>
            </DialogTrigger>
            <DialogContent className="p-4">
              <DialogHeader>
                <DialogTitle>{editingMember ? "تعديل عضو" : "إضافة عضو جديد"}</DialogTitle>
                <DialogDescription>
                  {editingMember ? "قم بتعديل معلومات العضو" : "أدخل معلومات العضو الجديد"}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>الاسم</Label>
                  <Input
                    value={editingMember ? editingMember.name : newMember.name}
                    onChange={(e) =>
                      editingMember
                        ? setEditingMember({ ...editingMember, name: e.target.value })
                        : setNewMember({ ...newMember, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>المنصب</Label>
                  <Input
                    value={editingMember ? editingMember.position : newMember.position}
                    onChange={(e) =>
                      editingMember
                        ? setEditingMember({ ...editingMember, position: e.target.value })
                        : setNewMember({ ...newMember, position: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>البريد الإلكتروني</Label>
                  <Input
                    value={editingMember ? editingMember.email : newMember.email}
                    onChange={(e) =>
                      editingMember
                        ? setEditingMember({ ...editingMember, email: e.target.value })
                        : setNewMember({ ...newMember, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <DialogFooter className="gap-x-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  إلغاء
                </Button>
                <Button                  
                  onClick={editingMember ? handleEditMember : handleAddMember}
                >
                  {editingMember ? "تحديث" : "إضافة"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardTitle>
        <CardDescription>
          إدارة أعضاء فريق العمل
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teams.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between rounded-lg border p-4 space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{member.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{member.name}</p>
                <p className="text-sm">{member.email}</p>
              </div>
              <div className="flex justify-end gap-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-primary"
                  onClick={() => {
                    setEditingMember(member)
                    setIsDialogOpen(true)
                  }}
                >
                  تعديل
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-destructive"
                  onClick={() => handleDeleteMember(member.id)}
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
