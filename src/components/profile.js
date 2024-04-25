import React, { useState, useEffect } from 'react';
import HeaderNavBar from './navbars/header';
import FooterNavBar from './navbars/footer';
import '../styles/main.css'
import '../styles/templ.css'


function Profile({ }) {

    const [darkTheme, setDarkTheme] = useState(false);
    const [langue, setLangue] = useState('FR');

    const [profile, setProfile] = useState({
        titre1: '',
        sous_titre_1: '',
        sous_titre_2: '',
        sous_titre_3: '',
        date_naissance: '',
        date: '',
        ville_langue: '',
        ville: '',
        mobile: '',
        age: '',
        numero: '',
        email: '',
        titre2: '',
        sous_titre4: '',
        sous_titre5: '',
        sous_titre6: ''
    })

    const [formations, setFormations] = useState([
        {
            diplome: '',
            annee: '',
            ecole: '',
            sous_diplome_1: '',
            sous_diplome_2: '',
            sous_diplome_3: '',
        }]);

    const [experiences, setExperiences] = useState([{
        poste: '',
        date: '',
        compagnie: '',
        detail_1: '',
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
                    ville_langue: 'Ville',
                    ville: 'Marseille',
                    mobile: 'mobile',
                    age: '27',
                    numero: '06.26.03.68.77.',
                    email: 'thomas.r.serdjebi@gmail.com',
                    titre2: 'Parcours',
                    sous_titre4: 'Initialement issu d \'un parcours en comptabilité, je me suis reconverti en tant que Développeur Web & Web Mobile.',
                    sous_titre5: 'Formations',
                    sous_titre6: 'Expérience professionnelles'
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
                    ecole: 'La plateforme',
                    annee: '2023',
                    sous_diplome_1: 'Conception de projet web et d\'applications, gestion de projet',
                    sous_diplome_2: 'Développement d\'application mobile en couche',
                    sous_diplome_3: 'Création d\'API ',
                }]);
            });

        fetch(`https://api/experience=${langue}`)
            .then(response => response.json())
            .then(data => {
                setExperiences(data);
            })
            .catch(error => {
                setExperiences([{
                    poste: 'Développeur L4G Apprenti SAGE X3',
                    date: 'depuis août 2021',
                    compagnie: 'Arcanes Intégrateur Sage X3',
                    sous_experience1: 'Développement de script spécifiques L4G notamment en module finance',
                    sous_experience2: 'Analyse de besoins clients',
                    sous_experience3: 'Rédaction de documentations techniques et fonctionnelles'

                }]);
            });
    }, [langue]);



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
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{profile['age']}</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{profile['email']}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id="resume" class="resume">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>{profile['titre2']}</h2>
                        <p>{profile['sous_titre4']}</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">{profile['sous_titre5']}</h3>
                            {formations.map((formation, index) => (
                                <div key={index} className="resume-item">
                                    <h4>{formation['diplome']}</h4>
                                    <h5>{formation['annee']}</h5>
                                    <p><em>{formation['ecole']}</em></p>
                                    {(formation['sous_diplome_1'] || formation['sous_diplome_2'] || formation['sous_diplome_3']) &&
                                        <ul>
                                            {formation['sous_diplome_1'] && <li>{formation['sous_diplome_1']}</li>}
                                            {formation['sous_diplome_2'] && <li>{formation['sous_diplome_2']}</li>}
                                            {formation['sous_diplome_3'] && <li>{formation['sous_diplome_3']}</li>}
                                        </ul>
                                    }
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-6">
                            <h3 className="resume-title">{profile['sous_titre6']}</h3>
                            {experiences.map((experience, index) => (
                                <div key={index} className="resume-item">
                                    <h4>{experience['poste']}</h4>
                                    <h5>{experience['date']}</h5>
                                    <p><em>{experience['compagnie']}</em></p>
                                    <ul>
                                        {experience['sous_experience_1'] && <li>{experience['sous_experience_1']}</li>}
                                        {experience['sous_experience_2'] && <li>{experience['sous_experience_2']}</li>}
                                        {experience['sous_experience_3'] && <li>{experience['sous_experience_3']}</li>}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <FooterNavBar darkTheme={darkTheme} langue={langue} />
        </>
    )

}


export default Profile;
