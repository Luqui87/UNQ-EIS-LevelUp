import { useState } from 'react';
import db from '../../database/db';
import { Card } from './Card';
import './aventuras.css';

export const Aventuras = () => {
  const aventuras = db;
  const [filteredList, setFilteredList] = new useState(aventuras);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...aventuras];
    updatedList = updatedList.filter((item) => {
      // return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      return item.title.toLowerCase().includes(query);
    });
    setFilteredList(updatedList);
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
