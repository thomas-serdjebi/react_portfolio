import React, { useState, useEffect } from 'react';
import Profile from "../../assets/profile.jpg";
import '../../styles/nav.css'

function HeaderNavBar({darkTheme, setDarkTheme, langue}) {

  const [scrolled, setScrolled] = useState(false);
  const [menus, setMenus] = useState([]) 

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

    fetch(`https://api/header=${langue}`)
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
  }, [langue]); 


  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
        <div>
            <header>
                <nav className={`navbar navbar-expand-lg justify-content-between fixed-top ${
                    scrolled ? (darkTheme ? 'navbar-dark' : 'navbar-light') : (darkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light')
                }`}>
                    <nav className="navbar align-top ps-5">
                        <a className="navbar-brand d-flex flex-row" href="#">
                            <div>
                                <img src={Profile} width="60" height="60" className="d-inline-block align-top rounded-circle me-3" alt="" />
                            </div>
                            <div className="d-flex flex-column fw-bold grey_links">
                                <div>Thomas</div>
                                <div>Serdjebi</div>
                            </div>
                        </a>
                    </nav>
                    <div className="fw-bold me-5" id="navbarNav">
                        <ul className="navbar-nav  px-5">
                            {menus.map((menuItem, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link grey_links" href="#">{menuItem}</a>
                                </li>
                            ))}
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
