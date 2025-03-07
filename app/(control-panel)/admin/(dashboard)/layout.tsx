import { Metadata } from 'next'
import ControlPanelLayout from '../../components/control-panel-layout'
import { Cairo } from 'next/font/google'

export const metadata: Metadata = {
  title: 'لوحة التحكم - معتز جبر للتصميم الداخلي',
  description: 'لوحة التحكم الإدارية لموقع معتز جبر للتصميم الداخلي',
}

const cairo = Cairo({
  subsets: ['arabic']
})

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className={`min-h-screen bg-gray-100 text-white ${cairo.className}`} dir='rtl' lang='ar'>
        <ControlPanelLayout>
          {children}
        </ControlPanelLayout>
    </div>
  )
}


