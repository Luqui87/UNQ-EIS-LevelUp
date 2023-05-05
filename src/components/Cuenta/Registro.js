import React, { useContext, useEffect, useState } from 'react'
import { signin } from '../../Api.js'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import './registro.css'

export const Registro = () => {
  const { setToken, setUsername } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const [datosDelUsuario, setDatosDelUsuario] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    img: '',
  })

  useEffect(() => {
    if(datosDelUsuario.password !== datosDelUsuario.confirmPassword)
      setError('Las contraseñas no coinciden')
    else
      setError('')
  }, [datosDelUsuario])

  const send = async () => {
    if(error) return
    const res = await signin(datosDelUsuario)
    if(!res.token) return setError(res.message)

    alert(res.message)
    localStorage.setItem('token', res.token)
    localStorage.setItem('username', datosDelUsuario.username)
    setToken(localStorage.getItem('token'))
    setUsername(datosDelUsuario.username)
    navigate('/personajes')
  }

  return (
    <div className='form'>
      <h1>Creación de cuenta</h1>
      <div className='form-body'>
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
          <label>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Ingresar email'
            onChange={event => {
              setDatosDelUsuario(datosPrevios => ({
                ...datosPrevios,
                email: event.target.value,
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
          <label>Confirmar contraseña</label>
          <input
            name='confirmPassword'
            type='password'
            placeholder='Confirmar contraseña'
            onChange={event => {
              setDatosDelUsuario(datosPrevios => ({
                ...datosPrevios,
                confirmPassword: event.target.value,
              }))
            }}
            required
          />
          <br></br>
          <span className='err' style={{ visibility: `${error ? 'visible' : 'hidden'}` }}>
            {error}
          </span>
        </span>
      </div>
      <div>
        <button type='submit' class='btn' id='botonRegistro' onClick={send}>
          Registrar cuenta
        </button>
      </div>
    </div>
  )
}

export default Registro
