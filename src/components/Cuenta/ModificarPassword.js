import './Registrar Cuenta/registro.css'
import './Registrar Cuenta/registro_responsive.css'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { changePassword } from '../../Api'
import { AuthContext } from '../AuthContext'

export const ModificarPassword = () => {
  const { username } = useContext(AuthContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const [datosDelUsuario, setDatosDelUsuario] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  })

  useEffect(() => {
    if (datosDelUsuario.newPassword !== datosDelUsuario.confirmPassword)
      setError('Las contraseñas nuevas no coinciden.')
    else setError('')
  }, [datosDelUsuario])

  const send = async () => {
    if (!datosDelUsuario.password)
      return setError('Se requiere la contraseña actual.')
    if (!datosDelUsuario.newPassword)
      return setError('Debe de ingresar una contraseña nueva.')
    if (!datosDelUsuario.confirmPassword)
      return setError('La confirmación debe coincidir con la contraseña nueva.')
    if (error) return
    const res = await changePassword({
      username: username,
      password: datosDelUsuario.password,
      newPassword: datosDelUsuario.newPassword,
    })
    alert(res.message)
    if (res.status === 200) navigate('/')
  }

  return (
    <div className='form'>
      <h1>Modificar Contraseña</h1>
      <div className='form-body'>
        <span>
          <label>Contraseña actual</label>
          <input
            type='password'
            name='password'
            placeholder='Ingresar contraseña actual'
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
          <label>Contraseña nueva</label>
          <input
            type='password'
            name='newPassword'
            placeholder='Ingresar contraseña nueva'
            onChange={event => {
              setDatosDelUsuario(datosPrevios => ({
                ...datosPrevios,
                newPassword: event.target.value,
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
