'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

// Enhanced mock data for projects
const projectsData = [
    { 
      id: '1', 
      title: "فيلا فاخرة بالتجمع الخامس", 
      category: "فلل", 
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
      description: "تصميم داخلي فاخر لفيلا في قلب التجمع الخامس، يجمع بين الأناقة والراحة.",
      area: "500 م²",
      duration: "4 أشهر",
      style: "حديث مع لمسات كلاسيكية",
      features: ["مسبح خارجي", "حديقة منسقة", "غرفة سينما", "مطبخ فاخر"]
    },
    { 
      id: '2', 
      title: "شقة عصرية بالقاهرة الجديدة", 
      category: "شقق", 
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
      description: "تجديد كامل لشقة في القاهرة الجديدة، مع التركيز على المساحات المفتوحة والإضاءة الطبيعية.",
      area: "180 م²",
      duration: "2.5 شهر",
      style: "عصري مينيمال",
      features: ["مساحة مفتوحة", "إضاءة ذكية", "أثاث مخصص", "شرفة واسعة"]
    },
    { 
      id: '3', 
      title: "مكتب إداري في وسط البلد", 
      category: "مكاتب", 
      image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?auto=format&fit=crop&w=1600&q=80",
      description: "تصميم وتنفيذ مكتب إداري حديث في قلب القاهرة، يوفر بيئة عمل محفزة وعملية.",
      area: "300 م²",
      duration: "3 أشهر",
      style: "حديث وعملي",
      features: ["قاعات اجتماعات ذكية", "مساحات عمل مرنة", "كافيتيريا", "نظام صوتي متطور"]
    },
    { 
      id: '4', 
      title: "مطعم أنيق بالمهندسين", 
      category: "مطاعم", 
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80",
      description: "تصميم داخلي لمطعم راقي في حي المهندسين، يجمع بين الفخامة والأجواء الدافئة.",
      area: "250 م²",
      duration: "3.5 شهر",
      style: "فاخر مع لمسات صناعية",
      features: ["مطبخ مفتوح", "بار مركزي", "إضاءة مميزة", "جدارية فنية ضخمة"]
    },
    { 
      id: '5', 
      title: "فندق بوتيك في الجونة", 
      category: "فنادق", 
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      description: "تصميم وتنفيذ فندق بوتيك صغير في الجونة، يعكس روح المدينة الساحلية مع لمسة من الرفاهية.",
      area: "1000 م²",
      duration: "8 أشهر",
      style: "ساحلي عصري",
      features: ["مسبح لا نهائي", "مطعم على السطح", "سبا فاخر", "غرف بإطلالات بحرية"]
    },
    { 
      id: '6', 
      title: "منزل ريفي بالفيوم", 
      category: "منازل", 
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
      description: "ترميم وإعادة تصميم منزل ريفي تقليدي في الفيوم، مع الحفاظ على الطابع الأصلي.",
      area: "200 م²",
      duration: "5 أشهر",
      style: "تقليدي مع لمسات عصرية",
      features: ["فرن طين تقليدي", "ساحة داخلية", "سقف من جذوع النخيل", "نوافذ مشربية"]
    },
    // New projects for "فلل" category
    { 
      id: '7', 
      title: "فيلا مودرن بالشروق", 
      category: "فلل", 
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
      description: "تصميم عصري لفيلا في مدينة الشروق، يمزج بين الخطوط النظيفة والمساحات الخضراء.",
      area: "450 م²",
      duration: "5 أشهر",
      style: "مودرن معاصر",
      features: ["حديقة سطح", "نظام ذكي", "مكتب منزلي", "غرفة ألعاب"]
    },
    { 
      id: '8', 
      title: "فيلا ساحلية بالساحل الشمالي", 
      category: "فلل", 
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      description: "فيلا ساحلية أنيقة تجمع بين الراحة والفخامة، مع إطلالات خلابة على البحر.",
      area: "600 م²",
      duration: "6 أشهر",
      style: "ساحلي معاصر",
      features: ["شرفة بانورامية", "مسبح خاص", "منطقة شواء", "غرف ضيوف منفصلة"]
    },
    { 
      id: '9', 
      title: "فيلا تراثية بالمعادي", 
      category: "فلل", 
      image: "https://images.unsplash.com/photo-1630650231815-a567e2ed26cc?auto=format&fit=crop&w=1600&q=80",
      description: "إعادة إحياء فيلا تراثية في حي المعادي العريق، مع الحفاظ على الطابع الأصلي وإضافة لمسات عصرية.",
      area: "550 م²",
      duration: "7 أشهر",
      style: "تراثي معاصر",
      features: ["أعمال ترميم دقيقة", "حديقة تراثية", "مكتبة كلاسيكية", "غرفة موسيقى"]
    },
    // New projects for "شقق" category
    { 
      id: '10', 
      title: "شقة بانورامية في وسط البلد", 
      category: "شقق", 
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80",
      description: "شقة فاخرة بإطلالات بانورامية على وسط القاهرة، تجمع بين الأصالة والحداثة.",
      area: "220 م²",
      duration: "3 أشهر",
      style: "عصري مع لمسات تراثية",
      features: ["نوافذ ممتدة من الأرض للسقف", "مطبخ مفتوح", "غرفة معيشة فسيحة", "شرفة مطلة"]
    },
    { 
      id: '11', 
      title: "استوديو مبتكر في المهندسين", 
      category: "شقق", 
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1600&q=80",
      description: "تصميم مبتكر لاستوديو صغير يستغل المساحة بذكاء ويوفر كل وسائل الراحة العصرية.",
      area: "60 م²",
      duration: "1.5 شهر",
      style: "مينيمال ذكي",
      features: ["أثاث متعدد الاستخدامات", "نظام تخزين مدمج", "إضاءة قابلة للتعديل", "مساحة عمل مرنة"]
    },
    { 
      id: '12', 
      title: "شقة عائلية في مدينة نصر", 
      category: "شقق", 
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80",
      description: "شقة واسعة مصممة لتلبية احتياجات العائلة الكبيرة، مع مزيج من المساحات الخاصة والمشتركة.",
      area: "200 م²",
      duration: "3.5 شهر",
      style: "عائلي دافئ",
      features: ["غرف نوم متعددة", "منطقة لعب للأطفال", "مطبخ كبير مع طاولة طعام", "غرفة معيشة فسيحة"]
    },
    // New projects for "مكاتب" category
    { 
      id: '13', 
      title: "مكتب إبداعي في المعادي", 
      category: "مكاتب", 
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      description: "مساحة عمل إبداعية مصممة لتحفيز الابتكار والتعاون بين الموظفين.",
      area: "350 م²",
      duration: "4 أشهر",
      style: "عصري وملهم",
      features: ["مساحات عمل مفتوحة", "غرف اجتماعات زجاجية", "منطقة استراحة مريحة", "جدران قابلة للكتابة"]
    },
    { 
      id: '14', 
      title: "مكتب تنفيذي في وسط البلد", 
      category: "مكاتب", 
      image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1600&q=80",
      description: "مكتب أنيق للمدراء التنفيذيين يجمع بين الفخامة والوظائف العملية.",
      area: "150 م²",
      duration: "2.5 شهر",
      style: "كلاسيكي فاخر",
      features: ["مكتب رئيسي فاخر", "غرفة اجتماعات خاصة", "منطقة انتظار أنيقة", "مكتبة مدمجة"]
    },
    { 
      id: '15', 
      title: "مساحة عمل مشتركة في الدقي", 
      category: "مكاتب", 
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1600&q=80",
      description: "مساحة عمل مشتركة حيوية تلبي احتياجات رواد الأعمال والشركات الناشئة.",
      area: "400 م²",
      duration: "3 أشهر",
      style: "عصري ومرن",
      features: ["مكاتب خاصة", "مساحات عمل مفتوحة", "قاعات تدريب", "مقهى ومطبخ مشترك"]
    },
    // New projects for "مطاعم" category
    { 
      id: '16', 
      title: "مطعم إيطالي في الزمالك", 
      category: "مطاعم", 
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
      description: "مطعم إيطالي أصيل يجمع بين النكهات الإيطالية التقليدية والأجواء الدافئة.",
      area: "200 م²",
      duration: "3 أشهر",
      style: "إيطالي تقليدي",
      features: ["مطبخ مفتوح", "فرن بيتزا حجري", "بار نبيذ", "تراس خارجي"]
    },
    { 
      id: '17', 
      title: "مطعم آسيوي في مدينة نصر", 
      category: "مطاعم", 
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
      description: "مطعم يقدم مزيجًا من النكهات الآسيوية المتنوعة في أجواء عصرية وأنيقة.",
      area: "280 م²",
      duration: "4 أشهر",
      style: "آسيوي معاصر",
      features: ["مطبخ مفتوح للسوشي", "بار كوكتيلات", "غرف طعام خاصة", "ديكورات آسيوية أصيلة"]
    },
    { 
      id: '18', 
      title: "كافيه ومخبز في المعادي", 
      category: "مطاعم", 
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
      description: "كافيه ومخبز يجمع بين الأجواء الدافئة والمنتجات الطازجة المخبوزة يوميًا.",
      area: "150 م²",
      duration: "2.5 شهر",
      style: "ريفي عصري",
      features: ["مخبز مفتوح", "ركن قهوة متخصص", "جلسات خارجية", "منطقة عرض للمعجنات"]
    },
    // New projects for "فنادق" category
    { 
      id: '19', 
      title: "فندق بوتيك في وسط القاهرة", 
      category: "فنادق", 
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
      description: "فندق بوتيك أنيق يجمع بين السحر التاريخي للقاهرة القديمة والراحة العصرية.",
      area: "1200 م²",
      duration: "10 أشهر",
      style: "تراثي معاصر",
      features: ["غرف فاخرة بديكورات فريدة", "مطعم على السطح", "سبا وصالة رياضة", "قاعة اجتماعات أنيقة"]
    },
    { 
      id: '20', 
      title: "منتجع صحي في العين السخنة", 
      category: "فنادق", 
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
      description: "منتجع صحي فاخر يوفر تجربة استجمام شاملة مع إطلالات خلابة على البحر الأحمر.",
      area: "5000 م²",
      duration: "14 شهر",
      style: "استوائي هادئ",
      features: ["فيلات خاصة", "مركز سبا شامل", "مسابح متعددة", "مطاعم صحية"]
    },
    { 
      id: '21', 
      title: "فندق أعمال في القاهرة الجديدة", 
      category: "فنادق", 
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80",
      description: "فندق حديث مصمم لتلبية احتياجات رجال الأعمال والمسافرين بغرض العمل.",
      area: "3000 م²",
      duration: "12 شهر",
      style: "عصري وعملي",
      features: ["غرف اجتماعات متطورة", "مركز أعمال 24/7", "خدمات رجال الأعمال", "مطعم وبار راقي"]
    },
    // New projects for "منازل" category
    { 
      id: '22', 
      title: "منزل عائلي في المقطم", 
      category: "منازل", 
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
      description: "منزل عائلي دافئ يجمع بين الراحة والأناقة، مع مساحات مفتوحة للعائلة.",
      area: "300 م²",
      duration: "6 أشهر",
      style: "عصري دافئ",
      features: ["مطبخ مفتوح على غرفة المعيشة", "غرف نوم واسعة", "حديقة خلفية", "غرفة ألعاب للأطفال"]
    },
    { 
      id: '23', 
      title: "شاليه ساحلي في الساحل الشمالي", 
      category: "منازل", 
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1600&q=80",
      description: "شاليه ساحلي أنيق يوفر إقامة مريحة مع إطلالات رائعة على البحر المتوسط.",
      area: "150 م²",
      duration: "4 أشهر",
      style: "ساحلي مريح",
      features: ["شرفة مطلة على البحر", "مساحة معيشة مفتوحة", "مطبخ صغير مجهز", "غرف نوم مريحة"]
    },
    { 
      id: '24', 
      title: "بنتهاوس فاخر في الدقي", 
      category: "منازل", 
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      description: "بنتهاوس فاخر يوفر إطلالات بانورامية على القاهرة مع تصميم داخلي راقي.",
      area: "400 م²",
      duration: "7 أشهر",
      style: "فاخر معاصر",
      features: ["سطح خاص مع جاكوزي", "نوافذ ممتدة من الأرض للسقف", "مطبخ فاخر", "غرفة سينما منزلية"]
    },
  ]

const categories = ["فلل", "شقق", "مكاتب", "مطاعم", "فنادق", "منازل"]

export default function ProjectsShowcase() {
  const sectionRefs = useRef(categories.map(() => React.createRef()))



  return (
    <section className="py-12 bg-white">
      <div className="max-w-full mx-auto px-4 flex">
        <div className="pr-4 ml-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">معرض مشاريعنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">اكتشف روعة التصميم من خلال مجموعة مختارة من أحدث وأرقى مشاريعنا في عالم التصميم الداخلي</p>
          </motion.div>

          {categories.map((category, index) => (
            <motion.div
              key={category}
              ref={sectionRefs.current[index] as React.RefObject<HTMLDivElement>}
              id={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold mb-4 text-[#004851]">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projectsData
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      className="bg-white rounded-lg shadow overflow-hidden relative"
                    >
                      <div className="relative h-64">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute top-0 left-0 p-2 flex">
                          {/* <span className="bg-[#004851] text-white px-2 py-1 mr-2 rounded">{project.area}</span> */}
                          {/* <span className="bg-[#DF2935] text-white px-2 py-1 mr-2 rounded">{project.duration}</span> */}
                          <span className="bg-[#F5A623] text-slate-800 px-2 py-1 mr-2 rounded">{project.style}</span>

                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-xl font-bold mb-2 text-[#004851]">{project.title}</h4>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        {/* <div className="flex flex-wrap mb-4">
                        </div> */}
                        <Link href={`/projects/${project.id}`}>
                          <span className="text-[#DF2935] font-semibold hover:underline">عرض التفاصيل</span>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


