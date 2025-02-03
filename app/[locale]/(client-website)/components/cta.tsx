import { Button } from "@/components/ui/button"
import AppRoutes from "@/src/constants/app_routes"
import Link from "next/link"


export default function CTA() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 bg-[#002233] text-primary-foreground">
      <div className="container px-4 md:px-6">

      <div className="flex flex-col items-center space-y-4 mb-12 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">هل أنت مستعد لتبسيط سير عملك؟</h2>
            <p className="mx-auto max-w-[800px] text-primary-foreground/90 md:text-xl">
            دعنا نحول أفكارك إلى تصميم استثنائي. تواصل معنا اليوم لبدء رحلة التصميم الخاصة بك.
            </p>
          </div>
          <div className="flex gap-x-2">
            <Link href={AppRoutes.getFreeConsultation}>
              <Button size="lg" variant="secondary" className="bg-app-secondary text-white hover:text-app-secondary">
                احصل علي استشارة مجانية
              </Button>
            </Link>
            <Link href={AppRoutes.contact}>
              <Button size="lg" variant="secondary">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-x-2 mb-4">
                <Phone className="w-6 h-6 text-app-secondary " />
                <h3 className="text-lg font-bold text-app-secondary">اتصل بنا</h3>
              </div>
              <p className="text-primary">01270722224</p>
              <p className="text-primary">01022225766</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-x-2 mb-4">
                <Mail className="w-6 h-6 text-app-secondary" />
                <h3 className="text-lg font-bold text-app-secondary">راسلنا</h3>
              </div>
              <a
                href="mailto:Info@moataz-gabr-studio.com"
                className="hover:text-app-secondary transition-colors text-primary"
              >
                Info@moataz-gabr-studio.com
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-x-2 mb-4">
                <MapPin className="w-6 h-6 text-app-secondary" />
                <h3 className="text-lg text-app-secondary font-bold">زورنا</h3>
              </div>
              <p className="text-primary">
                فيلا 112، شارع 34 (حليمة السعدية)، المجاورة 3، الحي 9، الشروق، القاهرة، مصر
              </p>
            </motion.div>
          </div> */}


          
      </div>
    </section>
  )
}

