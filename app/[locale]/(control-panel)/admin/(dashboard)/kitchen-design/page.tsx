"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Edit, Trash2, Plus, Save, ImageIcon } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface KitchenCategory {
  id: string
  title: string
  description: string
  image: string
}

export default function AdminKitchenDesign() {
  const [categories, setCategories] = useState<KitchenCategory[]>([
    {
      id: "1",
      title: "المطابخ العصرية",
      description: "تصميمات حديثة تجمع بين الأناقة والوظيفة",
      image: "/assets/kitchen/modern.jpg",
    },
    {
      id: "2",
      title: "المطابخ الكلاسيكية",
      description: "تصميمات تقليدية بلمسة عصرية",
      image: "/assets/kitchen/classic.jpg",
    },
    {
      id: "3",
      title: "المطابخ المفتوحة",
      description: "تصميمات تدمج المطبخ مع مساحات المعيشة",
      image: "/assets/kitchen/open.jpg",
    },
  ])

  const [editingCategory, setEditingCategory] = useState<string | null>(null)

  const handleEdit = (id: string) => {
    setEditingCategory(id)
  }

  const handleSave = (id: string, newTitle: string, newDescription: string, newImage: string) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, title: newTitle, description: newDescription, image: newImage } : category,
      ),
    )
    setEditingCategory(null)
  }

  const handleDelete = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id))
  }

  const handleAdd = () => {
    const newId = (Math.max(...categories.map((c) => Number.parseInt(c.id))) + 1).toString()
    setCategories([
      ...categories,
      { id: newId, title: "فئة جديدة", description: "وصف الفئة الجديدة", image: "/assets/kitchen/placeholder.jpg" },
    ])
    setEditingCategory(newId)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-[#9c8a5a] mb-6">إدارة صفحة تصميم المطابخ</h1>

        <div className="mb-6">
          <button
            onClick={handleAdd}
            className="bg-[#9c8a5a] text-white px-4 py-2 rounded-lg hover:bg-[#8a795c] transition-colors flex items-center"
          >
            <Plus className="mr-2" size={20} />
            إضافة فئة جديدة
          </button>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="bg-gray-800 rounded-lg p-6 mb-6">
            {editingCategory === category.id ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <input
                  type="text"
                  value={category.title}
                  onChange={(e) =>
                    setCategories(categories.map((c) => (c.id === category.id ? { ...c, title: e.target.value } : c)))
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white mb-4"
                />
                <textarea
                  value={category.description}
                  onChange={(e) =>
                    setCategories(
                      categories.map((c) => (c.id === category.id ? { ...c, description: e.target.value } : c)),
                    )
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white mb-4"
                  rows={3}
                />
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    value={category.image}
                    onChange={(e) =>
                      setCategories(categories.map((c) => (c.id === category.id ? { ...c, image: e.target.value } : c)))
                    }
                    className="flex-grow px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="رابط الصورة"
                  />
                  <button className="ml-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <ImageIcon size={20} />
                  </button>
                </div>
                <button
                  onClick={() => handleSave(category.id, category.title, category.description, category.image)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                >
                  <Save className="mr-2" size={20} />
                  حفظ التغييرات
                </button>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex items-center mb-4">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-[#9c8a5a]">{category.title}</h2>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div className="flex space-x-2 space-x-reverse">
                  <button
                    onClick={() => handleEdit(category.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Edit className="ml-2" size={20} />
                    تعديل
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
                  >
                    <Trash2 className="ml-2" size={20} />
                    حذف
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

