import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

beforeEach(() => {
  render(<NavBar />);
});

describe('<NavBar />', () => {
  test('Existe un tag <nav><nav/>', () => {
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  test('Existe un tag <ul><ul/>', () => {
    const ul = screen.getByRole('list');

    expect(ul).toBeInTheDocument();
  });

  test('No existe <li><li/>', () => {
    const li = screen.queryByRole('listitem');

    expect(li).toBeFalsy();
  });

  test('Crear botones <li><li/>', () => {
    const buttonsList = ['Inicio', 'Manuales', 'Aventuras'];
    render(<NavBar buttons={buttonsList} />);
    const li = screen.getAllByRole('listitem');

    expect(li.length).toBe(buttonsList.length);
  });
});
