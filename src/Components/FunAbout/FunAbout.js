import React from 'react';
import photo from '../../Assets/photos/IMG_9419.jpg';
import './FunAbout.css';

export const FunAbout = () => {
  return (
    <div className="fun-about-page-wrapper">
      <h1 className="fun-about-header">How about some fun facts!</h1>
      <div className="fun-about-text-wrapper">
        <p className="fun-about-text">
          Outside of coding, I enjoy filling my free time with fun hobbies and
          relaxing activities. You can often find me curled up with a good book,
          taking leisurely walks around town, playing board games with friends,
          or baking up a storm in the kitchen. My baked goods are pretty
          legendary - I'd be happy to trade cookie recipes anytime!
        </p>
        <p className="fun-about-text">
          I hope this gives you a snapshot of who I am and what motivates me.
          Please feel free to connect if you'd ever like to chat more! I'm
          always open to networking and meeting new people in this fantastic
          industry.
        </p>
      </div>
    </div>
  );
};