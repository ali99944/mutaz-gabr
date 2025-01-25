'use client'

import { motion } from "framer-motion"
import Link from "next/link"

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

export default function CTA () {
    return(
        <motion.section
            className="py-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-black/30 p-8 rounded-lg">
              <h2 className="text-3xl font-semibold mb-4 text-[#9c8a5a]">جاهز لتحويل مساحتك؟</h2>
              <p className="text-lg mb-6">
                دعنا نحول أفكارك إلى تصميم استثنائي. تواصل معنا اليوم لبدء رحلة التصميم الخاصة بك.
              </p>
              <div className="flex justify-center gap-x-2">
                <Link
                    href="/contact"
                    className="inline-block bg-[#9c8a5a] text-white px-8 py-3 rounded-lg hover:bg-[#8a795c] transition-colors"
                >
                    تواصل معنا
                </Link>

                <Link
                    href="/contact"
                    className="inline-block bg-[#9c8a5a] text-white px-8 py-3 rounded-lg hover:bg-[#8a795c] transition-colors"
                >
                    احصل علي استشارة مجانية
                </Link>
              </div>
            </div>
          </motion.section>
    )
}