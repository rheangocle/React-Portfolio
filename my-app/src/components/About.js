import React from "react";

function About() {
  return (
    <section
      id='about'
      style={{ background: "linear-gradient(#f4b393, #9559c5)" }}
      className='px-20 grid gap-4'
    >
      <div className='gap-4 grid grid-cols-6'>
        <div className='col-span-3 sm:col-span-6'>
          <p className='tracking-wider font-marker font-bold title-font sm:text-4xl lg:text-5xl font-medium text-gray-900 '>
            A little bit about me
          </p>
        </div>
        <img
          className='sm:col-span-3 lg:col-span-3 row-span-1 self-end rounded-full w-48'
          alt='Profile picture'
          src='./images/image0.jpeg'
        />
        <div className='sm:col-span-6 col-span-6 row-span-3'>
          <p className='mb-5 text-lg sm:text-s'>
            Born in Vietnam, raised in Denver, CO, and recently moved to
            Tallahassee, FL. I recently graduated from a Full Stack Web
            Development course and currently seeking remote and local entry
            level developer positions. My main proficiencies are the MERN Stack,
            MySQL & NoSQL. My background is in biochemistry and pharmacy and
            spent 5+ years working in research and development.
          </p>
          <p className='mb-5 text-lg sm:text-s'>
            <i className='fa-lg fas fa-play-circle animate-spin p-1'> </i>
            My side interests include social media management and video editing.
            I have experience using Adobe Premiere Pro, Adobe After Effects, &
            OBS Studio!
          </p>
        </div>
        <div className='sm:col-span-6 col-span-6 row-span-1 sm-row-span-3'>
          <a
            href='#contact'
            className='p-2 inline-flex text-black bg-amber-300 focus:outline-none hover:bg-slate-800 hover:text-white rounded text-lg'
          >
            Contact Me!
          </a>
          <a
            href='#projects'
            className='p-2 ml-4 inline-flex text-black bg-amber-300 focus:outline-none hover:bg-slate-800 hover:text-white rounded text-lg'
          >
            See My Past Projects!
          </a>
        </div>

        <div className='sm:col-span-6 col-span-6 row-span-1 sm-row-span-3'>
          <a href='mailto:rheangocle@gmail.com' className='p-5 hover:underline'>
            <i className='fas  fa-envelope text-lg text-gray-900 opacity-75'></i>
          </a>

          <a
            href='https://www.linkedin.com/in/rhea-le-39165280/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-5'
          >
            <i className='fa-brands fa-linkedin-in text-lg text-gray-900 opacity-75'></i>
          </a>

          <a
            href='https://github.com/rheangocle'
            target='_blank'
            rel='noopener noreferrer'
            className='p-5'
          >
            <i className='fa-brands fa-github text-lg text-gray-900 opacity-75'></i>
          </a>

          <a href='#' className='p-5 hover:underline'>
            <i className='fas fa-file-pdf text-lg text-gray-900 opacity-75'></i>
          </a>
        </div>
      </div>
      <div className='row mx-auto flex px-10 p-20 md:flex-row md:flex-row items-center'>
        <div className='my-5 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left'>
          <p className='tracking-wider font-marker font-bold title-font sm:text-4xl lg:text-5xl mb-4 font-medium text-gray-900 '>
            A little bit about me
          </p>
          <p className='mb-5 text-lg sm:text-s'>
            Born in Vietnam, raised in Denver, CO, and recently moved to
            Tallahassee, FL. I recently graduated from a Full Stack Web
            Development course and currently seeking remote and local entry
            level developer positions. My main proficiencies are the MERN Stack,
            MySQL & NoSQL. My background is in biochemistry and pharmacy and
            spent 5+ years working in research and development.
            {/* 
          My motivation for coding came naturally due to my hobbies keeping me on my computer for long periods of time. These hobbies include streaming and video editing. I really enjoy challenging myself to learn new things such as learning to code.  */}
          </p>
          <img
            className='float-right object-cover object-center rounded-full w-1/5'
            alt='Profile picture'
            src='./images/image0.jpeg'
          />
          <p className='mb-5 text-lg sm:text-s'>
            <i className='fa-lg fas fa-play-circle animate-spin p-1'> </i>
            My side interests include social media management and video editing.
            I have experience using Adobe Premiere Pro, Adobe After Effects, &
            OBS Studio!
          </p>

          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-flex text-black bg-amber-300 py-2 px-3 focus:outline-none hover:bg-slate-800 hover:text-white rounded text-lg'
            >
              Contact Me!
            </a>
            <a
              href='#projects'
              className='ml-4 inline-flex text-black bg-amber-300 py-2 px-3  focus:outline-none hover:bg-slate-800 hover:text-white rounded text-lg'
            >
              See My Past Projects!
            </a>
          </div>
        </div>
      </div>

      <div className='gap-1 row grid grid-flow-col w-1/5 ml-10 -mt-10'>
        <div className='row-span-1 col-span-1'>
          <a href='mailto:rheangocle@gmail.com' className='hover:underline'>
            <i className='fas  fa-envelope text-lg text-gray-900 opacity-75'></i>
          </a>
        </div>
        <div className='row-span-1 col-span-1'>
          <a
            href='https://www.linkedin.com/in/rhea-le-39165280/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa-brands fa-linkedin-in text-lg text-gray-900 opacity-75'></i>
          </a>
        </div>
        <div className='row-span-1 col-span-1'>
          <a
            href='https://github.com/rheangocle'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa-brands fa-github text-lg text-gray-900 opacity-75'></i>
          </a>
        </div>
        <div className='row-span-1 col-span-1'>
          <a href='#' className='hover:underline'>
            <i className='fas fa-file-pdf text-lg text-gray-900 opacity-75'></i>
          </a>
        </div>
      </div>

      {/* <div className='pt-20 row flex justify-center align-items-end'>
        <icon className='animate-bounce justify-center self-end fas fa-chevron-down'></icon>
      </div> */}
    </section>
  );
}

export default About;
