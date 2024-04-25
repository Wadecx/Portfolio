import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Indev/indev.css";
import { IoMdArrowRoundBack } from "react-icons/io";
const Indev = () => {
  return (
    <div className="indev">
      <Navbar />
      <div className="in_dev_page">
        <h1>Projet en developpement</h1>

        <p>
          Certain de mes projets, nourris par une énergie créative débordante et
          portés par moi même, sont actuellement en développement actif,
          s'efforçant de concrétiser des idées novatrices et de façonner une
          meilleure conception du coding.
        </p>
        <a href={"/projects"} className="back"> <IoMdArrowRoundBack /> Retour</a>
      </div>
    </div>
  );
};

export default Indev;
