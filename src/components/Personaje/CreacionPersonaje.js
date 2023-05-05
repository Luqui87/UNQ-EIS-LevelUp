import { useState } from 'react'
import races from '../../resources/character/races'
import classes from '../../resources/character/classes'
import aligments from '../../resources/character/alignments'
import './creacion_personaje.css'

export const CreacionPersonaje = () => {
  const [alineamiento, setAlineamiento] = useState('')
  const [raza, setRaza] = useState('')
  const [clase, setClase] = useState('')

  return (
    <div className='character_sheet'>
      <section>
        <input
          type='text'
          placeholder='Nombre del Personaje'
          id='character_name'
        />
        <input
          type='number'
          placeholder='Nivel'
          min='1'
          max='20'
          id='character_level'
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
                checked={alineamiento === alignment.value}
                onChange={event => setAlineamiento(event.target.value)}
              />
              <label onClick={() => setAlineamiento(alignment.value)}>
                {alignment.name}
              </label>
            </span>
          )
        })}
        <div className='description'>
          {
            aligments.filter(alignment => alignment.value === alineamiento)[0]
              ?.description
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
                checked={raza === race.value}
                onChange={event => setRaza(event.target.value)}
              />
              <label onClick={() => setRaza(race.value)}>{race.name}</label>
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
                checked={clase === c.value}
                onChange={event => setClase(event.target.value)}
              />
              <label onClick={() => setClase(c.name)}>{c.name}</label>
            </span>
          )
        })}
        <div className='description'>
          {classes.filter(c => c.value === clase)[0]?.description}
          <ul>
            {classes
              .filter(c => c.value === clase)[0]
              ?.capabilities.map(cap => (
                <li>{cap}</li>
              ))}
          </ul>
        </div>
      </section>
      <section className='stats'>
        <span>
          <label>Fuerza</label>
          <input type='number' />
        </span>
        <span>
          <label>Destreza</label>
          <input type='number' />
        </span>
        <span>
          <label>Constitución</label>
          <input type='number' />
        </span>
        <span>
          <label>Inteligencia</label>
          <input type='number' />
        </span>
        <span>
          <label>Sabiduría</label>
          <input type='number' />
        </span>
        <span>
          <label>Carisma</label>
          <input type='number' />
        </span>
      </section>
      <textarea placeholder='Escriba la historia de su personaje...' />
    </div>
  )
}

export default CreacionPersonaje
