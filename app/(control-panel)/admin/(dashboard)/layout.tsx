import { Metadata } from 'next'
import ControlPanelLayout from '../../components/control-panel-layout'

export const metadata: Metadata = {
  title: 'لوحة التحكم - معتز جابر للتصميم الداخلي',
  description: 'لوحة التحكم الإدارية لموقع معتز جابر للتصميم الداخلي',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <ControlPanelLayout>
        {children}
      </ControlPanelLayout>
    </div>
  )
}

