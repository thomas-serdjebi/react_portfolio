
import Profile from "../../assets/profile.jpg"
import '../../styles/nav.css'
import React, { useState, useEffect } from 'react';


function FooterNavBar({darkTheme, langue}) {

  const [text, setText] = useState([])

    return (
       <>
        <div className={` ${(darkTheme ? 'darktheme' : ' ') }`}>
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-3 border-top fw-bold">
                <p className="col-md-4 mb-0 grey_links">{text[0]}</p>
                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img className="rounded-circle bi me-2" src={Profile} width="40" height="40" alt="Profile"></img>
                </a>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 grey_links">{text[1]}</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 grey_links">{text[2]}</a></li>
                </ul>
            </footer>
        </div>
    </>
    )
}

export default FooterNavBar