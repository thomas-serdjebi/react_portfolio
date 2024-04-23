import React from 'react'
import Profile from "../../assets/profile.jpg"


function HeaderNavBar() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <nav className="navbar align-top navbar-light bg-light ps-5">
        <a className="navbar-brand d-flex flex-row" href="#">
          <div><img src={Profile} width="60" height="60" className="d-inline-block align-top rounded-circle me-3" alt=""></img></div>
            <div className="d-flex flex-column fw-bold">
              <div>Thomas</div>
              <div>Serdjebi</div>
            </div>
        </a>
      </nav>
      <div className="fw-bold me-5" id="navbarNav">
        <ul className="navbar-nav px-5">
          <li className="nav-item">
            <a className="nav-link " href="#">ACCUEIL</a>
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
    </nav>
  </>
  )
}

export default HeaderNavBar