import React, { useState, useEffect } from "react";
import "../Project/Project.css";
import Navbar from "../../Components/Navbar/Navbar";
import { projects } from "../../JS/projects";
import { FaPlus } from "react-icons/fa";

const Project = () => {
  useEffect(() => {}, []);

  return (
    <div className="project">
      <Navbar />
      <div className="main">
        <h1>Projets</h1>
        <div className="cards">
          {projects.map((project) => (
            <div className="project_card">
              <h3>{project.title}</h3>
              <img src={project.path} alt="" />
              <h3 className="type">Type de contenu : {project.type}</h3>
              <p>Description : {project.desc}</p>
              {project.link && (
                <div className="link">
                  {project.indev === "no" ? (
                    <a href={project.link} target="_blank">
                      Voir plus  <FaPlus />
                    </a>
                  ) : (
                    <a href={project.link}>Voir plus <FaPlus /></a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
