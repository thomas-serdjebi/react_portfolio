import React from 'react';

function SkillsJSX({ staticWords, skillsLang, skillsFrame, darkTheme }) {
    return (
        <section id="skills" className={`skills section-bg resume ${darkTheme ? 'darktheme' : ''}`}>
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>{staticWords['titre5']}</h2>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">

                        {skillsLang.map((skill, index) => (

                            <div key={index} className="progress">
                                <span className={`skill ${darkTheme ? 'text-light': ''}`}>{skill['name']}<i className="val">{skill['value']}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${skill['value']}%` }} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        ))
                        }

                    </div>

                    <div className="col-lg-6">


                        {skillsFrame.map((skill, index) => (

                            <div key={index} className="progress">
                                <span className={`skill ${darkTheme ? 'text-light': ''}`}>{skill['name']}<i className="val">{skill['value']}%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: `${skill['value']}%` }} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                        ))
                        }

                    </div>

                </div>

            </div>
        </section>

    );
}

export default SkillsJSX;
