// src/components/Header.js
import React from 'react';
//import logo from '../public/logo.png'; // adjust the path to your logo

const Header = () => (
  <header className="header">
    {/* <img src={logo} alt="Logo" className="logo" /> */}
    <h1 className="app-title">Al-Dhikr</h1>
    <div className="user-info">
      <span className="username">username</span>
      <button className="theme-toggle">🌑</button>
    </div>
  </header>
);

export default Header;
