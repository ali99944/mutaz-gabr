import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"
import Footer from "./components/Footer"
import type { Metadata } from "next"
import Navbar from "./components/Navbar"
import { getDictionary } from "@/src/i18n/dictionaries"
import { Cairo, Roboto } from "next/font/google"

export const metadata: Metadata = {
  title: "معتز جابر للتصميم الداخلي",
  description: "شركة معتز جابر للتصميم الداخلي والمطابخ - تصميم داخلي احترافي وحلول مبتكرة",
}

const cairo = Cairo({ subsets: ['arabic'] })
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

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
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${locale == "ar" ? cairo.className : roboto.className} antialiased bg-neutral-50`}>
        <Navbar dictionary={dict} />
        {children}
        <Footer dictionary={dict} />
        <FloatingWhatsAppButton />
    </div>
  )
}

