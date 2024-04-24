import React, { useState, useEffect } from 'react';
import HeaderNavBar from './navbars/header';
import FooterNavBar from './navbars/footer';
import '../styles/main.css'


function Profile({}) {

  const [darkTheme, setDarkTheme] = useState(false);
  const [langue, setLangue] = useState('FR');

  const [profile, setProfile] = useState({   
    titre1: '',
    sous_titre_1: '',
    sous_titre_2: '',
    sous_titre_3: '',
    date_naissance: '',
    date: '',
    mobile: '',
    numero: '',
    ville_langue:'',
    titre2: '',
    titre3: '',
    sous_titre4: '',
    sous_titre5: ''
   })

  const [formation, setFormations] = useState([
    {
    diplome: '',
    sous_diplome_1 : '',
    sous_diplome_2 : '',
    sous_diplome_3 : '',
  }]);

  const [experience, setExperience] = useState([{
    poste:'',
    date:'',
    compagnie:'',
    detail: '',
  }])

  useEffect(() => {

    fetch(`https://api/profile=${langue}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      })
      .catch(error => {
        setProfile({
            titre1: 'Profil',
            sous_titre_1: 'Concepteur Développeur d\'Applications',
            sous_titre_2: 'Etudiant en master développement logiciel chez ESIMED',
            sous_titre_3: 'Concepteur Développeur d\'Applications',
            date_naissance: 'Date de naissance',
            date: '07/05/1996',
            ville_langue:'Ville',
            ville:'Marseille',
            mobile: 'mobile',
            numero: '06.26.03.68.77.',
            titre2: 'COMPÉTENCES WEB & PROGRAMMATION',
            titre3: 'CV',
            sous_titre4: 'Formations',
            sous_titre5: 'Expérience professionnelles'
        });
      });

      fetch(`https://api/formation=${langue}`)
      .then(response => response.json())
      .then(data => {
        setFormations(data);
      })
      .catch(error => {
        setFormations([{
            diplome: 'TITRE RNC NIVEAU 6 CONCEPTEUR DEVELOPPEUR D\'APPLICATIONS',
            sous_diplome_1 : 'Conception de projet web et d\'applications, gestion de projet',
            sous_diplome_2 : 'Développement d\'application mobile en couche',
            sous_diplome_3 : 'Création d\'API ',
        }]);
      });

      fetch(`https://api/experience=${langue}`)
      .then(response => response.json())
      .then(data => {
        setExperience(data);
      })
      .catch(error => {
        setExperience([{
            poste:'Développeur L4G Apprenti SAGE X3',
            date:'depuis août 2021',
            compagnie:'Arcanes Intégrateur Sage X3'
        }]);
      });
  }, [langue]);



;

  return (
    <>
    <HeaderNavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} langue={langue} setLangue={setLangue} />
    <section id="about" className="about">
      <div className={`main d-flex pt-5 align-items-center justify-content-center ${darkTheme ? 'darktheme' : ''}`} data-aos="fade-up">

        <div className="section-title">
          <h2>{profile['titre1']}</h2>
          <p>{profile['sous_titre_2']}</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/portfolio/profilpic.jfif" className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>{profile['sous_titre_3']}</h3>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>{profile['date_naissance']}</strong> <span>{profile['date']}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{profile['mobile']}</strong> <span>{profile['numero']}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>{profile['ville_langue']}</strong> <span>{profile['ville']}</span></li>
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
