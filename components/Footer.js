// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="share">
        <a href="https://instagram.com/__sanket_11_?igshid=YmMTA2MY=" className="fab fa-instagram"></a>
        <a href="https://linkedin.com" className="fab fa-linkedin"></a>
        <a href="https://whatsapp.com/dl/" className="fab fa-whatsapp"></a>
        <a href="https://github.com" className="fab fa-github"></a>
      </div>
      <p className="credit">Created by <span>SANKET SANGMISKAR</span></p>
    </footer>
  );
};

export default Footer;