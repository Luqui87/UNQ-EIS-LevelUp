import './personajes.css';
import { useState } from 'react';
import { useEffect } from 'react';
import loading_icon from '../../resources/loading.gif';
import PersonajeCard from './PersonajeCard.js';
import CharacterNotFound from './CharacterNotFound';

export const Personajes = () => {
  const [myChars, setMyChars] = useState([{}]);
  const [defaultCharacters, setDefaultCharacters] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [myCharsTab, setMyCharsTab] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3010/characters/geek', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setMyChars(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3010/characters/default', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setDefaultCharacters(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {loading ? (
        <img
          src={loading_icon}
          alt='cargando'
          style={{ maxWidth: '20em', margin: '0 auto' }}
        />
      ) : (
        <div className='characters'>
          {/* <button
            className={myCharsTab ? 'active' : ''}
            onClick={() => setMyCharsTab(true)}
          >
            Mis Personajes
          </button> */}
          <button
            className={myCharsTab ? '' : 'active'}
            onClick={() => setMyCharsTab(false)}
          >
            Personajes Predeterminados
          </button>
          {myCharsTab &&
            (myChars.length !== 0 ? (
              myChars.map((personaje) => {
                return <PersonajeCard personaje={personaje} />;
              })
            ) : (
              <CharacterNotFound />
            ))}
          {!myCharsTab &&
            defaultCharacters.map((personaje) => {
              return <PersonajeCard personaje={personaje} />;
            })}
        </div>
      )}
    </>
  );
};

export default Personajes;
