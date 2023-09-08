import React from 'react';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import photo from '../../Assets/photos/Adriane.png';
import './Header.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export const Header = () => {
  return (
    <header>
      <img className="logo-image" src={photo} alt="Logo" />
      <div className="right-side">
        <div className="nav-bar">
          <NavLink to="/" className="header-text">
            Home
          </NavLink>
          <span className="decorative-line"> / </span>
          <NavLink to="/projects" className="header-text">
            Projects
          </NavLink>
          <span className="decorative-line"> / </span>
          <NavLink to="/about" className="header-text">
            About
          </NavLink>
          {/* <span className="decorative-line"> / </span>
          <NavLink to="/contact" className="header-text">
            Contact
          </NavLink> */}
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
};
