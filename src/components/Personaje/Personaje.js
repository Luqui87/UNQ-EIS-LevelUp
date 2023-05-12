import { PDFDownloadLink } from '@react-pdf/renderer'
import './personaje.css'
import PersonajePDF from './PersonajePDF'
import { useEffect, useState } from 'react'
import { getCharacter } from '../../Api'
import { Link, useLocation } from 'react-router-dom'
import { getImage } from '../Personaje/functions'
import Loading from '../Loading'

export const Personaje = () => {
  const [personaje, setPersonaje] = useState([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState([])

  const path = useLocation().pathname.split('/')

  useEffect(() => {
    getCharacter(path[2], path[3]).then(character => {
      setPersonaje(character)
      setStats([
        { tipo: 'Fuerza', valor: character.strength },
        { tipo: 'Agilidad', valor: character.dexterity },
        { tipo: 'Constitución', valor: character.constitution },
        { tipo: 'Inteligencia', valor: character.intelligence },
        { tipo: 'Sabiduría', valor: character.wisdom },
        { tipo: 'Carisma', valor: character.charisma },
      ])
      setLoading(false)
    })
  },[])

  function renderBackstory() {
    var backstory = personaje.biography.split('\n')
    return (
      <>
        {backstory.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </>
    )
  }

  return (
    <main>
      {loading ? (
        <Loading />
      ) : (
        <div className='container-personaje'>
          <div className='personaje-Card'>
            <div className='box'>
              <span>{personaje.fullname}</span>
              <img
                sr
                alt='Portada del manual de monstruos'
                src={getImage(personaje.img)}
              />

              <div className='info'>
                <p>Nivel: {personaje.level}</p>
                <p>Raza: {personaje.race}</p>
                <p>Clase: {personaje.class}</p>
                <p>Alineación: {personaje.alignment}</p>
              </div>
            </div>

              <div className='botones'>
                <PDFDownloadLink
                  document={<PersonajePDF personaje={personaje} />}
                  fileName={personaje.fullname}
                >
                  <button >Descargar</button>
                </PDFDownloadLink>

                <Link to={'./edit'}>
                  <button >Editar</button>
                </Link>
              </div>


            </div>

          <div className='stats'>
            <h2>Stats</h2>
            <ul>
              {stats?.map(stat => (
                <li key={stat.tipo}>
                  <p>{stat.tipo}</p>
                  <span>{stat.valor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='backstory'>
            <h2>Backstory</h2>
            {renderBackstory()}
          </div>
        </div>
      )}
    </main>
  )
}

export default Personaje
