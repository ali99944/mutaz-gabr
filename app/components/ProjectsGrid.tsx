'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Enhanced mock data for projects
const projectsData = [
  { 
    id: '1', 
    title: "فيلا فاخرة بالتجمع الخامس", 
    category: "فلل", 
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    description: "تصميم داخلي فاخر لفيلا في قلب التجمع الخامس، يجمع بين الأناقة والراحة.",
    area: "500 متر مربع",
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
    area: "180 متر مربع",
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
    area: "300 متر مربع",
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
    area: "250 متر مربع",
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
    area: "1000 متر مربع",
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
    area: "200 متر مربع",
    duration: "5 أشهر",
    style: "تقليدي مع لمسات عصرية",
    features: ["فرن طين تقليدي", "ساحة داخلية", "سقف من جذوع النخيل", "نوافذ مشربية"]
  },
]

const categories = ["الكل", "فلل", "شقق", "مكاتب", "مطاعم", "فنادق", "منازل"]

export default function ProjectsGrid() {
  const [projects, setProjects] = useState(projectsData)
  const [filter, setFilter] = useState("الكل")
  const [searchTerm, setSearchTerm] = useState("")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    let filtered = projectsData
    if (filter !== "الكل") {
      filtered = filtered.filter(project => project.category === filter)
    }
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    setProjects(filtered)
  }, [filter, searchTerm])

  return (
    <section id="projects" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#004851]">معرض مشاريعنا</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">اكتشف روعة التصميم من خلال مجموعة مختارة من أحدث وأرقى مشاريعنا في عالم التصميم الداخلي</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg transition-colors ${
                filter === category
                  ? 'bg-[#004851] text-white'
                  : 'bg-gray-200 text-[#004851] hover:bg-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="relative mb-12">
          <input
            type="text"
            placeholder="ابحث عن مشروع..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pr-10 rounded-lg border-2 border-gray-300 focus:border-[#004851] focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
          )}
        </div>

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-md bg-white"
                onMouseEnter={() => setHoveredProject(project?.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-[300px] md:h-[400px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004851]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: '100%' }}
                  animate={{ y: hoveredProject === project.id ? 0 : '100%' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="inline-block px-3 py-1 bg-[#DF2935] text-white text-sm font-semibold rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#D3D3D3] mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <p className="text-sm font-semibold">المساحة</p>
                      <p>{project.area}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">المدة</p>
                      <p>{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">الأسلوب</p>
                      <p>{project.style}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">المميزات الرئيسية:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <Link href={`/projects/${project.id}`} legacyBehavior>
                    <p className="bg-white text-[#004851] px-4 py-2 rounded-lg hover:bg-[#D3D3D3] transition-colors duration-300">
                    عرض التفاصيل
                    </p>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {projects.length === 0 && (
          <p className="text-center text-gray-600 mt-8">لم يتم العثور على مشاريع مطابقة لبحثك.</p>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="inline-block bg-[#c1121f] text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition duration-300 shadow">
            عرض جميع المشاريع
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

