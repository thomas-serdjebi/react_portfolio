import HomeJSX from './jsx/home';

function HomePage({ darkTheme, identity, langue }) {

  return (
    <HomeJSX darkTheme={darkTheme} identity={identity} langue={langue}/>
  )

}


export default HomePage;
