import React, { useEffect } from 'react';
import './play.css';
import Masonry from 'masonry-layout';

function Play() {
  useEffect(() => {
    const grid = document.querySelector('.image-grid');
    new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-item',
      percentPosition: true,
    });
  }, []);

    // Function to open the modal
    const openModal = (src, alt) => {
      console.log("Opening modal with:", src, alt); // Add this line

      document.getElementById('modal').style.display = 'block';
      document.getElementById('modal-image').src = src;
      document.getElementById('caption').innerHTML = alt;
    };
  
    // Function to close the modal
    const closeModal = () => {
      document.getElementById('modal').style.display = 'none';
    };

  return (
    <div className="play">
      <h1>Graphic Design</h1>
      <p>Graphic design has always been one of my creative outlets. Whether it's hand-drawn or digital, I love designing pretty much anything, from game icons to school merchandise. Here’s a peek at some of my recent work!</p>
      <div className="image-grid">
        <div className="grid-item" onClick={() => openModal('/assets/fyt2024.png', 'First Year Trips 2024 T-shirt')}>
          <img src="/assets/fyt2024.png" className="merchandise" alt="First Year Trips 2024 T-shirt" />
        </div>
        <div className="grid-item" onClick={() => openModal('/assets/classof2027crewneck.png', 'Dartmouth Class of 2027 Crewneck')}>
          <img src="/assets/classof2027crewneck.png" className="merchandise" alt="Class of 2027 Crewneck" />
        </div>
        <div className="grid-item" onClick={() => openModal('/assets/winterstellar-sticker.png', 'Winterstellar Sticker')}>
          <img src="/assets/winterstellar-sticker.png" className="merchandise" alt="Winterstellar Sticker" />
        </div>
        <div className="grid-item" onClick={() => openModal('/assets/fyt2023.png', 'First Year Trips 2023 T-shirt')}>
          <img src="/assets/fyt2023.png" className="merchandise" alt="First Year Trips 2023 T-shirt" />
        </div>
        <div className="grid-item" onClick={() => openModal('/assets/pocostickers.png', 'People of Color Outdoors Stickers')}>
          <img src="/assets/pocostickers.png" className="merchandise" alt="People of Color Outdoors Stickers" />
        </div>
        <div className="grid-item" onClick={() => openModal('/assets/waffle-wagon.png', 'Waffle Wagon')}>
          <img src="/assets/waffle-wagon.png" className="merchandise" alt="Waffle Wagon" />
        </div>
      </div>

      <div className="modal" id="modal">
        <span className="close" id="modal-close" onClick={closeModal}>&times;</span>
          <img className="modal-content" id="modal-image" alt="modal" />
        <div id="caption"></div>
      </div>
    </div>
  );
}

export default Play;