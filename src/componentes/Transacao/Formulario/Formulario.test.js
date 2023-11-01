import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Formulario from './index';

describe('Deve renderizar um campo de input', () => {
  test('no documento', () => {
    render(<Formulario />);
    const input = screen.getByPlaceholderText('Digite um valor');
    expect(input).toBeInTheDocument();
  });

  test(' com o type number', () => {
    render(<Formulario />);
    const input = screen.getByPlaceholderText('Digite um valor');
    expect(input).toHaveAttribute('type', 'number');
  });

  test(' que pode ser preenchido', () => {
    render(<Formulario />);
    const input = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(input, '50');
    expect(input).toHaveValue(50);
  });
});