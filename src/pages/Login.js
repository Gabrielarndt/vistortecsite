import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Cookies from 'js-cookie'; // Importa a biblioteca
import '../auth.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (response.ok && data.success) {
      // Define o cookie com o email do usuário
      Cookies.set('userEmail', email, { expires: 7 }); // O cookie expira em 7 dias
      navigate("/"); 
    } else {
      setError("Email ou senha incorretos");
    }
  };

  const handleRegister = () => {
    navigate("/register"); 
  };

  return (
    <div className="login-container">
      <div className="box">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-group">
              <button type="submit">Logar</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <p>Esqueceu sua senha?</p>
          </form>
        </div>
        <div className="login-side">
          <h2>Bom ver você!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          <button onClick={handleRegister} className="button">Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
