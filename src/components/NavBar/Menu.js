import question from '../../resources/question_mark.jpg'
import IniciarSesion from '../../components/Cuenta/IniciarSesion'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect, useRef } from 'react'
import { AuthContext } from '../AuthContext'
import './menu.css'



export const UnloggedMenu = () => {

  const [visibility,setVisibility] = useState("hidden")

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) ) {
          setVisibility("hidden");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  } 
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  const handleClickVisibility = () =>{
    if (visibility == "hidden"){
      setVisibility("visible")
    }
    else{
      setVisibility("hidden")
    }
  }

  return (
    <div className='menu' ref={wrapperRef}>
      <div className='InNav' onClick={() => handleClickVisibility()} >
        <img src={question} alt='perfil' />
        <span>Invitado</span>
      </div>
      <div className='despegable' style={{visibility: visibility}}>
        <IniciarSesion />
        <br />
        <Link to='/registro'>Registrar Cuenta</Link>
      </div>
    </div>
  )
}

export const LoggedMenu = () => {
  const { setToken, username, setUsername } = useContext(AuthContext)

  const [visibility,setVisibility] = useState("hidden")

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) ) {
          setVisibility("hidden");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  } 
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  const handleClickVisibility = () =>{
    if (visibility == "hidden"){
      setVisibility("visible")
    }
    else{
      setVisibility("hidden")
    }
  }
  
  return (
    <div className='menu' ref={wrapperRef}>
       <div className='InNav' onClick={() => handleClickVisibility()} >
        <img src={question} alt='perfil' />
        <span>{username}</span>
      </div>
      <div className='despegable' style={{visibility: visibility}}>
      <button
          className='btnCerrarSesion'
          onClick={() => {
          }}
        >
          Modificar Contraseña
        </button>
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
