import React from 'react';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import photo from '../../Assets/photos/Adriane.png';
import './PageHeader.css';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export const PageHeader = () => {
  return (
    <header>
      <img className="logo-image" src={photo} alt="Logo" />
      <div className="right-side">
        <div className="nav-bar">
          <p to="/" className="header-text">
            Home
          </p>
          <span className="decorative-line"> / </span>
          <p to="/projects" className="header-text">
            Projects
          </p>
          <span className="decorative-line"> / </span>
          <p to="/about" className="header-text">
            About
          </p>
          <span className="decorative-line"> / </span>
          <p to="/contact" className="header-text">
            Contact
          </p>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
};
