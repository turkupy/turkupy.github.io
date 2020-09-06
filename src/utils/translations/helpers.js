import translations from "./translations.json"

export const getTranslation = (langCode, key) => {
  return translations[key][langCode]
}
