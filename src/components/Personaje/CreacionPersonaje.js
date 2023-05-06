import { useContext, useState } from 'react'
import races from '../../resources/character/races'
import classes from '../../resources/character/classes'
import aligments from '../../resources/character/alignments'
import { useNavigate } from 'react-router-dom'
import { createCharacter } from '../../Api'
import { AuthContext } from '../AuthContext'
import './creacion_personaje.css'

export const CreacionPersonaje = () => {
  const { username } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [character, setCharacter] = useState({
    fullname: '',
    owner: username,
    race: '',
    class: '',
    level: '0',
    alignment: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    biography: '',
    img: '',
  })

  const send = async () => {
    if (!character.fullname)
      return setError('Se requiere un nombre de personaje válido.')
    if (!character.level)
      return setError('Se requiere un nivel de personaje válido, entre 1 y 20.')
    if (!character.race) return setError('Debe de seleccionar una raza.')
    if (!character.class) return setError('Debe de seleccionar una clase.')
    if (!character.alignment)
      return setError('Debe de seleccionar un alineamiento.')
    if (
      !character.strength ||
      !character.dexterity ||
      !character.constitution ||
      !character.intelligence ||
      !character.wisdom ||
      !character.charisma
    )
      return setError('Es necesario que complete todas las estadísticas.')
    const res = await createCharacter(character)
    alert(res.message)
    navigate('/personajes')
  }

  return (
    <div className='character_sheet'>
      <section>
        <input
          type='text'
          placeholder='Nombre del Personaje'
          id='character_name'
          onChange={event =>
            setCharacter(char => ({ ...char, fullname: event.target.value }))
          }
        />
        <input
          type='number'
          placeholder='Nivel'
          min='1'
          max='20'
          id='character_level'
          onChange={event =>
            setCharacter(char => ({ ...char, level: event.target.value }))
          }
        />
      </section>
      <section className='alignments'>
        <h2>Alineamientos</h2>
        {aligments.map(alignment => {
          return (
            <span>
              <input
                type='radio'
                value={alignment.value}
                checked={character.alignment === alignment.value}
                onChange={event =>
                  setCharacter(char => ({
                    ...char,
                    alignment: event.target.value,
                  }))
                }
              />
              <label
                onClick={() =>
                  setCharacter(char => ({
                    ...char,
                    alignment: alignment.value,
                  }))
                }
              >
                {alignment.name}
              </label>
            </span>
          )
        })}
        <div className='description'>
          {
            aligments.filter(
              alignment => alignment.value === character.alignment
            )[0]?.description
          }
        </div>
      </section>
      <section className='races'>
        <h2>Razas</h2>
        {races.map(race => {
          return (
            <span>
              <input
                type='radio'
                value={race.value}
                checked={character.race === race.value}
                onChange={event =>
                  setCharacter(char => ({
                    ...char,
                    race: event.target.value,
                  }))
                }
              />
              <label
                onClick={() =>
                  setCharacter(char => ({
                    ...char,
                    race: race.value,
                  }))
                }
              >
                {race.name}
              </label>
            </span>
          )
        })}
      </section>
      <section className='classes'>
        <h2>Clases</h2>
        {classes.map(c => {
          return (
            <span>
              <input
                type='radio'
                value={c.value}
                checked={character.class === c.value}
                onChange={event =>
                  setCharacter(char => ({
                    ...char,
                    class: event.target.value,
                  }))
                }
              />
              <label
                onClick={() =>
                  setCharacter(char => ({
                    ...char,
                    class: c.value,
                  }))
                }
              >
                {c.name}
              </label>
            </span>
          )
        })}
        <div className='description'>
          {classes.filter(c => c.value === character.class)[0]?.description}
          <ul>
            {classes
              .filter(c => c.value === character.class)[0]
              ?.capabilities.map(cap => (
                <li>{cap}</li>
              ))}
          </ul>
        </div>
      </section>
      <section className='stats'>
        <span>
          <label>Fuerza</label>
          <input
            type='number'
            onChange={event =>
              setCharacter(char => ({
                ...char,
                strength: event.target.value,
              }))
            }
          />
        </span>
        <span>
          <label>Destreza</label>
          <input
            type='number'
            onChange={event =>
              setCharacter(char => ({
                ...char,
                dexterity: event.target.value,
              }))
            }
          />
        </span>
        <span>
          <label>Constitución</label>
          <input
            type='number'
            onChange={event =>
              setCharacter(char => ({
                ...char,
                constitution: event.target.value,
              }))
            }
          />
        </span>
        <span>
          <label>Inteligencia</label>
          <input
            type='number'
            onChange={event =>
              setCharacter(char => ({
                ...char,
                intelligence: event.target.value,
              }))
            }
          />
        </span>
        <span>
          <label>Sabiduría</label>
          <input
            type='number'
            onChange={event =>
              setCharacter(char => ({
                ...char,
                wisdom: event.target.value,
              }))
            }
          />
        </span>
        <span>
          <label>Carisma</label>
          <input
            type='number'
            onChange={event =>
              setCharacter(char => ({
                ...char,
                charisma: event.target.value,
              }))
            }
          />
        </span>
      </section>
      <textarea
        placeholder='Escriba la historia de su personaje...'
        onChange={event =>
          setCharacter(char => ({
            ...char,
            biography: event.target.value,
          }))
        }
      />
      <span
        className='err'
        style={{ visibility: `${error ? 'visible' : 'hidden'}` }}
      >
        {error}
      </span>
      <button className='btn' onClick={send}>
        Crear personaje
      </button>
    </div>
  )
}

export default CreacionPersonaje
