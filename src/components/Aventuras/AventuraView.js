import { useLocation } from 'react-router-dom';

const convertFolder = (folder) => {
  switch(folder){
    case 'aventuras': return 'adventures'; break;
    case 'manuales' : return 'manuals'; break;
  }
}

export const AventuraView = () => {
  const path = useLocation().pathname.split('/');
  const folder = convertFolder(path[1])
  const file = path[2].replace(/%20/g, " ")
  const pdf = require(`../../resources/${folder}/${file}.pdf`);
  return (
    <center>
      <h1>{file}</h1>
      <embed src={pdf} width='720' height='1280' type='application/pdf' />
    </center>
  );
};

