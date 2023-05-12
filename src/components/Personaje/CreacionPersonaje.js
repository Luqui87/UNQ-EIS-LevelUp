import { useContext, useEffect, useState } from 'react'
import races from '../../resources/character/races'
import classes from '../../resources/character/classes'
import aligments from '../../resources/character/alignments'
import { useLocation, useNavigate } from 'react-router-dom'
import { createCharacter, editCharacter } from '../../Api'
import { AuthContext } from '../AuthContext'
import icons from '../../resources/character/race_icons/icons'
import './creacion_personaje.css'
import { getCharacter } from '../../Api'

export const CreacionPersonaje = () => {
  const navigate = useNavigate()
  const { username } = useContext(AuthContext)
  const [className, setClassName] = useState('')
  const [gender, setGender] = useState('')
  const [img, setImage] = useState()
  const [error, setError] = useState('')
  const path = useLocation().pathname.split('/')
  const [button,setButton] = useState("Crear Personaje")
  const [character, setCharacter] = useState({
    fullname: '',
    owner: username,
    race: '',
    class: '',
    level: '',
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

  useEffect(()=>{
    if (path[4] == "edit"){
      getCharacter(path[2],path[3]).then(personaje =>{
        setCharacter(personaje)
        console.log(personaje)
      })
      setButton("Editar Personaje")
      

    }
  },[])

  useEffect(() => {

    const i = icons.filter(img => img.name === className + '_' + gender)[0]
    i ? setImage(i.img) : setImage('nothing')
    setCharacter(char => ({...char, img: className + '_' + gender}))
  }, [className, gender])

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
    if (path[4] == "edit"){
      const res = await editCharacter(character)
      alert(res.message)
      navigate('/personajes')
    }
    else{
      const res = await createCharacter(character)
      alert(res.message)
      navigate('/personajes')
    }
  }

  return (
    <div className='character_sheet'>
      <section>
        <input
          defaultValue={character.fullname}
          type='text'
          placeholder='Nombre del Personaje'
          id='character_name'
          onChange={event =>
            setCharacter(char => ({ ...char, fullname: event.target.value }))
          }
        />
        <input
          defaultValue={character.level}
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
        <div className='portrait'>
          <img src={img} alt='imagen de raza'/>
          <input
            type='radio'
            value='m'
            checked={gender === 'm'}
            onChange={event => setGender(event.target.value)}
          />
          <label onClick={() => setGender('m')}>Másculino</label>
          <input
            type='radio'
            value='f'
            checked={gender === 'f'}
            onChange={event => setGender(event.target.value)}
          />
          <label onClick={() => setGender('f')}>Femenino</label>
        </div>
        <span>
          {races.map(race => {
            return (
              <span>
                <input
                  type='radio'
                  value={race.value}
                  onChange={event => {
                    console.log(character.race)
                    setClassName(race.value)
                    setCharacter(char => ({
                      ...char,
                      race: event.target.value,
                    }))
                  }}
                  checked={character.race === race.value}
                />
                <label
                  onClick={() => {
                    setClassName(race.value)
                    setCharacter(char => ({
                      ...char,
                      race: race.value,
                    }))
                  }}
                >
                  {race.name}
                </label>
              </span>
            )
          })}
        </span>
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


      <section className='stats2'>
        <span>
          <label>Fuerza</label>
          <input
            defaultValue={character.strength}
            type='number'
            min='1'
            max='20'
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
            defaultValue={character.dexterity}
            type='number'
            min='1'
            max='20'
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
            defaultValue={character.constitution}
            type='number'
            min='1'
            max='20'
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
            defaultValue={character.intelligence}
            type='number'
            min='1'
            max='20'
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
            defaultValue={character.wisdom}
            type='number'
            min='1'
            max='20'
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
            defaultValue={character.charisma}
            type='number'
            min='1'
            max='20'
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
        defaultValue={character.biography}
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
        {button}
      </button>
    </div>
  )
}

export default CreacionPersonaje
