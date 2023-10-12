import React from 'react';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import photo from '../../Assets/photos/Adriane.png';
import './PageHeader.css';

export const PageHeader = () => {
  return (
    <header>
      <img className="logo-image" src={photo} alt="Logo" />
      <div className="right-side">
        <div className="nav-bar">
          <a href="#home" className="header-text">
            Home
          </a>
          <span className="decorative-line"> / </span>
          <a href="#about" className="header-text">
            About
          </a>
          <span className="decorative-line"> / </span>
          <a href="#projects" className="header-text">
            Projects
          </a>
          <span className="decorative-line"> / </span>
          <a href="#fun" className="header-text">
            More About Me!
          </a>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
};
