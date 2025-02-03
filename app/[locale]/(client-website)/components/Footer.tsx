import Image from "next/image"
import { Clock, Facebook, Phone } from "lucide-react"
import Dictionary from "@/src/types/dictionary"
import { fillTranslate } from "@/src/utils/functions/translate"

export default function Footer({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="bg-primary text-white border-t-2 border-[#9c8a5a]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
          <Image
                src="/assets/images/studio.png"
                alt="MG Group Logo"
                width={180}
                height={90}
                className="object-contain mb-4"
              />
            <p className="text-sm mb-4">
              {dictionary.footer.bio}
            </p>
            <div className="space-y-2">
              <p>مدينة الشروق..فيلا القوات المسلحة.. الحي التاسع..فيلا ١١٢</p>
              <p>{dictionary.footer.phone}: <a href="tel:+201270005969" target="_blank">01270005969</a></p>
              <p>{dictionary.footer.email}: <a href="mailto:moataz.rabei.gabr2006@gmail.com" target="_blank">moataz.rabei.gabr2006@gmail.com</a></p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-app-secondary">{dictionary.footer.quick_links.title}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/interior-design" className="hover:text-app-secondary transition-colors">
                  {dictionary.footer.quick_links.interior_design}
                </a>
              </li>
              <li>
                <a href="/kitchen-design" className="hover:text-app-secondary transition-colors">
                  {dictionary.footer.quick_links.kitchen_design}
                </a>
              </li>
              <li>
                <a href="/real-estate" className="hover:text-app-secondary transition-colors">
                  {dictionary.footer.quick_links.real_estate}
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-app-secondary transition-colors">
                  {dictionary.footer.quick_links.about}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-app-secondary transition-colors">
                  {dictionary.footer.quick_links.contact}
                </a>
              </li>
              <li>
                <a href="/consultation" className="hover:text-app-secondary transition-colors">
                  {dictionary.footer.quick_links.get_consultation}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-app-secondary">{dictionary.footer.contact_us.title}</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.facebook.com/MoatazGabrDesignStudio?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-app-secondary transition-colors gap-x-2"
              >
                <Facebook className=" h-5 w-5" />
                <span>{dictionary.footer.contact_us.decors_facebook}</span>
              </a>
              <a
                href="https://web.facebook.com/MoatazGabrKitchens"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-app-secondary transition-colors gap-x-2"
              >
                <Facebook className=" h-5 w-5" />
                <span>{dictionary.footer.contact_us.kitchen_facebook}</span>
              </a>
              <a
                href="https://wa.me/+201270005969"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-app-secondary transition-colors gap-x-2"
              >
                <Phone className=" h-5 w-5" />
                <span>{dictionary.footer.contact_us.whatsapp}</span>
              </a>
              <ul className="space-y-2">
              <li className="flex items-center space-x-2 rtl:space-x-reverse group ">
                <Clock className="text-white w-5 h-5" />
                <span>الأحد - الخميس: 9 صباحًا - 6 مساءً</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse group ">
                <Clock className="text-white w-5 h-5" />
                <span>الجمعة - السبت: 10 صباحًا - 4 مساءً</span>
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#9c8a5a]/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-4 items-center justify-center text-center">
            <span>{fillTranslate(dictionary.footer.copyright, { "year": new Date().getFullYear().toString() })}</span>
            <span className="hidden md:inline">-</span>
            <span>{fillTranslate(
              dictionary.footer.commercial_register,
              {
                "register_number": "157438"
              }
            )}</span>
            <span className="hidden md:inline">-</span>
            <span>{fillTranslate(dictionary.footer.tax_number, {
              "tax_number": "007-129-609"
            })}</span>
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
          <div className="flex items-center justify-center gap-x-2">
            <span className="text-sm text-gray-400">{dictionary.footer.developed_by}</span>
            <a href="https://www.linkedin.com/in/ali-tarek-ali/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:underline transition-colors">
              &quot;المهندس علي طارق علي محمد عبد المجيد&quot;
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

