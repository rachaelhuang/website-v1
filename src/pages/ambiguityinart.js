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
          <h5>10 weeks (March-May 2024); ongoing through summer 2024</h5>
        </div>
        <div className="info-section">
          <p>Team</p>
          <h5>4 Designers</h5>
          <h5>4 Developers</h5>
          <h5>1 Project Manager</h5>
        </div>
        <div className="info-section">
          <p>Tools</p>
          <h5>Figma</h5>
          <h5>Adobe Photoshop</h5>
        </div>
        <div className="info-section">
          <p>Skills</p>
          <h5>Interaction Design</h5>
          <h5>Prototyping</h5>
          <h5>Visual Design</h5>
          <h5>Research</h5>
        </div>
      </section>

      <section className="overview">
        <h2>Project Overview</h2>
        <p>Different people can see the same image, but reach vastly different conclusions. The FINN Lab, a Neuroscience lab at Dartmouth, is studying the implications of those differences in perception, and how they may inform phenomena such as mental health and politics.</p>
        <ul>
          <li>Our team was tasked with designing and creating a mobile app that allows museum visitors to interpret artworks in the Hood Museum of Art through Mad-Libs style inputs.</li>
        </ul>
      </section>

      <section className="final-product-teaser">
        <h2>Product Demo</h2>
        <p>Here's a sneak peek of the final product. Scroll down to see the full case study.</p>
        
        <div className="video-container">
          <video autoPlay loop muted className="case-study-video">
            <source src="/assets/ambiguityinart/ambiguityinart_demovid1.mov" type="video/mp4" />
          </video>
          <img src="/assets/ambiguityinart/iphone15frame.png" className="case-study-video-frame"/>
        </div>

        <div className="video-container">
          <video autoPlay loop muted className="case-study-video">
            <source src="/assets/ambiguityinart/ambiguityinart_demovid2.mov" type="video/mp4" />
          </video>
          <img src="/assets/ambiguityinart/iphone15frame.png" className="case-study-video-frame"/>
        </div>

      </section>

      <section className="problem-statement">
        <h2>How might we...</h2>
        <p>facilitate a research study on how people interpret art while simultaneously improving their museum experience?</p>
      </section>

      <section className="project-purpose">
        <h3>Partner Requests</h3>
        <p>Because this app's primary purpose is to collect research data from Hood Museum-goers, the FINN Lab partners presented to us their idea of the app's general flow that would best inform their research goals.</p>
        <p>Add visual of this flow?</p>
        <p>As such, we made sure to adhere to our partner's research goals and preferred flow during our ideation and design process.</p>
      </section>

      <section className="user-research">
        <h3>User interviews</h3>
        <p>We brainstormed interview questions and conducted interviews for students and faculty around campus that had varying degrees of interest in museum going and/or relevant backgrounds in art. The goal of our user interviews was to gauge the following:</p>
        <ul>
          <li>What is the typical user's experience at a museum?</li>
          <li>What keeps users engaged in a museum, which will help tailor the features of the app to best reflect this</li>
          <li>Understanding what the best ways to display other people’s opinions are</li>
          <li>Understanding best ways to summarize personal data from each visit</li>
        </ul>
        <p>Thus, we generated 5 main categories of questions to ask our users, each with various subquestions:</p>
        <ul>
          <li>How do you currently interact with museums?</li>
          <li>What attracts you to specific artworks/exhibits?</li>
          <li>Do you seek out outside opinions of the things that you experience (art, movies, books, plays, TV shows, etc)?</li>
          <li>Is there anything you find challenging or annoying about finding other opinions on art?</li>
          <li>Do you have any apps that summarize your activity?</li>
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
    </div>
  );
}

export default AmbiguityInArt;
