import { Link } from 'react-router-dom'
import './navbar.css'
import { UnloggedMenu, LoggedMenu } from './Menu'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext.js'

export const NavBar = ({ buttons }) => {
  const style = { color: 'white', textDecoration: 'none' }
  const { token } = useContext(AuthContext)

  return (
    <header>
      <nav className='navbar'>
        <Link to={'/'} className='logo'>
          <img src='dnd_logo.webp' alt='Logo DnD' />
        </Link>
        {token ? <LoggedMenu /> : <UnloggedMenu />}
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
