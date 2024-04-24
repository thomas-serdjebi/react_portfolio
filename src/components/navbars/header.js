import React, { useState, useEffect } from 'react';
import Profile from "../../assets/profile.jpg";
import '../../styles/header.css'

function HeaderNavBar({darkTheme, setDarkTheme}) {

  const [scrolled, setScrolled] = useState(false);
  const [menus, setMenus] = useState([]) 
  const [langueInput, setLangueInput] = useState('FRA');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
        console.log('scrolled')
      } else {
        setScrolled(false);
      }
    };

    fetch(`https://api/menus=${langueInput}`)
      .then(response => response.json())
      .then(data => {
          setMenus(data);
      })
      .catch(error => {
        setMenus(['Accueil', 'À propos', 'Projets', 'Contacts']); 
      });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [langueInput]); 


  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
    <div>
      <header>
      <nav className={`navbar navbar-expand-lg justify-content-between fixed-top ${scrolled ? 'scrolled' : ''} ${darkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
          <nav className="navbar align-top ps-5">
            <a className="navbar-brand d-flex flex-row" href="#">
              <div>
                <img src={Profile} width="60" height="60" className="d-inline-block align-top rounded-circle me-3" alt="" />
              </div>
              <div className="d-flex flex-column fw-bold name">
                <div>Thomas</div>
                <div>Serdjebi</div>
              </div>
            </a>
          </nav>
          <div className="fw-bold me-5" id="navbarNav">
            <ul className="navbar-nav px-5">
              <li className="nav-item">
                <a className="nav-link" href="#">ACCUEIL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">A PROPOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PROJETS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACTS</a>
              </li>
            </ul>
          </div>
          <button onClick={toggleTheme}>Theme</button> 
        </nav>
      </header>
      </div>
    </>
  );
}

export default HeaderNavBar;
