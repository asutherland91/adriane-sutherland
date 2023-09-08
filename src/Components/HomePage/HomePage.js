import React from 'react';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import photo from '../../Assets/photos/IMG_9419.jpg';
import './HomePage.css';


export const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <div class="home-title-wrapper">
        <h1 className="home-welcome">Hello my name is </h1>
        <h3 class="animate-character"> Adriane Sutherland</h3>
      </div>
      <div className="home-content-wrapper">
        <img className="home-image" src={photo} alt="artistic portrait of Adriane" />
        <p className="home-text-section">
          I am a front-end software devloper who really loves making things
          prettier. I don't really know what else to put here but I really need
          some test words so blah blah I should have got some lorem ipsum{' '}
        </p>
      </div>
    </div>
  );
};
