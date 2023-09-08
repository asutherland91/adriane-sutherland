import React from 'react';
import photo from '../../Assets/photos/IMG_9419.jpg';
import './About.css';

export const About = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-text-wrapper">
        <p className="about-text">
          Hello, my Name is Adriane Sutherland! I am a recent graduate from
          Turing School of Software and Design's front end program. I am really
          passionate about UI/UX, and am always looking for new ways to improve
          those skills.
        </p>
        <p className="about-text">
          Before I studied at Turing I got my Bachelors from the University of
          Washington in Japanese. I am a very hard working person and truely
          love to learn in whatever way I can. I belive that my love of learning
          and dedication to self improvement would be a boon to any team I join.{' '}
        </p>
      </div>
    </div>
  );
};
