import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div> 
      <div className="splash-screen">
        <h1>Hi, I'm Rachael</h1>
        <p>A full-stack product designer who loves to create unique digital experiences.</p>
        <a href="#my-projects" className="see-my-work-button">See my work</a>
      </div>

      <div id="my-projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="project-list">

          <div className="project-item">
            <div className="description">
              <h3>Ambiguity in Art</h3>
              <p>Facilitating a neuroscience research study through artwork interpretations by museum visitors.</p>
              
              <div className="story-link">
                <p>Click to see the story</p>
                <img className="arrow-icon" src="/assets/loopyarrow.svg"/>
              </div>

              <div className="tags">
                <span className="tag">Product Design</span>
                <span className="tag">Client work</span>
                <span className="tag">Prototyping</span>
              </div>

            </div>
            <Link to="/ambiguityinart">
              <img className="project-thumbnail" src="/assets/ambiguityinart/projthumbnail.png" alt="Ambiguity in Art Project" />
            </Link>
          </div>

          <div className="project-item">
            <div className="description">
              <h3>Dineable</h3>
              <p>Allowing college students to share reviews about dining hall meals and get personalized recommendations.</p>
              
              <div className="story-link">
                <p>Click to see the story</p>
                <img className="arrow-icon" src="/assets/loopyarrow.svg"/>
              </div>

              <div className="tags">
                <span className="tag">End-to-end</span>
                <span className="tag">Product Design</span>
                <span className="tag">Mobile App Development</span>
              </div>
            </div>
            
            <Link to="/dineable">
              <img className="project-thumbnail" src="/assets/dineable/projthumbnail.png" alt="Dineable Project" />
            </Link>
          </div>

          <div className="project-item">
            <div className="description">
              <h3>Juniper</h3>
              <p>Creating a mobile shopping platform that promotes sustainable shopping practices. </p>
              
              <div className="story-link">
                <p>Coming soon!</p>
                {/* <img className="arrow-icon" src="/assets/loopyarrow.svg"/> */}
              </div>
              
              <div className="tags">
                <span className="tag">End-to-end</span>
                <span className="tag">Social Good</span>
                <span className="tag">Mobile App Development</span>
              </div>
            </div>
            
            <Link to="/dineable">
              {/* <img className="project-thumbnail" src="/assets/dineable/projthumbnail.png" alt="Dineable Project" /> */}
            </Link>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Home;
