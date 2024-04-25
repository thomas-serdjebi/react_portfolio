import React from 'react';

function AboutSection({ profile, darkTheme }) {
    return (
        <section id="about" className={`about ${darkTheme ? 'darktheme' : ''}`}>
            <div className={`main sectionboot d-flex pt-5 align-items-center justify-content-center ${darkTheme ? 'darktheme' : ''}`} data-aos="fade-up">

                <div className="section-title">
                    <h2>{profile['titre1']}</h2>
                    <p>{profile['sous_titre_2']}</p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <img src="assets/img/portfolio/profilpic.jfif" className="img-fluid" alt="" />
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
    );
}

export default AboutSection;
