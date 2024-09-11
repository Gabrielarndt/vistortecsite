import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Vistortec</Logo>
      <Nav>
        <Link to="/">Início</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/sobre">Sobre Nós</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/Login">Logar</Link>
        <Link to="/view-request">Ver Requisições</Link>
        <Link to="/request-Inspection">Requisitar</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
