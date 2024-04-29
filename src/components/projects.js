import ProjectsJSX from './jsx/projects'
import React, { useState, useEffect } from 'react';

function ProjectsPage({darkTheme, langue, identity}) {


    const frStaticWords = 'Projets Web'
    const enStaticWords = 'Web Projects'


    const frProjects = [
        {
            name: "Application de chat mobile",
            desc1: "Création d'une application en couche permettant à ses utilisateurs de discuter.",
            lien1: "Non déployé",
            image: "chatapp.png"
        },
        {
            name: "Cinetech",
            desc1: "Création d'une cinetech faisant appel à l'API MDB",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/cinetech/movies.php",
            image: "cinetechpic.png"
        },
        {
            name: "Autocomplétion",
            desc1: "Création d'un moteur de recherche lié à une base de données",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/autocompletion/",
            image: "oclockpic.png"
        },
        {
            name: "O Clock",
            desc1: "Création d'une cinetech faisant appel à l'API MDB",
            lien1: "Création d'une horloge, d'un minuteur, d'un chronomètre et d'une alarme en javascript",
            image: "oclockimg.png"
        },
        {
            name: "Boutique en ligne",
            desc1: "Création d'une boutique en ligne fictive",
            lien1: "Non déployé",
            image: "boutiquepic.png"
        },
        {
            name: "Camping",
            desc1: "Développement d'un site web permettant de réserver un séjour dans un camping",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/camping",
            image: "campingpic.png"
        },
        {
            name: "Réservation Salles",
            desc1: "Développement d'un site Web permettant de réserver une salle avec des créneaux fixes",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/reservation-salles",
            image: "reservationpic.png"
        },
        {
            name: "Livres d'Or",
            desc1: "Développement d'un site Web comportant un livre d'or",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/livre-or",
            image: "livreorpic.png"
        },
        {
            name: "App Favorites",
            desc1: "Développement d'un site web présentant mes applications préférées",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/app-favorites/",
            image: "apppic.png"
        },

    ]

    const enProjects = [
        {
            name: "Mobile Chat Application",
            desc1: "Creating a layered application allowing its users to chat.",
            lien1: "Non déployé",
            image: "chatapp.png"
        },
        {
            name: "Cinetech",
            desc1: "Creating a cinetech using the MDB API",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/cinetech/movies.php",
            image: "cinetechpic.png"
        },
        {
            name: "Autocompletion",
            desc1: "Creating a search engine linked to a database",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/autocompletion/",
            image: "oclockpic.png"
        },
        {
            name: "O Clock",
            desc1: "Creating a website with a countdown timer, an alarm and a chronometer in javascript",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/oclock",
            image: "oclockimg.png"
        },
        {
            name: "Online Store",
            desc1: "Creating a fictional online store",
            lien1: "Non déployé",
            image: "boutiquepic.png"
        },
        {
            name: "Camping",
            desc1: "Developing a website for booking a stay at a campground",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/camping",
            image: "campingpic.png"
        },
        {
            name: "Room Reservation",
            desc1: "Developing a website for reserving a room with fixed slots",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/reservation-salles",
            image: "reservationpic.png"
        },
        {
            name: "Guestbook",
            desc1: "Developing a website featuring a guestbook",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/livre-or",
            image: "livreorpic.png"
        },
        {
            name: "Favorite Apps",
            desc1: "Developing a website showcasing my favorite applications",
            lien1: "https://thomas-serdjebi.students-laplateforme.io/PROJECTS/app-favorites/",
            image: "apppic.png"
        }
    ];

    const [staticWords, setStaticWords] = useState(langue === 'FR' ? frStaticWords : enStaticWords);
    const [projects, setProjects] = useState(langue === 'FR' ? frProjects : enProjects);

    useEffect(() => {
        setStaticWords(langue === 'FR' ? frStaticWords : enStaticWords);
        setProjects(langue === 'FR' ? frProjects : enProjects);
    }, [langue]);

    return (
        <ProjectsJSX darkTheme={darkTheme} langue={langue} identity={identity} staticWords={staticWords} projects={projects} />
    )
}

export default ProjectsPage