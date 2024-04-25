import React, { useState, useEffect } from 'react';
import HeaderNavBar from './navbars/header';
import FooterNavBar from './navbars/footer';
import AboutSection from './sections/about';
import ResumeSection from './sections/resume';
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
            intitule: '',
            annee: '',
            compagnie_lieu: '',
            detail_1: '',
            detail_2: '',
            detail_3: '',
        }]);

    const [experiences, setExperiences] = useState([{
        intitule: '',
        annee: '',
        compagnie_lieu: '',
        detail_1: '',
        detail_2: '',
        detail_3: '',
    }])

    const frProfile = {
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
        sous_titre4: 'Initialement issu d \'un parcours en comptabilité, je me suis reconverti en tant que Développeur Web & Logiciel.',
        sous_titre5: 'Formations',
        sous_titre6: 'Expérience professionnelles'
    }

    const enProfile =
    {
        sous_titre_1: 'Application Developer',
        sous_titre_2: 'Master student in software development at ESIMED',
        sous_titre_3: 'Application Developer',
        date_naissance: 'Date of Birth',
        date: '07/05/1996',
        ville_langue: 'City',
        ville: 'Marseille',
        mobile: 'Mobile',
        age: '27',
        numero: '06.26.03.68.77.',
        email: 'thomas.r.serdjebi@gmail.com',
        titre2: 'Background',
        sous_titre4: 'Originally from an accounting background, I retrained as a Web & Software Developer.',
        sous_titre5: 'Education',
        sous_titre6: 'Professional Experience
    }

    const frFormation = [
        {
            intitule: 'TITRE RNC NIVEAU 7 EXPERT EN DEVELOPPEMENT LOGICIEL',
            compagnie_lieu: 'ESIMED',
            annee: '2023-2025',
            detail_1: 'Gestion de projet',
            detail_2: 'Ingénierie logicielle',
            detail_3: 'Développement',
        },
        {
            intitule: 'TITRE RNC NIVEAU 6 CONCEPTEUR DEVELOPPEUR D\'APPLICATIONS',
            compagnie_lieu: 'La Plateforme',
            annee: '2023',
            detail_1: 'Conception de projet web et d\'applications, gestion de projet',
            detail_2: 'Développement d\'application mobile en couche',
            detail_3: 'Création d\'API ',
        },
        {
            intitule: 'DIPLOME DE COMPTABILTIE ET GESTION',
            compagnie_lieu: 'Groupe Ecole Pratique',
            annee: '2018 - 2020',
            detail_1: '',
            detail_2: '',
            detail_3: '',
        },
        {
            intitule: 'BTS COMPTABILITÉ ET GESTION',
            compagnie_lieu: 'Lycée Jeanne Perrimond',
            annee: '2015 - 2017',
            detail_1: '',
            detail_2: '',
            detail_3: '',
        },
        {
            intitule: 'BACCALAURÉAT SCIENTIFIQUE MENTION EUROPÉENNE ANGLAIS',
            compagnie_lieu: 'Lycée Montgrand',
            annee: '2014',
            detail_1: '',
            detail_2: '',
            detail_3: '',
        }


    ]

    const enFormation = [
        {
            intitule: 'RNC TITLE LEVEL 7 EXPERT IN SOFTWARE DEVELOPMENT',
            compagnie_lieu: 'ESIMED',
            annee: '2023-2025',
            detail_1: 'Project Management',
            detail_2: 'Software Engineering',
            detail_3: 'Development',
        },
        {
            intitule: 'RNC TITLE LEVEL 6 APPLICATIONS DESIGNER DEVELOPER',
            compagnie_lieu: 'La Plateforme',
            annee: '2023',
            detail_1: 'Web and application project design, project management',
            detail_2: 'Layered mobile application development',
            detail_3: 'API Creation',
        },
        {
            intitule: 'ACCOUNTING AND MANAGEMENT DIPLOMA',
            compagnie_lieu: 'Groupe Ecole Pratique',
            annee: '2018 - 2020',
            detail_1: '',
            detail_2: '',
            detail_3: '',
        },
        {
            intitule: 'BTS ACCOUNTING AND MANAGEMENT',
            compagnie_lieu: 'Jeanne Perrimond High School',
            annee: '2015 - 2017',
            detail_1: '',
            detail_2: '',
            detail_3: '',
        },
        {
            intitule: 'BACCALAUREATE SCIENTIFIC MENTION ENGLISH EUROPEAN',
            compagnie_lieu: 'Montgrand High School',
            annee: '2014',
            detail_1: '',
            detail_2: '',
            detail_3: '',
        }

    ]

    const frExperience = [
        {
            poste: 'Développeur L4G Apprenti SAGE X3',
            annee: 'depuis août 2021',
            compagnie_lieu: 'Arcanes Intégrateur Sage X3, Marseille',
            detail_1: 'Développement de script spécifiques L4G notamment en module finance',
            detail_2: 'Analyse de besoins clients',
            detail_3: 'Rédaction de documentations techniques et fonctionnelles'

        },
        {
            poste: 'COMPTABLE FOURNISSEUR',
            annee: 'Mai 2021 - Septembre 202',
            compagnie_lieu: 'Bourbon Offshore Surf, Marseille',
            detail_1: '',
            detail_2: '',
            detail_3: ''

        },
        {
            poste: 'COMPTABLE CLIENT',
            annee: 'Septembre 2020 - Avril 2021',
            compagnie_lieu: 'Comasud, Marseille',
            detail_1: '',
            detail_2: '',
            detail_3: ''

        },
        {
            poste: 'ASSISTANT COMPTABLE APPRENTI',
            annee: 'Septembre 2020 - Avril 2021',
            compagnie_lieu: 'cabinet A3A Entreprises, Marseille',
            detail_1: '',
            detail_2: '',
            detail_3: ''

        },

    ]

    const enExperience = [
        {
            poste: 'Apprentice L4G Developer SAGE X3',
            annee: 'since August 2021',
            compagnie_lieu: 'Arcanes Sage X3 Integrator, Marseille',
            detail_1: 'Development of specific L4G scripts, particularly in finance module',
            detail_2: 'Customer needs analysis',
            detail_3: 'Preparation of technical and functional documentation'
        },
        {
            poste: 'Supplier Accountant',
            annee: 'May 2021 - September 202',
            compagnie_lieu: 'Bourbon Offshore Surf, Marseille',
            detail_1: '',
            detail_2: '',
            detail_3: ''
        },
        {
            poste: 'Customer Accountant',
            annee: 'September 2020 - April 2021',
            compagnie_lieu: 'Comasud, Marseille',
            detail_1: '',
            detail_2: '',
            detail_3: ''
        },
        {
            poste: 'Assistant Apprentice Accountant',
            annee: 'September 2020 - April 2021',
            compagnie_lieu: 'A3A Enterprises Accounting Firm, Marseille',
            detail_1: '',
            detail_2: '',
            detail_3: ''
        }
    ]
    


    useEffect(() => {

        fetch(`https://api/profile=${langue}`)
            .then(response => response.json())
            .then(data => {
                setProfile(data);
            })
            .catch(error => {
                if (langue === "FR") {
                    setProfile(frProfile)
                } 

                if (langue === "EN") {
                    setProfile(enProfile)
                }
            });

        fetch(`https://api/formation=${langue}`)
            .then(response => response.json())
            .then(data => {
                setFormations(data);
            })
            .catch(error => {
                if (langue === "FR") {
                    setFormations(frFormation)
                } 

                if (langue === "EN") {
                    setFormations(enFormation)
                }
            });

        fetch(`https://api/experience=${langue}`)
            .then(response => response.json())
            .then(data => {
                setExperiences(data);
            })
            .catch(error => {
                if (langue === "FR") {
                    setExperiences(frExperience)
                } 

                if (langue === "EN") {
                    setProfile(enExperience)
                }
            });
    }, [langue]);



    return (
        <>
            <HeaderNavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} langue={langue} setLangue={setLangue} />
            <AboutSection profile={profile} darkTheme={darkTheme} />
            <ResumeSection profile={profile} formations={formations} experiences={experiences} darkTheme={darkTheme} />
            <FooterNavBar darkTheme={darkTheme} langue={langue} />
        </>
    )

}


export default Profile;
