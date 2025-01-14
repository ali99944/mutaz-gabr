import { Metadata } from 'next'
import ContactContent from './ContactContent'
import NavbarComponent from '../components/Navbar/NavbarComponent'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'اتصل بنا | معتز جابر للتصميم الداخلي',
  description: 'تواصل مع معتز جابر للتصميم الداخلي للحصول على استشارة مجانية أو لمناقشة مشروعك القادم. نحن هنا لتحويل رؤيتك إلى واقع.',
}

export default function ContactPage() {
  return (
    <div>
        <NavbarComponent website_name={'Moataz gabr'} />
        <ContactContent />
        <Footer />
    </div>
  )
}

