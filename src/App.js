import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aventuras from './components/Aventuras/Aventuras'
import NavBar from './components/NavBar/NavBar'
import Manuales from './components/Manuales/Manuales'
import Personajes from './components/Personajes/Personajes'
import PDFView from './components/PDFView'
import Personaje from './components/Personaje/Personaje'
import Registro from './components/Cuenta/Registro'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar buttons={['Registro','Aventuras', 'Manuales', 'Personajes']} />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/registro' element={<Registro/>} />
          <Route path='/aventuras' element={<Aventuras />} />
          <Route path='/manuales' element={<Manuales />} />
          <Route path='/:tipo/:manual_title' element={<PDFView />} />
          <Route path='/personajes' element={<Personajes />} />
          <Route path='/personajes/:owner/:personaje' element={<Personaje />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
