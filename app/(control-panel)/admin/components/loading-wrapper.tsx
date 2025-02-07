import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface LoadingWrapperProps {
  children: ReactNode
  isLoading: boolean
}

export default function LoadingWrapper({ children, isLoading }: LoadingWrapperProps) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-[#1a1a1a] bg-opacity-70 flex items-center justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-12 h-12 border-4 border-[#9c8a5a] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </motion.div>
      )}
    </div>
  )
}

