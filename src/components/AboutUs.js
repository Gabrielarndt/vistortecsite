import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  p {
    font-size: 18px;
    line-height: 1.6;
  }
`;

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutTitle>Sobre Nós</AboutTitle>
      <AboutContent>
        <p>
          Somos uma empresa especializada em vistorias imobiliárias, com anos de
          experiência no mercado. Nosso compromisso é garantir a qualidade e a
          segurança das suas transações imobiliárias.
        </p>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutUs;
