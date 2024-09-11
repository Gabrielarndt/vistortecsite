import React from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 50px;
  background-color: #f9f9f9;
  text-align: center;
`;

const TestimonialsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

const TestimonialList = styled.div`
  display: flex;
  justify-content: space-around;

  .testimonial {
    width: 30%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .testimonial p {
    font-style: italic;
  }

  .testimonial h4 {
    margin-top: 20px;
    font-weight: bold;
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsTitle>Depoimentos</TestimonialsTitle>
      <TestimonialList>
        <div className="testimonial">
          <p>"A melhor empresa de vistorias que já contratei!"</p>
          <h4>João da Silva</h4>
        </div>
        <div className="testimonial">
          <p>"Serviço rápido e de qualidade."</p>
          <h4>Maria Oliveira</h4>
        </div>
        <div className="testimonial">
          <p>"Recomendo a todos que precisam de uma vistoria de confiança."</p>
          <h4>Carlos Souza</h4>
        </div>
      </TestimonialList>
    </TestimonialsContainer>
  );
};

export default Testimonials;
