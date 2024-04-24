import React, { useState, useEffect } from 'react';
import BackgroundImage from "../assets/homepng.png";


function Home({ darkTheme, langue }) {

  const [text, setText] = useState({
    titre: '',
    sous_titre_1: '',
    sous_titre_2: '',
    bouton: ''
  });

  useEffect(() => {

    fetch(`https://api/home=${langue}`)
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
    <div className={`main d-flex pt-5 align-items-center justify-content-center ${darkTheme ? 'darktheme' : ''}`}>
    <div className="container text-center fw-bold mt-3"  style={{backgroundImage: BackgroundImage}}>
      <div className="title">
        <p>{text['titre']}</p>
      </div>
      <div className="subtitle">
        <p>{text['sous_titre_1']}</p>
      </div>
      <div className="subtitle">
        <p>{text['sous_titre_2']}</p>
      </div>
      <button className={`btn  ${darkTheme ? 'btn-light' : 'btn-dark'}`}>{text['bouton']}</button>
    </div>
  </div>
  )

}


export default Home;
