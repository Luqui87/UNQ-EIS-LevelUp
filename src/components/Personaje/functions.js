export const getImage = (race, img) => {
    var image;
    try {
      image = require(`../../resources/character/race_icons/${race}/${img}`);
    } catch (error) {
      image = require(`../../resources/d20.png`);
    }
    return image;
  };