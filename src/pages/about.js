import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <img src="/assets/about-me-picture.png" className="about-image" alt="About Me" />
      <div className="about-text">
        <h4>About Me</h4>
        <h3 className="header">Hey there! I'm Rachael. Thanks for stopping by!</h3>
        <p>
          I’m currently a sophomore at Dartmouth College, majoring in Computer Science and Digital Arts.
          My design journey began with a strong foundation in traditional art, which naturally evolved into a fascination for graphic design as I explored the intersection of art and technology.
        </p>
        <p>
          In college, I discovered product design -- a perfect fusion of my artistic background, design thinking, and technical skills. Now, I get to channel my creativity into solving real-world problems
          by creating impactful user experiences. I’m excited to continue turning ideas into tangible solutions that make a difference.
        </p>
      </div>
    </div>
  );
}

export default About;