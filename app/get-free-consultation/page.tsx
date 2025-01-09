import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import ConsultationBenefits from './components/ConsultationBenefits'
import ConsultationForm from './components/ConsultationForm'
import ConsultationHero from './components/ConsultationHero'
import ConsultationFAQs from './components/ConsultationFAQs'

export default function GetFreeConsultationPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <ConsultationHero />
      <ConsultationForm />
      <ConsultationBenefits />
      <ConsultationFAQs />
      <Footer />
    </main>
  )
}

