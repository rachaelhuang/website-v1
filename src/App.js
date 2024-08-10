import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar.js';
import Home from './pages/home.js';
import Work from './pages/work.js';
import Play from './pages/play.js';
import About from './pages/about.js';
import AmbiguityInArt from './pages/ambiguityinart.js';
import Dineable from './pages/dineable.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/about" element={<About />} />

          <Route path="/ambiguityinart" element={<AmbiguityInArt />} />
          <Route path="/ambiguityinart" element={<Dineable />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
