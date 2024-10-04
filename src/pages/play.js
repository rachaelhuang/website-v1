import React, { useEffect } from 'react';
import './play.css';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';


function Play() {
  useEffect(() => {
    const grid = document.querySelector('.image-grid');
    const masonry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-item',
      percentPosition: true,
    });
  
    imagesLoaded(grid, () => {
      masonry.layout();
    });
  }, []);

  return (
    <div className="play">
      <h1>Graphic Design</h1>
      <p>Design has always been one of my creative outlets. Whether it's hand-drawn or digital, I love designing pretty much anything, from game icons to school merchandise. Here’s some of my recent work!</p>
      <div className="image-grid">
        <div className="grid-item">
          <img src="/assets/fyt2024.png" className="merchandise" alt="First Year Trips 2024 T-shirt" />
        </div>
        <div className="grid-item">
          <img src="/assets/classof2027crewneck.png" className="merchandise" alt="Dartmouth Class of 2027 Crewneck" />
        </div>
        <div className="grid-item">
          <img src="/assets/winterstellar-sticker.png" className="merchandise" alt="Winterstellar Sticker" />
        </div>
        <div className="grid-item">
          <img src="/assets/fyt2023.png" className="merchandise" alt="First Year Trips 2023 T-shirt" />
        </div>
        <div className="grid-item">
          <img src="/assets/pocostickers.png" className="merchandise" alt="People of Color Outdoors Stickers" />
        </div>
      
      </div>
    </div>
  );
}


export default Play;