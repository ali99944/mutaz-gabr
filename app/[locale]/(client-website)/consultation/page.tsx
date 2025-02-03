import { getDictionary } from "@/src/i18n/dictionaries"
import ConsultationPage from "./consultation-page"

export default async function Consultation({params}: {
  params: Promise<{ locale: 'en' | 'ar' }>
}) {
  const lang = (await params).locale
  const dict = await getDictionary(lang)

  return (
    <ConsultationPage dictionary={dict} />
  )
}