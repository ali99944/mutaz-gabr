"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

// This would typically come from an API or database
const initialPolicyData = {
  lastUpdated: "2023-06-15",
  sections: [
    {
      title: "مقدمة",
      content:
        "نحن في معتز جابر للتصميم الداخلي نلتزم بحماية خصوصيتك وضمان أمان معلوماتك الشخصية. تصف هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدام موقعنا وخدماتنا.",
    },
    {
      title: "جمع المعلومات",
      content:
        "نقوم بجمع المعلومات التي تقدمها لنا مباشرة، مثل الاسم وعنوان البريد الإلكتروني ورقم الهاتف، عند ملء نماذج الاتصال أو طلب استشارة. قد نقوم أيضًا بجمع معلومات عن كيفية استخدامك لموقعنا باستخدام ملفات تعريف الارتباط وتقنيات مماثلة.",
    },
    {
      title: "استخدام المعلومات",
      content:
        "نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، والتواصل معك بشأن استفساراتك، وإرسال معلومات تسويقية إذا اخترت تلقيها. لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك، إلا إذا كان ذلك مطلوبًا قانونًا.",
    },
    {
      title: "أمان المعلومات",
      content:
        "نتخذ تدابير أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف. ومع ذلك، لا يمكن ضمان أمان أي نقل للبيانات عبر الإنترنت بنسبة 100٪.",
    },
    {
      title: "حقوقك",
      content:
        "لديك الحق في الوصول إلى معلوماتك الشخصية التي نحتفظ بها وتصحيحها وحذفها. إذا كنت ترغب في ممارسة هذه الحقوق أو لديك أي أسئلة حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا.",
    },
  ],
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function PolicyPage() {
  const [policyData, setPolicyData] = useState(initialPolicyData)

  useEffect(() => {
    // Here you would typically fetch the policy data from an API
    // For now, we'll use the initial data
    setPolicyData(initialPolicyData)
  }, [])

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-[#9c8a5a] mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          سياسة الخصوصية
        </motion.h1>

        <motion.p
          className="text-gray-400 mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          آخر تحديث: {policyData.lastUpdated}
        </motion.p>

        {policyData.sections.map((section, index) => (
          <motion.section
            key={index}
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.1 * (index + 1) }}
          >
            <h2 className="text-2xl font-semibold text-[#9c8a5a] mb-4">{section.title}</h2>
            <p className="text-gray-300 leading-relaxed">{section.content}</p>
          </motion.section>
        ))}
      </div>
    </div>
  )
}

