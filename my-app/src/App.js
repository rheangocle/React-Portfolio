import React from "react";
import "./App.css";
import "./index.css";
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
    <main style={{ background: "#9559c5" }} className='text-gray-800 h-screen'>
      {/* <Navbar /> */}
      <Main />
      <About />

      <Ethic />
      <Projects />
      {/* <Skills />
      <Contact />
      <Footer /> */}
    </main>
  );
}

export default App;
