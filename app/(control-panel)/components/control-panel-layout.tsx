"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import AdminSidebar from "./sidebar"
import AdminNavbar from "./navbar"


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function ControlPanelLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <motion.main
          className="flex-1 overflow-x-hidden overflow-y-auto bg-[#1a1a1a]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}

