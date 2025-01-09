import { Cairo } from 'next/font/google'
import './globals.css'
import { Bounce, ToastContainer } from 'react-toastify'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'
import { loadEnvConfig } from '@next/env'

const cairo = Cairo({ subsets: ['arabic'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dir = process.cwd()
  loadEnvConfig(dir)

  return (
    <html lang="ar" dir="rtl">
      <link rel="shortcut icon" href="/assets/images/logo.png" />
      <body className={`${cairo.className} antialiased bg-neutral-50`}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}

