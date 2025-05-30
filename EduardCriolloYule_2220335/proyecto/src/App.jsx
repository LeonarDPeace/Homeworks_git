import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import menuTree from './data.js';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import ProfileHistory from './pages/ProfileHistory';
import Settings from './pages/Settings';
import AccountSettings from './pages/AccountSettings';
import PrivacySettings from './pages/PrivacySettings';
import NotificationSettings from './pages/NotificationSettings';
import AppearanceSettings from './pages/AppearanceSettings';
import Help from './pages/Help';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Tutorials from './pages/Tutorials';
import About from './pages/About';
import Team from './pages/Team';
import Version from './pages/Version';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <SidebarMenu menuTree={menuTree} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/perfil/editar" element={<EditProfile />} />
            <Route path="/perfil/historial" element={<ProfileHistory />} />
            <Route path="/configuracion" element={<Settings />} />
            <Route path="/configuracion/cuenta" element={<AccountSettings />} />
            <Route path="/configuracion/privacidad" element={<PrivacySettings />} />
            <Route path="/configuracion/notificaciones" element={<NotificationSettings />} />
            <Route path="/configuracion/apariencia" element={<AppearanceSettings />} />
            <Route path="/ayuda" element={<Help />} />
            <Route path="/ayuda/faq" element={<FAQ />} />
            <Route path="/ayuda/contacto" element={<Contact />} />
            <Route path="/ayuda/tutoriales" element={<Tutorials />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/acerca/equipo" element={<Team />} />
            <Route path="/acerca/version" element={<Version />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;