import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 50px;
  background-color: #f9f9f9;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

const ServicesList = styled.div`
  display: flex;
  justify-content: space-around;

  .service {
    width: 30%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .service h3 {
    margin-bottom: 20px;
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesTitle>Nossos Serviços</ServicesTitle>
      <ServicesList>
        <div className="service">
          <h3>Vistorias Residenciais</h3>
          <p>Detalhes sobre as vistorias residenciais...</p>
        </div>
        <div className="service">
          <h3>Vistorias Comerciais</h3>
          <p>Detalhes sobre as vistorias comerciais...</p>
        </div>
        <div className="service">
          <h3>Laudos Técnicos</h3>
          <p>Detalhes sobre os laudos técnicos...</p>
        </div>
      </ServicesList>
    </ServicesContainer>
  );
};

export default Services;
