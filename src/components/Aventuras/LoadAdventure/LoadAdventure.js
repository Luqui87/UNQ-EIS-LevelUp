import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthContext'

const LoadAdventure = () => {
  const navigate = useNavigate()
  const { username } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [adventure, setAdventure] = useState({
    owner: username,
    title: '',
    level: '',
    duration: '',
    language: '',
    img: '',
    pdf: '',
    likes: '',
  })

  const send = async () => {
    if (!localStorage.getItem('token') && !sessionStorage.getItem('token'))
      return alert('Es necesario que incie sesión para cargar una aventura.')
    if (!adventure.title)
      return setError('Se requiere un título para la aventura.')
    if (!adventure.level)
      return setError('Se requiere indicar el nivel para la aventura.')
    if (!adventure.duration)
      return setError('Indique una duración para su aventura.')
    if (!adventure.language)
      return setError('Indique el/los idiomas para su aventura.')
    if (!adventure.pdf)
      return setError('Es necesario que cargue una aventura (PDF).')
    navigate('/aventuras')
  }

  return (
    <div className='form'>
      <h1>Cargar Aventura</h1>
      <div className='form-body'>
        <span>
          <label>Título de la Aventura</label>
          <input
            type='text'
            name='title'
            placeholder='Ingresar título de la aventura'
            onChange={event => {
              setAdventure(datosPrevios => ({
                ...datosPrevios,
                title: event.target.value,
              }))
            }}
          />
        </span>
        <span>
          <label>Nivel</label>
          <input
            type='text'
            name='level'
            placeholder='Ingresar nivel para la aventura'
            onChange={event => {
              setAdventure(datosPrevios => ({
                ...datosPrevios,
                level: event.target.value,
              }))
            }}
          />
        </span>
        <span>
          <label>Duración</label>
          <input
            name='text'
            type='duration'
            placeholder='Ingresar la duración de la aventura'
            onChange={event => {
              setAdventure(datosPrevios => ({
                ...datosPrevios,
                duration: event.target.value,
              }))
            }}
          />
        </span>
        <span>
          <label>Idioma</label>
          <input
            name='text'
            type='language'
            placeholder='Ingresar el idioma de la aventura'
            onChange={event => {
              setAdventure(datosPrevios => ({
                ...datosPrevios,
                language: event.target.value,
              }))
            }}
          />
        </span>
        <span>
          <label>Imagen</label>
          <input
            type='file'
            accept='image/*'
            alt='Imagen de la aventura'
            onChange={event => {
              setAdventure(datosPrevios => ({
                ...datosPrevios,
                img: event.target.files[0],
              }))
            }}
          />
        </span>
        <span>
          <label>PDF</label>
          <input
            type='file'
            accept='application/pdf'
            alt='PDF de la aventura'
            onChange={event => {
              setAdventure(datosPrevios => ({
                ...datosPrevios,
                pdf: event.target.files[0],
              }))
            }}
          />
        </span>
        <span
          className='err'
          style={{ visibility: `${error ? 'visible' : 'hidden'}` }}
        >
          {error}
        </span>
      </div>
      <div>
        <button
          type='submit'
          className='btn'
          style={{ margin: '1em' }}
          onClick={send}
        >
          Cargar aventura
        </button>
      </div>
    </div>
  )
}

export default LoadAdventure
