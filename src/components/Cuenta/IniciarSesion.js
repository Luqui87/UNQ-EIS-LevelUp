import React, { useContext, useState } from 'react'
import { login } from '../../Api.js'
import './IniciarSesion.css'
import { AuthContext } from '../AuthContext'

export const IniciarSesion = () => {
  const { setToken, setUsername } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [remember, setRemember] = useState(false)

  const [datosDelUsuario, setDatosDelUsuario] = useState({
    username: '',
    password: '',
  })

  const send = async () => {
    if (!datosDelUsuario.username)
      return setError('Se requiere un usuario válido.')
    const res = await login(datosDelUsuario)
    if (!res.token) return setError(res.message)

    alert(res.message)
    if(remember) {
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', datosDelUsuario.username)
      setToken(localStorage.getItem('token'))
      setUsername(localStorage.getItem('username'))
    }
    else {
      sessionStorage.setItem('token', res.token)
      sessionStorage.setItem('username', datosDelUsuario.username)
      setToken(sessionStorage.getItem('token'))
      setUsername(sessionStorage.getItem('username'))
    }
  }

  return (
    <div className='login'>
      <h2>Iniciar sesión</h2>
      <span>
        <label>Nombre de Usuario</label>
        <input
          type='text'
          name='username'
          placeholder='Ingresar nombre de usuario'
          onChange={event => {
            setDatosDelUsuario(datosPrevios => ({
              ...datosPrevios,
              username: event.target.value,
            }))
          }}
          required
        />
      </span>
      <span>
        <label>Contraseña</label>
        <input
          name='password'
          type='password'
          placeholder='Ingresar contraseña'
          onChange={event => {
            setDatosDelUsuario(datosPrevios => ({
              ...datosPrevios,
              password: event.target.value,
            }))
          }}
          required
        />
      </span>
      <span>
        <label>Recordar cuenta</label>
        <input
          type='checkbox'
          onChange={event => setRemember(event.target.checked)}
        />
      </span>
      <span
        className='err'
        style={{ display: `${error ? 'inline-block' : 'none'}` }}
      >
        {error}
      </span>
      <div>
        <button type='submit' id='botonInicioSesion' onClick={send}>
          Iniciar sesión
        </button>
      </div>
    </div>
  )
}

export default IniciarSesion
