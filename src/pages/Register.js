import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../auth.css";

const Register = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Usuário registrado com sucesso!');
        // Redirecionar ou limpar o formulário
      } else {
        alert('Erro ao registrar usuário: ' + data.message);
      }
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
    }
  };

  const handleLogar = () => {
    navigate("/login"); 
  };

  return (
    <div className="register-container">
      <div className="box">
        <div className="register-box">
          <form onSubmit={handleSubmit}>
            <h2>Registrar</h2>
            <div className="input-group">
              <label>Nome completo</label>
              <input
               type="text"
               name="fullName"
               value={formData.fullName}
               onChange={handleChange}
               required
              />
            </div>
            <div className="input-group">
              <label>Telefone</label>
              <input
                type="tel" // Corrigido para 'tel'
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email" // Corrigido para 'email'
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Senha</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-group">
              <button type="submit">Registrar</button>
            </div>
          </form>
        </div>
        <div className="register-side">
          <h2>Bem vindo!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          <button onClick={handleLogar} className="button">Logar</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
