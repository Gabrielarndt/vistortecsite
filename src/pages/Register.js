// src/pages/RegisterPage.js

import React from 'react';
import styled from 'styled-components';

const RegisterPageContainer = styled.div`
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
  width: 300px;
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
  background-color: #28a745;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <RegisterForm>
        <h2>Register</h2>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button type="submit">Register</Button>
        <a href='/login'>Logar</a>
      </RegisterForm>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
