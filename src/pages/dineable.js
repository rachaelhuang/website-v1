import React from 'react';
import './dineable.css';

function Dineable() {
  return (
    <div className="case-study">
      <div className="dineable-banner">
        <img src="/assets/dineable/projthumbnail.png" className="dineable-banner-image" alt="Dineable" />
        <div className="dineable-banner-content">
          <h1>Dineable: Reviews for College Dining</h1>
          <p>Giving students a platform to share reviews on campus food and access detailed nutrition information.</p>
        </div>
      </div>

      <section className="dineable-information">
        <div className="info-section">
          <h4>Timeline</h4>
          <p>10 weeks (June-August 2024)</p>
        </div>
        <div className="info-section">
          <h4>Role</h4>
          <p>UI/UX Designer</p>
          <p>Full-Stack Developer</p>
        </div>
        <div className="info-section">
          <h4>Team</h4>
          <p>Me</p>
          <p>Kathy C.</p>
          <p>Sophie P.</p>
          <p>Joyce Z.</p>
        </div>
        <div className="info-section">
          <h4>Tools</h4>
          <p>Figma</p>
          <p>React Native</p>
          <p>Firebase</p>
        </div>
        <div className="info-section">
          <h4>Skills</h4>
          <p>User Research</p>
          <p>Prototyping</p>
          <p>Frontend Development</p>
          <p>Backend Integration</p>
          <p></p>
        </div>
      </section>

      <section id="overview" className="overview">
        <h2>Project Overview</h2>
        <p>Over the summer of 2024, I had the opportunity to participate in Dandilyonn SEEDS, a 10-week program focused on mobile app design and development.
          Our team of four was tasked with creating a mobile app that solved problems regarding dining on college campuses.
          We named our app Dineable, a combination of "dine" and "enable," to reflect our mission of empowering students to make informed decisions about their meals.
          I was responsible for designing the UI of the app, and then implementing my designs using React Native alongside the rest of my team.
        </p>
        
        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>

      <section id="product-demo" className="final-product-teaser">
        <p></p>
        <p>This case study is under construction, but in the meantime, check out the Figma!</p>

        <iframe 
          style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            width: '800px',
            height: '450px',
          }}
          src="https://embed.figma.com/design/gDTdQnQjCu3Xi8EV08m78D/Dineable---Public?node-id=1504-5223&embed-host=share"
          allowFullScreen
        ></iframe>
      </section>

    </div>
  );
}

export default Dineable;
