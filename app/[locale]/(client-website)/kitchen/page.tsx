import { getDictionary } from "@/src/i18n/dictionaries"
import KitchenDesignPage from "./kitchen-design-page"

export default async function KitchenDesign ({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>
}) {
  const locale = (await params).locale
  const dict = await getDictionary(locale)

  return (
    <KitchenDesignPage dictionary={dict}/>
  )
}