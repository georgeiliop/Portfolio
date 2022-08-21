import React from "react";
import "./contact.scss";
import contactImg from "../../images/contactImg.png";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    console.log(message);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={contactImg} alt="contact Image" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="sumbit">Send</button>
          {message && <span>Thanks, I&apos;ll get back to you soon!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
