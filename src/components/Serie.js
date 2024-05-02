import React from 'react';

class Serie extends React.Component {
  static esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num;
    
  }

  static fibonacci(num) {
    const fib = [0,1]
    for (let i=2; i <= num; i++){
    fib[i] = fib[i - 2] + fib[i - 1]
    }
    return fib[num];
  }

  triangular(num) {
    return (num * (num + 1)) / 2;
  }

  calcularTermino(n) {
    const prime = -3 * (Serie.esPrimo(n));
    const fib = -3 * (Serie.fibonacci(n));
    const tri = 5 * this.triangular(n + 1);
    console.log(Serie.esPrimo(n))
    console.log(Serie.fibonacci(n))
    return prime + fib + tri;
  }
}

const CalculadorTermino = ({ numero }) => {
  const serie = new Serie();
  const terminos = [];

  for (let i = 1; i <= numero; i++) {
    terminos.push(serie.calcularTermino(i));
  }

  return (
    <div>
      <p>La serie hasta el número {numero} es:</p>
      <ul>
        {terminos.map((termino, index) => (
          <li key={index}>Término {index + 1}: {termino}</li>
        ))}
      </ul>
    </div>
  );
};

export { Serie, CalculadorTermino };

