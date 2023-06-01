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
  const { setToken, username, setUsername } = useContext(AuthContext)

  return (
    <div className='menu'>
      <img src={question} alt='perfil' />
      <span>{username}</span>
      <div>
        <button
          className='btnCerrarSesion'
          onClick={() => {
            setToken('')
            localStorage.setItem('token', '')
            sessionStorage.setItem('token', '')
            setUsername('')
            localStorage.setItem('username', '')
            sessionStorage.setItem('username', '')
          }}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}
