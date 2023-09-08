import React from 'react';
import photo from '../../Assets/photos/IMG_9419.jpg';
import './About.css';

export const About = () => {
  return (
    <div className="about-page-wrapper">
      <h1 className="about-header">About Me</h1>
      <div className="about-text-wrapper">
        <p className="about-text">
          Hello there! My name is Adriane Sutherland. I'm an eager recent
          graduate of the highly respected Turing School of Software and
          Design's front end engineering program. I'm absolutely passionate
          about creating intuitive user experiences and visually appealing
          interfaces. UI/UX design is an endless journey of discovery for me,
          and I'm always seeking out new ways to refine my skills.
        </p>
        <p className="about-text">
          Before studying at Turing, I earned my Bachelor's degree in Japanese
          from the renowned University of Washington. I'm a diligent, devoted
          learner who derives great satisfaction from expanding my knowledge. My
          solid work ethic and genuine excitement for constant growth make me an
          asset to any development team.
        </p>
        <p className="about-text">
          Outside of coding, I enjoy filling my free time with fun hobbies and
          relaxing activities. You can often find me curled up with a good book,
          taking leisurely walks around town, playing board games with friends,
          or baking up a storm in the kitchen. My baked goods are pretty
          legendary - I'd be happy to trade cookie recipes anytime!
        </p>
        <p className="about-text">
          I hope this gives you a snapshot of who I am and what motivates me.
          Please feel free to connect if you'd ever like to chat more! I'm
          always open to networking and meeting new people in this fantastic
          industry.
        </p>
      </div>
    </div>
  );
};
