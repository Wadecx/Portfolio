import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { FaFolder } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="wrap">
      <div className="navigation">
        <div className="nav">
          <h2>
            <span className="t">T</span>yron
          </h2>
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
          <div className="ads"></div>
        </div>
      </div>
      <div className="phone">
        <li onClick={(e) => setMenu(true)} className="burger">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 -960 960 960"
              width="26"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </div>
      {menu && (
        <nav className="sidebar" id="sidebar">
          <li onClick={(e) => setMenu(false)}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <BsHouseFill /> Accueil
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              {" "}
              <PiStudentFill /> A Propos
            </Link>
          </li>
          <li>
            <Link to={"/projects"}>
              {" "}
              <FaFolder /> Projets
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <IoMail /> Contact
            </Link>
          </li>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
