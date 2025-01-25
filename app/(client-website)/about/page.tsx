'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import StatisticCounter from '../components/statistics-counter'
import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      
      <main className=" pb-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] mb-16">
          <Image
            src="/images/interior/logo.png"
            alt="Moataz Gabr Design"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <motion.div 
              className="text-center max-w-4xl mx-auto px-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-[#9c8a5a] mb-6">معتز جابر للتصميم</h1>
              <p className="text-xl text-white/90">نحو حلول مناسبة وفي الوقت المناسب لتلبية توقعات واحتياجات العملاء</p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#9c8a5a]">من نحن</h2>
            <div className="space-y-4 text-lg">
              <p>
                تأسست شركة معتز جابر للتصميم الداخلي والمطابخ في عام 2008 في الغردقة وأسيوط ومصر الجديدة، 
                وحالياً في مدينة الشروق ومدينة نصر. الشركة مملوكة للمهندس معتز جابر، المتخصص في خدمات التصميم الداخلي والهندسة المعمارية.
              </p>
              <p>
                سمعتنا مبنية على القيم الأساسية للكفاءة والتناسق والموثوقية، ونقدم مستوى عالٍ من الخبرة 
                وحلول متكاملة حديثة تغير جذرياً طريقة رؤيتك لمساحة العمل.
              </p>
              <p>
                قوتنا تكمن في تقديم تصاميم ومواد جديدة غير معروفة جيداً في السوق لتمييز كل تصميم وتحقيق تفرده.
              </p>
            </div>
          </motion.section>

          {/* Vision & Mission */}
          <motion.section 
            className="mb-16 grid md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-black/30 p-6 rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-[#9c8a5a]">رؤيتنا</h2>
              <p className="text-lg">
                نهدف إلى إنتاج تصاميم فريدة وأن نكون معترف بنا عالمياً كشركة تصميم داخلي محترفة، 
                نقدم حلولاً في مجال التصميم الداخلي للشركات والمشاريع التجارية والسكنية الراقية.
              </p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-[#9c8a5a]">رسالتنا</h2>
              <p className="text-lg">
                مهمتنا هي التأثير إيجابياً في حياة جميع العملاء الذين نتشرف بالعمل معهم، وترك انطباع دائم 
                في أذهانهم وخيالهم. تصاميمنا يجب أن تلهم وترتقي بقلوب وعقول كل من يراها.
              </p>
            </div>
          </motion.section>

          {/* Areas of Expertise */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-[#9c8a5a]">مجالات خبرتنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'التصميم الداخلي',
                'الهندسة المعمارية',
                'تصميم المناظر الطبيعية',
                'التنفيذ والإشراف الموقعي',
                'تصميم المطابخ',
                'الديكورات',
                'وحدات الحمام'
              ].map((expertise, index) => (
                <motion.div
                  key={expertise}
                  className="bg-black/30 p-4 rounded-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-lg">{expertise}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Portfolio Philosophy */}
          <motion.section 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-96ln9QWbtkscC0DMPxSeqyvTRl6QVM.png"
                alt="Portfolio Example"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                <div className="p-8">
                  <h2 className="text-3xl font-semibold mb-4 text-[#9c8a5a]">محفظة أعمالنا</h2>
                  <p className="text-lg max-w-2xl">
                    نسعى لبناء علاقة قوية مع العملاء مبنية على الثقة والالتزام والنزاهة. 
                    الثقة هي أساس أي علاقة بين العميل والمصمم.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-lg">
              <p>
                نجاحك وقيمتك تعتمد على قدرتك على الثقة بنا للتعامل مع أي موقف (عملية المشروع).
              </p>
              <p>
                عندما نقدم عرض قيمة، نقوم بالتنفيذ، ونتعهد بتقديم تجربة استشارية راقية في التصميم الداخلي 
                مع خدمة عملاء مميزة طوال الوقت.
              </p>
              <p>
                لذلك، نحن دائماً نسعى لإضافة قيمة لثقة العميل بنا.
              </p>
            </div>
          </motion.section>

                            <div className="py-12 px-4 bg-[#1a1a1a] text-white">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[#9c8a5a]">إنجازاتنا بالأرقام</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <StatisticCounter end={500} title="مشروع مكتمل" />
                      <StatisticCounter end={50} title="جائزة تصميم" />
                      <StatisticCounter end={15} title="سنوات خبرة" />
                      <StatisticCounter end={1000} title="عميل راضٍ" />
                    </div>
                  </div>
                </div>

               
        </div>
        <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#9c8a5a]">تعرف علينا</h2>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto text-white">
            نحن شركة رائدة في مجال التصميم الداخلي، نقدم حلولاً مبتكرة وإبداعية لتحويل رؤيتك إلى حقيقة. مع سنوات من الخبرة وفريق من المصممين الموهوبين، نسعى دائمًا لتقديم أعلى مستويات الجودة والتميز في كل مشروع.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "التصميم الداخلي",
                image:
                  "/images/interior/logo.png",
              },
              {
                title: "تصميم المطابخ",
                image:
                  "/assets/home/kitchen.jpeg",
              },
              {
                title: "العقارات",
                image:
                  "/images/interior/tower.jpg",
              },
            ].map((service, index) => (
              <Link href="/services" key={index} className="group relative rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-end justify-start p-4 opacity-100 transition-colors duration-300 group-hover:bg-black/70">
                  <h3 className="text-white text-2xl font-bold">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </main>

    </div>
  )
}
