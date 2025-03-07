import 'server-only'
import Dictionary from '../types/dictionary'
 
const dictionaries = {
  en: () => import('../locales/en.json').then((module) => module.default),
  ar: () => import('../locales/ar.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'ar') =>
  await dictionaries[locale]() as Dictionary
