import { Link } from 'react-router-dom'
import { getFile, getLikes } from './functions'
import './votacion.css'
import React, { useState, useReducer } from 'react'

const appReducer = (state, action) => {
  switch(action.type) {
    case 'HANDLE_LIKE':
      return {
        ...state,
        likes: state.likes + action.payload
      }
    default:
      return state
  }
}

export const Card = ({ aventura }) => {
  const file = getFile(aventura.pdf)
  localStorage.setItem('pdf', aventura.pdf)

  const [state, dispatch] = useReducer(appReducer, aventura.likes)
  const likes = state
  const [status, setStatus] = useState(null)
  
  const handleClickLike = () => {
    if (status==='like') {
      setStatus(null)
      dispatch({
        type: 'HANDLE_LIKE',
        payload: -1,
      })
    } else {
      setStatus('like')
      dispatch({
        type: 'HANDLE_LIKE',
        payload: 1,
      })
    }
  }

  return (
    <li className='card'>
      <img src={aventura.img} alt={`${aventura.title}`} />
      <p className='username'>{aventura.username}</p>
      <title>{aventura.title}</title>
      <title>Creador: {aventura.owner}</title>
      <p>Nivel: {aventura.level}</p>
      <p>Duración: {aventura.duration}</p>
      <p>Idioma: {aventura.language}</p>
          <button className={status==='like'? 'btn active' : 'likes'} onClick={handleClickLike}> 
          Votar 
            <span>{likes}</span>
          </button>
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
