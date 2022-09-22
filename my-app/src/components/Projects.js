import React, { useState } from "react";
import { projects } from "../data";

const styles = {
  background: {
    background: "linear-gradient(#7714e4, #1644BE)",
  },
  container: {
    width: "30rem",
  },
};

export default function Projects() {
  const [selectedInd, setSelectedInd] = useState(-1);
  const toggle = () => setSelectedInd(-1);
  const modal = selectedInd >= 0 && projects && projects.length > selectedInd;
  return (
    <section
      id='projects'
      style={styles.background}
      className='text-gray-400 bg-slate-900 pb-20'
    >
      <div className='items-center flex flex-col w-full mb-10 px-10 pt-10'>
        <h1 className='font-heading sm:text-4xl md:text-5xl lg:text-8xl title-font mb-4 text-slate-100 font-bold'>
          Featured Projects
        </h1>
        <p className='leading-relaxed text-white'>
          Some of my past including team collaborations and individual work.
          Click on the image for more information!
        </p>
      </div>
      <div className='flex justify-center flex-wrap mx-auto text-center lg:w-3/4'>
        {projects.map((v, i) => (
          <button
            type='button'
            className='hover:cursor-pointer'
            key={i}
            onClick={() => setSelectedInd(i)}
          >
            <div className='container px-10'>
              <img
                alt='screen recording of project usage'
                style={styles.container}
                className='hover:scale-110 py-10 max-h-80 object-cover object-left-top'
                src={v.image}
              ></img>
            </div>
          </button>
        ))}
        {modal && (
          <div
            isOpen={modal}
            toggle={toggle}
            onClick={toggle}
            className={
              "overflow-y-auto overflow-x-hidden fixed inset-0 z-50 w-screen md:inset-0 h-screen text-bold" +
              (toggle ? "" : " hidden")
            }
          >
            <div className='relative p-5'>
              <div className='relative bg-stone-200 dark:bg-gray-700'>
                <div className='flex justify-between items-start p-5 dark:border-gray-600'>
                  <button
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                    data-modal-toggle='defaultModal'
                  >
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span className='sr-only'>Close modal</span>
                  </button>
                </div>

                <div className='px-10 py-10 space-y-6'>
                  <h1 className='font-heading font-bold title-font text-2xl  text-black mb-3'>
                    {projects[selectedInd].title}
                  </h1>
                  <p className='leading-relaxed text-black p-5 text-md'>
                    {projects[selectedInd].description}
                  </p>
                  <h2 className='tracking-widest text-md title-font font-bold text-green-400'>
                    Technologies: {projects[selectedInd].subtitle}
                  </h2>
                </div>
                <div className='flex justify-center p-5 space-x-3 rounded-b  dark:border-gray-600'>
                  <a
                    href={projects[selectedInd].github}
                    className='hover:bg-blue-700 text-white bg-black rounded-lg p-2 font-semibold tracking-wide'
                  >
                    GitHub
                  </a>
                  <a
                    href={projects[selectedInd].deployed}
                    className='hover:bg-blue-700 text-white bg-black rounded-lg p-2 font-semibold tracking-wide'
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='pt-20 flex justify-center content-end'>
        <icon className='text-black animate-bounce fas fa-chevron-down'></icon>
      </div>
    </section>
  );
}
