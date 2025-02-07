'use client'

import { FolderOpen } from 'lucide-react'
import { cn } from "@/lib/utils"

interface EmptyProps {
  message?: string
  className?: string
}

export function Empty({ message = "لا توجد بيانات لعرضها", className }: EmptyProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center px-4 py-20", className)}>
      <div className="relative mb-4">
        <div className="bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.1)] rounded-full flex items-center justify-center w-40 h-40">
        <FolderOpen className="text-muted-foreground" size={120} />
        </div>
        
      </div>
      <p className="text-2xl md:text-3xl font-medium text-muted-foreground max-w-sm">{message}</p>
    </div>
  )
}



