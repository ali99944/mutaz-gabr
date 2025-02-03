"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import AdminSidebar from "./sidebar"
import AdminNavbar from "./navbar"
import { Toaster } from "@/components/ui/toaster"


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function ControlPanelLayout({ children }: { children: React.ReactNode }) { 
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen text-white flex">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar  />
        <motion.main
          className="flex-1 overflow-x-hidden overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          {children}
          <Toaster />
        </motion.main>
      </div>
    </div>
  )
}

