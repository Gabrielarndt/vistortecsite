import React from 'react';
import '../about.css'; // Importando a folha de estilo CSS

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Cabeçalho com o título */}
      <div className="about-header">
        <h2>+ QUEM SOMOS</h2>
        <p>Conheça nossa história e jeito de trabalhar.</p>
      </div>
      
      {/* Imagem de fundo e conteúdo */}
      <div className="about-content">
        <div className="about-text">
          <p>
            A VistoriaPrime surgiu da percepção de seus fundadores com longa experiência no mercado imobiliário e da necessidade de profissionalizar e terceirizar o procedimento de vistorias imobiliárias.
          </p>
          <p>
            Na ausência de um documento bem elaborado os conflitos e prejuízos se tornam inevitáveis entre as partes. Pensando nisso desenvolvemos um procedimento que gera um documento imparcial, moderno, que une uma descrição clara, observações pertinentes e fotos profissionais.
          </p>
          <p>
            Após realizarmos mais 3.000 vistorias e estar em constante evolução, temos a certeza que estamos no caminho certo e que temos a oportunidade e o potencial para contribuir com a evolução do mercado imobiliário da nossa região.
          </p>
        </div>
        <div className="about-quote">
          <p>
            "Desde abril de 2017 estamos evoluindo e trazendo as melhores soluções em vistorias"
          </p>
          {/* Linha abaixo do texto */}
          <hr className="quote-line" />
          {/* Foto quadrada abaixo da linha */}
          <img src="/" alt="Imagem" className="square-image" />
        </div>
      </div>

      {/* Botão de contato */}
      <div className="contact-button">
        <button>ENTRE EM CONTATO</button>
      </div>
    </div>
  );
};

export default AboutPage;
