import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext'
import Aventuras from './components/Aventuras/Adventures/Aventuras'
import NavBar from './components/NavBar/NavBar'
import Manuales from './components/Manuales/Manuales'
import Personajes from './components/Personajes/Personajes'
import PDFView from './components/PDFView'
import Personaje from './components/Personaje/Personaje'
import Registro from './components/Cuenta/Registro'
import CreacionPersonaje from './components/Personaje/CreacionPersonaje'
import LoadAdventure from './components/Aventuras/LoadAdventure/LoadAdventure'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar buttons={['Aventuras', 'Manuales', 'Personajes']} />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/aventuras' element={<Aventuras />} />
          <Route path='/aventuras/crear' element={<LoadAdventure />} />
          <Route path='/manuales' element={<Manuales />} />
          <Route path='/:tipo/view/:manual_title' element={<PDFView />} />
          <Route path='/personajes' element={<Personajes />} />
          <Route path='/personajes/:owner/:personaje' element={<Personaje />} />
          <Route path='/create/character' element={<CreacionPersonaje />} />
          <Route path='/personajes/:owner/:character/edit' element={<CreacionPersonaje />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
