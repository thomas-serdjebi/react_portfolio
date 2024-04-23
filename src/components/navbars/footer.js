import React from 'react'
import Profile from "../../assets/profile.jpg"


function FooterNavBar() {
    return (<>
        <footer>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <img className="rounded-circle bi me-2" src={Profile} width="40" height="40"></img>
                    </a>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                    </ul>
                </footer>
            </div>
        </footer>
    </>
    )
}

export default FooterNavBar