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
            However, they wanted to expand their form of data collection through visitors of Dartmouth's art museum, the Hood Museum of Art.
            They envisioned a mobile 'edutainment' experience that allows museum-goers to enjoy an <b>interactive digital journey</b>, enabling them to <b>engage directly with the artwork before them</b>.
            Our team was tasked with designing and developing a mobile app that allows Hood Museum visitors to interpret artworks through a <u>Mad-Libs style activity</u>.</p>

        <h4>Key Partners</h4>
        <p>Throughout the 10 week sprint, we met weekly with FINN Lab reps Professor Emily Finn and graduate student Clara Sava-Segal for reviews, standups, and feedback.</p>
        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>

      <section id="product-demo" className="final-product-teaser">
        {/* <h3>FINAL PRODUCT</h3> */}
        <h2>ArtLibs</h2>
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
        <h2>Partner requests</h2>
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
        <h2>User interviews</h2>
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
            <p>Many interviewees noted that they like to know the story behind the art, the artist, and the context in which the art was created.
              However, <u>this brought up an issue for us</u>: users would be prohibited from looking at the museum plaques during the study.
              We would need to remind them to avoid looking at those plaques while they used the app. </p>
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

      <section id='ideation' className="ideation">
        <h3>IDEATION</h3>
        <h2>Sketching the user flow</h2>

        <p>With our industry research and user research complete, we spent time brainstorming specific requirements and components needed for each feature bucket using a feature spec.</p>
        <img
          src="../assets/ambiguityinart/featureidentification.png"
          className="case-study-image"
        />

        <p>Following this, each designer started off with a set of rapid fire sketches (Crazy 8s) as our initial screen ideations.
        After our initial sketches, we refined them into solution sketches.</p>
        <img src="../assets/ambiguityinart/crazy8s.png"/>

        <img src="../assets/ambiguityinart/solutionsketches.png"/>
        <img src="../assets/ambiguityinart/solutionsketches2.png"/>
        <img src="../assets/ambiguityinart/solutionsketches3.png"/>

        <p>We defined a wireflow to ensure that the layout of the screens were clear and easy to understand.</p>
        <img src="../assets/ambiguityinart/wireflow.png"/>
  
      </section>

      
      <section id='design-process' className="design-process">
        <h3>DESIGN</h3>
        <h2>Grayscales</h2>
        <p>After the wireflow, each designer created our own grayscale screens. After initial iterations, we came together to discuss and noticed what we differed in our designs.</p>

        <div class="image-text-container">
          <div class="text-container">
            <h4>Floor toggle</h4>
            <p> There are two floors of the Hood Museum, and artworks in the study would be on both floors. We needed a feature to access each of the two floor maps. Each of us came up with different toggle components. </p>
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

        <p>From then, we sought user feedback and discussed which features had the best usability. </p>

        <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
      </section>

      <section id='prototyping' className="prototyping">
        <h3>PROTOTYPING</h3>
        <h2>High fidelity designs</h2>
        <p>After many, many iterations, with user feedback and discussion with the partners, we landed on these final features: </p>
        
        <div className="hifi-grid-container">
          <div className="hifi-item">
            <img src="../assets/ambiguityinart/hifi1.png" />
            <p> <b>Toggle switch for floor navigation</b> </p>
            <p style={{textAlign: 'left'}}>The toggle switch was the most intuitive for users. I used Photoshop to produce <u>cleaner, higher quality maps</u> of the museum floors that fit the dimensions of a vertical screen.</p>
          </div>

          <div className="hifi-item">
            <img src="../assets/ambiguityinart/hifi2.png" />
            <p> <b>Simple artwork popup</b> </p>
            <p style={{textAlign: 'left'}}>For the study's purposes, we decided to label each artwork as "Artwork [Number]" to avoid biasing user's interpretations.</p>
          </div> 

          <div className="hifi-item">
            <img src="../assets/ambiguityinart/hifi3.png" />
            <p> <b>MadLibs fill-in page</b> </p>
            <p style={{textAlign: 'left'}}> We added simple directions to clarify the process for the user. I also included a progress bar on the bottom of the page, which would continue for each of the interpretation pages.</p>
          </div>
        </div>

          <div className="hifi-container">
            <div className="hifi-item">
              <img src="../assets/ambiguityinart/hifi3-5.png" />
              <p> <b>Interpretation pages</b> </p>
              <p style={{textAlign: 'left'}}>We eventually split up the interpretation ratings into three pages. That way, we could avoid users changing their ratings too much, and we would also be able to measure the difference in the user's own rating of their own interpretation, as they are asked to rate it before and after reading someone else's interpretation. 
              We also intentionally colored the user's interpretation in blue and the anonymous interpretation in purple to differentiate them. Subconsciously, this association with color 
              For the third interpretation screen, the order of the user's interpretations and the alternative interpretation would be randomized in development to make the ratings as realistic as possible. </p>
            </div>
          </div>        

      <p>We <u>purposely omitted back buttons</u> in any of the activity screens, since we did not want users going back to change their initial ratings after reading an alternative interpretation, as it would interfere with data. </p>
      <p>Because the research study requires the consent of the users, we needed a clear presentation of the study's consent form before allowing the user to engage in the study itself</p>

      <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
    </section>


    <section id='graphics' class="graphics">
      <h3>GRAPHICS</h3>
      <h2>Creating artwork personality animations</h2>

      <p>As part of the activity summary, we came up with the idea of presenting an "<u>artwork personality</u>" based on the concept of "listening personalities" from Spotify Wrapped 2022.
        A user's artwork personality would be based on how they rated each artwork and interpretation throughout the session. The partners wanted a total of four different artwork personalities.
      </p>
      
      <h5 style={{margin: '0'}}>Spotify Wrapped 2022</h5>
      <div className="inspiration-images">
        <img src="../assets/ambiguityinart/spotifywrapped_personalities.avif"/>
        <img src="../assets/ambiguityinart/spotifywrapped_personalitycards.jpg"/>
      </div>

      <p>Initially, we had envisioned the artwork personalities as static shape images, but I wanted to take it a step further and <u>animate them</u> to make them fun and memorable for the user. I first designed the personality shapes in Adobe Illustrator, according to their names. </p>
      <img src="../assets/ambiguityinart/personalitygraphics.png" />

      <p>I then used Adobe After Effects to create the animations and generate animation frames, and Photoshop to render the final GIFs. Thus became our four artwork personalities:</p>
      <div className="video-row">
        <div className="video-item">
          <video autoPlay loop muted className="case-study-video-2">
            <source src="/assets/ambiguityinart/personality_vid1.mov" type="video/mp4" />
          </video>
          <div className="video-description-2">Personality 1</div>
        </div>
        <div className="video-item">
          <video autoPlay loop muted className="case-study-video-2">
            <source src="/assets/ambiguityinart/personality_vid2.mov" type="video/mp4" />
          </video>
          <div className="video-description-2">Personality 2</div>
        </div>
        <div className="video-item">
          <video autoPlay loop muted className="case-study-video-2">
            <source src="/assets/ambiguityinart/personality_vid3.mov" type="video/mp4" />
          </video>
          <div className="video-description-2">Personality 3</div>
        </div>
        <div className="video-item">
          <video autoPlay loop muted className="case-study-video-2">
            <source src="/assets/ambiguityinart/personality_vid4.mov" type="video/mp4" />
          </video>
          <div className="video-description-2">Personality 4</div>
        </div>
      </div>
      <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '2rem 0', transform: 'scaleY(0.7)' }} />
    </section>

    <section id='final-product' className="final-product">
      <h3>FINAL PRODUCT</h3>
      <h2>Bringing it all together</h2>

      <p>We finished our design process from beginning to end in seven weeks, with a baseline prototype that we handed off to developers.</p>
      
      <p>Note: the consent form has been shortened for information privacy, and there is a demographic form in the prototype that is omitted here for the sake of simplicity. :) </p>
      
      <div className="figma-embed-wrapper"> 
        <iframe 
          style={{ 
            border: "1px solid rgba(0, 0, 0, 0.2)", 
            borderRadius: "10px",
            width: "500px", 
            height: "800px",
          }} 
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJespgSYUOmNzVSWRBW9P1W%2Fpersonal-website%3Fpage-id%3D52%253A25%26node-id%3D305-9616%26viewport%3D-2788%252C-5101%252C0.2%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D305%253A9616%26hide-ui=1" 
          allowFullScreen
          >
        </iframe>
      </div>

      <p>Style guide</p>
      <p>After testing with users and discussing with the partners, we decided on the final style guide. </p>
      <img src="../assets/ambiguityinart/styleguide.png" />
    </section>


    <section id="takeaways" className="takeaways">
      <h3>REFLECTION</h3>
      <h2>Takeaways from this project</h2>
      
      <p>This project was my first large-scale project with an extensive user base and </p>
      
      <p>Made in collaboration with the DALI Lab at Dartmouth College.</p> 
    </section>

    </div>


  );
}

export default AmbiguityInArt;
