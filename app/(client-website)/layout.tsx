import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton"
import Footer from "./components/Footer"
import type { Metadata } from "next"
import Navbar from "./components/Navbar"

export const metadata: Metadata = {
  title: "معتز جابر للتصميم الداخلي",
  description: "شركة معتز جابر للتصميم الداخلي والمطابخ - تصميم داخلي احترافي وحلول مبتكرة",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
    </div>
  )
}

