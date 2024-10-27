import React from 'react';
import { FaUserCircle, FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1>Al-Dhikr</h1>
      </div>
      <div className="user-section">
        <FaUserCircle size={30} />
        <span>username</span>
        <FaMoon size={20} />
      </div>
    </header>
  );
}