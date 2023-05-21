import { Link } from 'react-router-dom'
import { getFile } from './functions'

export const Card = ({ aventura }) => {
  const file = getFile(aventura.pdf)
  localStorage.setItem('pdf', aventura.pdf)

  return (
    <li className='card'>
      <img src={aventura.img} alt={`${aventura.title}`} />
      <p className='username'>{aventura.username}</p>
      <title>{aventura.title}</title>
      <title>Creador: {aventura.owner}</title>
      <p>Nivel: {aventura.level}</p>
      <p>Duración: {aventura.duration}</p>
      <p>Idioma: {aventura.language}</p>
      <span>
        <a href={aventura.pdf} download={`${aventura.title}`}>
          <button className='button-red' disabled={!file ? false : true}>
            Descargar
          </button>
        </a>
        <Link
          to={`/aventuras/view/${aventura.title}`}
          rel='noopener noreferrer'
        >
          <button className='button-red'>Ver Online</button>
        </Link>
      </span>
    </li>
  )
}
