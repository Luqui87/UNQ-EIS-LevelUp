import icons from '../../resources/character/race_icons/icons'

export const getImage = img => {
  var image
  try {
    const result = icons.filter(icon => icon.name === img)
    return result[0].img
  } catch (error) {
    image = require(`../../resources/d20.png`)
  }
  return image
}
