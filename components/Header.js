// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">CUPS COFFEE</div>
        <div className="menu">
          <a href="#home">HOME</a>
          <a href="#products">OUR PRODUCT</a>
          <a href="#kids">KIDS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
      <div className="container">
        <div className="left">
          <img src="images/cup-coffee.png" alt="Coffee Cup" />
        </div>
        <div className="right">
          <h4>BEST PLACE TO BUY DESIGN</h4>
          <h1>CUPS Coffee</h1>
          <p>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
          <button onClick={() => window.location.href = '#products'}>EXPLORE OUR PRODUCT</button>
        </div>
      </div>
    </header>
  );
};

export default Header;