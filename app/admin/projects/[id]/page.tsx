'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar, Edit, Home, MapPin, Ruler, Timer, User, Phone, Mail, Clock, CheckCircle2, AlertCircle, FileText, Briefcase, ArrowDown } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'
import { Breadcrumb } from '@/app/components/ui/Breadcrumb'
import { Tag } from '@/app/components/ui/Tag'


// This would normally come from an API
const projectData = {
  id: '1',
  title: 'فيلا فاخرة بالتجمع الخامس',
  status: 'in_progress',
  category: 'فلل',
  description: 'تصميم وتنفيذ فيلا سكنية فاخرة في التجمع الخامس، تجمع بين الأناقة والراحة مع لمسات عصرية مميزة.',
  area: '500 متر مربع',
  location: 'التجمع الخامس، القاهرة الجديدة',
  startDate: '2024-01-15',
  duration: '6 أشهر',
  completionDate: '2024-07-15',
  budget: '2,500,000 جنيه',
  progress: 65,
  client: {
    name: 'أحمد محمود',
    phone: '+20 123 456 7890',
    email: 'ahmed@example.com'
  },
  team: [
    { name: 'محمد علي', role: 'مدير المشروع' },
    { name: 'سارة أحمد', role: 'مصممة داخلية' },
    { name: 'كريم حسن', role: 'مهندس تنفيذي' }
  ],
  features: [
    'تصميم عصري مع لمسات كلاسيكية',
    'مسبح خارجي مع منطقة استجمام',
    'حديقة منسقة مع نظام ري ذكي',
    'نظام إضاءة ذكي في جميع أنحاء المنزل',
    'مطبخ فاخر مجهز بالكامل',
    'غرفة سينما منزلية',
  ],
  materials: [
    'رخام إيطالي للأرضيات',
    'خشب زان معالج للأبواب',
    'دهانات جوتن للحوائط',
    'سيراميك إسباني للحمامات',
    'وحدات إضاءة كريستال',
  ],
  images: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80',
  ],
  documents: [
    { name: 'مخططات المشروع', type: 'pdf', size: '2.5 MB' },
    { name: 'جدول التكاليف', type: 'xlsx', size: '1.2 MB' },
    { name: 'عقد المشروع', type: 'pdf', size: '3.1 MB' },
  ],
  timeline: [
    { date: '2024-01-15', title: 'بدء المشروع', description: 'توقيع العقد وبدء التصميم' },
    { date: '2024-02-15', title: 'اكتمال التصميم', description: 'موافقة العميل على التصميم النهائي' },
    { date: '2024-03-01', title: 'بدء التنفيذ', description: 'بدء أعمال التشطيبات' },
    { date: '2024-07-15', title: 'التسليم المتوقع', description: 'موعد تسليم المشروع المتوقع' },
  ]
}

const statusStyles = {
  completed: { color: 'text-green-700 bg-green-50', icon: CheckCircle2 },
  in_progress: { color: 'text-blue-700 bg-blue-50', icon: Clock },
  pending: { color: 'text-yellow-700 bg-yellow-50', icon: AlertCircle },
}

export default function ProjectDetails() {
  const [selectedImage, setSelectedImage] = useState(0)
  const status = statusStyles[projectData.status as keyof typeof statusStyles]
  const StatusIcon = status.icon

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Breadcrumb
            items={[
              { label: 'المشاريع', href: '/admin/projects', icon: Briefcase },
              { label: 'تفاصيل المشروع', icon: FileText },
            ]}
          />
          <div className="flex items-start justify-between mt-6">
            <div>
              <h1 className="admin-heading-xl mb-3">{projectData.title}</h1>
              <div className="flex items-center gap-6">
                <Tag
                  variant={projectData.status === 'completed' ? 'success' : 
                           projectData.status === 'in_progress' ? 'primary' : 'warning'}
                  size="lg"
                  text={projectData.status === 'completed' ? 'مكتمل' : 
                        projectData.status === 'in_progress' ? 'قيد التنفيذ' : 'قيد المراجعة'}
                />
                <span className="text-gray-600 flex items-center gap-1.5">
                  <Home className="w-4 h-4" />
                  {projectData.category}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button icon={Edit}>
                تعديل المشروع
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="col-span-2 space-y-8">
            {/* Project Images */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={projectData.images[selectedImage]}
                  alt={projectData.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 border-t">
                <div className="flex gap-4">
                  {projectData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                        selectedImage === index ? 'ring-2 ring-[#004851]' : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`صورة ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">وصف المشروع</h2>
              <p className="admin-text-lg">{projectData.description}</p>
            </div>

            {/* Project Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">مميزات المشروع</h2>
              <div className="grid grid-cols-2 gap-4">
                {projectData.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="admin-text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-6">الجدول الزمني</h2>
              <div className="relative">
                {projectData.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-8 last:mb-0">
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-[#004851] ring-4 ring-[#004851]/20" />
                      {index !== projectData.timeline.length - 1 && (
                        <div className="absolute top-4 bottom-0 left-2 w-px bg-gray-200" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="admin-text-sm">{item.date}</span>
                      </div>
                      <h3 className="admin-heading-md mb-1">{item.title}</h3>
                      <p className="admin-text-base text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">تفاصيل المشروع</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Ruler className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">المساحة</div>
                    <div className="admin-text-base">{projectData.area}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">الموقع</div>
                    <div className="admin-text-base">{projectData.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">المدة</div>
                    <div className="admin-text-base">{projectData.duration}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">معلومات العميل</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">الاسم</div>
                    <div className="admin-text-base">{projectData.client.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">رقم الهاتف</div>
                    <div className="admin-text-base">{projectData.client.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">البريد الإلكتروني</div>
                    <div className="admin-text-base">{projectData.client.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Team */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">فريق العمل</h2>
              <div className="space-y-4">
                {projectData.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#004851]/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-[#004851]" />
                    </div>
                    <div>
                      <div className="admin-text-base font-medium">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Documents */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">المستندات</h2>
              <div className="space-y-3">
                {projectData.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#004851]/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#004851]" />
                      </div>
                      <div>
                        <div className="admin-text-base font-medium">{doc.name}</div>
                        <div className="text-sm text-gray-500">{doc.size}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" icon={ArrowDown} iconPosition="right">
                      تحميل
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

