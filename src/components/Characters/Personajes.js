import './personajes.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import icons from '../../resources/character/race_icons/icons';

export const Personajes = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:3010/characters/default', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const getImage = (img) => {
    console.log(img);
    const result = icons.filter((icon) => icon.name === img);
    return result[0].img || 'img';
  };

  return (
    <div className='characters'>
      {data?.map((personaje) => {
        return (
          <Link
            to={`/${personaje.owner}/${personaje.fullname?.toLowerCase()}`}
            className='character_card'
          >
            <img
              src={personaje.img ? getImage(personaje.img) : '#'}
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
      })}
    </div>
  );
};

export default Personajes;
