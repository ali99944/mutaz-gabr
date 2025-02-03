'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit, Trash2, Plus, Save } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface Section {
  id: string
  title: string
  content: string
}

export default function AdminInteriorDesign() {
  const [sections, setSections] = useState<Section[]>([
    { id: '1', title: 'مقدمة التصميم الداخلي', content: 'نحن نقدم حلولاً إبداعية ومبتكرة في مجال التصميم الداخلي...' },
    { id: '2', title: 'خدماتنا', content: 'نقدم مجموعة واسعة من خدمات التصميم الداخلي...' },
    { id: '3', title: 'مشاريعنا', content: 'اكتشف بعضاً من أحدث وأفضل مشاريعنا في التصميم الداخلي...' },
  ])

  const [editingSection, setEditingSection] = useState<string | null>(null)

  const handleEdit = (id: string) => {
    setEditingSection(id)
  }

  const handleSave = (id: string, newTitle: string, newContent: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, title: newTitle, content: newContent } : section
    ))
    setEditingSection(null)
  }

  const handleDelete = (id: string) => {
    setSections(sections.filter(section => section.id !== id))
  }

  const handleAdd = () => {
    const newId = (Math.max(...sections.map(s => parseInt(s.id))) + 1).toString()
    setSections([...sections, { id: newId, title: 'قسم جديد', content: 'محتوى القسم الجديد' }])
    setEditingSection(newId)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-[#9c8a5a] mb-6">إدارة صفحة التصميم الداخلي</h1>
        
        <div className="mb-6">
          <button
            onClick={handleAdd}
            className="bg-[#9c8a5a] text-white px-4 py-2 rounded-lg hover:bg-[#8a795c] transition-colors flex items-center"
          >
            <Plus className="mr-2" size={20} />
            إضافة قسم جديد
          </button>
        </div>

        {sections.map(section => (
          <div key={section.id} className="bg-gray-800 rounded-lg p-6 mb-6">
            {editingSection === section.id ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => setSections(sections.map(s => s.id === section.id ? { ...s, title: e.target.value } : s))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white mb-4"
                />
                <textarea
                  value={section.content}
                  onChange={(e) => setSections(sections.map(s => s.id === section.id ? { ...s, content: e.target.value } : s))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white mb-4"
                  rows={4}
                />
                <button
                  onClick={() => handleSave(section.id, section.title, section.content)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                >
                  <Save className="mr-2" size={20} />
                  حفظ التغييرات
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-xl font-semibold text-[#9c8a5a] mb-2">{section.title}</h2>
                <p className="text-gray-300 mb-4">{section.content}</p>
                <div className="flex space-x-2 space-x-reverse">
                  <button
                    onClick={() => handleEdit(section.id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Edit className="ml-2" size={20} />
                    تعديل
                  </button>
                  <button
                    onClick={() => handleDelete(section.id)}
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
