"use client"
import { motion } from "framer-motion";

export default function AboutCTA (){
    return (
        <section className="container mx-auto px-4 py-20">
        <div className="relative bg-[#004851] overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-black bg-opacity-20" />
          <div className="relative z-10 p-8 md:p-12 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">هل أنت مستعد لتحويل مساحتك؟</h2>
              <p className="text-xl mb-8 text-gray-100">
                دعنا نحول أفكارك إلى واقع ملموس. فريقنا المتخصص جاهز لمساعدتك في تحقيق حلمك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#DF2935] px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-opacity-90 transition-colors duration-300">
                  احجز استشارة مجانية
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#004851] transition-colors duration-300">
                  تواصل معنا مباشرة
                </button>
              </div>
            </motion.div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute left-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-16 -translate-y-16" />
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-white opacity-10 rounded-full translate-x-16 translate-y-16" />
        </div>
      </section>
    )
}

