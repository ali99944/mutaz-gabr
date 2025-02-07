import type { Metadata } from "next"
import ContactPage from "./contact-page"
import { getDictionary } from "@/src/i18n/dictionaries"

export const metadata: Metadata = {
  title: "اتصل بنا | معتز جبر للتصميم الداخلي",
  description:
    "تواصل مع معتز جبر للتصميم الداخلي للاستفسارات وحجز الاستشارات - نحن هنا لمساعدتك في تحويل مساحتك إلى عمل فني",
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>
}) {
  const locale = (await params).locale
  const dict = await getDictionary(locale)

  return <ContactPage dictionary={dict} />
}

