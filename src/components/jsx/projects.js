function ProjectsJSX({ darkTheme, identity, langue, staticWords, projects }) {

    return (
        <section id="portfolio" className={`portfolio section-bg ${darkTheme ? 'darktheme' : ''}`} style={{ paddingTop: '100px' }}>
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>{staticWords}</h2>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-html filter-css filter-php filter-javaScript">
                            <div className="portfolio-wrap">
                                <img src={require(`../../assets/${project.image}`)} className="img-fluid" alt={project.name} />
                                <div className="portfolio-info">
                                    <h4>{project.name}</h4>
                                    <p className="text-dark fw-bold">{project.desc1}</p>
                                    {project.lien1 === "Non déployé" ? (
                                        <p>Non déployé</p>
                                    ) : (
                                        <a href={project.lien1} className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer">Cliquez ici pour voir</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>


    )

}

export default ProjectsJSX