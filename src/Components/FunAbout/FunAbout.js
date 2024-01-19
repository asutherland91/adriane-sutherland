import React from 'react';
import photo from '../../Assets/photos/IMG_9419.jpg';
import './FunAbout.css';

export const FunAbout = () => {
  return (
    <div className="fun-about-page-wrapper">
      <h1 className="fun-about-header">How about some fun facts!</h1>
      <div className="fun-about-text-wrapper">
        <p className="fun-about-text">
          Outside of coding, I enjoy filling my free time with fun hobbies and activities. 
          You can often find me curled up with a good book,
          off on an adventure around my city, playing board games with friends,
          or baking up a storm in the kitchen. My baked goods are pretty
          legendary - I'd be happy to trade cookie recipes anytime! I am a huge animal person,
          I have three cats myself, but love pretty much any kind of pet you could imagine. I also am 
          a lover of music, of all varieties anywhere from classical to J-Pop and almost everything in 
          between. 
        </p>
      </div>
    </div>
  );
};