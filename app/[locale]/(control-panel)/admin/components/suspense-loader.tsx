import { motion } from "framer-motion"

export default function SuspenseLoader() {
  return (
    <div className="fixed inset-0 bg-[#1a1a1a] flex items-center justify-center z-50">
      <motion.div
        className="w-16 h-16 border-4 border-[#9c8a5a] border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

