import React, { useState } from 'react'
import { signin } from '../../Api.js'
import './registro.css'

export const Registro = () => {
  const [datosDelUsuario, setDatosDelUsuario] = useState({
    username: '',
    password: '',
    email: '',
    img: '',
  })

  return (
    <main>
      <div className='form'>
        <div className='form-body'>
          <h2>Creación de cuenta</h2>
          <div className='usernameform'>
            <label className='form__label' for='usernameform'>
              Nombre de Usuario{' '}
            </label>
            <input
              className='form__input'
              type='text'
              id='usernameform'
              placeholder='Ingresar nombre de usuario'
              onChange={event => {
                setDatosDelUsuario(datosPrevios => ({
                  ...datosPrevios,
                  username: event.target.value,
                }))
                console.log('datos: ', datosDelUsuario)
              }}
            />
          </div>
          <div className='email'>
            <label className='form__label' for='email'>
              Email{' '}
            </label>
            <input
              type='email'
              id='email'
              className='form__input'
              placeholder='Ingresar email'
              onChange={event => {
                setDatosDelUsuario(datosPrevios => ({
                  ...datosPrevios,
                  email: event.target.value,
                }))
                console.log('datos: ', datosDelUsuario)
              }}
            />
          </div>
          <div className='password'>
            <label className='form__label' for='password'>
              Contraseña{' '}
            </label>
            <input
              className='form__input'
              type='password'
              id='password'
              placeholder='Ingresar contraseña'
              onChange={event => {
                setDatosDelUsuario(datosPrevios => ({
                  ...datosPrevios,
                  password: event.target.value,
                }))
                console.log('datos: ', datosDelUsuario)
              }}
            />
          </div>
          <div className='confirm-password'>
            <label className='form__label' for='confirmPassword'>
              Confirmar contraseña{' '}
            </label>
            <input
              className='form__input'
              type='password'
              id='confirmPassword'
              placeholder='Confirmar contraseña'
            />
          </div>
        </div>
        <div class='footer'>
          <button
            type='submit'
            class='btn'
            id='botonRegistro'
            onClick={() => signin(datosDelUsuario)}
          >
            Registrar cuenta
          </button>
        </div>
      </div>
    </main>
  )
}

export default Registro
