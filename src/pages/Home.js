import React from 'react';
import '../index.css';
import '../contato.css';
import saidaImagem from '../imagens/saida.png';
import perfil from '../imagens/perfil.avif';

const Home = () => {
  return (
    <div className="container">
      {/* Banner Principal */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Vistorias Imobiliárias de Qualidade</h1>
          <p className="banner-text">Garantindo segurança e tranquilidade para proprietários e locatários.</p>
          <a href="#contato" className="banner-button">Solicite uma vistoria</a>
        </div>
      </section>

     

      {/* Seção Serviços */}
      <section id="servicos" className="servicos">
        <div className="servicos-content">
          <h2>Nossos Serviços</h2>
          <div className="servicos-list">
          <div className="servico-card">
              <img src={saidaImagem} alt="Vistoria de venda" />
              <div className="servico-texto">
                <h3>Vistoria de entrada</h3>
                <p>Registro do imóvel e inventário de móveis, decoração, elétros e eletronicos, bem como sua descrição e estado de conservação.</p>
              </div>
            </div>
            <div className="servico-card">
              <img src={saidaImagem} alt="Vistoria de venda" />
              <div className="servico-texto">
                <h3>Vistoria de saída</h3>
                <p>Registro do imóvel e inventário de móveis, decoração, elétros e eletronicos, bem como sua descrição e estado de conservação.</p>
              </div>
            </div>
            <div className="servico-card">
              <img src={saidaImagem} alt="Vistoria de venda" />
              <div className="servico-texto">
                <h3>Vistoria de venda</h3>
                <p>Registro do imóvel e inventário de móveis, decoração, elétros e eletronicos, bem como sua descrição e estado de conservação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='BlueBackgroundDiv'>
        <h1 className='Heading'>Transformamos a forma como você vê o seu imóvel!</h1>
        <p>Com nossa expertise em vistorias imobiliárias, garantimos uma análise precisa e detalhada para que você tenha total confiança na sua propriedade.</p>
      </div>

       {/* Seção Sobre */}
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

      {/* Seção Contato */}
      <section className="contato-section">
      <div className="contato-container">
        <div className="contato-info">
          <h2>FALE COM A GENTE</h2>
          <p>Por telefone ou online</p>
          
          <div className="contato-item">
            <img className='icon' src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg" alt="Email Icon" />
            <a href="mailto:contato@vistoriaprime.com.br">contato@vistoriaprime.com.br</a>
          </div>
          
          <div className="contato-item">
            <img className='icon' src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" />
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
    </div>
  );
};

export default Home;
