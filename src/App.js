import React, { useState } from 'react';
import Formulario from './components/Formulario';
import { CalculadorTermino } from './components/Serie';

const App = () => {
  const [resultado, setResultado] = useState(null);

  const handleNumeroSubmit = (numero) => {
    setResultado(numero);
  };

  return (
    <div className="app-container">
    <h1 className="title">Calculadora de términos de la serie</h1>
    <Formulario onNumeroSubmit={handleNumeroSubmit} />
    {resultado && (
      <div className="result-container">
        <CalculadorTermino numero={resultado} />
      </div>
    )}
  </div>
  );
};

export default App;