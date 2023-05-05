import question from '../../resources/question_mark.jpg'
import IniciarSesion from '../../components/Cuenta/IniciarSesion'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import './menu.css'

export const UnloggedMenu = () => {
  return (
    <div className='menu'>
      <img src={question} alt='perfil' />
      <span>Invitado</span>
      <div>
        <IniciarSesion />
        <br />
        <Link to='/registro'>Registrar Cuenta</Link>
      </div>
    </div>
  )
}

export const LoggedMenu = () => {
  const { setToken } = useContext(AuthContext)

  return (
    <div className='menu'>
      <img src={question} alt='perfil' />
      <span>Invitado</span>
      <div>
        <button
          className='btn'
          onClick={() => {
            setToken('')
            localStorage.setItem('token', '')
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}