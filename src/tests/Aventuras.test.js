import { render, screen } from '@testing-library/react';
import { Aventuras } from '../components/Aventuras/Aventuras';

beforeEach(() => {
  render(<Aventuras />);
});

describe('<Aventuras />', () => {
  test('Hay una lista de aventuras', () => {
    const ul = screen.getByRole('list');

    expect(ul).toBeInTheDocument();
  });

  test('Ver una lista de Aventuras existente', () => {
    const list = screen.getByRole('listitem');

    expect(list).toBeInTheDocument();
  });
});
