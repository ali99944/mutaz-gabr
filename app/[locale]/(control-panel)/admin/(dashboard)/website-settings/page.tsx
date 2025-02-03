"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Phone, Mail } from 'lucide-react'
import { Loader2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { getConfigs } from "@/src/actions/config"

const configSchema = z.object({
  contactInfo: z.object({
    phone: z.string(),
    email: z.string().email(),
    address: z.string(),
    whatsapp: z.string()
  }),
  workingHours: z.object({
    weekdays: z.object({
      from: z.string(),
      to: z.string()
    }),
    weekend: z.object({
      from: z.string(),
      to: z.string()
    })
  }),
  socialMedia: z.object({
    facebook: z.string().url(),
    instagram: z.string().url(),
    linkedin: z.string().url()
  }),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
    address: z.string()
  }),
  features: z.object({
    consultationEnabled: z.boolean(),
    contactEnabled: z.boolean(),
    appointmentEnabled: z.boolean()
  })
})

export default function ConfigPage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof configSchema>>({
    resolver: zodResolver(configSchema),
    defaultValues: {
      contactInfo: {
        phone: "",
        email: "",
        address: "",
        whatsapp: ""
      },
      workingHours: {
        weekdays: { from: "", to: "" },
        weekend: { from: "", to: "" }
      },
      socialMedia: {
        facebook: "",
        instagram: "",
        linkedin: ""
      },
      location: {
        lat: 0,
        lng: 0,
        address: ""
      },
      features: {
        consultationEnabled: true,
        contactEnabled: true,
        appointmentEnabled: true
      }
    }
  })

  useEffect(() => {
    fetch('/api/configs')
      .then(res => res.json())
      .then(data => {
        form.reset(data)
        setLoading(false)
      })

      getConfigs("contactInfo").then((data) => {
        console.log(data.data);
        
        toast({
          title: "Contact Info",
          description: `${data.data}`
        })
        
      }).catch((error) => {
        toast({
          title: "Error",
          description: error.message
        })
      })
  }, [form, toast])

  async function onSubmit(data: z.infer<typeof configSchema>) {
    try {
      setSaving(true)
      const response = await fetch('/api/configs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) throw new Error('Failed to save')
      
      toast({
        title: "تم حفظ التغييرات",
        description: "تم تحديث إعدادات الموقع بنجاح"
      })
    } catch (error) {
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive"
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">إعدادات الموقع</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="contact">معلومات الاتصال</TabsTrigger>
                <TabsTrigger value="hours">مواعيد العمل</TabsTrigger>
                <TabsTrigger value="social">التواصل الاجتماعي</TabsTrigger>
                <TabsTrigger value="features">المميزات</TabsTrigger>
              </TabsList>

              <TabsContent value="contact">
                <Card className="shadow-sm rounded-sm">
                  <CardHeader>
                    <CardTitle>معلومات الاتصال</CardTitle>
                    <CardDescription>
                      معلومات الاتصال الأساسية التي ستظهر في الموقع
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="contactInfo.phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>رقم الهاتف</FormLabel>
                          <FormControl>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                              <Input {...field} />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactInfo.email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>البريد الإلكتروني</FormLabel>
                          <FormControl>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4" />
                              <Input {...field} />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {/* Add more contact fields */}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="hours">
                <Card className="shadow-sm rounded-sm">
                  <CardHeader>
                    <CardTitle>مواعيد العمل</CardTitle>
                    <CardDescription>
                      حدد مواعيد العمل خلال الأسبوع ونهاية الأسبوع
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="workingHours.weekdays.from"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>من (أيام الأسبوع)</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="workingHours.weekdays.to"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>إلى (أيام الأسبوع)</FormLabel>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* Add weekend hours */}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social">
                <Card className="shadow-sm rounded-sm">
                  <CardHeader>
                    <CardTitle>وسائل التواصل الاجتماعي</CardTitle>
                    <CardDescription>
                      روابط حسابات التواصل الاجتماعي
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="socialMedia.facebook"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Facebook</FormLabel>
                          <FormControl>
                            <div className="flex items-center space-x-2">
                              <Facebook className="w-4 h-4" />
                              <Input {...field} />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {/* Add more social media fields */}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features">
                <Card className="shadow-sm rounded-sm">
                  <CardHeader>
                    <CardTitle>المميزات</CardTitle>
                    <CardDescription>
                      تحكم في تفعيل وتعطيل ميزات الموقع
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="features.consultationEnabled"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              طلب استشارة
                            </FormLabel>
                            <FormDescription>
                              السماح للزوار بطلب استشارة
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {/* Add more feature toggles */}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-end">
              <Button type="submit" disabled={saving}>
                {saving && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
                حفظ التغييرات
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  )
}
