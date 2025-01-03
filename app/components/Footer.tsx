import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#004851] text-[#D3D3D3] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/assets/images/mutaz.jpg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-4">
          <div>
            <div className="flex items-center justify-end flex-row-reverse mb-6">
              <h3 className="text-3xl font-bold">Moataz Gabr</h3>
              <Image
                src="/assets/images/studio.png"
                alt="Moataz Gabr Kitchens"
                width={80}
                height={80}
                className="rounded-lg ml-4"
              />
            </div>
            <p className="text-[#D3D3D3] leading-relaxed mb-6">
              نحن متخصصون في تصميم وتنفيذ المطابخ والديكورات الداخلية بأعلى مستويات الجودة والإبداع
            </p>
            <div className="flex space-x-4 flex-row-reverse justify-end">
              <a target="_blank" href="https://www.facebook.com/MoatazGabrDesignStudio?mibextid=ZbWKwL" className="w-10 h-10 rounded-full bg-[#DF2935] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaFacebookF className='text-2xl' />
              </a>
              <a target="_blank" href="https://wa.me/01270005969" className="w-10 h-10 rounded-full bg-[#DF2935] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaWhatsapp className='text-2xl' />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#DF2935] text-lg transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-[#DF2935] text-lg transition-colors">خدماتنا</a></li>
              <li><a href="#gallery" className="hover:text-[#DF2935] text-lg transition-colors">معرض الأعمال</a></li>
              <li><a href="#projects" className="hover:text-[#DF2935] text-lg transition-colors">مشاريعنا</a></li>
              <li><a href="#contact" className="hover:text-[#DF2935] text-lg transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 transition duration-300 hover:-translate-x-1 cursor-pointer">
                <Phone className="text-white text-xl" />
                <a href="tel:+201270005969">01270005969</a>
              </li>
              <li className="flex items-center gap-3 transition duration-300 hover:-translate-x-1 cursor-pointer">
                <Mail className="text-white text-xl hover:underline" />
                <a href="mailto:moataz.rabei.gabr2006@gmail.com">moataz.rabei.gabr2006@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 transition duration-300 hover:-translate-x-1 cursor-pointer">
                <MapPin className="text-white text-xl" />
                <span>مدينة الشروق..فيلا القوات المسلحة.. الحي التاسع..فيلا ١١٢</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6">ساعات العمل</h4>
            <p className="mb-2 text-lg">الأحد - الخميس: 9 صباحًا - 6 مساءً</p>
            <p className='text-lg'>الجمعة - السبت: 10 صباحًا - 4 مساءً</p>
          </div>
        </div>
        <div className="mt-12 p-4 border-t-2 border-[#D3D3D3]/40 text-center sm:flex sm:justify-center sm:flex-row sm:space-x-4 sm:items-center">
          <p className='text-xl'>
            <span className="sm:block sm:text-center">السجل التجاري: 157438</span>
          </p>
          <p className='text-xl'>
            <span className="sm:block sm:text-center">الرقم الضريبي: 609-129-007</span>
          </p>
          <p className='text-xl'>
            <span className="sm:block sm:text-center">{new Date().getFullYear()} معتز جبر للمطابخ. جميع الحقوق محفوظة.</span> 
          </p>
        </div>
      </div>
    </footer>
  )
}

