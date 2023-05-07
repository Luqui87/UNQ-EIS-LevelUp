import './personajes.css'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import PersonajeCard from './PersonajeCard.js'
import CharacterNotFound from './CharacterNotFound'
import Loading from '../Loading'
import { AuthContext } from '../AuthContext'
import { Link } from 'react-router-dom'

export const Personajes = () => {
  const [myChars, setMyChars] = useState([{}])
  const [defaultCharacters, setDefaultCharacters] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [myCharsTab, setMyCharsTab] = useState(true)
  const { username, token } = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:3010/characters/${username}`, { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setMyChars(data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [username])

  useEffect(() => {
    fetch('http://localhost:3010/characters/default', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        setDefaultCharacters(data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='characters'>
          <button
            className={myCharsTab ? 'active' : ''}
            onClick={() => setMyCharsTab(true)}
          >
            Mis Personajes
          </button>
          <button
            className={myCharsTab ? '' : 'active'}
            onClick={() => setMyCharsTab(false)}
          >
            Personajes Predeterminados
          </button>
          {myCharsTab &&
            (myChars.length !== 0 && token ? (
              myChars.map(personaje => {
                return <PersonajeCard personaje={personaje} />
              })
            ) : token ? (
              <CharacterNotFound
                link='/create/character'
                title='No tienes personajes creados aún :('
                description='Haga click y lo llevaremos a la creación de personajes!'
              />
            ) : (
              <CharacterNotFound
                link='/registro'
                title='Requiere una cuenta para tener personajes'
                description='Haga click y lo llevaremos a la creación de cuentas!'
              />
            ))}
          {!myCharsTab &&
            defaultCharacters.map(personaje => {
              return <PersonajeCard personaje={personaje} />
            })}
        </div>
      )}
      {token && (
        <Link
          to={'/create/character'}
          style={{
            display: 'block',
            margin: '0 auto',
            textAlign: 'center',
            width: '12em',
          }}
          className='btn'
        >
          Crear personaje nuevo
        </Link>
      )}
    </>
  )
}

export default Personajes
