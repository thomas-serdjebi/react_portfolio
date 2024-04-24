import React, { useState, useEffect } from 'react';
import HeaderNavBar from './navbars/header';
import FooterNavBar from './navbars/footer';
import '../styles/main.css'


function Profile({}) {

  const [darkTheme, setDarkTheme] = useState(false);
  const [langue, setLangue] = useState('FR');

  const [text, setText] = useState({
    titre: '',
    sous_titre_1: '',
    sous_titre_2: '',
    bouton: ''
  });

  useEffect(() => {

    fetch(`https://api/profile=${langue}`)
      .then(response => response.json())
      .then(data => {
        setText(data);
      })
      .catch(error => {
        setText({
          titre: "Thomas Serdjebi",
          sous_titre_1: "Développeur Web & Web Mobile",
          sous_titre_2: "Concepteur Développeur d'applications",
          bouton: "A propos de moi"
        });
      });

  }, [langue]);

;

  return (
    <>
    <HeaderNavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} langue={langue} setLangue={setLangue} />
    <section id="about" className="about">
      <div className={`main d-flex pt-5 align-items-center justify-content-center ${darkTheme ? 'darktheme' : ''}`} data-aos="fade-up">

        <div className="section-title">
          <h2>Profil</h2>
          <p>Développeur Web & Web Mobile Junior, étudiant à <a href='https://laplateforme.io/'>La Plateforme_</a>.</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/portfolio/profilpic.jfif" className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Développeur Web & Web Mobile Junior.</h3>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Date de naissance:</strong> <span>7 Mai 1996</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Mobile:</strong> <span>06.01.18.58.45.</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Ville:</strong> <span>Marseille, FRANCE</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Niveau d'études:</strong> <span>Bac +2</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>thomas.serdjebi@laplateforme.io</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  <FooterNavBar darkTheme={darkTheme} langue={langue} />
  </>
  )

}


export default Profile;
