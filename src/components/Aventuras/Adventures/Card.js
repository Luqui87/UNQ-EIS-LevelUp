import { Link } from 'react-router-dom'
import { getFile } from './functions'
import React, { useEffect, useState, useContext } from 'react'
import { likeAdventure } from '../../../Api'
import { AuthContext } from '../../AuthContext'

export const Card = ({ aventura }) => {
  const file = getFile(aventura.pdf)
  localStorage.setItem('pdf', aventura.pdf)
  const { username, token } = useContext(AuthContext)

  const [like, setLike] = useState(0)
  const [status, setStatus] = useState(null)
  
  useEffect (( ) => {
    setLike(aventura.likes)
  },[aventura])

  const handleClickLike = () => {
    if(!token)
      return alert("No podés darle like a una aventura sin iniciar sesión")
    if(aventura.owner === username)
      return alert("No podés darle like a tu propia aventura")
    if (status==='like') {
      setStatus(null)
      setLike(
        like - 1
      )
    } else {
      setStatus('like')
      setLike(
        like +1
      )
    }
    likeAdventure(aventura.id, username)
    .then()
    .catch(err => console.log(err))
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
      {aventura.owner !== username && <button className={status==='like'? 'likesactive' : 'likes'} onClick={handleClickLike}> 
          Votar
          <span className='likespan'>{like}</span>
        </button> }
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
