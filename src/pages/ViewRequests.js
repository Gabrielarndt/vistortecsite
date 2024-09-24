import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../viewRequestStyle.css'

const ViewRequests = () => {
  const [inspections, setInspections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Email do usuário autorizado
  const authorizedEmail = "gabrielharndt@hotmail.com";

  useEffect(() => {
    const userEmail = Cookies.get('userEmail'); // Corrigido para userEmail
    console.log('Email do usuário logado:', userEmail);

    if (!userEmail || userEmail !== authorizedEmail) {
      alert('Você não tem permissão para acessar essa página.');
      navigate('/');
    } else {
      fetchInspections(userEmail);
    }
  }, [navigate]);

  const fetchInspections = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/inspections`, {
            credentials: 'include', // Certifique-se de incluir cookies
        });
        const data = await response.json();
        console.log('Resposta do servidor:', data); // Para depuração
        if (response.ok) {
            setInspections(data);
        } else {
            setError('Erro ao carregar as vistorias: ' + data.error);
        }
    } catch (err) {
        setError('Erro ao carregar as vistorias: ' + err.message);
    } finally {
        setLoading(false);
    }
};

const handleViewInspection = (id) => {
  navigate(`/inspection/${id}`);
};

return (
  <div className="inspection-list-container">
    <h2>Lista de Vistorias</h2>
    {loading && <p>Carregando...</p>}
    {error && <p>{error}</p>}
    {!loading && !error && inspections.length === 0 && (
      <p>Nenhuma vistoria encontrada.</p>
    )}
    <div className="inspection-cards">
      {inspections.map((inspection) => (
        <div className="inspection-card" key={inspection.id}>
          <h3>{inspection.tipo_imovel}</h3>
          <p>Tipo de Vistoria: {inspection.tipo_vistoria}</p>
          <p>Cidade: {inspection.cidade}</p>
          <p>Email do Cliente: {inspection.email_cliente}</p>
          <button onClick={() => handleViewInspection(inspection.id)}>Ver Vistoria</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ViewRequests;
