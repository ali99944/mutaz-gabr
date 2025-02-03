import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"
import Footer from "./components/Footer"
import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import { getDictionary } from "@/src/i18n/dictionaries"

export const metadata: Metadata = {
  title: "معتز جابر للتصميم الداخلي",
  description: "شركة معتز جابر للتصميم الداخلي والمطابخ - تصميم داخلي احترافي وحلول مبتكرة",
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ locale: 'en' | 'ar' }>
}) {
  const locale = (await params).locale
  const dict = await getDictionary(locale)

  return (
    <div>
        <Navbar dictionary={dict} />
        {children}
        <Footer dictionary={dict} />
        <FloatingWhatsAppButton />
    </div>
  )
}

