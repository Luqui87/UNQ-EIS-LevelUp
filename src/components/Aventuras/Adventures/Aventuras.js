import './aventuras.css'
import { useEffect, useState } from 'react'
import { Card } from './Card'
import { useNavigate } from 'react-router-dom'
import { removeAccents } from './functions'

export const Aventuras = () => {
  const [aventuras, setAventuras] = useState([{}])
  const [filteredList, setFilteredList] = new useState(aventuras)
  const navigate = useNavigate()

  const filterBySearch = event => {
    const query = event.target.value
    const normalizedQuery = removeAccents(query)

    var updatedList = [...aventuras]
    updatedList = updatedList.filter(item => {
      const normalizedTitle = removeAccents(item.title)
      return normalizedTitle.includes(normalizedQuery)
    })
    setFilteredList(updatedList)
  }

  const loadAdventure = () => {
    if (!localStorage.getItem('token'))
      alert('Debes estar logeado para cargar una aventura.')
    else navigate('/aventuras/crear')
  }

  useEffect(() => {
    fetch(`http://localhost:3010/adventures`, { method: 'GET' })
      .then(response => response.json())
      .then(data => setAventuras(data))
      .catch(error => console.error(error))
  }, [])

  useEffect(() => {
    setFilteredList(aventuras)
  }, [aventuras])

  return (
    <div className='adventures'>
      <img src={aventuras[0].img} alt='test' />
      <aside className='filters'>
        <button className='button-red' onClick={loadAdventure}>
          Cargar Aventura
        </button>
      </aside>
      <aside>
        <input
          type='text'
          className='searchbox'
          placeholder='Buscar una Aventura...'
          onChange={filterBySearch}
        />
        <ul className='adventures_list'>
          {filteredList?.map(aventura => (
            <Card
              aventura={aventura}
              key={`${aventura.username}/${aventura.title}`}
            />
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Aventuras
