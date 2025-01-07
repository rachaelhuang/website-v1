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
          I was responsible for designing the UI of the app as well as any necessary graphics, and then implementing my designs using React Native alongside the rest of my team.
        </p>
        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>

      <section className="partner-requests">
        <h3>THE PROBLEM</h3>
        <h2>College students are busy, making nutrition a low priority  </h2>
        <p>As college students, eating outside of campus is often not financially viable, leading most students to eat meals at campus dining halls.
          However, many students feel <u>dissatisfied with dining hall options</u> and are concerned about food waste.
          At the same time, students are increasingly focused on <u>eating healthy on campus</u>, seeking nutritious options that support their academic and physical well-being.
        </p>


      </section>

      <section id="problem-statement" className="problem-statement">
        <h2 style={{ fontStyle: 'italic', fontSize: '30px'}}>How might we...</h2>
        <p>improve access to nutritional information within college campus dining halls in order to empower students to make healthier food choices?
      </p>
      </section>

      <section className="industry-research">
        <h3>USER RESEARCH</h3>
        <h2>Understanding college students' dining habits</h2>
        <p> We interviewed 8 college students attending different universities across the U.S. to understand their individual dining habits and preferences.
        We found several common issues: most students experienced long waits in dining halls or struggled to choose nutritious options on campus that tasted good.
        We also learned that students often use review apps or group chats to hear about dining options, but there is no platform specifically meant for college dining halls.
        </p>

        <p>After comprehensive industry research of existing food review apps and examining their user experience, we identified three main feature buckets of our project:</p>
        <div style= {{paddingLeft: '20px'}} >
          <p><b>1. Detailed nutritional information of dining hall dishes</b></p>
          <p><b>2. Filtered search system, including user-inputted food preferences</b></p>
          <p><b>3. Ability to write reviews that include rankings of food taste and health</b></p>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>


      <section id="product-demo" className="final-product-teaser">
        <p>The rest of this case study is under construction, but in the meantime, check out the Figma!</p>

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
