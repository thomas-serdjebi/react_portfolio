import React from 'react'
import Profile from "../../assets/profile.jpg"


function HeaderNavBar() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={Profile} width="40" height="40" className="d-inline-block align-top rounded-circle" alt=""></img>
            Thomas Serdjebi
        </a>
      </nav>
      <div className="" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">ACCUEIL</a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">A PROPOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">PROJETS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">CONTACTS</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
  )
}

export default HeaderNavBar