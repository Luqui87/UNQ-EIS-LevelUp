import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../../Api.js'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import './registro.css'

export const ModificarPassword = () => {
    const { setToken, setUserPassword } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const [datosDelUsuario, setDatosDelUsuario] = useState({
        username: '',
        currentPassword: '',
        password: '',
        confirmPassword: '',
      })
    
      useEffect(() => {
        if (datosDelUsuario.password !== datosDelUsuario.confirmPassword)
          setError('Las contraseñas nuevas no coinciden.')
        else setError('')
      }, [datosDelUsuario])

      const send = async () => {
        if (!datosDelUsuario.currentPassword)
        return setError('Se requiere la contraseña actual.')
        if (!datosDelUsuario.password)
        return setError('Debe de ingresar una contraseña nueva.')
        if (!datosDelUsuario.confirmPassword)
        return setError('La confirmación debe coincidir con la contraseña nueva.')
        if (error) return
        const res = await getUser(datosDelUsuario.username)
        if (!res.token) return setError(res.message)
        alert(res.message)
        localStorage.setItem('token', res.token)
        localStorage.setItem('userpassword', datosDelUsuario.password)
        setToken(localStorage.getItem('token'))
        setUserPassword(datosDelUsuario.password)
        navigate('/')
      }
      return (
        <div className='form'>
          <h1>Modificar Contraseña</h1>
          <div className='form-body'>
            <span>
              <label>Contraseña actual</label>
              <input
                type='password'
                name='currentPassword'
                placeholder='Ingresar contraseña actual'
                onChange={event => {
                }}
                required
              />
            </span>
            <span>
              <label>Contraseña nueva</label>
              <input
                name='password'
                type='password'
                placeholder='Ingresar contraseña nueva'
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
              <label>Confirmar contraseña nueva</label>
              <input
                name='confirmPassword'
                type='password'
                placeholder='Confirmar contraseña nueva'
                onChange={event => {
                    setDatosDelUsuario(datosPrevios => ({
                        ...datosPrevios,
                        confirmPassword: event.target.value,
                      }))
                }}
                required
              />
              <br></br>
              <span
                className='err'
                style={{ visibility: `${error ? 'visible' : 'hidden'}` }}
              >
                {error}
              </span>
            </span>
          </div>
          <div>
            <button type='submit' className='btn' id='botonEditPass' onClick={send}>
              Guardar contraseña nueva
            </button>
          </div>
        </div>
      )
    }


export default ModificarPassword