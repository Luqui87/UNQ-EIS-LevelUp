export const getFile = path => {
  var file
  try {
    file = require(`../../../resources/adventures/${path}`)
  } catch (error) {}
  return file
}

export const removeAccents = str => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}
