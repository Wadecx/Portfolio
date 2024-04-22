import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Home/home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      " developpeur Web !",
      " developpeur jeux videos !",
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
            Je suis
            <span style={{ fontWeight: "bold", color: "#15C99F" }}>{text}</span>
            <span style={{ color: "#15C99F" }}>
              <Cursor />
            </span>
          </h5>

          <p>
            Étant un passionné d'informatique et du langage machinale, je me
            suis toujours posé la question du comment ? Comment marche une
            machine ? Comment crée t'on un site web ou un jeu ? Une Application
            ?
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
