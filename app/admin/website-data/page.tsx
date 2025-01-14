'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'

// This would typically come from an API or database
import websiteConfig from '@/app/api/configs/website-configs.json'
// import { GeneralSection } from './components/GeneralSection'
// import CompanyMetadataSection from './components/CompanyMetadataSection'
// import ContactSection from './components/ContactSection'
// import SocialMediaSection from './components/SocialMediaSection'
// import CopyrightSection from './components/CopyrightSection'
// import LandingPageSection from './components/LandingPageSection'
// import NavigationSection from './components/NavigationSection'
// import SEOSection from './components/SEOSection'

export default function WebsiteData() {
  const [config] = useState(websiteConfig)

  const handleSave = () => {
    // Here you would typically send the data to your API
    console.log('Saving configuration:', config)
    // Show a success message to the user
    alert('تم حفظ الإعدادات بنجاح!')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">بيانات الموقع</h1>
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1.5 px-4 rounded-md transition duration-300 ease-in-out flex items-center"
          >
            <Save className="w-5 h-5 ml-2" />
            حفظ التغييرات
          </button>
        </div>

        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <GeneralSection config={config} setConfig={setConfig} />
          <SEOSection config={config} setConfig={setConfig} />
          <SocialMediaSection config={config} setConfig={setConfig} />
          <ContactSection config={config} setConfig={setConfig} />
          <CompanyMetadataSection config={config} setConfig={setConfig} />
          <CopyrightSection config={config} setConfig={setConfig} />
          <NavigationSection config={config} setConfig={setConfig} />
          <LandingPageSection config={config} setConfig={setConfig} /> */}
        </div>
      </div>
    </div>
  )
}

