import React, { useContext, useState } from 'react'
import { login } from '../../Api.js'
import './IniciarSesion.css'
import { AuthContext } from '../AuthContext'

export const IniciarSesion = () => {
  const { setToken, setUsername } = useContext(AuthContext)
  const [error, setError] = useState('')

  const [datosDelUsuario, setDatosDelUsuario] = useState({
    username: '',
    password: '',
  })

  const send = async () => {
    const res = await login(datosDelUsuario)
    if (!res.token) return setError(res.message)

    localStorage.setItem('token', res.token)
    localStorage.setItem('username', datosDelUsuario.username)
    setToken(localStorage.getItem('token'))
    setUsername(localStorage.getItem('username'))
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
