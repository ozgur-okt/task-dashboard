export const keysToLowerCase = (obj) => {
  const newObj = {}
  for (const key of Object.keys(obj)) {
    newObj[key.toLowerCase()] = obj[key]
  }
  return newObj
}