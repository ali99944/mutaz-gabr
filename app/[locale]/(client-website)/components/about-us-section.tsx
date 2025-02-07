'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/Button'
import Dictionary from '@/src/types/dictionary'


export default function AboutUsSection({ dictionary }: { dictionary: Dictionary }) {
  const ref = useRef(null)  
  const tabs = [
    { title: dictionary.home_page.about.second_part.tabs.vision.title, content: dictionary.home_page.about.second_part.tabs.vision.description },
    { title: dictionary.home_page.about.second_part.tabs.mission.title, content: dictionary.home_page.about.second_part.tabs.mission.description },
    { title: dictionary.home_page.about.second_part.tabs.our_values.title, content: dictionary.home_page.about.second_part.tabs.our_values.description },
  ]

  return (
    <section ref={ref} className="overflow-hidden">
      <div className="max-w-7xl mx-auto ">

      <motion.div

            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
                {tabs.map((tab, index) => (
                  <div key={index}>
                    

                  <p className="text-gray-600 bg-white p-4 rounded-lg shadow-sm">
                  <p
                    className={` rounded transition-colors text-lg text-app-secondary mb-2`}
                  >
                    {tab.title}
                  </p>
                    {tab.content}</p>
                  </div>
                ))}
              </div>
              
            </div>

            <div className="mt-4">
            <Link href={'#contact'}>
                <Button size='lg' className='bg-app-secondary hover:bg-app-secondary/85'>{dictionary.home_page.about.second_part.contact_us_button_text}</Button>
            </Link>
            </div>
          </motion.div>

      </div>
    </section>
  )
}

