import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './Login';
import Dashbord from './Dashboard';
import CreationDevis from './CreationDevis'
import GestionClients from './GestionClients';
import GestionCommandes from './GestionCommandes';
import CatalogueProduits from './CatalogueProduits'
import GestionStock from './GestionStock'
import GestionFactures from './GestionFacture';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword'

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Inscription */}

        < Route path="/" element={<Navigate to="/signUp" replace />} />
        <Route path="/inscription" element={<SignUp />} />
        {/* mot de passe oublier */}

        <Route path="/" element={<Navigate to="/ForgotPassword" replace />} />
        <Route path="/mot de passe oublier" element={<ForgotPassword />} />


        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashbord />} />

        <Route path="/" element={<Navigate to="/gestion-devis" replace />} />
        <Route path="/gestion-devis" element={<CreationDevis />} />

        <Route path="/" element={<Navigate to="/gestion-clients" replace />} />
        <Route path="/gestion-clients" element={<GestionClients />} />

        <Route path="/" element={<Navigate to="/gestion-commandes" replace />} />
        <Route path="/gestion-commandes" element={<GestionCommandes />} />

        <Route path="/" element={<Navigate to="/catalogue-produits" replace />} />
        <Route path="/catalogue-produits" element={<CatalogueProduits />} />

        <Route path="/" element={<Navigate to="/gestion-de-Stock" replace />} />
        <Route path="/gestion-de-Stock" element={<GestionStock />} />

        < Route path="/" element={<Navigate to="/gestion-de-Facture" replace />} />
        <Route path="/gestion-de-Facture" element={<GestionFactures />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;