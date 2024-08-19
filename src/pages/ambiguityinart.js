import React from 'react';
import './ambiguityinart.css';

function AmbiguityInArt() {

  return (
    <div className="case-study">
      <div className="banner">
        <img src="/assets/ambiguityinart/projthumbnail.png" alt="Ambiguity in Art" className="banner-image" />
        <div className="banner-content">
          <h1>Ambiguity in Art: An Interactive Museum Experience</h1>
          <p>Facilitating a neuroscience research study through visitors at the Hood Museum of Art.</p>
        </div>
      </div>

      <section className="information">
        <div className="info-section">
          <p>Timeline</p>
          <p>10 weeks (March-May 2024); development ongoing through summer 2024</p>
        </div>
        <div className="info-section">
          <p>Role</p>
          <p>Designer (UI/UX, graphics) </p>
        </div>
        <div className="info-section">
          <p>Team</p>
          <p>4 Designers</p>
          <p>4 Developers</p>
          <p>1 Project Manager</p>
        </div>
        <div className="info-section">
          <p>Tools</p>
          <p>Figma</p>
          <p>Adobe Photoshop</p>
        </div>
        <div className="info-section">
          <p>Skills</p>
          <p>Interaction Design</p>
          <p>Prototyping</p>
          <p>Visual Design</p>
          <p>User Research</p>
        </div>
      </section>

      <section className="overview">
        <h2>Project Overview</h2>
        <p>Different people can see the same image, but reach vastly different conclusions. The <a href="https://thefinnlab.github.io" target="_blank" rel="noopener noreferrer">FINN Lab</a>, a neuroscience lab at Dartmouth, is studying the implications of those differences in perception, and how they may inform phenomena such as mental health and politics.</p>
        <p>Previously, the FINN Lab team handed out pen-and-paper surveys to subjects in a controlled lab setting to gather data.
            However, they sought to expand their data collection via visitors of Dartmouth's art museum, the Hood Museum of Art.
            They envisioned a digital 'edutainment' experience where museum-goers could have a fun, interactive experience while simultaneously learning about artwork.
            Thus, our team was tasked with designing and creating a mobile app that allows museum visitors to interpret artworks in the Hood Museum through Mad-Libs style inputs.</p>
       
      </section>

      <section className="final-product-teaser">
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

      <section className="project-purpose">
        <h3>Partner Requests</h3>
        <p>Because this app's primary purpose is to collect research data from Hood Museum-goers, the FINN Lab partners presented to us their idea of the app's general flow that would best inform their research goals.</p>
        <p>Add visual of this flow?</p>
        <p>As such, we made sure to adhere to our partner's research goals and preferred flow during our ideation and design process.</p>
      </section>

      <section className="problem-statement">
        <h2>How might we...</h2>
        <p>facilitate a research study on how people interpret art while simultaneously improving their museum experience?</p>
      </section>


      <section className="user-research">
        <h3>User interviews</h3>
        <p>We brainstormed interview questions and conducted interviews of students and faculty across Dartmouth's campus. Each interviewee had a varying degree of interest in museum going or a relevant background in museum art. The aim of our user interviews was to gauge the following:</p>
        <ul>
          <li>What is a typical visitor's experience at a museum, and what keeps them engaged?</li>
          <li>What is the most user-friendly way to display other people’s opinions?</li>
          <li>How do we best summarize personal data from each museum visit?</li>
        </ul>
        <p>Thus, we generated 5 main categories of questions to ask our users, each with various subquestions:</p>
        <ul>
          <li>1. How do you currently interact with museums?</li>
          <li>2. What attracts you to specific artworks/exhibits?</li>
          <li>3. Do you seek out outside opinions of the things that you experience (art, movies, books, plays, TV shows, etc)?</li>
          <li>4. Is there anything you find challenging or annoying about finding other opinions on art?</li>
          <li>5. Do you have any apps that summarize your activity?</li>
        </ul>
      </section>

      <section className="data-analysis">
        <h3>Data analysis</h3>
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
        <h2>Ideation</h2>
        <p>Once we wrapped up with interview findings and our feature spec, each of us created Crazy 8 sketches (link) as the initial ideation of screen designs.
          I couldn't quite get to 8 on time, but I drew 6 screens, imagining the flow from the museum map to an individual artwork, then to interpretation of the artwork,
          and lastly the summary of the user's total session, reminiscent of a Spotify-Wrapped like summary. </p>
        <img src="../assets/ambiguityinart/crazy8s.png"/>

        <p>After Crazy 8s, we created solution sketches to further define our screens. Because the research study requires the consent of the users, we needed a clear presentation of the study's consent form before allowing the user to engage in the study itself. </p>
        <img src="../assets/ambiguityinart/sketch.png"/>
      </section>

      

      <section class="design-process">
        <h2>Design Process</h2>
        <p>We defined a wireflow to ensure that the layout of the screens were clear and easy to understand.</p>
        <img src="../assets/ambiguityinart/wireflow.png"/>
  
        <h3>Grayscales</h3>
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
