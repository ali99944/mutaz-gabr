import Image from "next/image"
import { Facebook, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#1a1a1a] text-white border-t-2 border-[#9c8a5a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <Image
              src="/assets/images/studio.png"
              alt="MG Group Logo"
              width={180}
              height={90}
              className="object-contain mb-6"
            />
            <p className="text-sm mb-4">
              نحن متخصصون في تصميم وتنفيذ الديكورات الداخلية والخارجية و المطابخ الخشبية بأعلى مستويات الجودة والإبداع
              لنحول مساحتك إلى تحفة فنية تعكس أسلوب حياتك
            </p>
            <div className="space-y-2">
              <p>الشروق سيتي ومدينة نصر</p>
              <p>هاتف: +20 XXX XXX XXX</p>
              <p>البريد الإلكتروني: info@moatazgabr.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#9c8a5a]">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="hover:text-[#9c8a5a] transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-[#9c8a5a] transition-colors">
                  معرض الأعمال
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#9c8a5a] transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#9c8a5a] transition-colors">
                  اتصل بنا
                </a>
              </li>
              <li>
                <a href="/consultation" className="hover:text-[#9c8a5a] transition-colors">
                  استشارة مجانية
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#9c8a5a]">تواصل معنا</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://facebook.com/mggroup-decor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#9c8a5a] transition-colors"
              >
                <Facebook className="ml-2 h-5 w-5" />
                <span>صفحة الديكور</span>
              </a>
              <a
                href="https://facebook.com/mggroup-kitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#9c8a5a] transition-colors"
              >
                <Facebook className="ml-2 h-5 w-5" />
                <span>صفحة المطابخ</span>
              </a>
              <a
                href="https://wa.me/+20XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#9c8a5a] transition-colors"
              >
                <Phone className="ml-2 h-5 w-5" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#9c8a5a]/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 items-center justify-center text-center">
            <span>جميع الحقوق محفوظة {new Date().getFullYear()} معتز جابر للتصميم الداخلي</span>
            <span className="hidden md:inline">-</span>
            <span>سجل تجاري: 1234567890</span>
            <span className="hidden md:inline">-</span>
            <span>بطاقة ضريبية: 9876543210</span>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Image
                src="/handsa.png"
                alt="Developer Logo"
                width={128}
                height={4}
                className="rounded-full object-cover w-40 mb-2 h-12"
              />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-400 ml-2">تم التطوير بواسطة</span>
            <a href="https://www.linkedin.com/in/ali-tarek-ali/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:underline transition-colors">
              &quot;المهندس علي طارق علي محمد عبد المجيد&quot;
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

