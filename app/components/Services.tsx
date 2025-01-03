'use client'

import { useState } from 'react'
import { FaKitchenSet, FaCouch, FaRuler } from 'react-icons/fa6'
import Image from 'next/image'
import { Landmark, LandPlot } from 'lucide-react'

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  console.log(activeService);
  

  const services = [
    {
      icon: <FaKitchenSet className="text-4xl text-[#DF2935]" />,
      title: 'تصميم و تنفيذ مطابخ خشبية',
      description: 'نبتكر مطابخ عصرية تجمع بين الجمال والوظيفة، مع دمج أحدث التقنيات لتحسين تجربة الطهي وتسهيل الحياة اليومية.',
      image: '/assets/home/kitchen.jpg'
    },
    {
      icon: <LandPlot className="text-4xl text-[#DF2935]" />,
      title: 'تصميم landscape',
      description: 'نستخدم أرقى أنواع الدهانات والتشطيبات لإضفاء لمسة فنية على جدرانك، مع ضمان الجودة والمتانة لسنوات قادمة.',
      image: '/assets/home/balacony.jpg'
    },
    {
      icon: <FaCouch className="text-4xl text-[#DF2935]" />,
      title: 'تصميم داخلي',
      description: 'نحول رؤيتك إلى واقع من خلال تصميمات داخلية مبتكرة تعكس شخصيتك وتلبي احتياجاتك الفريدة.',
      image: '/assets/home/hall1.jpg'
    },
    {
      icon: <Landmark className="text-4xl text-[#DF2935]" />,
      title: 'تخطيط الاراضي',
      description: 'نصمم حلول إضاءة ذكية تجمع بين الوظيفة والجمال، لخلق أجواء مثالية في كل ركن من منزلك.',
      image: '/assets/home/outside.jpg'
    },
    {
      icon: <FaRuler className="text-4xl text-[#DF2935]" />,
      title: 'اعداد الرسوم و المقايسات',
      description: 'نبتكر تخطيطات ذكية تضمن الاستفادة القصوى من كل مساحة في منزلك، مع مراعاة الراحة والجمال.',
      image: '/assets/home/living.jpg'
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#004851] text-[#D3D3D3]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا</h2>
          <p className="text-xl max-w-3xl mx-auto">نقدم مجموعة متكاملة من الخدمات لتحويل منزلك إلى تحفة معمارية تجمع بين الجمال والراحة</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white text-[#004851] p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer`}
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-bold mr-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="relative h-48 rounded-lg overflow-hidden group">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href={`/services/${index + 1}`}>
                    <span className="text-white text-lg font-semibold">اقرأ المزيد</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <a href="/services">
        <button 
          className="bg-[#DF2935] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md"
          onClick={() => {/* Add functionality to show more details or navigate to a services page */}}
        >
          استكشف جميع خدماتنا
        </button>
        </a>
      </div>
    </section>
  )
}

