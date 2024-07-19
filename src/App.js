import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Scroll from './components/Scroll';
import Home from './components/Home'; 
import About from './components/About'; 
import Services from './components/Services'; 
import Careers from './components/Careers'; 
import Contact from './components/Contact'; 
import Header from './components/HeaderPart';
import Footer from './components/Footer';

function App() {
  return (
  
      <div className="App">
        <Scroll/>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
