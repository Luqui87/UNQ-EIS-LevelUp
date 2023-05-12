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
          <div className='select'>
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
          </div>
          {myCharsTab &&
            (myChars.length !== 0 && token ? (
              myChars.map(personaje => {
                return (
                  <div className='characterRow'>
                      <PersonajeCard personaje={personaje} />
                      <div className='charButtons'>
                      <Link to={`./${personaje.owner}/${personaje.id}/edit`}>
                        <button className='edit'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                )
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