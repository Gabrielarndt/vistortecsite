import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/service';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import RegisterInspection from './pages/RegisterInspection';
import ViewInspections from './pages/ViewInspections';
import RequestInspection from './pages/RequestInspection';
import ViewRequest from './pages/ViewRequests';
import ClientesPage from './pages/ClientePage';
import UserProfile from './pages/UserProfile';
import InspectionDetails from './pages/InspectionDetails';

import styled from 'styled-components';


const MainContent = styled.main`
  flex: 1; /* Faz o conteúdo principal crescer para preencher o espaço disponível */
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Faz o contêiner ocupar toda a altura da tela */
  background-color: white;
`;

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const userEmail = Cookies.get('userEmail');
    if (!userEmail) {
      navigate('/login'); // Redireciona para a página de login se o cookie não existir
    }
  }, [navigate]);

  return element;
};

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
              element={<ProtectedRoute element={<ViewInspections clientEmail="cliente@exemplo.com" />} />}
            />
            <Route path="/request-inspection" element={<ProtectedRoute element={<RequestInspection />} />} />
            <Route path="/view-request" element={<ProtectedRoute element={<ViewRequest />} />} />
            <Route path="/clientesPage" element={<ProtectedRoute element={<ClientesPage />} />} />
            <Route path="/clientesPage" element={<ProtectedRoute element={<ClientesPage />} />} />
            <Route path="/user-profile" element={<ProtectedRoute element={<UserProfile />} />} />
            <Route path="/inspection/:id" element={<ProtectedRoute element={<InspectionDetails />} />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
