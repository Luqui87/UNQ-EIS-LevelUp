import { useLocation } from 'react-router-dom';

const convertFolder = (folder) => {
  switch (folder) {
    case 'aventuras':
      return 'adventures';
    case 'manuales':
      return 'manuals';
    default:
      break;
  }
};

const checkTilde = (text) => {
  let convert = text.replace(/%C3%B3/g, 'ó');
  convert = convert.replace(/%C3%AD/g, 'í');
  return convert;
};

export const PDFView = () => {
  const path = useLocation().pathname.split('/');
  const folder = convertFolder(path[1]);
  let file = path[2].replace(/%20/g, ' ');
  file = checkTilde(file);
  const pdf = require(`../resources/${folder}/${file}/${file}.pdf`);

  return (
    <center>
      <h1>{file}</h1>
      <embed src={pdf} width='720' height='1280' type='application/pdf' />
    </center>
  );
};

export default PDFView;
