import React from 'react';
import './ambiguityinart.css';
import ProgressBar from '../components/ProgressBar';


function AmbiguityInArt() {
  const sections = [
    { id: 'overview', label: 'Overview'},
    { id: 'product-demo', label: 'Product Demo'},
    { id: 'partner-requests', label: 'Partner Requests'},
    { id: 'problem-statement', label: 'Problem Statement' },
    { id: 'user-research', label: 'User Research' },
    { id: 'data-analysis', label: 'Data Analysis'},
    { id: 'ideation', label: 'Ideation' },
    { id: 'design-process', label: 'Design Process'},
  ];

  return (
    <div className="case-study">
      <ProgressBar sections={sections} />

      <div className="banner">
        <img src="/assets/ambiguityinart/projthumbnail.png" alt="Ambiguity in Art" className="banner-image" />
        <div className="banner-content">
          <h1>ArtLibs: An Interactive Museum Experience</h1>
          <p>Facilitating a neuroscience research study through visitors at the Hood Museum of Art.</p>
        </div>
      </div>

      <section className="information">
        <div className="info-section">
          <h4>Timeline</h4>
          <p>10 weeks (March-May 2024); development through summer 2024</p>
        </div>
        <div className="info-section">
          <h4>Role</h4>
          <p>Designer (UI/UX, graphics) </p>
        </div>
        <div className="info-section">
          <h4>Team</h4>
          <p>4 Designers</p>
          <p>4 Developers</p>
          <p>1 Project Manager</p>
        </div>
        <div className="info-section">
          <h4>Tools</h4>
          <p>Figma</p>
          <p>Adobe Photoshop</p>
          <p>Adobe After Effects</p>
        </div>
        <div className="info-section">
          <h4>Skills</h4>
          <p>Prototyping</p>
          <p>Visual Design</p>
          <p>Interaction Design</p>
          <p>User Research</p>
        </div>
      </section>

      <section id="overview" className="overview">
        <h2>Project Overview</h2>
        <p>Different people can see the same image, but reach vastly different conclusions. The <a href="https://thefinnlab.github.io" target="_blank" rel="noopener noreferrer">FINN Lab</a>, a neuroscience lab at Dartmouth, is studying the implications of those differences in perception, and how they may inform phenomena such as mental health and politics.</p>
        <p>In previous studies, the FINN Lab team utilized a controlled lab setting where they gathered data through pen-and-paper surveys.
            However, they sought to expand their form of data collection through visitors of Dartmouth's art museum, the Hood Museum of Art.
            They envisioned a mobile 'edutainment' experience where museum-goers could enjoy an <strong>interactive digital experience</strong> while simultaneously <strong>learning about artwork</strong>.
            Our team was tasked with designing and developing a mobile app that allows museum visitors to interpret Hood Museum artworks through Mad-Libs style inputs.</p>

        <h4>Key Partners</h4>
        <p>Throughout the 10 week sprint, we met weekly with FINN Lab reps Professor Emily Finn and graduate student Clara Sava-Segal for reviews, standups, and feedback.</p>
      </section>

      <section id="product-demo" className="final-product-teaser">
        <h2>Product Demo</h2>
        <p>A sneak peek of the prototype and some of its functionalities. Scroll to see the full story below! </p>
        
        <div className="demo-videos-list">
          <div className="demo-section"> 
            <div className="video-container">
              <video autoPlay loop muted className="case-study-video">
                <source src="/assets/ambiguityinart/ambiguityinart_demovid1.mov" type="video/mp4" />
              </video>
              <img src="/assets/ambiguityinart/iphone15frame.png" className="case-study-video-frame"/>
            </div>
            <div className="video-description">
              <p>Navigate through the Hood Museum map, and click on artworks that are part of the study. </p>
            </div>
          </div>

          <div className="demo-section"> 
            <div className="video-container">
              <video autoPlay loop muted className="case-study-video">
                <source src="/assets/ambiguityinart/ambiguityinart_demovid2.mov" type="video/mp4" />
              </video>
              <img src="/assets/ambiguityinart/iphone15frame.png" className="case-study-video-frame"/>
            </div>
            <div className="video-description">
              <p>Get personalized summary stats at the end of your museum session, including your artwork personality -- all determined by your interpretations. </p>
            </div>
          </div>

        </div>
      </section>

      <section className="partner-requests">
        <h2>Partner Requests</h2>
        <p>In order to properly gather their research data, the FINN Lab partners presented to us their idea of the flow that would best achieve their research goals.</p>
        <p>Museum map selection -> Intial interpretation -> Alternative interpretation -> Re-evaulate interpretation -> Repeat -> Activity Summary</p>
        <p>We were working within a unique constraint; we needed to <strong> balance an enjoyable user experience alongside the requirements and goals of a scientific study. </strong> 
          For example, the partners needed to record specific quantitative data, but not make it obvious to the users, which we needed our designs to reflect. As such, some screens would need to be separated and extra instructions included to ensure that participants used the app correctly.
        </p>
      </section>

      <section id="problem-statement" className="problem-statement">
        <p>We asked ourselves:</p>
        <h2 style={{ fontStyle: 'italic', fontSize: '30px'}}>How might we...</h2>
        <p>facilitate a research study on how people interpret art while simultaneously improving their museum experience?</p>
      </section>

      <section className="industry-research">
        <h3>INDUSTRY RESEARCH</h3>
        <h2>Analyzing existing apps</h2>
        <p>Museum apps are a unique category of technology that none of us had frequently used before.
          We had the broad user flow presented to us by the partners, but we also needed to see what kind of museum apps currently exist in the market.
          As such, we conducted research on <strong>11</strong> mobile and web apps related to art museum experiences, and <strong>3</strong> mobile apps that have activity summary features.
          </p>

        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', display: 'inline-block', borderRadius: '15px' }}>
          <img
            src="../assets/ambiguityinart/industryresearchvisual.png"
            className="case-study-image"
          />
        </div>
        
        <p> We noted the pros and cons for each app.</p>
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', display: 'inline-block', borderRadius: '15px' }}>
          <img
            src="../assets/ambiguityinart/industryresearch_visual2.png"
            className="case-study-image"
          />
        </div>

      </section>


    
      <section id='user-research' className="user-research">
        <h3>USER RESEARCH</h3>
        <h2>User Interviews</h2>
        <p>In order to understand the typical visitor's experience in the Hood Museum, we conducted interviews across multiple age groups. We sat down with students and faculty across Dartmouth's campus. Each interviewee had a varying degree of interest in museums or a relevant background in museum art. The goal of our user interviews was to gauge the following:</p>
        <div>
          <li>What is a typical visitor's experience at a museum, and what keeps them engaged?</li>
          <li>What is the most user-friendly way to display other people’s opinions?</li>
          <li>How do we best summarize personal data from each museum visit?</li>
        </div>
      </section>

      <section className="data-analysis">
        <h2>Data analysis</h2>
        <p>After our user interviews, we synthesized our findings into <strong>empathy maps</strong>. We organized our findings into what interviewees say, do, think, and feel. From our synthesis, we gathered these key insights:</p>
        <img src="../assets/ambiguityinart/empathymaps.png" className="empathy-maps" alt="Empathy Maps"/>
        <ul>
          <li><strong>Sharing with friends</strong> makes a user's experience more enjoyable, such as sharing insights across social media apps. One example is how Spotify stats show an “emblem of you”. This feature can get more people to come to the museum</li>
          <li>Summary stats are more satisfying to receive all at the end, higher anticipation, also more accurate depiction when more data is presented vs. one at a time with minimal data. Slideshow recap of what you viewed/your interpretations in addition to comparative stats</li>
          <li>Users want to <strong>know more about the art they are looking at</strong> - they want to know the story behind the art, the artist, and the context in which the art was created</li>
          <li>Slideshow recap of what you viewed/your interpretations in addition to comparative stats</li>
          <li>Short blurbs are more well-liked, but do we include blurbs or not? - Does this sway views early on?</li>
        </ul>
        <img src="assets/images/project1-research.jpg" alt="Research Image" className="case-study-image"/>
      </section>

      <section class="ideation">
        <h3>IDEATION</h3>
        <h2>Sketching the User Flow</h2>
        <p>Once we wrapped up with interview findings and our feature spec, each designer created Crazy 8 sketches as the initial ideation of screen designs.
          I couldn't quite get to 8 on time, but I drew 6 screens, imagining the flow from the museum map to an individual artwork, then to interpretation of the artwork,
          and lastly the summary of the user's total session, reminiscent of a Spotify-Wrapped like summary. </p>
        <img src="../assets/ambiguityinart/crazy8s.png"/>

        <p>After Crazy 8s, we created solution sketches to further define our screens. Because the research study requires the consent of the users, we needed a clear presentation of the study's consent form before allowing the user to engage in the study itself. </p>
        <img src="../assets/ambiguityinart/sketch.png"/>

        <p>We defined a wireflow to ensure that the layout of the screens were clear and easy to understand.</p>
        <img src="../assets/ambiguityinart/wireflow.png"/>
  
      </section>

      
      <section id='design-process' class="design-process">
        <h3>DESIGN</h3>
        <h2>Grayscales</h2>
        <p>After the wireflow, each designer created our own grayscale screens. After initial iterations, we came together to discuss which designs had the best usability.</p>
        <p>After receiving user feedback from two rounds of iterations, we  </p>

        <h3>Prototypes</h3>
        <p></p>

        <img src="assets/images/project1-design-process.jpg" alt="Design Process Image" class="case-study-image"/>
      </section>




    </div>


  );
}

export default AmbiguityInArt;
