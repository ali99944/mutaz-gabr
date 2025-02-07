'use client'

import { SessionProvider } from "next-auth/react"

export default function BaseAdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <div className="min-h-screen bg-gray-100 text-white" dir='rtl' lang='ar'>{children}</div>
        </SessionProvider>
    )
}