import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Contact/contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="contact_me">
        <h1>Contact </h1>

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
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
