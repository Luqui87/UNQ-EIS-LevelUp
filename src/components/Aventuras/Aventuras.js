import db from '../../database/db';
import { Card } from './Card';
import './aventuras.css';

export const Aventuras = () => {
  const aventuras = db;

  return (
    <div>
      <ul className='aventuras'>
        {aventuras?.map((aventura) => (
          <Card aventura={aventura} />
        ))}
      </ul>
    </div>
  );
};

export default Aventuras;
