import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aventuras from './components/Aventuras/Aventuras';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Manuales from './components/Manuales/Manuales';
import { AventuraView } from './components/Aventuras/AventuraView';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar buttons={['Inicio', 'Aventuras','Manuales']} />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/aventuras' element={<Aventuras />} />
          <Route path='/manuales' element={<Manuales/>} />
          <Route path='/aventuras/:aventura_title' element={<AventuraView />} />
          <Route path='/manuales/:manual_title' element={<AventuraView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
