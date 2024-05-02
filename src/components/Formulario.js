import React, { useState } from 'react';

const Formulario = ({ onNumeroSubmit }) => {
  const [numero, setNumero] = useState('');
  const numerosNaturales = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!numero || isNaN(numero)) return;
    if (!numerosNaturales.includes(parseInt(numero))) {
      alert('Ingrese un número natural del 1 al 10');
      return;
    }
    onNumeroSubmit(parseInt(numero));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
    <label className="form-label">
      Ingrese un número natural del 1 al 10:
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        min="1"
        max="10"
        className="form-input"
      />
    </label>
    <button type="submit" className="form-button">
      Calcular
    </button>
  </form>
  );
};

export default Formulario;