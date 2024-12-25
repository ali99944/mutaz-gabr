'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'ما الذي يجب أن أتوقعه من الاستشارة المجانية؟',
    answer: 'خلال الاستشارة المجانية، سنستمع إلى أفكارك واحتياجاتك، ونقدم لك نصائح أولية حول تصميم مساحتك. سنناقش أيضًا الميزانية والجدول الزمني المحتمل للمشروع.'
  },
  {
    question: 'كم من الوقت تستغرق الاستشارة؟',
    answer: 'عادة ما تستغرق الاستشارة المجانية حوالي 30-45 دقيقة. هذا الوقت كافٍ لمناقشة أفكارك الأساسية وتقديم بعض التوجيهات الأولية.'
  },
  {
    question: 'هل يمكنني الحصول على تقدير للتكلفة خلال الاستشارة؟',
    answer: 'نعم، سنقدم لك تقديرًا أوليًا للتكلفة بناءً على المعلومات التي تشاركها معنا. ومع ذلك، يرجى ملاحظة أن التقدير الدقيق سيتطلب زيارة للموقع وتقييمًا أكثر تفصيلاً.'
  },
  {
    question: 'هل أحتاج إلى تحضير أي شيء قبل الاستشارة؟',
    answer: 'من المفيد أن تجهز بعض الأفكار أو الصور الملهمة لما تريده، وأن تكون لديك فكرة عن ميزانيتك وجدولك الزمني. كما يمكنك تحضير قائمة بأسئلتك أو مخاوفك لنناقشها خلال الاستشارة.'
  },
  {
    question: 'ماذا يحدث بعد الاستشارة المجانية؟',
    answer: 'بعد الاستشارة، سنرسل لك ملخصًا لما تمت مناقشته واقتراحًا للخطوات التالية. إذا قررت المتابعة معنا، سنقوم بإعداد خطة مشروع مفصلة وعقد لبدء العمل.'
  }
]

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
}

const FAQ = ({ faq, index, activeIndex, setActiveIndex }: { faq: any, index: number, activeIndex: number | null, setActiveIndex: (index: number | null) => void }) => {
  const isOpen = index === activeIndex

  return (
    <motion.div
      layout
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="bg-white rounded-lg shadow overflow-hidden mb-4"
    >
      <motion.header
        layout
        className="w-full text-right p-4 cursor-pointer"
        onClick={() => setActiveIndex(isOpen ? null : index)}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg text-[#004851]">{faq.question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-[#FF0000]" />
          </motion.div>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={itemVariants}
            className="px-4 pb-4 overflow-hidden"
          >
            <p className="text-gray-600">{faq.answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ConsultationFAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#004851]">الأسئلة الشائعة</h2>
          <p className="text-xl text-gray-600">
            إليك بعض الإجابات على الأسئلة الأكثر شيوعًا حول استشاراتنا المجانية
          </p>
        </motion.div>
        <motion.div layout className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQ
              key={index}
              faq={faq}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

