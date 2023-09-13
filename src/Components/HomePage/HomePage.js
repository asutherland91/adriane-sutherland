import React from 'react';
import photo from '../../Assets/photos/IMG_9419.jpg';
import artsy from '../../Assets/photos/IMG_9811.png';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className="home-page-wrapper">
      <div class="home-title-wrapper">
        <h1 className="home-welcome">Hello there! I am </h1>
        <span class="animate-character"> Adriane Sutherland</span>
      </div>
      <div className="landing-wrapper">
            <img
          className="landing-image"
          src={artsy}
          alt="artistic portrait of Adriane"
        />
          </div>
    </div>
  );
};
