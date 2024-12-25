'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SettingsTabs from './components/SettingsTabs'
import AboutSettings from './components/AboutSettings'
import ContactSettings from './components/ContactSettings'
import GeneralSettings from './components/GeneralSettings'
import PolicySettings from './components/PolicySettings'
import SEOSettings from './components/SeoSettings'

const tabComponents = {
  general: GeneralSettings,
  contact: ContactSettings,
  about: AboutSettings,
  policy: PolicySettings,
  seo: SEOSettings,
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general')

  const ActiveComponent = tabComponents[activeTab]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-[#004851] mb-8">إعدادات الموقع</h1>
        <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
    </div>
  )
}

