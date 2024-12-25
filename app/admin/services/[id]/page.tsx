'use client'

import { useState } from 'react'
import Image from 'next/image'
    import { Edit, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Tag } from '@/app/components/ui/Tag'
import { Breadcrumb } from '@/app/components/ui/Breadcrumb'
import { Button } from '@/app/components/ui/Button'


// Dummy data for a single service
const serviceData = {
  id: '1',
  name: 'تصميم المطابخ',
  description: 'نقدم خدمات تصميم مطابخ عصرية وأنيقة تجمع بين الجمال والوظائف العملية. نهتم بكل التفاصيل لضمان مطبخ يلبي احتياجاتك ويعكس أسلوبك الشخصي.',
  category: 'مطابخ',
  image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80',
  features: [
    'تصاميم عصرية وأنيقة',
    'مواد عالية الجودة',
    'تخطيط وظيفي للمساحة',
    'حلول تخزين ذكية',
    'إضاءة مدروسة',
    'تنسيق مع الديكور العام للمنزل',
  ],
  process: [
    { title: 'استشارة أولية', description: 'نجتمع معك لفهم احتياجاتك وتفضيلاتك وميزانيتك' },
    { title: 'تصميم أولي', description: 'نقدم لك تصورات أولية ومخططات للمطبخ' },
    { title: 'تعديل وموافقة', description: 'نقوم بالتعديلات اللازمة حتى نصل للتصميم النهائي' },
    { title: 'اختيار المواد', description: 'نساعدك في اختيار الخامات والأجهزة المناسبة' },
    { title: 'التنفيذ', description: 'نقوم بتنفيذ التصميم بدقة وجودة عالية' },
    { title: 'التسليم', description: 'نسلم المطبخ جاهزاً للاستخدام ونتأكد من رضاك التام' },
  ],
  portfolio: [
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1556185781-a47769abb7ee?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1556911261-6bd341186b2f?auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=500&q=60',
  ],
}

export default function ServiceDetails() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Breadcrumb
            items={[
              { label: 'الخدمات', href: '/admin/services' },
              { label: serviceData.name },
            ]}
          />
          <div className="flex items-start justify-between mt-6">
            <div>
              <h1 className="admin-heading-xl mb-3">{serviceData.name}</h1>
              <Tag variant="primary" size="lg" text={serviceData.category} />
            </div>
            <div className="flex items-center gap-3">
              <Button icon={Edit}>
                تعديل الخدمة
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
            {/* Service Images */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={serviceData.portfolio[selectedImage]}
                  alt={serviceData.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 border-t">
                <div className="flex gap-4">
                  {serviceData.portfolio.map((image, index) => (
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

            {/* Service Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">وصف الخدمة</h2>
              <p className="admin-text-lg">{serviceData.description}</p>
            </div>

            {/* Service Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">مميزات الخدمة</h2>
              <div className="grid grid-cols-2 gap-4">
                {serviceData.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="admin-text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Process */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-6">مراحل العمل</h2>
              <div className="relative">
                {serviceData.process.map((step, index) => (
                  <div key={index} className="flex gap-4 mb-8 last:mb-0">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-[#004851] text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index !== serviceData.process.length - 1 && (
                        <div className="absolute top-8 bottom-0 left-4 w-px bg-gray-200" />
                      )}
                    </div>
                    <div>
                      <h3 className="admin-heading-md mb-1">{step.title}</h3>
                      <p className="admin-text-base text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Service Image */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src={serviceData.image}
                alt={serviceData.name}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">إجراءات سريعة</h2>
              <div className="space-y-4">
                <Button icon={Edit} className="w-full">
                  تعديل الخدمة
                </Button>
                <Button icon={ArrowLeft} variant="outline" className="w-full">
                  العودة إلى قائمة الخدمات
                </Button>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="admin-heading-lg mb-4">معلومات إضافية</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="admin-heading-sm text-gray-600">الفئة</h3>
                  <p className="admin-text-base">{serviceData.category}</p>
                </div>
                <div>
                  <h3 className="admin-heading-sm text-gray-600">عدد المشاريع المنفذة</h3>
                  <p className="admin-text-base">120 مشروع</p>
                </div>
                <div>
                  <h3 className="admin-heading-sm text-gray-600">متوسط التقييم</h3>
                  <p className="admin-text-base">4.8 / 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

