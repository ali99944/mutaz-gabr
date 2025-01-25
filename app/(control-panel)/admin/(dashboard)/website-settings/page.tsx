"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Save, Search, ChevronDown, ChevronLeft } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// This would typically come from an API or database
const initialConfig = {
  general: {
    website_name: "Moataz gabr",
    seo: {
      title: "شعار الموقع",
      description: "وصف الموقع",
    },
    copyright: {
      year: 2023,
      name: "معتز جابر",
    },
  },
  contact: {
    social_media: {
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    contacts: {
      email: "moataz@example.com",
      phone: "01234567890",
      address: "123 شارع الرئيسي، المدينة، البلد",
      whatsapp: {
        number: "01234567890",
        message: "مرحباً، أنا مهتم بخدماتك.",
      },
    },
  },
  business: {
    moataz_meta: {
      commercial_register: "123456789",
      tax_number: "123456789",
    },
  },
  navigation: {
    links: [
      { name: "الرئيسية", href: "/" },
      { name: "عنا", href: "/about" },
      { name: "خدماتنا", href: "/services" },
      { name: "اتصل بنا", href: "/contact" },
    ],
  },
  landing_page: {
    hero: {
      section_name: "عنوان الصفحة الرئيسية",
      section_description: "وصف الصفحة الرئيسية",
      consultation_button_text: "جدول استشارة",
      explore_projects_button_text: "استكشف مشاريعنا",
    },
    who_are_we: {
      section_title: "من نحن",
      section_description: "وصف من نحن",
      content_title: "عنوان المحتوى",
      content_description: "وصف المحتوى",
      contact_us_button_text: "تواصل معنا لتحويل مساحتك",
      benefits: [
        { title: "عنوان الفائدة", description: "وصف الفائدة" },
        { title: "عنوان الفائدة", description: "وصف الفائدة" },
        { title: "عنوان الفائدة", description: "وصف الفائدة" },
        { title: "عنوان الفائدة", description: "وصف الفائدة" },
      ],
    },
    projects: {
      section_title: "مشاريعنا",
      section_description: "وصف مشاريعنا",
      show_all_projects_button_text: "عرض جميع المشاريع",
    },
    services: {
      section_title: "خدماتنا",
      section_description: "وصف خدماتنا",
    },
  },
}

type ConfigValue = string | number | boolean | object | null

interface ConfigItemProps {
  label: string
  value: ConfigValue
  onChange: (value: ConfigValue) => void
  nestingLevel?: number
}

const ConfigItem: React.FC<ConfigItemProps> = ({ label, value, onChange, nestingLevel = 0 }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (typeof value === "object" && value !== null) {
    return (
      <div className={`mt-4 ${nestingLevel > 0 ? "mr-4 border-r border-gray-600 pr-4" : ""}`}>
        <button className="flex items-center text-[#9c8a5a] font-semibold mb-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ChevronDown className="ml-2" /> : <ChevronLeft className="ml-2" />}
          {label}
        </button>
        {isOpen && (
          <div>
            {Object.entries(value).map(([key, val]) => (
              <ConfigItem
                key={key}
                label={key}
                value={val}
                onChange={(newVal) => onChange({ ...value, [key]: newVal })}
                nestingLevel={nestingLevel + 1}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      <input
        type={typeof value === "number" ? "number" : "text"}
        value={value as string | number}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9c8a5a]"
      />
    </div>
  )
}

export default function WebsiteSettings() {
  const [config, setConfig] = useState(initialConfig)
  const [activeTab, setActiveTab] = useState("general")
  const [searchTerm, setSearchTerm] = useState("")

  const handleConfigChange = (section: string, key: string, value: ConfigValue) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [section]: {
        ...prevConfig[section as keyof typeof prevConfig],
        [key]: value,
      },
    }))
  }

  const handleSave = () => {
    // Here you would typically send the config to your backend
    console.log("Saving config:", config)
    // You can add an API call here to save the config
  }

  const filterConfig = (config: object, term: string): object => {
    const filtered = {}
    Object.entries(config).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        const nestedFiltered = filterConfig(value, term)
        if (Object.keys(nestedFiltered).length > 0) {
          filtered[key] = nestedFiltered
        }
      } else if (typeof value === "string" && value.toLowerCase().includes(term.toLowerCase())) {
        filtered[key] = value
      }
    })
    return filtered
  }

  const filteredConfig = searchTerm ? filterConfig(config, searchTerm) : config

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }}>
        <h1 className="text-2xl font-bold text-[#9c8a5a] mb-6">إعدادات الموقع</h1>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="بحث في الإعدادات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#9c8a5a]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="mb-6 flex space-x-4 space-x-reverse overflow-x-auto">
          {Object.keys(config).map((section) => (
            <button
              key={section}
              onClick={() => setActiveTab(section)}
              className={`px-2 py-1.5 rounded-md ${
                activeTab === section ? "bg-[#9c8a5a] text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          {Object.entries(filteredConfig[activeTab as keyof typeof filteredConfig] || {}).map(([key, value]) => (
            <ConfigItem
              key={key}
              label={key}
              value={value as ConfigValue}
              onChange={(newValue) => handleConfigChange(activeTab, key, newValue)}
            />
          ))}
        </div>

        <button
          onClick={handleSave}
          className="mt-6 px-2 py-2 bg-[#9c8a5a] text-white rounded-md hover:bg-[#8a795c] transition-colors flex items-center"
        >
          <Save className="ml-2" />
          حفظ التغييرات
        </button>
      </motion.div>
    </div>
  )
}

