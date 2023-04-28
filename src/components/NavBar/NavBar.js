import { Link } from 'react-router-dom'
import question from '../../resources/question_mark.jpg'
import './navbar.css'

export const NavBar = ({ buttons }) => {
  const style = { color: 'white', textDecoration: 'none' }
  return (
    <header>
      <nav className='navbar'>
        <div className='menu'>
          <img src={question} alt='perfil' />
          <span>Invitado</span>
          <div>
            <Link to='/registro'>Registrar Cuenta</Link>
          </div>
        </div>
        <ul>
          {buttons?.map((button, index) => (
            <li key={`${index}-${button}`}>
              <Link to={`/${button.toLowerCase()}`} style={style}>
                {button}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
