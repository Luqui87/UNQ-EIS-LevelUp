import { useLocation } from 'react-router-dom';

export const PDFView = () => {
  const location = useLocation();
  const adventure = location.state;
  const pdf = require(`../resources/adventures/${adventure.download}`);

  return (
    <center>
      <h1>{adventure.title}</h1>
      <embed src={pdf} width='720' height='1280' type='application/pdf' />
    </center>
  );
};

export default PDFView;
