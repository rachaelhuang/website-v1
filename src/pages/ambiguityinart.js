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
            They envisioned a mobile 'edutainment' experience that allows museum-goers to enjoy an <b>interactive digital journey</b>, enabling them to <b>engage directly with the artwork before them</b>.
            Our team was tasked with designing and developing a mobile app that allows Hood Museum visitors to interpret artworks through a <u>Mad-Libs style activity</u>.</p>

        <h4>Key Partners</h4>
        <p>Throughout the 10 week sprint, we met weekly with FINN Lab reps Professor Emily Finn and graduate student Clara Sava-Segal for reviews, standups, and feedback.</p>
        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>

      <section id="product-demo" className="final-product-teaser">
        <h3>SOLUTION</h3>
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
              <p>Navigate through the Hood Museum map, and click on paintings that are part of the study. </p>
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
        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>

      <section className="partner-requests">
        <h2>Partner Requests</h2>
        <p>A number of paintings were preselected from the Hood Museum galleries to be part of the study.
          At our initial meeting, the FINN Lab partners presented a general user flow that would best achieve their research goals:
        </p>
        
        <div className="user-flow">
          <div className="flow-step">Select an artwork from the museum map</div>
          <div className="flow-step">Fill out your interpretation (MadLibs style)</div>
          <div className="flow-step">Read an alternative interpretation</div>
          <div className="flow-step">Rate that interpretation & rate your own</div>
          <div className="flow-step">Repeat steps with other artworks</div>
          <div className="flow-step">Activity summary at the end of session</div>
        </div>
        
        <p>With this outline from the get-go, we needed to ensure we could <strong> balance an enjoyable user experience alongside the requirements and goals of a scientific study</strong>. 
          For example, the partners needed to record quantitative data from the ratings, but not make it obvious to the users, which we needed our designs to reflect.
          Down the line, we would need to separate some screens and include extra instructions to ensure that participants used the app correctly.
        </p>
      </section>

      <section id="problem-statement" className="problem-statement">
        <h2 style={{ fontStyle: 'italic', fontSize: '30px'}}>How might we...</h2>
        <p>facilitate a research study on how people interpret art while making their museum experience enjoyable?</p>
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
        
        <p>We noted down the pros and cons for each app.</p>
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', display: 'inline-block', borderRadius: '15px' }}>
          <img
            src="../assets/ambiguityinart/industryresearch_visual2.png"
            className="case-study-image"
          />
        </div>

        <p>After personally using some of the apps and examining their user experience, we identified three main feature buckets:</p>
        <div style= {{paddingLeft: '20px'}} >
          <p><b>1. Museum map & navigation</b></p>
          <p><b>2. Rating interpretations & comparisons</b></p>
          <p><b>3. The activity summary</b></p>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>

    
      <section id='user-research' className="user-research">
        <h3>USER RESEARCH</h3>
        <h2>User Interviews</h2>
        <p>In order to understand a typical visitor's experience in the Hood Museum, we sat down with various students and faculty across Dartmouth. Each interviewee had a varying degree of interest in museums, or a background in museum art. The goal of our user interviews was to gauge the following:</p>
        <div className="bubble-container">
          <div className="bubble">
            <p>What is the average visitor's experience at a museum like, and what keeps them engaged?</p>
          </div>
          <div className="bubble">
            <p>Because the activity displays outside opinions, what is the most user-friendly way to display them?</p>
          </div>
          <div className="bubble">
            <p>How do we best summarize personal data from each user's museum visit into their activity summary?</p>
          </div>
        </div>
      </section>


      <section className="data-analysis">
        <h2>Data analysis</h2>
        <p>After our user interviews, we synthesized our findings into <strong>empathy maps</strong>. We organized our findings into what interviewees say, do, think, and feel.</p>
        <img src="../assets/ambiguityinart/empathymaps.png" className="empathy-maps" alt="Empathy Maps"/>
        
        <p>From our research, we gathered these key insights:</p>
        <ul>
          <p> 
            <b style={{ color: '#6bb0a3', fontSize: '22px' }}>1.</b>
            <span style={{ fontSize: '20px', fontWeight: '500' }}> Users want to know more about the art they are looking at</span>
            <p>Many interviewees noted that they like to know the story behind the art, the artist, and the context in which the art was created. However, <u>this brought up an issue for us</u>: users would be prohibited from looking at the museum plaques during the study.</p>
          </p>

          <p>
            <b style={{ color: '#6bb0a3', fontSize: '22px' }}>2.</b> 
            <span style={{ fontSize: '20px', fontWeight: '500' }}> Sharing content with friends makes a user's experience more enjoyable </span>
            <p> There are countless features across different social media apps, like Instagram and TikTok, where users can share content with one another. Another example is how Spotify's popular feature, Spotify Wrapped, is directly shareable from the app and postable on other media apps.
            Having this kind of feature could incite more people to come to the museum.</p>
          </p>
          
          <p>
            <b style={{ color: '#6bb0a3', fontSize: '22px' }}>3.</b>
            <span style={{ fontSize: '20px', fontWeight: '500' }}> Users prefer to receive all summary stats at the end</span>
            <p>When discussing apps such as Spotify or Duolingo that provide activity summaries or stats for users, interviewees said that they would be more satisfied receiving those stats at the end of a session rather than intermittently. It creates a higher anticipation for the results, and also provides a more accurate depiction when more data is presented at once, compared to some data at a time with minimal data.</p>
          </p>
        </ul>
        
        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>

      <section class="ideation">
        <h3>IDEATION</h3>
        <h2>Sketching the User Flow</h2>

        <p>With our industry research and user research complete, we spent time brainstorming specific requirements and components needed for each feature bucket using a feature spec.</p>
        <img
          src="../assets/ambiguityinart/featureidentification.png"
          className="case-study-image"
        />

        <p>Following this, each designer started off with a set of rapid fire sketches (Crazy 8s) as our initial screen ideations.
        After our initial sketches, we refined them into solution sketches. Because the research study requires the consent of the users, we needed a clear presentation of the study's consent form before allowing the user to engage in the study itself. </p>
        <p>Additionally, we needed to ensure that the user could easily navigate between the two floors of the museum, and that the user could easily toggle between the two floors.</p>
        <img src="../assets/ambiguityinart/crazy8s.png"/>

        <img src="../assets/ambiguityinart/solutionsketches.png"/>
        <img src="../assets/ambiguityinart/solutionsketches2.png"/>
        <img src="../assets/ambiguityinart/solutionsketches3.png"/>

        <p>We defined a wireflow to ensure that the layout of the screens were clear and easy to understand.</p>
        <img src="../assets/ambiguityinart/wireflow.png"/>
  
      </section>

      
      <section id='design-process' class="design-process">
        <h3>DESIGN</h3>
        <h2>Grayscales</h2>
        <p>After the wireflow, each designer created our own grayscale screens. After initial iterations, we came together to discuss which designs had the best usability, and also sought user feedback for our iterations.</p>

        <div class="image-text-container">
          <div class="text-container">
            <h4>Floor toggle</h4>
            <p>There are two floors of the Hood Museum, so we needed a toggle feature between the two floor maps. Each of us came up with different toggle components. </p>
          </div>
          <img src="../assets/ambiguityinart/grayscales1.png" />
       </div>
  
        <div class="image-text-container">
          <div class="text-container">
            <h4>Artwork selection </h4>
            <p>The user needed to be able to select an artwork from the map to be brought to the Mad-Libs activity. We came up with four different ways in which users could select an artwork.</p>
          </div>
          <img src="../assets/ambiguityinart/grayscales2.png" />
        </div>

        <div class="image-text-container">
          <div class="text-container">
            <h4>Interpretation ratings </h4>
            <p>A user had to rate their own artwork interpretations, as well as another anonymous user's interpretation. We ordered the interpretations and ratings slightly differently, which was great for comparing and contrasting.</p>
          </div>
          <img src="../assets/ambiguityinart/grayscales3.png" />
        </div>

        <p>After receiving user feedback from multiple rounds of iterations, we...</p>

        <h3>Prototypes</h3>
        <p>I made sure to include a progress bar so that the user would be aware of how much they had progressed through the interpretation activity.</p>

      </section>

    </div>


  );
}

export default AmbiguityInArt;
