import 'server-only'

const dictionaries = {
  es: () => import('../dictionaries/es.json'),
  en: () => import('../dictionaries/en.json'),
}

export const getDictionary = async (lang: 'es' | 'en') => {
  return dictionaries[lang]()
}