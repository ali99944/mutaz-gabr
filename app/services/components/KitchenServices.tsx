'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const kitchenServices = [
  { name: 'مطابخ', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80', description: 'تصاميم مطابخ عصرية وأنيقة تجمع بين الجمال والوظائفية' },
  { name: 'غرف ملابس', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=600&q=80', description: 'حلول تخزين ذكية وأنيقة لملابسك ومقتنياتك' },
  { name: 'وحدات حمام', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80', description: 'وحدات حمام أنيقة تجمع بين الراحة والأناقة' },
  { name: 'غرف غسيل', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80', description: 'مساحات غسيل منظمة وفعالة لتسهيل مهامك اليومية' },
  { name: 'مطابخ صغيرة', image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=600&q=80', description: 'حلول ذكية للمساحات الصغيرة دون التضحية بالأناقة' },
  { name: 'خدمات أخرى', image: 'https://images.unsplash.com/photo-1631048498692-af6262d702a3?auto=format&fit=crop&w=600&q=80', description: 'خدمات مخصصة لتلبية احتياجاتك الفريدة' },
]

export default function KitchenServices() {
  return (
    <section id="kitchen-services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#004851]">خدمات المطابخ والوحدات</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متنوعة من الخدمات لتحويل مساحات منزلك إلى أماكن وظيفية وجميلة
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitchenServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#004851]">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services/${service.name}`}>
                  <motion.a
                    className="inline-block bg-[#DF2935] text-white px-6 py-2 rounded-lg font-bold transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    اكتشف المزيد
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

