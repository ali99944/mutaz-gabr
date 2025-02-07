"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      })
      
      if (result?.error) {
        console.log(result.status);
        
        setError("اسم المستخدم أو كلمة المرور غير صحيحة")
      } else {
        toast({
          title: "تم تسجيل الدخول بنجاح"
        })
        router.push("/admin")
      }
    } catch (error) {
      console.log(error.message);
      
      setError("حدث خطأ أثناء محاولة تسجيل الدخول")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[480px] rounded shadow-sm">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <Image
              src="/assets/images/studio.png" // Replace with your actual logo
              alt="Company Logo"
              width={80}
              height={80}
            />
          </div>
          <CardTitle className="text-2xl text-center">شركة التصميم الداخلي</CardTitle>
          <CardDescription className="text-center">تسجيل الدخول إلى لوحة التحكم</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">ايميل المدير</Label>
              <Input
                id="email"
                type="email"
                placeholder="ادخل ايميل المدير"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
            <Button className="w-full mt-4" type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  جاري تسجيل الدخول...
                </>
              ) : (
                "تسجيل الدخول"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-center w-full text-gray-500">© 2025 شركة التصميم الداخلي. جميع الحقوق محفوظة.</p>
        </CardFooter>
      </Card>
    </div>
  )
}

