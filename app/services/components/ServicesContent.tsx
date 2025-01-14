'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { CookingPotIcon as Kitchen, SofaIcon as Couch, Ruler, Landmark, LandPlot, ArrowRight, Calendar, Phone } from 'lucide-react'

interface Service {
    id: number;
    title: string;
    icon: typeof Kitchen | typeof Couch | typeof Ruler | typeof Landmark | typeof LandPlot;
    description: string;
    features: string[];
    gallery: string[];
    testimonials: { name: string; comment: string }[];
  }

const services: Service[] = [
    {
      id: 1,
      title: 'تصميم داخلي',
      icon: Couch,
      description: 'نحول رؤيتك إلى واقع من خلال تصميمات داخلية مبتكرة تعكس شخصيتك وتلبي احتياجاتك الفريدة. من غرف المعيشة إلى غرف النوم، نهتم بكل التفاصيل لخلق تناغم وانسجام في جميع أنحاء منزلك.',
      features: [
        'دراسة شاملة لاحتياجات العميل وتفضيلاته',
        'اختيار الألوان والخامات المناسبة لكل غرفة',
        'تصميم وتنفيذ قطع أثاث مخصصة',
        'تنسيق الإضاءة لخلق أجواء مميزة',
        'استخدام أحدث التقنيات والبرامج في التصميم',
        'الاهتمام بالتفاصيل الدقيقة والجودة العالية',
        'خبرة واسعة في مختلف أساليب التصميم',
      ],
      gallery: [
        '/assets/home/hall1.jpg',
        '/assets/home/living.jpg',
        '/assets/home/kitchen.jpg',
        '/assets/home/balace.jpg',
      ],
      testimonials: [
        {
          name: 'أحمد محمد',
          comment: 'خدمة ممتازة وتصاميم رائعة! فريق معتز جابر حوّل منزلي إلى تحفة فنية.',
        },
        {
          name: 'سارة علي',
          comment: 'انصح بهم بشدة!  فريق محترف وذوق رفيع.',
        },
      ],
    },
    // {
    //   id: 2,
    //   title: 'تصميم landscape',
    //   icon: LandPlot,
    //   description: 'نبدع في تصميم وتنفيذ المساحات الخارجية، من الحدائق المنزلية إلى المناظر الطبيعية الخلابة. نجمع بين الجمال الطبيعي والتصميم العصري لخلق مساحات خارجية فريدة.',
    //   features: [
    //     'تصميم حدائق مبتكرة وعملية',
    //     'اختيار نباتات مناسبة للبيئة المحلية',
    //     'إنشاء ممرات وأماكن جلوس خارجية',
    //     'تركيب أنظمة ري حديثة',
    //     'استخدام مواد عالية الجودة',
    //     'خبرة في تصميم المساحات الخضراء',
    //   ],
    //   gallery: [
    //     '/assets/home/balacony.jpg',
    //     '/assets/home/outside.jpg',
    //     '/assets/home/balace.jpg',
    //     '/assets/home/hall1.jpg',
    //   ],
    //   testimonials: [
    //     {
    //       name: 'محمد أحمد',
    //       comment: 'عمل رائع! حديقتي أصبحت مكاني المفضل للاسترخاء.',
    //     },
    //   ],
    // },
    {
      id: 2,
      title: 'تصميم و تنفيذ مطابخ خشبية',
      icon: Kitchen,
      description: 'نصمم مطابخ خشبية تجمع بين الأناقة والعملية. نستخدم أجود أنواع الأخشاب ونوظف أحدث التقنيات لضمان مطبخ عصري ويدوم طويلاً.',
      features: [
        'تصاميم عصرية تناسب جميع الأذواق',
        'أخشاب عالية الجودة',
        'حلول تخزين ذكية',
        'أجهزة مطبخ حديثة',
        'تركيب دقيق واحترافي',
        'تشطيبات فاخرة',
      ],
      gallery: [
        '/assets/home/kitchen.jpg',
        '/assets/home/balace.jpg',
        '/assets/home/hall1.jpg',
        '/assets/home/balacony.jpg',
      ],
      testimonials: [
        {
          name: 'خالد علي',
          comment: 'مطبخي الجديد رائع! شكراً لفريق معتز جابر.',
        },
      ],
    },
    // {
    //   id: 4,
    //   title: 'تخطيط الاراضي',
    //   icon: Landmark,
    //   description: 'نقدم خدمات تخطيط الأراضي وتصميم المساحات الخارجية بكفاءة عالية. نعمل على تحسين استغلال المساحات المتاحة وتوفير حلول مبتكرة تلبي احتياجاتك.',
    //   features: [
    //     'خبرة في تخطيط الأراضي',
    //     'حلول مبتكرة لجميع أنواع الأراضي',
    //     'استخدام أحدث التقنيات في التخطيط',
    //     'تصاميم متوافقة مع المعايير الهندسية',
    //     'دراسة شاملة لطبيعة الأرض',
    //   ],
    //   gallery: [
    //     '/assets/home/outside.jpg',
    //     '/assets/home/balace.jpg',
    //     '/assets/home/hall1.jpg',
    //     '/assets/home/balacony.jpg',
    //   ],
    //   testimonials: [],
    // },
    // {
    //   id: 5,
    //   title: 'اعداد الرسوم و المقايسات',
    //   icon: Ruler,
    //   description: 'نقدم خدمات إعداد الرسومات والمقايسات الهندسية بدقة واحترافية. نستخدم أحدث البرامج الهندسية لضمان دقة الحسابات وتوفير الوقت والجهد.',
    //   features: [
    //     'خبرة في إعداد الرسومات الهندسية',
    //     'دقة في الحسابات',
    //     'التزام بالمواعيد',
    //     'أسعار تنافسية',
    //     'استخدام برامج هندسية حديثة',
    //   ],
    //   gallery: [
    //     '/assets/home/living.jpg',
    //     '/assets/home/balace.jpg',
    //     '/assets/home/hall1.jpg',
    //     '/assets/home/balacony.jpg',
    //   ],
    //   testimonials: [],
    // },
  ]

export default function NewServicesContent() {
  return (
    <div className="py-20">
      <ServicesHero />
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
      <CallToAction />
    </div>
  )
}

function ServicesHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="text-center mb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-[#004851]"
      >
        خدماتنا المتميزة
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto"
      >
        نقدم مجموعة شاملة من الخدمات المتخصصة في مجال التصميم الداخلي وتنفيذ الديكورات، مع التركيز على الجودة والإبداع في كل تفصيل
      </motion.p>
    </section>
  )
}

function ServiceSection({ service, index }: { service: Service; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
    const isReverse = index % 2 == 0;

    if(isReverse) {
        return (
            <section ref={ref} className={`py-20 ${index % 2 == 0 ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
        
                  {/* Image Gallery Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReverse ? -50 : 50 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-2 gap-4"
                  >
                    {service.gallery.map((image, imageIndex) => (
                      <div key={imageIndex} className="relative aspect-square md:aspect-video rounded-lg overflow-hidden shadow">
                        <Image
                          src={image}
                          alt={`${service.title} - صورة ${imageIndex + 1}`}
                          fill
                          objectFit="cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReverse ? 50 : -50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center mb-6">
                      <service.icon className="w-12 h-12 text-[#DF2935] ml-4" />
                      <h2 className="text-3xl font-bold text-[#004851]">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </section>
          )
    }
  
    return (
      <section ref={ref} className={`py-20 ${index % 2 == 0 ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReverse ? 50 : -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center mb-6">
                <service.icon className="w-12 h-12 text-[#DF2935] ml-4" />
                <h2 className="text-3xl font-bold text-[#004851]">{service.title}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">{service.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
  
            {/* Image Gallery Section */}
            <motion.div
              initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReverse ? -50 : 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-2 gap-4"
            >
              {service.gallery.map((image, imageIndex) => (
                <div key={imageIndex} className="relative aspect-square md:aspect-video rounded-lg overflow-hidden shadow">
                  <Image
                    src={image}
                    alt={`${service.title} - صورة ${imageIndex + 1}`}
                    fill
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  function CallToAction() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [isHovered, setIsHovered] = useState(false)
  
    return (
      <section 
        ref={ref} 
        className="py-20 bg-gradient-to-br from-[#004851] to-[#006d7a] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                حول مساحتك إلى <br/>
                <span className="text-[#DF2935]">تحفة فنية مذهلة</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl mb-8 text-gray-200"
              >
                دع خبراءنا يساعدوك في تحقيق رؤيتك للمساحة المثالية. ابدأ رحلتك نحو منزل أحلامك اليوم!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-end"
              >
                <a
                  href="/contact"
                  className="group flex items-center justify-center bg-[#DF2935] text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  احجز استشارتك المجانية
                  <ArrowRight className={`mr-2 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </a>
                <a href="tel:+1234567890" className="flex items-center justify-center bg-white text-[#004851] font-bold py-3 px-6 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md">
                  <Phone className="ml-2" /> اتصل بنا
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#004851] text-center">جدول موعدك</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="الاسم" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004851]"
                />
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004851]"
                />
                <input 
                  type="tel" 
                  placeholder="رقم الهاتف" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#004851]"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#004851] text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-opacity-90 transition duration-300 shadow-md flex items-center justify-center"
                >
                  <Calendar className="ml-2" /> حدد موعدًا
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#004851] to-transparent" />
      </section>
    )
  }
  
