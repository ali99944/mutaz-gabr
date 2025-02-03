'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/Button'
import Dictionary from '@/src/types/dictionary'


export default function AboutUsSection({ dictionary }: { dictionary: Dictionary }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })
  
  const tabs = [
    { title: dictionary.home_page.about.second_part.tabs.vision.title, content: dictionary.home_page.about.second_part.tabs.vision.description },
    { title: dictionary.home_page.about.second_part.tabs.mission.title, content: dictionary.home_page.about.second_part.tabs.mission.description },
    { title: dictionary.home_page.about.second_part.tabs.our_values.title, content: dictionary.home_page.about.second_part.tabs.our_values.description },
  ]

  return (
    <section ref={ref} className="mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/special/4.jpg"
              alt="فريق معتز جبر في العمل"
              width={600}
              height={400}
              className="rounded-lg shadow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4 text-app-secondary">{dictionary.home_page.about.second_part.title}</h3>
            <p className="text-lg text-white">
              {dictionary.home_page.about.second_part.description}
            </p>

            <div className="space-y-4">
              <div className="flex flex-col gap-y-4">
                {tabs.map((tab, index) => (
                  <div key={index}>
                    

                  <p className="text-gray-600 bg-white p-4 rounded-lg shadow">
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

      </div>
    </section>
  )
}

