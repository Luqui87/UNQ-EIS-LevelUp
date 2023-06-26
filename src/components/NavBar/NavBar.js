import './navbar.css'
import './navbar_responsive.css'
import { Link } from 'react-router-dom'
import UnloggedMenu from './Menu/UnloggedMenu'
import LoggedMenu from './Menu/LoggedMenu'
import { useContext, useState } from 'react'
import { AuthContext } from '../AuthContext.js'

export const NavBar = ({ buttons }) => {
  const style = { color: 'white', textDecoration: 'none' }
  const { token } = useContext(AuthContext)
  const [active, setActive] = useState('')

  const showNavMenu = () => {
    active ? setActive('') : setActive('active')
  }

  return (
    <header>
      <nav className='navbar'>
        <Link to={'/'} className='logo'>
          <img src='dnd_logo.png' alt='Logo DnD' />
        </Link>
        <div>
          <button
            className={`burger ${active}`}
            id='burger'
            onClick={() => showNavMenu()}
          />
          <ul class={`navmenu ${active}`}>
            {buttons?.map((button, index) => (
              <li key={`${index}-${button}`}>
                <Link to={`/${button.toLowerCase()}`} style={style}>
                  {button}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {token ? <LoggedMenu /> : <UnloggedMenu />}
      </nav>
    </header>
  )
}

export default NavBar
