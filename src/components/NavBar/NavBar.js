import { Link } from 'react-router-dom';
import './navbar.css';

export const NavBar = ({ buttons }) => {
  return (
    <header>
      <nav className='navbar'>
        <ul className='menu'>
          {buttons?.map((button, index) => (
            <li key={`${index}-${button}`}>
              <Link to={`/${button.toLowerCase()}`}>{button}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
