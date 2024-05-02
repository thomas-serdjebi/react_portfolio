import React, { useState, useEffect } from 'react';
import Profile from "../../assets/profile.jpg";
import '../../styles/nav.css'

function HeaderNavBar({ darkTheme, setDarkTheme, identity, langue, setLangue, setIsLoggedIn, isLoggedIn }) {

  const [scrolled, setScrolled] = useState(false);
  const [activeLangue, setActiveLangue] = useState(langue);
  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const frMenus = {
    home: 'Accueil',
    about: 'Profil',
    projects: 'Projets',
    blog: 'Blog'
  };

  const enMenus = {
    home: 'Home',
    about: 'Profile',
    projects: 'Projects',
    blog: 'Blog'
  };

  const [menus, setMenus] = useState(langue === 'FR' ? frMenus : enMenus);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };


    setMenus(langue === 'FR' ? frMenus : enMenus);
    setActiveLangue(langue);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [langue]);

  useEffect(() => {
    sessionStorage.setItem('langue', langue);
  }, [langue]);


  useEffect(() => {
    sessionStorage.setItem('darkTheme', darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const changeLangue = (lang) => {
    setLangue(lang);
    setActiveLangue(lang);
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setToken(null);
    setIsLoggedIn(false)
  };

  return (
    <>
      <div>
        <header>
          <nav className={`navbar navbar-expand-lg justify-content-between fixed-top ${scrolled ? (darkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light') : (darkTheme ? 'navbar-dark' : 'navbar-light')}`}>
            <nav className="navbar align-top ps-5">
              <a className="navbar-brand d-flex flex-row" href="#">
                <div>
                  <img src={Profile} width="60" height="60" className="d-inline-block align-top rounded-circle me-3" alt="" />
                </div>
                <div className="d-flex flex-column fw-bold grey_links">
                  <div>{identity['prenom']}</div>
                  <div>{identity['nom']}</div>
                </div>
              </a>
            </nav>
            <div className="fw-bold me-5" id="navbarNav">
              <ul className="navbar-nav  px-5">
                {Object.keys(menus).map((key, index) => (
                  <li className="nav-item" key={index}>
                    <a className="nav-link grey_links" href={`/${key}`}>{menus[key]}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="btn-group me-3" role="group" aria-label="Language">
              <button type="button" className={`btn ${activeLangue === 'EN' ? (darkTheme ? 'btn-light' : 'btn-dark') : (darkTheme ? 'btn-dark' : 'btn-light')}`} onClick={() => changeLangue('EN')}>EN</button>
              <button type="button" className={`btn ${activeLangue === 'FR' ? (darkTheme ? 'btn-light' : 'btn-dark') : (darkTheme ? 'btn-dark' : 'btn-light')}`} onClick={() => changeLangue('FR')}>FR</button>
            </div>
            {isLoggedIn ? (
              <button className={`btn ${darkTheme ? 'btn-light' : 'btn-dark'}`} onClick={handleLogout}>
                {langue === 'FR' ? 'Déconnexion' : 'Logout'}
              </button>
            ) : null}
            <button className={`btn ${darkTheme ? 'btn-light' : 'btn-dark'}`} onClick={toggleTheme}>Theme</button>
          </nav>
        </header>
      </div>

      <div style={{ marginTop: scrolled ? '75px' : '0' }}></div>
    </>
  );
}

export default HeaderNavBar;
