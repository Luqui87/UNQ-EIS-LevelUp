import { Link } from 'react-router-dom'
import { getFile } from './functions'
import React, { useEffect, useState, useContext } from 'react'
import { likeAdventure, deleteAdventure } from '../../../Api'
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

  async function confirm() {
    const res = window.confirm(`¿Quieres eliminar la aventura: ${aventura.title}?`)
    if (res) {
      const res = await deleteAdventure(aventura.id)
      alert(res.message)
      window.location.reload()
    }
    else {
      alert('Cancelado')
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
      <span className='buttons'>
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

        {aventura.owner !== username && <button className={ status==='like'? 'likesactive' : 'likes'} onClick={handleClickLike}> 
          <i class="gg-chevron-up-r"></i>
          <span className='likespan'> {like}</span>
        </button> }
         {aventura.owner === username && <button className = 'button-red' onClick={() => confirm()} >Eliminar</button>}
      </span>
    </li>
  )
}
