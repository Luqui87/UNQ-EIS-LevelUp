import './manuales.css'
import { getManuals } from './functions'
import { Link } from 'react-router-dom'

export const Manuales = () => {
  const manuals = getManuals()
  return (
    <main>
      <div className='container-manuales'>
        <div className='manual'>
          <Link
            to={`./view/Manual del Jugador`}
            onClick={() => localStorage.setItem('pdf', manuals[0])}
            onAuxClick={() => localStorage.setItem('pdf', manuals[0])}
          >
            <img
              className='portada'
              alt='Portada del manual del jugador'
              src='/manuales/manual-jugador.jpg'
            />
          </Link>
          <h2>Manual de jugador</h2>
          <a href={manuals[0]} download={`Manual del Jugador`}>
            <button disabled={manuals[0] ? false : true}>Descargar</button>
          </a>
        </div>
        <div className='manual'>
          <Link
            to={`./view/Guía del Dungeon Master`}
            onClick={() => localStorage.setItem('pdf', manuals[1])}
            onAuxClick={() => localStorage.setItem('pdf', manuals[1])}
          >
            <img
              className='portada'
              alt='Portada de la guía del dungeon master'
              src='/manuales/manual-dm.jpg'
            />
          </Link>
          <h2>Guía del dungeon Master</h2>
          <a href={manuals[1]} download={`Guía de Dungeon Master`}>
            <button disabled={manuals[1] ? false : true}>Descargar</button>
          </a>
        </div>
        <div className='manual'>
          <Link
            to={`./view/Manual de Monstruos`}
            onClick={() => localStorage.setItem('pdf', manuals[2])}
            onAuxClick={() => localStorage.setItem('pdf', manuals[2])}
          >
            <img
              className='portada'
              alt='Portada del manual de monstruos'
              src='/manuales/manual-monstruos.jpg'
            />
          </Link>
          <h2>Manual de monstruos</h2>
          <a href={manuals[2]} download={'Manual de Monstruos'}>
            <button disabled={manuals[2] ? false : true}>Descargar</button>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Manuales
