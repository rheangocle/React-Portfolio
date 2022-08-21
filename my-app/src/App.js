import React from 'react';
import './App.css';
import './index.css';
// import BucketList from './components/BucketList';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    {/* <Navbar /> */}
    <About />
    {/* <Projects />
    <Contact /> */}
  </main>
  );
}

export default App;
