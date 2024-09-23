import React from 'react';
import '../about.css'
import saidaImagem from '../imagens/saida.png'
import planta from '../imagens/planta.png'

const ServicesPage = () => {
  return (
    <div className="about-container">
      {/* Cabeçalho com o título */}
      <div className="about-header">
        <h2>+ SERVIÇOS</h2>
        <p>Profissionalizamos o procedimento de Vistorias Imobiliárias.</p>
      </div>

      <img className='bannerAbout' src={planta} alt="Vistoria de venda" />
      
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

    </div>
  );
};

export default ServicesPage;
