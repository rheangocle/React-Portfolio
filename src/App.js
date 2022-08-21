import React, { useState } from 'react';
import './App.css';
// import BucketList from './components/BucketList';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


function App() {
  return (
    <main>
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
  </main>
  );
}

export default App;
