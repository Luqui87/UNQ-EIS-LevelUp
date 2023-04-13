import { render } from '@testing-library/react';
import App from './App';

describe('Login', () => {
  it('Should render title screen', () => {
    const sut = render(<App />);
    const titleElement = sut.getByText('React Jest - TinCode');

    expect(titleElement).toBeInTheDocument();
  });
});
