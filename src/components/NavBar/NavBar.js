import './navbar.css';

export const NavBar = ({ buttons }) => {
  return (
    <header>
      <nav className='navbar'>
        <ul className='menu'>
          {buttons?.map((button) => (
            <li>
              <a href={`#${button}`}>{button}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
