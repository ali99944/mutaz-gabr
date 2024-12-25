'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  name: string
  image: string
}

export default function ServiceCard({ name, image }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004851]/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{name}</h3>
      </div>
      <div className="p-4 flex justify-between items-center">
        <Link href={`/showcase/${name}`}>
          <motion.button
            className="bg-[#DF2935] text-white px-4 py-2 rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            معرض الأعمال
          </motion.button>
        </Link>
        <Link href={`/get-service/${name}`}>
          <motion.button
            className="bg-[#004851] text-white px-4 py-2 rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            احصل على الخدمة
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

