"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Users, FileText, DollarSign, Plus, Loader } from "lucide-react"
import useGetServerData from "@/src/hooks/use-get-server-data"
import { getProjects } from "@/src/actions/project"


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectsPage() {
  const [filterType, setFilterType] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const { data: projects, isLoading } = useGetServerData(getProjects, [])


  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-black">مشاريع معتز جبر</h1>
        <div className="flex flex-wrap items-center gap-2 text-black">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue className="text-black" placeholder="تصفية حسب النوع" />
            </SelectTrigger>
            <SelectContent className="bg-primary text-white">
              <SelectItem value="all">جميع الأنواع</SelectItem>
              <SelectItem value="تصميم داخلي">تصميم داخلي</SelectItem>
              <SelectItem value="تصميم مطبخ">تصميم مطبخ</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent className="bg-primary text-white">
              <SelectItem value="name">الاسم</SelectItem>
              <SelectItem value="budget">الميزانية</SelectItem>
            </SelectContent>
          </Select>
          <Button asChild>
            <Link href="/admin/projects/create">
              <Plus className="ml-2 h-4 w-4" />
              مشروع جديد
            </Link>
          </Button>
        </div>
      </div>

      {
        isLoading && (
          <Loader size={40} className="animate-spin" />
        )
      }

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="rounded shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{project.name}</CardTitle>
                <Briefcase className={`h-4 w-4 text-green-600`} />
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-x-2">
                    <Users className="h-4 w-4  text-muted-foreground" />
                    <span className="text-sm">{project.client_name}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <FileText className="h-4 w-4  text-muted-foreground" />
                    <span className="text-sm">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <DollarSign className="h-4 w-4  text-muted-foreground" />
                    <span className="text-sm">{project.budget.toLocaleString()} ج.م</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="text-sm">{project.area_size} م²</span>
                  </div>
                </div>
                <Button className="mt-4 w-full" variant="outline" asChild>
                  <Link href={`/projects/${project.id}`}>عرض التفاصيل</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

