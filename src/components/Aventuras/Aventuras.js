import { useState } from 'react';
import db from '../../database/db';
import { Card } from './Card';
import './aventuras.css';

export const Aventuras = () => {
  const aventuras = db;
  const [filteredList, setFilteredList] = new useState(aventuras);

  const filterBySearch = (event) => {
    const query = event.target.value;
    const normalizedQuery = removeAccents(query);

    var updatedList = [...aventuras];
    updatedList = updatedList.filter((item) => {
      const normalizedTitle = removeAccents(item.title);
      return normalizedTitle.includes(normalizedQuery);
    });
    setFilteredList(updatedList);
  };

  const removeAccents = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  return (
    <div>
      <input
        type='text'
        className='searchbox'
        placeholder='Buscar una Aventura...'
        onChange={filterBySearch}
      />
      <ul className='aventuras'>
        {filteredList?.map((aventura) => (
          <Card
            aventura={aventura}
            key={`${aventura.username}/${aventura.title}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default Aventuras;
