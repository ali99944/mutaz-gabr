"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Save, Plus, Trash2 } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

interface PolicySection {
  title: string
  content: string
}

interface PolicyData {
  lastUpdated: string
  sections: PolicySection[]
}

export default function AdminPolicyPage() {
  const [policyData, setPolicyData] = useState<PolicyData>({
    lastUpdated: "",
    sections: [],
  })

  useEffect(() => {
    // Here you would typically fetch the policy data from an API
    // For now, we'll use mock data
    setPolicyData({
      lastUpdated: "2023-06-15",
      sections: [
        {
          title: "مقدمة",
          content:
            "نحن في معتز جابر للتصميم الداخلي نلتزم بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. تصف هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدام موقعنا وخدماتنا.",
        },
        {
          title: "جمع المعلومات",
          content:
            "نقوم بجمع المعلومات التي تقدمها لنا مباشرة، مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف، عند ملء نماذج الاتصال أو طلب استشارة. قد نقوم أيضًا بجمع معلومات عن كيفية استخدامك لموقعنا باستخدام ملفات تعريف الارتباط وتقنيات مماثلة.",
        },
      ],
    })
  }, [])

  const handleSectionChange = (index: number, field: "title" | "content", value: string) => {
    const newSections = [...policyData.sections]
    newSections[index][field] = value
    setPolicyData({ ...policyData, sections: newSections })
  }

  const handleAddSection = () => {
    setPolicyData({
      ...policyData,
      sections: [...policyData.sections, { title: "قسم جديد", content: "محتوى القسم الجديد" }],
    })
  }

  const handleDeleteSection = (index: number) => {
    const newSections = policyData.sections.filter((_, i) => i !== index)
    setPolicyData({ ...policyData, sections: newSections })
  }

  const handleSave = () => {
    // Here you would typically send the updated policy data to your API
    console.log("Saving policy data:", policyData)
    // Update the last updated date
    setPolicyData({ ...policyData, lastUpdated: new Date().toISOString().split("T")[0] })
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold text-[#9c8a5a] mb-6">إدارة سياسة الخصوصية</h1>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">آخر تحديث</label>
          <input
            type="date"
            value={policyData.lastUpdated}
            onChange={(e) => setPolicyData({ ...policyData, lastUpdated: e.target.value })}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#9c8a5a]"
          />
        </div>

        {policyData.sections.map((section, index) => (
          <div key={index} className="mb-6 bg-gray-800 p-4 rounded-lg">
            <input
              type="text"
              value={section.title}
              onChange={(e) => handleSectionChange(index, "title", e.target.value)}
              className="w-full px-4 py-2 mb-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#9c8a5a]"
              placeholder="عنوان القسم"
            />
            <textarea
              value={section.content}
              onChange={(e) => handleSectionChange(index, "content", e.target.value)}
              className="w-full px-4 py-2 mb-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#9c8a5a]"
              placeholder="محتوى القسم"
              rows={4}
            />
            <button
              onClick={() => handleDeleteSection(index)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Trash2 className="ml-2" size={20} />
              حذف القسم
            </button>
          </div>
        ))}

        <div className="flex justify-between">
          <button
            onClick={handleAddSection}
            className="bg-[#9c8a5a] text-white px-4 py-2 rounded-lg hover:bg-[#8a795c] transition-colors flex items-center"
          >
            <Plus className="ml-2" size={20} />
            إضافة قسم جديد
          </button>

          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
          >
            <Save className="ml-2" size={20} />
            حفظ التغييرات
          </button>
        </div>
      </motion.div>
    </div>
  )
}

