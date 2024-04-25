import React from 'react';

function ResumeSection({ profile, formations, experiences, darkTheme }) {
    return (
        <section id="resume" className={`resume ${darkTheme ? 'darktheme' : ''}`}>
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
                            <h4>{formation['intitule']}</h4>
                            <h4>{formation['annee']}</h4>
                            <p><em>{formation['compagnie_lieu']}</em></p>
                            {(formation['detail_1'] || formation['detail_2'] || formation['detail_3']) &&
                                <ul>
                                    {formation['detail_1'] && <li>{formation['detail_1']}</li>}
                                    {formation['detail_2'] && <li>{formation['detail_2']}</li>}
                                    {formation['detail_3'] && <li>{formation['detail_3']}</li>}
                                </ul>
                            }
                        </div>
                    ))}
                </div>

                <div className="col-lg-6">
                    <h3 className="resume-title">{profile['sous_titre6']}</h3>
                    {experiences.map((experience, index) => (
                        <div key={index} className="resume-item">
                            <h4>{experience['intitule']}</h4>
                            <h4>{experience['annee']}</h4>
                            <p><em>{experience['compagnie_lieu']}</em></p>
                            <ul>
                                {experience['detail__1'] && <li>{experience['detail__1']}</li>}
                                {experience['detail__2'] && <li>{experience['detail__2']}</li>}
                                {experience['detail__3'] && <li>{experience['detail__3']}</li>}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
    );
}

export default ResumeSection;
