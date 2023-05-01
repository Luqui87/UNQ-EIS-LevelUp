import React, { useState } from 'react'
import { signin, login } from '../../Api.js'
import './IniciarSesion.css'

export const IniciarSesion = () => {
  const [datosDelUsuario, setDatosDelUsuario] = useState({
    username: '',
    password: ''
  })

  const [error, setError] = useState({
    username: '',
    password: ''
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
        case "username":
          // Add validation for username
          break;
        case "password":
          // Add validation for password
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
          <h2>Iniciar sesión</h2>
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
              onChange={onInputChange}
              required
            />
            {error.username && <span className='err'>{error.username}</span>}
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
              onChange={onInputChange}
              onBlur={validateInput}
              required
            />
            {error.password && <span className='err'>{error.password}</span>}
          </div>
        </div>
        <div class='send'>
          <button
            type='submit'
            class='btn'
            id='botonInicioSesion'
            onClick={() => login(datosDelUsuario)}
          >
            Iniciar sesión
          </button>
        </div>
    </main>
  )
}

export default IniciarSesion