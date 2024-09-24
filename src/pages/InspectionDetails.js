import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../inspectionDetailsStyle.css'

const InspectionDetails = () => {
  const { id } = useParams();
  const [inspection, setInspection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInspectionDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/inspections/${id}`);
        const data = await response.json();
        if (response.ok) {
          setInspection(data);
        } else {
          setError('Erro ao carregar os detalhes da vistoria.');
        }
      } catch (err) {
        setError('Erro ao carregar os detalhes da vistoria: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInspectionDetails();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="inspection-details-container">
      <h2>Detalhes da Vistoria</h2>
      <p>Tipo de Vistoria: {inspection.tipo_vistoria}</p>
      <p>Tipo de Imóvel: {inspection.tipo_imovel}</p>
      <p>Mobiliário: {inspection.mobiliario}</p>
      <p>Inventário: {inspection.inventario}</p>
      <p>Imóvel Novo: {inspection.imovel_novo ? 'Sim' : 'Não'}</p>
      <p>Entregue Limpo: {inspection.entregue_limpo ? 'Sim' : 'Não'}</p>
      <p>Energia Elétrica Ligada: {inspection.energia_eletrica_ligada ? 'Sim' : 'Não'}</p>
      <p>Pintura Nova: {inspection.pintura_nova ? 'Sim' : 'Não'}</p>
      <p>Possui Móveis Sob Medida: {inspection.possui_moveis_sob_medida ? 'Sim' : 'Não'}</p>
      <p>Rua: {inspection.rua}</p>
      <p>Bairro: {inspection.bairro}</p>
      <p>Cidade: {inspection.cidade}</p>
      <p>Estado: {inspection.estado}</p>
      <p>CEP: {inspection.cep}</p>
      <p>Receber Vistoria: {inspection.receber_vistoria}</p>
      <p>Dados da Vistoria: {inspection.dados_vistoria}</p>
      <p>Observações: {inspection.observacoes}</p>
      <p>Email do Cliente: {inspection.email_cliente}</p>
    </div>
  );
};

export default InspectionDetails;
