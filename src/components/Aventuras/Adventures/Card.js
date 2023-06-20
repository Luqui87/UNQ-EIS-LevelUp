import { Link } from 'react-router-dom'
import { getFile } from './functions'
import React, { useEffect, useState, useContext } from 'react'
import { likeAdventure, deleteAdventure, getLikes } from '../../../Api'
import { AuthContext } from '../../AuthContext'
import { adventuresIMG, adventuresPDF } from '../../../resources/adventures/Adventures'

export const Card = ({ aventura }) => {
  const file = getFile(aventura.pdf)
  const { username, token } = useContext(AuthContext)
  const [like, setLike] = useState(0)
  const [status, setStatus] = useState(null)
  const [pdf, setPdf] = useState(null)
  const [img, setImg] = useState(null)

  useEffect(() => {
    setLike(aventura.likes)
    setPdf(getDownloadable())
    setImg(getImg())
  }, [aventura])

  async function handleClickLike(){
    const likes = await getLikes(username);
    const adventures = likes.adventures
    if (!token)
      return alert('No podés darle like a una aventura sin iniciar sesión')
    if (aventura.owner === username)
      return alert('No podés darle like a tu propia aventura')
    if (adventures.some((adv) => adv.AdventureId === aventura.id)) {
      setLike(like - 1)
    } else {
      setLike(like + 1)
    }
    likeAdventure(aventura.id, username)
      .then()
      .catch(err => console.log(err))
  }

  async function confirm() {
    const res = window.confirm(
      `¿Quieres eliminar la aventura: ${aventura.title}?`
    )
    if (res) {
      const res = await deleteAdventure(aventura.id)
      alert(res.message)
      window.location.reload()
    } else {
      alert('Cancelado')
    }
  }

  const getDownloadable = () => {
    const restult =
      aventura.owner === 'default'
        ? adventuresPDF.filter(
            pdf => pdf.title.toLowerCase() === aventura.title.toLowerCase()
          )[0].src
        : aventura.pdf
    return restult
  }

  const getImg = () => {
    const restult =
      aventura.owner === 'default'
        ? adventuresIMG.filter(
            img => img.title.toLowerCase() === aventura.title.toLowerCase()
          )[0].src
        : aventura.img
    return restult
  }

  return (
    <li className='card'>
      <img src={img} alt={`${aventura.title}`} />
      <p className='username'>{aventura.username}</p>
      <title>{aventura.title}</title>
      <title>Creador: {aventura.owner}</title>
      <p>Nivel: {aventura.level}</p>
      <p>Duración: {aventura.duration}</p>
      <p>Idioma: {aventura.language}</p>
      <span className='buttons'>
        <a href={pdf} download={`${aventura.title}`}>
          <button className='button-red' disabled={!file ? false : true}>
            Descargar
          </button>
        </a>
        <Link
          to={`/aventuras/view/${aventura.title}`}
          rel='noopener noreferrer'
        >
          <button
            className='button-red'
            onClick={() => localStorage.setItem('pdf', pdf)}
            onAuxClick={() => localStorage.setItem('pdf', pdf)}
          >
            Ver Online
          </button>
        </Link>

        {aventura.owner !== username && (
          <button
            className={status === 'like' ? 'likesactive' : 'likes'}
            onClick={() => handleClickLike()}
          >
            <i class='gg-chevron-up-r'></i>
            <span className='likespan'> {like}</span>
          </button>
        )}
        {aventura.owner === username && (
          <button className='button-red' onClick={() => confirm()}>
            Eliminar
          </button>
        )}
      </span>
    </li>
  )
}
