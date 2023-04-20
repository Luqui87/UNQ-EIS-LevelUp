import './personajes.css';
import { useState } from 'react';
import { useEffect } from 'react';
import loading_icon from '../../resources/loading.gif';
import PersonajeCard from './PersonajeCard.js';

export const Personajes = () => {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3010/characters/default', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
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
        <>
          <div className='characters'>
            {data.map((personaje) => {
              return <PersonajeCard personaje={personaje} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Personajes;
