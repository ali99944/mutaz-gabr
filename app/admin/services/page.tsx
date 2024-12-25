'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Search } from 'lucide-react'
import { Breadcrumb } from '@/app/components/ui/Breadcrumb'
import { Button } from '@/app/components/ui/Button'
import { Input } from '@/app/components/ui/Input'


// Dummy data for services
const services = [
  {
    id: '1',
    name: 'تصميم المطابخ',
    description: 'تصميم مطابخ عصرية وأنيقة تجمع بين الجمال والوظائف العملية',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=60',
    category: 'مطابخ',
  },
  {
    id: '2',
    name: 'تصميم غرف المعيشة',
    description: 'إنشاء مساحات معيشة مريحة وجذابة تعكس أسلوب حياتك',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=500&q=60',
    category: 'غرف معيشة',
  },
  {
    id: '3',
    name: 'تصميم غرف النوم',
    description: 'تصميم غرف نوم هادئة ومريحة لضمان الراحة والاسترخاء',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=500&q=60',
    category: 'غرف نوم',
  },
  {
    id: '4',
    name: 'تصميم الحمامات',
    description: 'إنشاء حمامات أنيقة وعملية تجمع بين الراحة والفخامة',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=500&q=60',
    category: 'حمامات',
  },
  {
    id: '5',
    name: 'تصميم المكاتب',
    description: 'تصميم مساحات عمل محفزة وعملية لزيادة الإنتاجية والإبداع',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=60',
    category: 'مكاتب',
  },
  {
    id: '6',
    name: 'تصميم الواجهات الخارجية',
    description: 'تصميم واجهات خارجية جذابة تعزز المظهر العام للمبنى',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=500&q=60',
    category: 'واجهات خارجية',
  },
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6">
      <Breadcrumb
        items={[
          { label: 'الخدمات', href: '/admin/services' },
        ]}
      />
      <div className="flex items-center justify-between mb-6">
        <h1 className="admin-heading-xl">الخدمات</h1>
        <Link href="/admin/services/new">
          <Button icon={Plus}>
            إضافة خدمة جديدة
          </Button>
        </Link>
      </div>

      <div className="mb-6">
        <Input
          icon={Search}
          placeholder="البحث عن الخدمات..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <Link href={`/admin/services/${service.id}`} key={service.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="admin-heading-md mb-2">{service.name}</h3>
                <p className="admin-text-sm text-gray-600 mb-2">{service.description}</p>
                <span className="admin-text-sm text-[#004851] font-semibold">{service.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

