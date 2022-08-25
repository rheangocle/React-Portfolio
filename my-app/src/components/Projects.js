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
      <div className='items-center flex flex-col w-full mb-10 p-10'>
        <h1 className='font-heading sm:text-4xl md:text-5xl lg:text-8xl title-font mb-4 text-lime-400 font-bold'>
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
            <div className='relative p-3'>
              <div className='relative bg-stone-200 dark:bg-gray-700'>
                <div className='flex justify-between items-start p-4 dark:border-gray-600'>
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

                <div className='px-20 py-10 space-y-6'>
                  <h1 className='font-heading font-bold title-font text-2xl  text-black mb-3'>
                    {projects[selectedInd].title}
                  </h1>
                  <p className='leading-relaxed text-black p-10 text-md'>
                    {projects[selectedInd].description}
                  </p>
                  <h2 className='tracking-widest text-md title-font font-bold text-green-400'>
                    Technologies: {projects[selectedInd].subtitle}
                  </h2>
                </div>
                <div className='flex justify-center p-10 space-x-3 rounded-b  dark:border-gray-600'>
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

        {/* <div className='rounded flex flex-wrap -m-4'>
          {projects.map((project) => (
            <div className='sm:w/2 w-100 '>
              <button
                // href={project.deployed}
                key={project.id}
                type='button'
                // className='sm:w-1/2 w-100 px-4'
                onClick={() => setOpenModal(!openModal)}
              >
                Open
              </button> */}

        {/* <div
                id='defaultModal'
                tabindex='-1'
                aria-hidden='true'
                className={
                  "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full" +
                  (openModal ? "" : " hidden")
                }
              >
                <div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>
                  <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                    <div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
                      <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
            
                      </h3>
                      <button
                        onClick={() => setOpenModal(!openModal)}
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
                 
                    <div className='p-6 space-y-6'>
                      <h1 className='title-font text-lg font-medium text-black mb-3'>
                        {project.title}
                      </h1>
                      <p className='leading-relaxed text-black p-1'>
                        {project.description}
                      </p>
                      <h2 className='tracking-widest text-sm title-font font-medium text-black'>
                        Technologies: {project.subtitle}
                      </h2>
                    </div>
                    <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                      <a
                        href={project.github}
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                      >
                        GitHub
                      </a>
                      <a
                        href={project.deployed}
                        className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
                      >
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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
            </div>
          ))} */}
        {/* </div> */}
      </div>

      <div className='pt-20 flex justify-center'>
        <icon className='text-black animate-bounce justify-center self-end fas fa-chevron-down'></icon>
      </div>
    </section>
  );
}
