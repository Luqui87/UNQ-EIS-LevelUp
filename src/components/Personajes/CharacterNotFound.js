import { Link } from 'react-router-dom'

export const CharacterNotFound = ({ link, title, description }) => {
  return (
    <Link to={link} className='character_card'>
      <span>
        <div>
          <b>{title}</b>
        </div>
        <i className='biography'>{description}</i>
      </span>
    </Link>
    
  )
}

export default CharacterNotFound
