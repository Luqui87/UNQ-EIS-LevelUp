import './personajes.css'
import './personajes_responsive.css'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import PersonajeCard from './PersonajeCard.js'
import CharacterNotFound from './CharacterNotFound'
import Loading from '../Loading'
import { AuthContext } from '../AuthContext'
import { Link } from 'react-router-dom'
import { deleteCharacter } from '../../Api'

export const Personajes = () => {
  const [myChars, setMyChars] = useState([{}])
  const [defaultCharacters, setDefaultCharacters] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [myCharsTab, setMyCharsTab] = useState(true)
  const { username, token } = useContext(AuthContext)

  async function confirm(personaje) {
    const res = window.confirm(`Quieres eliminar a ${personaje.fullname}`)
    if (res) {
      const res = await deleteCharacter(personaje.id)
      alert(res.message)
      window.location.reload(false)
    } else {
      alert('Cancelado')
    }
  }

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
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-pencil'
                            viewBox='0 0 16 16'
                          >
                            <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
                          </svg>
                        </button>
                      </Link>
                      <button
                        className='edit'
                        onClick={() => confirm(personaje)}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          className='bi bi-trash-fill'
                          viewBox='0 0 16 16'
                        >
                          <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
                        </svg>
                      </button>
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
