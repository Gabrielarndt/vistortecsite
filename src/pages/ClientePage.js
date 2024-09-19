import React from 'react';
import ClienteCard from './ClienteCard';
import '../cliente.css'; // Importe seu arquivo de estilos

function ClientesPage() {
  const clientes = [
    {
      logo: 'https://example.com/brodasa-logo.png',
      nome: 'Brodasa Imóveis',
      creci: 'CRECI/SC 4476J',
      whatsapp: '5547999999999',
    },
    // Adicione mais clientes aqui
  ];

  return (
    <div className="clientes-page">
      <h2>+ Clientes</h2>
      <p>Algumas das empresas que acreditam no nosso trabalho:</p>
      <div className="clientes-list">
        {clientes.map((cliente) => (
          <ClienteCard key={cliente.nome} {...cliente} />
        ))}
      </div>
    </div>
  );
}

export default ClientesPage;