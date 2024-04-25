import React from 'react';
import Profile from '../../assets/homepng.png';

function AboutSection({ staticWords, profile, darkTheme }) {
    return (
        <section id="about" className={`about ${darkTheme ? 'darktheme' : ''}`} style={{ paddingTop: '56px' }}>
            <div className={`main sectionboot d-flex pt-3 align-items-center justify-content-center ${darkTheme ? 'darktheme' : ''}`} data-aos="fade-up">
                <div className="container">
                    <div className="section-title mt-3">
                        <h2>{staticWords['titre1']}</h2>
                        <p>{profile['sous_titre_2']}</p>
                    </div>

                    <div className="row align-items-center"> 
                        <div className="col-lg-4">
                            <img src={Profile} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-3 pt-lg-0 content">
                            <h3>{profile['sous_titre_3']}</h3>

                            <div className="row">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><strong>{staticWords['date_naissance']}:</strong> {profile['date']}</li>
                                        <li><strong>{staticWords['mobile']}:</strong> {profile['numero']}</li>
                                        <li><strong>{staticWords['ville_langue']}:</strong> {profile['ville']}</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><strong>Age:</strong> {profile['age']}</li>
                                        <li><strong>Email:</strong> {profile['email']}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
