"use client";

import { motion } from "framer-motion";
import AdminNavbar from "./navbar";
import { Toaster } from "@/components/ui/toaster";
import ProtectedRoute from "./protected-route";


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ControlPanelLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen text-white flex flex-col">
      <AdminNavbar />
      <motion.main
        className="flex-1 overflow-x-hidden overflow-y-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
        <Toaster />
      </motion.main>
    </div>
  );
}

