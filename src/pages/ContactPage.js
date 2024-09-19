import React from 'react';
import '../contato.css'; // Arquivo de estilo específico para a seção de contato.

const Contato = () => {
  return (
    <section className="contato-section">
      <div className="contato-container">
        <div className="contato-info">
          <h2>FALE COM A GENTE</h2>
          <p>Por telefone ou online</p>
          
          <div className="contato-item">
            <img src="/path-to-email-icon.png" alt="Email Icon" />
            <a href="mailto:contato@vistoriaprime.com.br">contato@vistoriaprime.com.br</a>
          </div>
          
          <div className="contato-item">
            <img src="/path-to-whatsapp-icon.png" alt="WhatsApp Icon" />
            <a href="https://wa.me/5547999999999" target="_blank" rel="noreferrer">
              Clique aqui e converse diretamente no WhatsApp
            </a>
          </div>
          
          <p>(47) 4141-1234</p>
          <p>Itajaí - SC<br />Av Getúlio Vargas, 162 - SL 03</p>
        </div>

        <div className="contato-form">
          <h3>Dúvidas?</h3>
          <form>
            <input type="text" name="nome" placeholder="Nome" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="telefone" placeholder="Telefone" />
            <textarea name="mensagem" placeholder="Digite sua mensagem aqui..."></textarea>
            <button type="submit" className="contato-button">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;
