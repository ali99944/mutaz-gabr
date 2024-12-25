import { motion } from 'framer-motion'

const tabs = [
  { id: 'general', label: 'عام' },
  { id: 'contact', label: 'معلومات الاتصال' },
  { id: 'about', label: 'من نحن' },
  { id: 'policy', label: 'السياسات' },
  { id: 'seo', label: 'تحسين محركات البحث' },
]

export default function SettingsTabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="flex space-x-4 mb-8 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`pb-2 px-4 relative ${
            activeTab === tab.id ? 'text-[#004851] font-semibold' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004851]"
              layoutId="activeTab"
            />
          )}
        </button>
      ))}
    </div>
  )
}

