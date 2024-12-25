import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ServiceDetails from './components/ServiceDetails'
import { Metadata } from 'next'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'خدمات المطابخ الفاخرة | معتز جابر',
  description: 'استكشف خدماتنا المتميزة في تصميم وتنفيذ المطابخ الفاخرة. نحول مساحتك إلى تحفة فنية تجمع بين الأناقة والوظائفية.',
}

export default function ServiceDetailsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <ServiceDetails service={services[0]} />
      <Footer />
    </main>
  )
}
