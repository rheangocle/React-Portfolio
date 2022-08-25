import React from "react";

export default function Footer() {
  return (
    <section id='footer' className='sm:p-6 bg-white text-black'>
      <hr className='sm:mx-auto border-stone-300 ' />
      <div className='md:flex md:justify-between grid'>
        <div className='mb-5 md:mb-0 flex items-center'>
          <a href='https://flowbite.com/' className='flex items-center'>
            <img
              src='./favicon.ico'
              className='h-10 m-5 rounded'
              alt='RL logo/icon'
            />
            <span className='font-heading text-2xl font-bold text-stone-600'>
              Thanks for visiting!
            </span>
          </a>
        </div>
        <div className='p-5 text-stone-900 grid grid-cols-2 gap-4 sm:gap-4 sm:grid-cols-3'>
          <div>
            <h2 className=' text-stone-900 mb-6 text-sm font-semibold uppercase'>
              Links
            </h2>
            <ul className='text-stone-400'>
              <li className='mb-4'>
                <a
                  href='https://www.linkedin.com/in/rhea-le-39165280/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-linkedin-in text-md text-stone-600 opacity-75'></i>
                  <span className='ml-2'>LinkedIn</span>
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='https://github.com/rheangocle'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-github text-md text-stone-600 opacity-75'></i>
                  <span className='ml-2'>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href='./images/Resume.pdf'
                  target='_blank'
                  rel='noopener norefferer'
                  className='hover:underline'
                >
                  <i className='fas fa-file-pdf text-md text-stone-600 opacity-75'></i>
                  <span className='ml-2'>Resume</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-stone-900 uppercase'>
              Info
            </h2>
            <ul className='text-stone-400'>
              <li className='mb-4'>
                <i className='rounded bg-blue fas fa-map-marker-alt text-md text-stone-600 opacity-75'></i>
                <span className='ml-2'>Tallahassee, FL</span>
              </li>
              <li className='mb-4'>
                <a
                  href='mailto:rheangocle@gmail.com'
                  className='hover:underline'
                >
                  <i className='fas  fa-envelope text-md text-stone-600 opacity-75'></i>
                  <span className='ml-2'>rheangocle@gmail</span>
                </a>
              </li>
              <li className='mb-4'>
                <i className='fas fa-mobile-alt text-md text-stone-600 opacity-75'></i>
                <span className='ml-2'>(720)648-8844</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='border-stone-600 sm:mx-auto ' />

      <div className='p-5 sm:flex sm:items-center sm:justify-center'>
        <span className='text-sm text-stone-600 sm:text-center'>
          © 2022{" "}
          <a href='https://github.com/rheangocle' className='hover:underline'>
            Rhea Le
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </section>
  );
}
