

import { Metadata } from "next"
import Home from "./Home"
import { getDictionary } from "@/src/i18n/dictionaries";




export const metadata: Metadata = {
  title: 'معتز جبر - تشطيبات المطابخ والديكور',
  description: 'تصميم وتنفيذ أفخم المطابخ والديكورات الداخلية بأعلى جودة',
}

export default async function Page ({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>
}) {
  const locale = (await params).locale
  const dict = await getDictionary(locale)

  return <Home dictionary={dict} />
}