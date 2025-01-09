import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#004851] text-[#D3D3D3] overflow-hidden">
      
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-0 sm:flex sm:items-center sm:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-4 sm:p-8 sm:space-y-0 sm:space-x-4 sm:items-center sm:justify-center">
          <div>
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center mb-6">
              <Image
                src="/assets/images/studio.png"
                alt="Moataz Gabr Kitchens"
                width={80}
                height={80}
                className="rounded-lg mb-4 sm:mb-0 sm:mr-4"
              />
              <h3 className="text-3xl font-bold text-center sm:text-left">Moataz Gabr</h3>
            </div>
            <p className="text-[#D3D3D3] leading-relaxed mb-6 text-center sm:text-left">
              نحن متخصصون في تصميم وتنفيذ المطابخ والديكورات الداخلية بأعلى مستويات الجودة والإبداع
            </p>
            <div className="flex space-x-4 justify-center flex-row-reverse sm:justify-end">
              <a target="_blank" href="https://www.facebook.com/MoatazGabrDesignStudio?mibextid=ZbWKwL" className="w-10 h-10 rounded-full bg-[#DF2935] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaFacebookF className='text-2xl' />
              </a>
              <a target="_blank" href="https://wa.me/+201270005969" className="w-10 h-10 rounded-full bg-[#DF2935] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaWhatsapp className='text-2xl' />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h4 className="text-2xl font-semibold mb-4">روابط سريعة</h4>
          </div>
          <ul className="space-y-4 flex flex-col items-center justify-center">
            <li><a href="/" className="hover:text-[#DF2935] text-lg transition-colors">الرئيسية</a></li>
            <li><a href="/services" className="hover:text-[#DF2935] text-lg transition-colors">خدماتنا</a></li>
            <li><a href="/projects" className="hover:text-[#DF2935] text-lg transition-colors">معرض الأعمال</a></li>
            <li><a href="/#contact" className="hover:text-[#DF2935] text-lg transition-colors">اتصل بنا</a></li>
          </ul>
          <div className="max-md:flex max-md:items-center max-md:justify-center max-md:flex-col max-md:space-y-4 max-md:text-center">
            <h4 className="text-2xl font-semibold mb-6 max-md:mb-0 max-md:text-center">تواصل معنا</h4>
            <ul className="space-y-4 max-md:space-y-0 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center">
              <li className="flex mb-4 max-md:flex-col max-md:items-center max-md:justify-center transition duration-300 hover:-translate-x-1 cursor-pointer">
                <Phone className="text-white text-xl mb-1 max-md:order-first max-md:mb-2" />
                <a href="tel:+201270005969" className="max-md:text-center">01270005969</a>
              </li>
              <li className="flex mb-4 max-md:flex-col max-md:items-center max-md:justify-center transition duration-300 hover:-translate-x-1 cursor-pointer">
                <Mail className="text-white text-xl hover:underline mb-1 max-md:order-first max-md:mb-2" />
                <a href="mailto:moataz.rabei.gabr2006@gmail.com" className="max-md:text-center">moataz.rabei.gabr2006@gmail.com</a>
              </li>
              <li className="flex mt-4 max-md:flex-col max-md:items-center max-md:justify-center transition duration-300 hover:-translate-x-1 cursor-pointer">
                <MapPin className="text-white text-xl mb-1 max-md:order-first max-md:mb-2" />
                <span className="sm:text-center">مدينة الشروق..فيلا القوات المسلحة.. الحي التاسع..فيلا ١١٢</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6 text-center sm:text-left">ساعات العمل</h4>
            <p className="mb-2 text-lg text-center">الأحد - الخميس: 9 صباحًا - 6 مساءً</p>
            <p className='text-lg text-center'>الجمعة - السبت: 10 صباحًا - 4 مساءً</p>
          </div>
        </div>
        <div className="mt-12 p-4 border-t-2 border-[#D3D3D3]/40 text-center sm:flex sm:justify-center sm:flex-row sm:space-x-4 sm:items-center">
          <p className='text-md'>
            <span className="sm:block sm:text-center">السجل التجاري: 157438</span>
          </p>
          <p className='text-md'>
            <span className="sm:block sm:text-center">الرقم الضريبي: 007-129-609</span>
          </p>
          <p className='text-md'>
            <span className="sm:block sm:text-center">{new Date().getFullYear()} معتز جبر للمطابخ. جميع الحقوق محفوظة.</span> 
          </p>
        <hr className='my-4'/>
          <div className="flex items-center flex-col justify-center">
            <a href="https://wa.me/+201205064049" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className='h-20 overflow-hidden'>
                <img
                  src={'/handsa.png'}
                  width={120}
                  alt='handsa'
                />
              </div>
              <span className="ml-2 text-xs text-white underline">Powered by Handsa Media</span>
            </a>
          </div>
        </div>
        
        
      </div>

      
    </footer>
  )
}


