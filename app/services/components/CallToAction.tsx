'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 bg-[#004851] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">هل أنت مستعد لتحويل مساحتك؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            دعنا نساعدك في تحقيق رؤيتك للمساحة المثالية. اتصل بنا اليوم للحصول على استشارة مجانية.
          </p>
          <Link href="/get-free-consultation">
            <motion.a
              className="inline-block bg-[#DF2935] text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              احصل على استشارة مجانية
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

