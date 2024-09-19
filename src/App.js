import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import RegisterInspection from './pages/RegisterInspection';
import ViewInspections from './pages/ViewInspections';
import RequestInspection from './pages/RequestInspection';
import ViewRequest from './pages/ViewRequests';
import ClientesPage from './pages/ClientePage';
import styled from 'styled-components';

const MainContent = styled.main`
  flex: 1; /* Faz o conteúdo principal crescer para preencher o espaço disponível */
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Faz o contêiner ocupar toda a altura da tela */
`;

const App = () => {
  return (
    <Router>
       <AppContainer>
       <MainContent>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-inspection" element={<RegisterInspection />} />
        <Route
          path="/view-inspections"
          element={<ViewInspections clientEmail="cliente@exemplo.com" />}
        />
        <Route path="/request-Inspection" element={<RequestInspection />} />
        <Route path="/view-request" element={<ViewRequest />} />
        <Route path="/clientesPage" element={<ClientesPage />} />
      </Routes>
      </MainContent>
      <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
