import logo from './logo.svg';
import './App.css';
import HeaderNavBar from './components/navbars/header';
import FooterNavBar from './components/navbars/footer';
import Home from './components/home.js'
import  {useState}  from 'react'
import './styles/main.css'


function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [langue, setLangue] = useState('FR');

  // console.log(darkTheme)

  return (
    <>
      <HeaderNavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} langue={langue} setLangue={setLangue} />
      <Home darkTheme={darkTheme} langue={langue}/>
      <FooterNavBar darkTheme={darkTheme} langue={langue} />
    </>
  );
}

export default App;
