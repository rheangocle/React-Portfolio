import React from 'react';

function About() {
  return ( 
    <section id='about'>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
            Hi there, I'm Rhea! 
          </h1>
          <p className="mb-5">
          Born in Vietnam, raised in Denver, CO, and recently moved to Tallahassee, FL. I recently graduated from a Full Stack Web Development course and currently seeking remote and local entry level developer positions. My main proficiencies are the MERN Stack, MySQL as well as NoSQL. My background is in biochemistry and pharmacy and spent 5+ years working in research and development. 
{/* 
          My motivation for coding came naturally due to my hobbies keeping me on my computer for long periods of time. These hobbies include streaming and video editing. I really enjoy challenging myself to learn new things such as learning to code.  */}
  
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-400 py-2 px-3 focus:outline-none hover:bg-slate-700 rounded text-lg">
              Contact Me!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-400 py-2 px-3  focus:outline-none hover:bg-slate-700 hover:text-white rounded text-lg">
              See My Past Projects
            </a>
          </div>
        </div>
        <div className="w-1/5">
          <img
            className="object-cover object-center rounded-full"
            alt="Profile picture"
            src="./image0.jpeg"
          />
        </div>
      </div>
    </section>
   );
}

export default About;