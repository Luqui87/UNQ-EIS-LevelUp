import { PDFDownloadLink } from '@react-pdf/renderer';
import './personaje.css';
import PersonajePDF from './PersonajePDF';
import { useEffect, useState } from 'react';
import { getCharacter } from '../../Api';
import { useLocation } from 'react-router-dom';
import { getImage } from '../Personaje/functions';

export const Personaje = () => {
  const [personaje, setPersonaje] = useState([])

  const path = useLocation().pathname.split('/');
  console.log(path);

  useEffect(() =>{
    getCharacter(path[2],path[3])
    .then(character => setPersonaje(character))
  },[])

  const stats = [{tipo:'Fuerza', valor:personaje.strength},{tipo:'Agilidad', valor:personaje.dexterity},{tipo:'Constitución', valor:personaje.constitution},{tipo:'Inteligencia', valor:personaje.intelligence},{tipo:'Sabiduría', valor:personaje.wisdom},{tipo:'Carisma', valor:personaje.charisma}]
 
 
  return (
    <main>
      <div className="container-personaje">

      <div className="personaje-Card">
        <div className='box'>
          <span>{personaje.fullname}</span>
          <img sr
          alt='Portada del manual de monstruos'
          src={getImage(personaje.race,personaje.img)}/>
        
          <div className="info">
            <p>Raza: {personaje.race}</p>
            <p>Clase: {personaje.class}</p>
            <p>Alineación: {personaje.alignment}</p>
          </div>
        </div>
        <PDFDownloadLink document={<PersonajePDF personaje={personaje}/>} filename="Personaje">
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
    </main>
  );
};
  
  export default Personaje;
  