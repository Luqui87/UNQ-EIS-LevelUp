import './personajes.css'
import { useState } from 'react'
import { useEffect } from 'react'
import PersonajeCard from './PersonajeCard.js'
import Loading from '../Loading'

export const Personajes = () => {
  const [defaultCharacters, setDefaultCharacters] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [myCharsTab, setMyCharsTab] = useState(false)

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
      {loading ? (<Loading />) : (
        <div className='characters'>
          <button
            className={myCharsTab ? '' : 'active'}
            onClick={() => setMyCharsTab(false)}
          >
            Personajes Predeterminados
          </button>
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
