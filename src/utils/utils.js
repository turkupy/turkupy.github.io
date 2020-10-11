export const formatDate = dateString => {
  const date = new Date(dateString)
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const getLangCode = slug => {
  const regex = /(\bfi)|(\ben)|(\bsv)/g
  const regexedLangCode = slug.match(regex)
  // Default to en if lang code is not found
  const langCode = regexedLangCode ? regexedLangCode[0] : "en"

  return langCode
}
