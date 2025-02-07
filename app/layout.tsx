import { Cairo, Roboto } from 'next/font/google'
import '@/src/styles/globals.css'
import { Bounce, ToastContainer } from 'react-toastify'
import { loadEnvConfig } from '@next/env'
import ReactQueryProvider from '@/src/providers/query-providers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

const cairo = Cairo({ subsets: ['arabic'] })
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const dir = process.cwd()
  loadEnvConfig(dir)

  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <link rel="shortcut icon" href="favicon.ico" />
      <body className={`${locale == "ar" ? cairo.className : roboto.className} antialiased bg-neutral-50`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <ReactQueryProvider>
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
        </ReactQueryProvider>
        </NextIntlClientProvider>

      </body>
    </html>
  )
}

