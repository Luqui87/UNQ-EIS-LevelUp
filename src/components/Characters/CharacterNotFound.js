import { Link } from 'react-router-dom';

export const CharacterNotFound = () => {
  return (
    <Link to={`/create/character`} className='character_card'>
      <span>
        <div>
          <b>No tienes personajes creados aún {':('}</b>
        </div>
        <i className='biography'>
          Haga click y lo llevaremos a la creación de personajes!
        </i>
      </span>
    </Link>
  );
};

export default CharacterNotFound;
