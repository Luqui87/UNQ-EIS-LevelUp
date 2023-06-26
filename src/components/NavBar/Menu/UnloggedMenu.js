import './menu.css'
import question from '../../../resources/question_mark.jpg'
import IniciarSesion from '../../Cuenta/Iniciar Sesión/IniciarSesion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const UnloggedMenu = () => {
  const [visibility, setVisibility] = useState('hidden')

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target))
          setVisibility('hidden')
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  const handleClickVisibility = () => {
    if (visibility === 'hidden') setVisibility('visible')
    else setVisibility('hidden')
  }

  return (
    <div className='menu' ref={wrapperRef}>
      <div className='InNav' onClick={() => handleClickVisibility()}>
        <img src={question} alt='perfil' />
        <span>Invitado</span>
      </div>
      <div className='despegable' style={{ visibility: visibility }}>
        <IniciarSesion />
        <br />
        <Link to='/registro'>Registrar Cuenta</Link>
      </div>
    </div>
  )
}

export default UnloggedMenu
