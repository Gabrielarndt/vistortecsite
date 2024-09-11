import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 70vh;
  background: url('/Image/bnu.png') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    color: white;
  }

  p {
    font-size: 20px;
    color: white;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Bem-vindo à Vistortec</h1>
        <p>Garantimos a melhor avaliação de imóveis para você.</p>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
