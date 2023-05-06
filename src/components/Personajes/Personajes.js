import './personajes.css'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import PersonajeCard from './PersonajeCard.js'
import CharacterNotFound from './CharacterNotFound'
import Loading from '../Loading'
import { AuthContext } from '../AuthContext'

export const Personajes = () => {
  const [myChars, setMyChars] = useState([{}])
  const [defaultCharacters, setDefaultCharacters] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [myCharsTab, setMyCharsTab] = useState(true)
  const { username } = useContext(AuthContext)

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
            (myChars.length !== 0 ? (
              myChars.map(personaje => {
                return <PersonajeCard personaje={personaje} />
              })
            ) : (
              <CharacterNotFound />
            ))}
          {!myCharsTab &&
            defaultCharacters.map(personaje => {
              return <PersonajeCard personaje={personaje} />
            })}
        </div>
      )}
    </>
  )
}

export default Personajes
