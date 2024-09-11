import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 50px;
  background-color: #fff;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input,
  textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px;
    font-size: 18px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #555;
    }
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contato</ContactTitle>
      <ContactForm>
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;
