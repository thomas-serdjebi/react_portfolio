import logo from './logo.svg';
import './App.css';
import HeaderNavBar from './components/navbars/header';
import FooterNavBar from './components/navbars/footer';
import Home from './components/home.js'
import  {useState}  from 'react'
import './styles/main.css'


function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  // console.log(darkTheme)

  return (
    <>
      <HeaderNavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home darkTheme={darkTheme}/>
      <FooterNavBar />
    </>
  );
}

export default App;
