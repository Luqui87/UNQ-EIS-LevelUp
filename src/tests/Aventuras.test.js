import { render, screen } from '@testing-library/react';
import { Aventuras } from '../components/Aventuras/Aventuras';

beforeEach(() => {
  render(<Aventuras />);
});

describe('<Aventuras />', () => {
  test('Hay una lista de aventuras', () => {
    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  test('Ver una lista de Aventuras existente', () => {
    const list = screen.getAllByRole('listitem');

    expect(list.length).not.toBeNull();
  });

  test('Puedo ver un botón para descargar la aventura que quiera', () => {
    const button = screen.getAllByRole('button', { name: 'Descargar' });

    expect(button).not.toBeNull();
  });

  test('Puedo ver un botón para descargar la aventura que quiera', () => {
    const button = screen.getAllByRole('button', { name: 'Ver Online' });

    expect(button).not.toBeNull();
  });
});
