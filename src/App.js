import logo from './logo.svg';
import './App.css';
import HeaderNavBar from './components/navbars/header';
import FooterNavBar from './components/navbars/footer';
import  './styles/body.css';

function App() {
  return (
    <>
      <HeaderNavBar/>
      <body style={{height: '3000px', backgroundColor: '#eaeaea'}}>

      </body>
      <FooterNavBar/>
    </>
  );
}

export default App;
