import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aventuras from './components/Aventuras/Aventuras';
import NavBar from './components/NavBar/NavBar';
import Manuales from './components/Manuales/Manuales';
import PDFView from './components/PDFView';
import Personajes from './components/Characters/Personajes';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar buttons={['Aventuras', 'Manuales', 'Mis Personajes']} />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/aventuras' element={<Aventuras />} />
          <Route path='/manuales' element={<Manuales />} />
          <Route path='/mis personajes' element={<Personajes />} />
          <Route
            path='/mis personajes/:character_name'
            element={<Personajes />}
          />
          <Route path='/aventuras/:aventura_title' element={<PDFView />} />
          <Route path='/manuales/:manual_title' element={<PDFView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
