import React from "react";
import "./App.css";
import "./index.css";
// import BucketList from './components/BucketList';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Ethic from "./components/Ethic";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <main className='text-gray-800 bg-stone-200 body-font'>
      <Navbar />
      <About />
      <Ethic />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
