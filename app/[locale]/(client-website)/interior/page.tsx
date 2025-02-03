import { getDictionary } from "@/src/i18n/dictionaries"
import InteriorDesignPage from "./interior-design-page"

export default async function InteriorDesign({ params }: { params: Promise<{ locale: 'en' | 'ar' }> }) {
  const locale = (await params).locale
  const dict = await getDictionary(locale)

  return <InteriorDesignPage dictionary={dict} />
}