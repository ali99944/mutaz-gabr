"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Loader2 } from 'lucide-react'
import BoxesLoader from "../../../components/boxes-loader"
import { getProjects } from "@/src/actions/project"
import { Empty } from "@/app/(control-panel)/components/empty"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function KitchenSiteProjects({ sub_category }: { sub_category: string }) {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const getDesignsData = async () => {
    try {
      setLoading(true)
      const data = await getProjects("kitchen", sub_category)
      setProjects(data)
    } catch (error) {
      console.error("Error fetching designs:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDesignsData()
  }, [sub_category])

  if (loading) {
    return (
      <BoxesLoader />
    )
  }

  return (
    <div className="min-h-screen text-white">
      <main className="py-4 px-4">
        <div className="">

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
            </div>
          ) : projects.length === 0 ? (
            <Empty message="لا توجد مشاريع حاليا"/>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((item) => (
                <Link href={`/kitchen/${sub_category}/site/${item.id}`} key={item.id}>
                  <motion.div
                    className="bg-gray-800 rounded-lg overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                  >
                    <div className="relative h-80">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        layout="fill"
                        objectFit="fill"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                      <div className="absolute bottom-0 left-2 right-2 p-2">
                        <h2 className="text-2xl font-bold text-white mb-2">{item.name}</h2>
                      </div>
                    </div>
                    <div className="p-4 bg-primary">
                      <div className="flex justify-between flex-col">
                        <span className="text-white font-semibold">{item.category}</span>
                        <span className="text-white font-semibold">{item.description}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}