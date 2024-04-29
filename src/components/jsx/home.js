function HomeJSX({ darkTheme, identity }) {

    return (
      <div className={`main d-flex pt-5 align-items-center justify-content-center ${darkTheme ? 'darktheme' : ''}`}>
        <div className="container text-center fw-bold mt-3">
          <div className="title">
            <p>{identity['prenom']} {identity['nom']}</p>
          </div>
          <div className="subtitle">
            <p>{identity['designation1']}</p>
          </div>
          <div className="subtitle">
            <p>{identity['designation2']}</p>
          </div>
          <button className={`btn  ${darkTheme ? 'btn-light' : 'btn-dark'}`}>
            <a className={`text-decoration-none  ${darkTheme ? 'text-dark' : 'text-light'}`} href="About">
              {identity['designation3']}
            </a>
          </button>
        </div>
      </div>
    )
  
  }

export default HomeJSX