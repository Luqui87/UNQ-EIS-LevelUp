import blank from '../../resources/dungeons-and-dragons.png';

export const Card = ({ aventura }) => {
  var image;
  try {
    image = require(`../../resources/adventures/${aventura.resource}`);
  } catch (e) {
    image = blank;
  }
  return (
    <li key={`${aventura.username}/${aventura.title}`} className='card'>
      <img src={image ? image : blank} alt={`${aventura.title}`} />
      <p className='username'>{aventura.username}</p>
      <title>{aventura.title}</title>
      <p>Nivel: {aventura.level}</p>
      <p>Duración: {aventura.duration}</p>
      <p>Idioma: {aventura.language}</p>
    </li>
  );
};
