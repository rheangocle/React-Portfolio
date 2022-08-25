import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Ethic from "./components/Ethic";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Main from "./components/Main";

function App() {
  return (
    <main className='text-gray-800'>
      {/* <Navbar /> */}
      <Main />
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
