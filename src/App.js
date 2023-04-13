import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aventuras from './components/Aventuras/Aventuras';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar buttons={['Inicio', 'Aventuras']} />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/aventuras' element={<Aventuras />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
