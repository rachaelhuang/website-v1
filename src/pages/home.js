import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div> 
      <div className="splash-screen">
        <h1>Hi, I'm Rachael</h1>
        <p>A product designer who loves to create unique digital experiences.</p>
      </div>

      <div className="projects-section">
        <h2>My Projects</h2>
        <div className="project-list">

          <div className="project-item">
            <div className="description">
              <h3>Ambiguity in Art</h3>
              <p>Facilitating a neuroscience research study through artwork interpretations by museum visitors.</p>
            </div>
                <img src="/assets/ambiguityinart/projthumbnail.png" alt="Ambiguity in Art Project" />
            <Link to="/ambiguityinart">
                <p>See the story</p>
            </Link>
          </div>

          <div className="project-item">
            <div className="description">
              <h3>Dineable</h3>
              <p>Allowing college students to share reviews about dining hall meals and get personalized recommendations.</p>
            </div>
            <img src="/assets/dineable/projthumbnail.png" alt="Dineable Project" />
            <Link to="/dineable">
                <p>See the story</p>
            </Link>
          </div>

          {/* <div className="project-item">
            <div className="description">
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </div>
            <img src="path/to/project2-image.jpg" alt="Project 2" />
          </div> */}
        
        </div>
      </div>
    </div>
  );
}

export default Home;
