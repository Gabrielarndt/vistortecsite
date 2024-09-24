// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import '../userProfile.css';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = Cookies.get('userEmail');
    if (!userEmail) {
      navigate('/login'); // Redireciona para a página de login se não estiver logado
    } else {
      fetch(`http://localhost:5000/api/user-info?email=${userEmail}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setUserInfo(data.user);
          } else {
            console.error('Erro ao obter informações do usuário:', data.message);
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar informações do usuário:', error);
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove('userEmail'); // Remove o cookie do usuário
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="app-container">
      <div className="profile-container">
        <h2 className="title">Seu Perfil</h2>
        {userInfo ? (
          <div className="info-card">
            <p className="info-label">Nome:</p>
            <p className="info-value">{userInfo.nome_completo}</p>
            <p className="info-label">Email:</p>
            <p className="info-value">{userInfo.email}</p>
            <p className="info-label">Telefone:</p>
            <p className="info-value">{userInfo.telefone}</p>
            {/* Adicione mais informações conforme necessário */}
          </div>
        ) : (
          <p>Carregando informações...</p>
        )}
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
