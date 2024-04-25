import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "../About/About.css";
import { BiSolidCalendarAlt } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { SiEdotleclerc } from "react-icons/si";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="abt">
        <div className="text">
          <h1>Qui-suis-je ?</h1>
          <h2>
            Je suis MORCEL Tyron, Developpeur{" "}
            <span className="lime">multi-orientés</span>
          </h2>
          <p className="para">
            J'ai cultivé une véritable passion pour les applications web,
            applications, et jeux vidéo et je consacre un temps considérable à
            élaborer des projets personnels pour mettre mes compétences à
            l'épreuve ! Ma persévérance me guide, car chaque erreur représente
            une opportunité d'enrichir mes connaissances.
          </p>

          <ul className="list">
            <li>
              {" "}
              <span className="important">Réside à :</span> Mont-de-Marsan
            </li>
            <li>
              <span className="important">Emploi Actuel :</span>{" "}
              <SiEdotleclerc className="blue" /> Leclerc Mont-de-Marsan
            </li>
            <li>
              <span className="important">Age :</span> 21 ans
            </li>
          </ul>
          <div className="skills">
            <h2>Mes Soft Skill</h2>
            <ul className="softskill">
              <li>Travail d'équipe</li>
              <li>Autonomie</li>
              <li>Rigueur</li>
              <li>Curiosité</li>
              <li>Motivé</li>
              <li>Serieux</li>
            </ul>
          </div>

          <h2 className="title">Formations</h2>
          <div className="Formations">
            <div className="card">
              <h4>
                <GoDotFill className="limer" />
                <BiSolidCalendarAlt /> 2018-2021
              </h4>
              <div className="pad">
                <h5>Baccalauréat</h5>
                <p>
                  Baccalauréat Professionnel Système Numérique Option Réseaux
                  informatiques et systèmes communicants.
                </p>
              </div>
            </div>
            <div className="card">
              <h4>
                <GoDotFill className="limer" />
                <BiSolidCalendarAlt />
                2021
              </h4>
              <div className="pad">
                <h5>English Certificate</h5>
                <p>Cambridge english Certificate (CEC) Niveau B2 +</p>
              </div>
            </div>
            <div className="card">
              <h4>
                <GoDotFill className="limer" />
                <BiSolidCalendarAlt /> 2018-2020
              </h4>
              <div className="pad">
                <h5>Brevet d'étude professionnel</h5>
                <p>Obtention du Brevet d'étude professionnel (BEP)</p>
              </div>
            </div>
          </div>
          <div className="logiciel">
            <h2>Frontend</h2>
            <div className="web">
              <div className="card">
                <h3>HTML</h3>
                <img src="img/html.png" alt="" />
              </div>

              <div className="card">
                <h3>CSS</h3>
                <img src="img/css.png" alt="" />
              </div>
              <div className="card">
                <h3>JavaScript</h3>
                <img src="img/js.png" alt="" />
              </div>
            </div>

            <h2>Applications</h2>
            <div className="apps">
              <div className="card">
                <h3>Unity</h3>
                <img src="img/unity.png" alt="" />
              </div>
              <div className="card">
                <h3>Vs Code</h3>
                <img src="img/vscode.png" alt="" />
              </div>
              <div className="card">
                <h3>Vs C#</h3>
                <img src="img/vs.png" alt="" />
              </div>
            </div>

            <div className="apps"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
