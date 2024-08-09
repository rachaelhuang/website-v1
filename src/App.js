import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar.js';
import Home from './pages/home.js';
import Work from './pages/work.js';
import Play from './pages/play.js';
import About from './pages/about.js';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Router>

    </div>
  );
}

export default App;
