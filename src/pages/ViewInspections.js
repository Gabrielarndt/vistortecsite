// src/pages/ViewInspections.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InspectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const InspectionList = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 600px;
`;

const InspectionItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.a`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const ViewInspections = ({ clientEmail }) => {
  const [inspections, setInspections] = useState([]);

  useEffect(() => {
    // Lógica para buscar as vistorias do cliente pelo email
    // Pode ser integrada a uma API ou banco de dados
    const fetchedInspections = [
      // Mock de dados
      { id: 1, fileName: 'Vistoria_Janeiro_2024.pdf', url: '/path/to/file1.pdf' },
      { id: 2, fileName: 'Vistoria_Fevereiro_2024.pdf', url: '/path/to/file2.pdf' },
    ];
    setInspections(fetchedInspections);
  }, [clientEmail]);

  return (
    <InspectionsContainer>
      <InspectionList>
        <h2>Vistorias para {clientEmail}</h2>
        {inspections.length > 0 ? (
          inspections.map((inspection) => (
            <InspectionItem key={inspection.id}>
              <p>{inspection.fileName}</p>
              <Button href={inspection.url} target="_blank">
                Visualizar PDF
              </Button>
            </InspectionItem>
          ))
        ) : (
          <p>Nenhuma vistoria encontrada.</p>
        )}
      </InspectionList>
    </InspectionsContainer>
  );
};

export default ViewInspections;
