// src/pages/ViewRequests.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ViewContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

const RequestList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RequestItem = styled.li`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const RequestDetail = styled.p`
  margin: 0;
  padding: 5px 0;
  font-weight: bold;
`;

const ViewRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Lógica para buscar os pedidos de vistoria do servidor
    // Aqui, estamos simulando os dados
    const fetchRequests = async () => {
      const data = [
        {
          id: 1,
          tipoVistoria: 'Entrada',
          tipoImovel: 'Apartamento',
          mobiliario: 'Mobiliado',
          inventario: true,
          estadoImovel: {
            imovelNovo: true,
            entregueLimpo: true,
            energiaEletricaLigada: true,
            pinturaNova: true,
            possuiMoveisSobMedida: false,
          },
          endereco: 'Rua A, 123',
          receberVistoria: 'Digital',
          localizador: '12345',
          nomesLocatarios: ['João Silva'],
          dadosVistoria: 'Nenhum dano identificado',
          observacoes: 'Cliente deseja vistoria rápida.',
        },
        // Mais pedidos podem ser adicionados aqui
      ];
      setRequests(data);
    };

    fetchRequests();
  }, []);

  return (
    <ViewContainer>
      <h2>Pedidos de Vistoria</h2>
      <RequestList>
        {requests.map((request) => (
          <RequestItem key={request.id}>
            <RequestDetail>Tipo de Vistoria: {request.tipoVistoria}</RequestDetail>
            <RequestDetail>Tipo de Imóvel: {request.tipoImovel}</RequestDetail>
            <RequestDetail>Mobiliário: {request.mobiliario}</RequestDetail>
            <RequestDetail>Inventário: {request.inventario ? 'Sim' : 'Não'}</RequestDetail>
            <RequestDetail>Estado do Imóvel:</RequestDetail>
            <ul>
              <li>Imóvel Novo: {request.estadoImovel.imovelNovo ? 'Sim' : 'Não'}</li>
              <li>Entregue Limpo: {request.estadoImovel.entregueLimpo ? 'Sim' : 'Não'}</li>
              <li>Energia Elétrica Ligada: {request.estadoImovel.energiaEletricaLigada ? 'Sim' : 'Não'}</li>
              <li>Pintura Nova: {request.estadoImovel.pinturaNova ? 'Sim' : 'Não'}</li>
              <li>Possui Móveis Sob Medida: {request.estadoImovel.possuiMoveisSobMedida ? 'Sim' : 'Não'}</li>
            </ul>
            <RequestDetail>Endereço: {request.endereco}</RequestDetail>
            <RequestDetail>Receber Vistoria: {request.receberVistoria}</RequestDetail>
            <RequestDetail>Localizador: {request.localizador}</RequestDetail>
            <RequestDetail>Nomes dos Locatários: {request.nomesLocatarios.join(', ')}</RequestDetail>
            <RequestDetail>Dados da Vistoria: {request.dadosVistoria}</RequestDetail>
            <RequestDetail>Observações: {request.observacoes}</RequestDetail>
          </RequestItem>
        ))}
      </RequestList>
    </ViewContainer>
  );
};

export default ViewRequests;
