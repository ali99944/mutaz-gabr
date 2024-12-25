import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'
import { ChevronLeft, Copyright } from 'lucide-react'

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
              <h3 className="text-3xl font-bold">معتز جبر</h3>
              <Image
                src="/assets/images/logo.png"
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
              <a href="#" className="w-10 h-10 rounded-full bg-[#DF2935] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaFacebookF className='text-2xl' />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#DF2935] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaInstagram className='text-2xl' />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#DF2935] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaTwitter className='text-2xl' />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#DF2935] flex items-center justify-center hover:bg-opacity-80 transition duration-300">
                <FaWhatsapp className='text-2xl' />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-[#DF2935] text-md transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-[#DF2935] text-md transition-colors">خدماتنا</a></li>
              <li><a href="#gallery" className="hover:text-[#DF2935] text-md transition-colors">معرض الأعمال</a></li>
              <li><a href="#projects" className="hover:text-[#DF2935] text-md transition-colors">مشاريعنا</a></li>
              <li><a href="#contact" className="hover:text-[#DF2935] text-md transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 transition duration-300 hover:-translate-x-1 cursor-pointer">
                <ChevronLeft className="text-white text-xl" />
                <span>123-456-7890</span>
              </li>
              <li className="flex items-center gap-3 transition duration-300 hover:-translate-x-1 cursor-pointer">
                <ChevronLeft className="text-white text-xl" />
                <span>info@moatazgaber.com</span>
              </li>
              <li className="flex items-center gap-3 transition duration-300 hover:-translate-x-1 cursor-pointer">
                <ChevronLeft className="text-white text-xl" />
                <span>شارع التحرير، القاهرة، مصر</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-6">ساعات العمل</h4>
            <p className="mb-2">الأحد - الخميس: 9 صباحًا - 6 مساءً</p>
            <p>الجمعة - السبت: 10 صباحًا - 4 مساءً</p>
          </div>
        </div>
        <div className="mt-12 p-4 border-t-2 border-[#D3D3D3]/40 text-center">
          <p className='text-xl flex justify-center items-center flex-row-reverse space-x-4'>
            <span>{new Date().getFullYear()} معتز جبر للمطابخ. جميع الحقوق محفوظة.</span> 
            <Copyright />
          </p>
        </div>
      </div>
    </footer>
  )
}

