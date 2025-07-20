import React from 'react';
import './habilidade.css';

interface HabilidadeProps {
  nome: string;
  logo: string;
  link: string;
}

const Habilidade: React.FC<HabilidadeProps> = ({ nome, logo, link }) => {
  return (
    <div className="habilidade-box">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logo} className="logo-image" alt={`Logo ${nome}`} style={{ width: 64, height: 64, marginBottom: 12 }} />
      </a>
      <h1>{nome}</h1>
    </div>
  );
};

export default Habilidade;
