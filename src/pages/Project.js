import React from "react";
import '../styles/project.css';
import projects from "../data/projectSection";

const ProjectsPage = () => {
    return (
        <section className="main-container" id="projects">
            <div className="container">
                <h2>Projects</h2>
                <p>Explore my Projects page, where I leverage full stack technologies and diverse tools to create user-centric experiences with a focus on performance. Seamlessly integrating intuitive interfaces with robust functionality, my portfolio reflects a commitment to exceptional design and optimal user satisfaction.</p>
                <div className="project-container">
                    {projects.map(project => (
                    <div className="project">
                        <h3>{project.heading}</h3>
                        <img src={project.image} alt="Steam Sale app" />
                        <p>{project.description}</p>
                        <hr />
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage