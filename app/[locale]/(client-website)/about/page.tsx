import { getDictionary } from "@/src/i18n/dictionaries";
import AboutPage from "./about-page";

export default async function About ({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ar' }>
}) {
  const locale = (await params).locale
  const dict = await getDictionary(locale)

  return (
    <AboutPage dictionary={dict}/>
  )
}