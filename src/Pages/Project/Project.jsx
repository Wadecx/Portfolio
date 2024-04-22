import React, { useState, useEffect } from "react";
import "../Project/Project.css";
import Navbar from "../../Components/Navbar/Navbar";
import { projects } from "../../JS/projects";

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
