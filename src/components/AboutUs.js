import React from 'react';
import '../index.css';
import perfil from '../imagens/perfil.avif'
import AboutPage from '../pages/AboutPage';

<div className="sobre-section">
<div className="sobre-header">
  <h2>SOBRE</h2>
</div>
<p className="sobre-descricao">
  As pessoas por trás da Vistortec:
</p>
<p className="sobre-texto">
  O sucesso de qualquer empresa ou organização é resultado direto da qualidade e competência de seu time de colaboradores. Nós da <span className="vistoria-prime">Vistortec</span> sabemos disso e temos orgulho em poder contar com uma excelente equipe de profissionais.
</p>

<div className="equipe">
  <div className="membro">
    <img src={perfil} alt="Carlos Vargas" />
    <h4>Kleber</h4>
    <p>Fundador</p>
  </div>
</div>
</div>
