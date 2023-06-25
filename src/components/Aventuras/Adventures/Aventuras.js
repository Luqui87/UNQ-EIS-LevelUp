import './aventuras.css'
import './aventuras_responsive.css'
import { useEffect, useState } from 'react'
import { Card } from './Card/Card'
import { useNavigate } from 'react-router-dom'
import { removeAccents } from './functions'
import uploadPDF from '../../../resources/pdf-upload.png'

export const Aventuras = () => {
  const [aventuras, setAventuras] = useState([{}])
  const [filteredList, setFilteredList] = new useState(aventuras)
  const navigate = useNavigate()
  const [order, setOrder] = useState('default')
  const [oficial, setOficial] = useState('')

  const sortAdventures = e => {
    setOrder(e.target.value)
    const sortedarray = filteredList.sort((a, b) => {
      return e.target.value === 'asc' ? b.likes - a.likes : a.likes - b.likes
    })
    setFilteredList(sortedarray)
  }

  const filterBySearch = event => {
    const query = event.target.value
    const normalizedQuery = removeAccents(query)

    var updatedList = [...aventuras]
    updatedList = updatedList
      .filter(item => {
        const normalizedTitle = removeAccents(item.title)
        return normalizedTitle.includes(normalizedQuery)
      })
      .sort((a, b) => {
        return order === 'asc' ? b.likes - a.likes : a.likes - b.likes
      })
    setFilteredList(updatedList)
  }

  const loadAdventure = () => {
    if (!localStorage.getItem('token') && !sessionStorage.getItem('token'))
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
      <aside className='filters_aside'>
        <article className='filters'>
          <span className='uploadPDF'>
            <img
              src={uploadPDF}
              className='uploadPDFIcon'
              onClick={loadAdventure}
            />
            <button onClick={loadAdventure}>Cargar Aventura</button>
          </span>
          <select
            className='ordenAventuras'
            defaultValue={'default'}
            onChange={sortAdventures}
            value={order}
          >
            <option value='default' disabled>
              Ordenar por
            </option>
            <option value='asc'>Más votada</option>
            <option value='dsc'>Menos votada</option>
          </select>
          <span className='esOficial'>
            <label>Es oficial</label>
            <input
              type='checkbox'
              value='default'
              onChange={event =>
                setOficial(event.target.checked ? 'default' : '')
              }
            />
          </span>
        </article>
      </aside>
      <aside className='adventures_list_aside'>
        <input
          type='text'
          className='searchbox'
          placeholder='Buscar una Aventura...'
          onChange={filterBySearch}
        />
        <ul className='adventures_list'>
          {filteredList?.map(
            aventura =>
              aventura.owner?.includes(oficial) && (
                <Card
                  aventura={aventura}
                  key={`${aventura.username}/${aventura.title}`}
                />
              )
          )}
        </ul>
      </aside>
    </div>
  )
}

export default Aventuras
