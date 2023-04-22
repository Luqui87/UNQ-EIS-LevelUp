import { PDFDownloadLink } from '@react-pdf/renderer';
import './personaje.css';
import PersonajePDF from './PersonajePDF';
import { useEffect, useState } from 'react';
import { getCharacter } from '../../Api';
import { useLocation } from 'react-router-dom';
import { getImage } from '../Personaje/functions';
import loading_icon from '../../resources/loading.gif';

export const Personaje = () => {
  const [personaje, setPersonaje] = useState([])
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);

  const path = useLocation().pathname.split('/');

  useEffect(() =>{
    getCharacter(path[2],path[3])
    .then(character => {
      setPersonaje(character);
      setStats([{tipo:'Fuerza', valor:character.strength},{tipo:'Agilidad', valor:character.dexterity},{tipo:'Constitución', valor:character.constitution},{tipo:'Inteligencia', valor:character.intelligence},{tipo:'Sabiduría', valor:character.wisdom},{tipo:'Carisma', valor:character.charisma}])
      setLoading(false)
    })
  },[])


 
  return (
    <main>
      {loading ? 
        <img
          src={loading_icon}
          alt='cargando'
          style={{ maxWidth: '20em',alignSelf:'center',}}
        />
       : 
      <div className="container-personaje">

      <div className="personaje-Card">
        <div className='box'>
          <span>{personaje.fullname}</span>
          <img sr
          alt='Portada del manual de monstruos'
          src={getImage(personaje.img)}/>
        
          <div className="info">
            <p>Raza: {personaje.race}</p>
            <p>Clase: {personaje.class}</p>
            <p>Alineación: {personaje.alignment}</p>
          </div>
        </div>
        <PDFDownloadLink document={<PersonajePDF personaje={personaje}/>} fileName={personaje.fullname}>
          <button className='botonPDF'>Descargar</button>
        </PDFDownloadLink>
      </div>

      <div className="stats">
        <h2>Stats</h2>
        <ul>
          {stats?.map((stat) => (
            <li key={stat.tipo}>
            <p>{stat.tipo}</p>
            <span>{stat.valor}</span>
          </li>
          ))}
        </ul>
      </div>
      
      <div className="backstory">
          <h2>Backstory</h2>
          <pre>
            {personaje.biography}
          </pre>
      </div>

    </div>
    }
    </main>
    );
  };
  
  export default Personaje;
  