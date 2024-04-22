import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { FaFolder } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="nav">
      <h2><span className="t">T</span>yron</h2>
      <nav className="navbar">
        <Link to={"/"}>
          {" "}
          <BsHouseFill /> Accueil
        </Link>
        <Link to={"/about"}>
          {" "}
          <PiStudentFill /> A Propos
        </Link>
        <Link to={"/projects"}>
          {" "}
          <FaFolder /> Projets
        </Link>
        <Link to={"/contact"}>
          <IoMail /> Contact
        </Link>
      </nav>
      <div className="ads">

      </div>
    </div>
  );
};

export default Navbar;
