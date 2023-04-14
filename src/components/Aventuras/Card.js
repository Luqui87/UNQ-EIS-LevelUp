import { getFile, getImage } from './functions';

export const Card = ({ aventura }) => {
  const image = getImage(aventura.resource);
  const file = getFile(aventura.download);

  return (
    <li className='card'>
      <img src={image} alt={`${aventura.title}`} />
      <p className='username'>{aventura.username}</p>
      <title>{aventura.title}</title>
      <p>Nivel: {aventura.level}</p>
      <p>Duración: {aventura.duration}</p>
      <p>Idioma: {aventura.language}</p>
      <a href={file} download={`${aventura.download}`}>
        <button disabled={file ? false : true}>Descargar</button>
      </a>
    </li>
  );
};
