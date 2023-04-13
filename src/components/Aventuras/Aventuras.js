import db from '../../database/db';
import { Card } from './Card';
import './aventuras.css';

export const Aventuras = () => {
  const aventuras = db;

  return (
    <div>
      <ul className='aventuras'>
        {aventuras?.map((aventura) => (
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
