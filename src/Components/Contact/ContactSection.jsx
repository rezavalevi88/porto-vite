import React from "react";
import './ContactSection.css'
import iconUrl1 from'../../assets/IMG/mail.svg';
import iconUrl2 from'../../assets/IMG/github.svg';
import iconUrl3 from'../../assets/IMG/whatsapp.svg';
import iconUrl4 from'../../assets/IMG/linkedin.svg';

const ContactSection = () => {
  return (
    <div id="contact" className="contact-wrap">
    <h5>Contact Me</h5>
    <div className="contact-grid">
      <a href="mailto:rezavalevi89@gmail.com" target="_blank">
        <div className="contact-container">
          <img className="svg" src={iconUrl1}/>
          <p>rezavalevi89@gmail.com</p>
        </div>
      </a>
      <a href="https://github.com/rezavalevi88" target="_blank">
        <div className="contact-container">
          <img className="svg" src={iconUrl2}/>
          <p>github.com/rezavalevi88</p>
        </div>
      </a>
      <a href="https://wa.me/62895802377770" target="_blank">
        <div className="contact-container">
          <img className="svg" src={iconUrl3}/>
          <p>+62 895 8023 7777 0</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/reza-valevi-0a33151a5/" target="_blank">
        <div className="contact-container">
          <img className="svg" src={iconUrl4}/>
          <p>Reza Valevi</p>
        </div>
      </a>
    </div>
    </div>
  )
}

export default ContactSection;
