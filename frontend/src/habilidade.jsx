// src/components/Habilidade.jsx

import React from 'react';
import './habilidade.css'; // Crie um CSS para ele

function Habilidade({ nome, logo, link }) {
  return (
    <div className="habilidade-box">
      <h1>{nome}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} className="logo-image" alt={`Logo ${nome}`} />
      </a>
    </div>
  );
}

export default Habilidade;