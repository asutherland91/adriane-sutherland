import React from 'react';
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
        <img
          className="home-image"
          src={photo}
          alt="artistic portrait of Adriane"
        />
        <p className="home-text-section">
          Welcome to my portfolio! I am a front-end software developer who
          really takes joy in making all the things around me more beautiful.
        </p>
      </div>
    </div>
  );
};
