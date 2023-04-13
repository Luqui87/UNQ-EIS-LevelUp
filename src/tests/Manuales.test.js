import { render, screen } from '@testing-library/react';
import Manuales from '../components/Manuales';

beforeEach(() => {
    render(<Manuales/>);
});

describe('<Manuales />', () => {
    test('Existe un tag <main><main/>', () => {
      const main = screen.getByRole('main');
  
      expect(main).toBeInTheDocument();
    });

    test('Existe tres divs de clase manual', () => {
        const {container} = render(<Manuales/>)
        const manuales = container.getElementsByClassName('manual');
    
        expect(manuales.length).toBe(3);
      });

      test('Existe un manual de jugador', () =>{
        const text = screen.getByText('Manual de jugador')

        expect(text).toBeInTheDocument();
      }); 

      test('Existe una guia de dungeon Master', () =>{
        const text = screen.getByText('Guía del dungeon Master')

        expect(text).toBeInTheDocument();
      }); 

      test('Existe un manual de monstruos', () =>{
        const text = screen.getByText('Manual de monstruos')

        expect(text).toBeInTheDocument();
      }); 
      
      test('Imagen del manual de usuario',() =>{
        const img = screen.getByAltText('Portada del manual del jugador')

        expect(img.src).toContain('http://localhost/manuales/manual-jugador.jpg')
      })

      test('Imagen de la guía del dungeon master',() =>{
        const img = screen.getByAltText('Portada de la guía del dungeon master')

        expect(img.src).toContain('http://localhost/manuales/manual-dm.jpg')
      })

      test('Imagen del manual de monstruos',() =>{
        const img = screen.getByAltText('Portada del manual de monstruos')

        expect(img.src).toContain('http://localhost/manuales/manual-monstruos.jpg')
      })
      
  });
