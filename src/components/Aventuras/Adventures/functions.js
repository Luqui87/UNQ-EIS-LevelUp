// import blank from '../../../resources/dungeons-and-dragons.png';

export const getFile = (path) => {
  var file;
  try {
    file = require(`../../../resources/adventures/${path}`);
  } catch (error) {}
  return file;
};

// export const getImage = (path) => {
//   var image;
//   try {
//     image = require(`../../../resources/adventures/${path}`);
//   } catch (error) {
//     image = blank;
//   }
//   return image;
// };

export const removeAccents = str => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}
