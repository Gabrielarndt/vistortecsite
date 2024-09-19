import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;

  .social-links {
    margin-top: 10px;

    a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
    }
  }
`;

// Componente para o layout principal
const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Vistoria Imobiliária. Todos os direitos reservados.</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
