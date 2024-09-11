// src/pages/RegisterInspection.js

import React, { useState } from 'react';
import styled from 'styled-components';

const RegisterInspectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterInspection = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar o arquivo PDF e o email
    // Pode ser integrado a uma API ou banco de dados
    console.log({ email, file });
  };

  return (
    <RegisterInspectionContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <h2>Registrar Vistoria</h2>
        <Input
          type="email"
          placeholder="Email do Cliente"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <Button type="submit">Registrar</Button>
      </RegisterForm>
    </RegisterInspectionContainer>
  );
};

export default RegisterInspection;
