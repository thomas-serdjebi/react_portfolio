import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNavBar from './components/navbars/header';
import FooterNavBar from './components/navbars/footer';
import HomePage from './components/home';
import AboutPage from './components/about';
import ProjectsPage from './components/projects';
import './styles/main.css';
import './styles/templ.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function Layout() {

    const frIdentity = {
        prenom: 'Thomas',
        nom: 'Serdjebi',
        designation1: 'Développeur Web & Web Mobile',
        designation2: 'Concepteur Développeur d\'applications',
        designation3: 'Découvrez moi '
      }
    
      const enIdentity = {
        prenom: 'Thomas',
        nom: 'Serdjebi',
        designation1: 'Web & Web Mobile Developer',
        designation2: 'Application Conceptor',
        designation3: 'Discover me'
      }

  const [darkTheme, setDarkTheme] = useState(sessionStorage.getItem('darkTheme') === 'true' || false);
  const [langue, setLangue] = useState(sessionStorage.getItem('langue') || 'FR');
  const [identity, setIdentity] = useState(JSON.parse(sessionStorage.getItem('identity')) || (langue === 'FR' ? frIdentity : enIdentity));

  useEffect(() => {

    setIdentity(langue === 'FR' ? frIdentity : enIdentity);
    sessionStorage.setItem('darkTheme', darkTheme ? 'true' : 'false');
    sessionStorage.setItem('langue', langue);
    sessionStorage.setItem('identity', JSON.stringify(identity));

  }, [darkTheme, langue]);

  return (
    <BrowserRouter>
      <HeaderNavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} langue={langue} setLangue={setLangue} identity={identity} />
      <Routes>
        <Route index element={<HomePage darkTheme={darkTheme} langue={langue} identity={identity} />} />
        <Route path="/projects" element={<ProjectsPage darkTheme={darkTheme} langue={langue} identity={identity} />} />
        <Route path="/about" element={<AboutPage darkTheme={darkTheme} langue={langue} identity={identity} />} />
        <Route path="/home" element={<HomePage darkTheme={darkTheme} langue={langue} identity={identity} />} />
      </Routes>
      <FooterNavBar darkTheme={darkTheme} langue={langue} />
    </BrowserRouter>
  );
}

export default Layout;
