import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about">
      <img src="/about-me-pic.png" className="about-image" alt="About Me" />
      <div className="about-text">
        <h4>About Me</h4>
        <h3 className="header">Hey there! I'm Rachael. Thanks for stopping by!</h3>
        <p>
          I’m currently a sophomore at Dartmouth College, majoring in Computer Science and Digital Arts.
          My journey as a designer began with a strong foundation in traditional art, which naturally evolved into a passion for graphic design as I became fascinated by the intersection of technology and creativity.
        </p>
        <p>
          In college, I discovered product design, which perfectly merges my passions for art, design, and tech. With new avenues for me to channel my creativity while solving real-world problems,
          I’m eager to continue crafting impactful user experiences that blend form and function.
        </p>
      </div>
    </div>
  );
}

export default About;