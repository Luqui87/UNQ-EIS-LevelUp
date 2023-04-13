import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Aventuras from './components/Aventuras/Aventuras';
import NavBar from './components/NavBar/NavBar';

const router = createBrowserRouter([
  { path: '/', element: <></> },
  { path: '/aventuras', element: <Aventuras /> },
]);

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
