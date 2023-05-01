import React, { useState } from 'react'
import { signin } from '../../Api.js'
import './registro.css'

export const Registro = () => {
  const [datosDelUsuario, setDatosDelUsuario] = useState({
    username: '',
    password: '',
    email: '',
    img: '',
    confirmPassword: ''
  })

  const [error, setError] = useState({
    username: '',
    password: '',
    email:'',
    confirmPassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setDatosDelUsuario(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
   
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
   
      switch (name) {
        // TODO: Agregar validaciones para username, email y password.
         case "confirmPassword":
          if (datosDelUsuario.password && value !== datosDelUsuario.password) {
            stateObj[name] = "Las contraseñas no coinciden.";
          }
          break;
        default:
          break;
      }
   
      return stateObj;
    });
  }

  return (
    <main>
        <div className='form-body'>
          <h2>Creación de cuenta</h2>
          <div className='usernameform'>
            <label className='form__label' for='usernameform'>
              Nombre de Usuario{' '}
            </label>
            <input
              className='form__input'
              type='text'
              name='username'
              id='usernameform'
              placeholder='Ingresar nombre de usuario'
              onChange={event => {
                setDatosDelUsuario(datosPrevios => ({
                  ...datosPrevios,
                  username: event.target.value,
                }))
              }}
              required
            />
          </div>
          <div className='email'>
            <label className='form__label' for='email'>
              Email{' '}
            </label>
            <input
              type='email'
              name= 'email'
              id='email'
              className='form__input'
              placeholder='Ingresar email'
              onChange={event => {
                setDatosDelUsuario(datosPrevios => ({
                  ...datosPrevios,
                  email: event.target.value,
                }))
              }}
              required
            />
          </div>
          <div className='password'>
            <label className='form__label' for='password'>
              Contraseña{' '}
            </label>
            <input
              className='form__input'
              name="password"
              type='password'
              id='password'
              placeholder='Ingresar contraseña'
              value={datosDelUsuario.password}
              onChange={event => {
                setDatosDelUsuario(datosPrevios => ({
                  ...datosPrevios,
                  password: event.target.value,
                }))
              }}
              required
            />
          </div>
          <div className='confirm-password'>
            <label className='form__label' for='confirmPassword'>
              Confirmar contraseña{' '}
            </label>
            <input
              className='form__input'
              name="confirmPassword"
              type='password'
              id='confirmPassword'
              placeholder='Confirmar contraseña'
              value={datosDelUsuario.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            <br></br>
            {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
          </div>
        </div>
        <div class='send'>
          <button
            type='submit'
            class='btn'
            id='botonRegistro'
            onClick={() => signin(datosDelUsuario)}
          >
            Registrar cuenta
          </button>
        </div>
    </main>
  )
}

export default Registro
