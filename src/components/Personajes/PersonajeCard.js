import { Link } from 'react-router-dom';
import icons from '../../resources/character/race_icons/icons';
import blank from '../../resources/question_mark.jpg';

const getImage = (img) => {
  const result = icons.filter((icon) => icon.name === img);
  return result[0]?.img;
};

export const PersonajeCard = ({ personaje }) => {
  return (
    <Link
      to={`./${personaje.owner}/${personaje.id}`}
      className='character_card'
    >
      <img
        src={personaje.img ? getImage(personaje.img) : blank}
        alt='char_icon'
      />
      <span>
        <div>
          <b>{personaje.fullname}</b>
        </div>
        {personaje.race} - {personaje.class} - Nivel: {personaje.level}
        <i className='biography'>"{personaje.biography}"</i>
      </span>
    </Link>
  );
};

export default PersonajeCard;
