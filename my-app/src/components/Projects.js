import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id='projects'
      style={{ background: "linear-gradient(#7714e4, #052dd4)" }}
      className='text-gray-400 bg-slate-900 -m-10 p-10'
    >
      <div className='container px-10 py-20 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-10'>
          <h1 className='font-heading sm:text-4xl md:text-5xl lg:text-8xl font-medium title-font mb-4 text-lime-400 font-bold'>
            Featured Work
          </h1>
          <p className='leading-relaxed text-base'>
            Some of my past projects including team collaborations and
            individual work.
          </p>
        </div>
        <div className='rounded flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a
              href={project.deployed}
              key={project.image}
              className='sm:w-1/2 w-100 px-4'
            >
              <div className='flex relative'>
                <img
                  alt='gallery'
                  className='py-5 absolute w-full h-full max-h-72 object-cover object-left-top'
                  src={project.image}
                />
                <div className='px-10 py-20 mb-10 relative z-10 w-full border-4 border-stone-300 bg-slate-900 opacity-0 hover:opacity-100'>
                  <h1 className='title-font text-lg font-medium text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed text-stone-400 p-1'>
                    {project.description}
                  </p>
                  <h2 className='tracking-widest text-sm title-font font-medium text-lime-300 my-1'>
                    Technologies: {project.subtitle}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
