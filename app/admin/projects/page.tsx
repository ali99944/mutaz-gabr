'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Edit, Trash2, Eye, Plus } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'
import { DataTable } from '@/app/components/ui/DataTable'
import { Column } from '@/app/components/ui/DataTable/types'

interface Project {
  id: string
  title: string
  category: string
  image: string
  area: string
  duration: string
  status: 'completed' | 'in_progress' | 'pending'
  createdAt: string
}

const statusMap = {
  completed: { label: 'مكتمل', class: 'bg-green-100 text-green-800' },
  in_progress: { label: 'قيد التنفيذ', class: 'bg-yellow-100 text-yellow-800' },
  pending: { label: 'قيد المراجعة', class: 'bg-blue-100 text-blue-800' },
}

export default function ProjectsPage() {
  const [loading] = useState(false)

  const columns:Column<Project>[] = [
    {
      title: 'المشروع',
      dataIndex: 'title',
      render: (_, record: Project) => (
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src={record.image}
              alt={record.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div className="font-medium text-gray-900">{record.title}</div>
            <div className="text-sm text-gray-500">{record.category}</div>
          </div>
        </div>
      ),
      searchable: true,
    },
    {
      title: 'المساحة',
      dataIndex: 'area',
      width: '15%',
    },
    {
      title: 'المدة',
      dataIndex: 'duration',
      width: '15%',
    },
    {
      title: 'تاريخ الإنشاء',
      dataIndex: 'createdAt',
      width: '15%',
    },
  ]

  const projects: Project[] = [
    {
      id: '1',
      title: 'فيلا فاخرة بالتجمع الخامس',
      category: 'فلل',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=200&q=80',
      area: '500 متر مربع',
      duration: '4 أشهر',
      status: 'completed',
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      title: 'شقة عصرية بالقاهرة الجديدة',
      category: 'شقق',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=200&q=80',
      area: '180 متر مربع',
      duration: '2.5 شهر',
      status: 'in_progress',
      createdAt: '2024-01-10',
    },
    {
      id: '3',
      title: 'مكتب إداري في وسط البلد',
      category: 'مكاتب',
      image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=200&q=80',
      area: '300 متر مربع',
      duration: '3 أشهر',
      status: 'pending',
      createdAt: '2024-01-05',
    },
  ]

  const actions = (record: Project) => (
    <div className="flex items-center gap-2">
      <Link href={`/admin/projects/${record.id}`}>
        <Button
          variant="ghost"
          size="sm"
          icon={Eye}
        >
          عرض
        </Button>
      </Link>
      <Link href={`/admin/projects/${record.id}/edit`}>
        <Button
          variant="ghost"
          size="sm"
          icon={Edit}
        >
          تعديل
        </Button>
      </Link>
      <Button
        variant="ghost"
        size="sm"
        icon={Trash2}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        حذف
      </Button>
    </div>
  )

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="admin-heading-xl">المشاريع</h1>
        <Button icon={Plus}>
              مشروع جديد
            </Button>
      </div>

      <DataTable<Project>
        columns={columns}
        data={projects}
        hoverable
        paginated
        searchable
        showSearch={false}
        loading={loading}
        pageSize={10}
        emptyMessage="لا توجد مشاريع"
        actions={actions}
        itemsName="مشروع"
      />
    </div>
  )
}

