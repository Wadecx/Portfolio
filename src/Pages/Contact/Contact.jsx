import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Contact/contact.css";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact_me">
        <h1>Me contacter </h1>

        <div className="all">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="send_message"
          >
            <input
              type="hidden"
              name="access_key"
              value="27f66e6c-a295-4202-a2ab-5ec1863f59fb"
            />
            <input type="text" name="name" placeholder="Nom" required />
            <input type="text" name="prenom" placeholder="Prénom" required />
            <input type="text" name="mail" placeholder="e-mail" required />
            <input type="text" name="number" placeholder="Tel (facultatif)" />
            <textarea
              name="message"
              id="message"
              cols="40"
              rows="15"
            ></textarea>
            <input type="submit" value="Envoyer" />
          </form>

          <div className="otherContact">
            <div className="card">
              <h3><FaGithub className="limecolor"/> Sur Github</h3>
              <a href="https://github.com/Wadecx" target="_blank">https://github.com/Wadecx</a>
            </div>
            <div className="card">
              <h3><IoMdMail className="limecolor"/> Par Mail</h3>
              <a href="">tyronmorcel@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
