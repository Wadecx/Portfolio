import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Home/home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { gsap } from "gsap";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      " developpeur Frontend !",
      " developpeur de jeux vidéos !",
      " passionné d'informatique !",
      " heureux de vous rencontrer !",
    ],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 3000,
  });


  return (
    <div className="Home">
      <Navbar />
      <div className="accueil">
        <div className="text">
          <h1>
            Bonjour, Je suis <span className="name">Tyron</span>
          </h1>
          <h5>
            Je suis&nbsp;
            <span style={{ fontWeight: "bold", color: "#15C99F" }}>{text}</span>
            <span style={{ color: "#15C99F" }}>
              <Cursor />
            </span>
          </h5>

          <p>
            En tant qu'adepte d'informatique et des langages de programmation,
            j'ai toujours été intrigué par les mécanismes sous-jacents : comment
            fonctionne une machine ? Quels sont les processus pour développer un
            site web, un jeu ou une application ?
          </p>
        </div>

        <div className="image">
          <img src="img/pose4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
