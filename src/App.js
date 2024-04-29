import logo from './logo.svg';
import './App.css';
import HeaderNavBar from './components/navbars/header';
import FooterNavBar from './components/navbars/footer';
import Home from './components/home.js'
import { useState, useEffect } from 'react'
import './styles/main.css'

function App() {

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
    sessionStorage.setItem('langue', langue);
    sessionStorage.setItem('darkTheme', darkTheme ? 'true' : 'false');
    sessionStorage.setItem('identity', JSON.stringify(identity));

    // fetch(`https://api/identity=${langue}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setIdentity(data);
    //     sessionStorage.setItem('identity', JSON.stringify(data));
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, [langue, darkTheme, identity]);

  return (
    <>
      <HeaderNavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} langue={langue} setLangue={setLangue} identity={identity} />
      <Home darkTheme={darkTheme} langue={langue} identity={identity} />
      <FooterNavBar darkTheme={darkTheme} langue={langue} />
    </>
  );
}

export default App;
