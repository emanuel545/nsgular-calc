import App from './App';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Formulario from './components/Formulario';
import { Serie, CalculadorTermino } from './components/Serie';

describe('Serie class', () => {
  it('debe identificar correctamente los números primos', () => {
    expect(Serie.esPrimo(5)).toBe(5);
    expect(Serie.esPrimo(6)).toBe(false);
    expect(Serie.esPrimo(13)).toBe(13);
    expect(Serie.esPrimo(15)).toBe(false);
  });

  it('debe identificar correctamente los números fibonacci', () => {
    expect(Serie.fibonacci(0)).toBe(0);
    expect(Serie.fibonacci(1)).toBe(1);
    expect(Serie.fibonacci(5)).toBe(5);
    expect(Serie.fibonacci(10)).toBe(55);
  });

  it('debe identificar correctamente los números triangular', () => {
    const serie = new Serie();
    expect(serie.triangular(0)).toBe(0);
    expect(serie.triangular(1)).toBe(1);
    expect(serie.triangular(5)).toBe(15);
    expect(serie.triangular(10)).toBe(55);
  });

  it('debe identificar correctamente los números series', () => {
    const serie = new Serie();
    expect(serie.calcularTermino(1)).toBe(12);
    expect(serie.calcularTermino(2)).toBe(21);
    expect(serie.calcularTermino(3)).toBe(35);
    expect(serie.calcularTermino(4)).toBe(66);
  });
});

describe('CalculadorTermino component', () => {
  it('debería renderizar la serie correctamente', () => {
    const { getByText } = render(<CalculadorTermino numero={5} />);
    
    expect(getByText('La serie hasta el número 5 es:')).toBeInTheDocument();
    expect(getByText('Término 1: 12')).toBeInTheDocument();
    expect(getByText('Término 2: 21')).toBeInTheDocument();
    expect(getByText('Término 3: 35')).toBeInTheDocument();
    expect(getByText('Término 4: 66')).toBeInTheDocument();
    expect(getByText('Término 5: 75')).toBeInTheDocument();
  });
});

describe('Formulario component', () => {
  it('should submit valid number', () => {
    const mockOnNumeroSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Formulario onNumeroSubmit={mockOnNumeroSubmit} />);
    
    const input = getByLabelText('Ingrese un número natural del 1 al 10:');
    const button = getByText('Calcular');
    
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(button);
    
    expect(mockOnNumeroSubmit).toHaveBeenCalledWith(5);
  });

  it('should show alert when submitting invalid number', () => {
    const mockOnNumeroSubmit = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {}); 
    
    const { getByLabelText, getByText } = render(<Formulario onNumeroSubmit={mockOnNumeroSubmit} />);
    
    const input = getByLabelText('Ingrese un número natural del 1 al 10:');
    const button = getByText('Calcular');
    
    fireEvent.change(input, { target: { value: '11' } });
    fireEvent.click(button);
    
    expect(mockOnNumeroSubmit).not.toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Ingrese un número natural del 1 al 10');
    
    alertMock.mockRestore();
  });

})
