import React from 'react';
import '../cliente.css'; // Importe seu arquivo de estilos

function ClienteCard({ logo, nome, creci, whatsapp }) {
  return (
    <div className="cliente-card">
      <img src={logo} alt={nome} />
      <h2>{nome}</h2>
      <p>{creci}</p>
      <div className="buttons">
        <button>Saiba mais (em breve)</button>
        <a href={`https://wa.me/${whatsapp}`}>Converse no WhatsApp</a>
      </div>
    </div>
  );
}

export default ClienteCard;