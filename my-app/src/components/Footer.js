import React from "react";

export default function Footer() {
  return (
    <section id='footer' className='sm:p-6 bg-slate-900'>
      <div className='md:flex md:justify-between'>
        <div className='mb-5 md:mb-0 flex items-center'>
          <a href='https://flowbite.com/' className='flex items-center'>
            <img
              src='./favicon.ico'
              className='h-10 m-5 rounded'
              alt='RL logo/icon'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>
              Thanks for visiting!
            </span>
          </a>
        </div>
        <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase text-white'>
              Links
            </h2>
            <ul className='text-gray-400'>
              <li className='mb-4'>
                <a
                  href='https://www.linkedin.com/in/rhea-le-39165280/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-linkedin-in text-lg text-stone-500 opacity-75'></i>
                  <span className='ml-2'>LinkedIn</span>
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href='https://github.com/rheangocle'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-github text-lg text-stone-500 opacity-75'></i>
                  <span className='ml-2'>GitHub</span>
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  <i className='fas fa-file-pdf text-lgtext-stone-500 opacity-75'></i>
                  <span className='ml-2'>Resume</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase text-white'>
              Info
            </h2>
            <ul className='text-gray-400'>
              <li className='mb-4'>
                <i className='rounded bg-blue fas fa-map-marker-alt text-lg text-stone-500 opacity-75'></i>
                <span className='ml-2'>Tallahassee, FL</span>
              </li>
              <li className='mb-4'>
                <a
                  href='mailto:rheangocle@gmail.com'
                  className='hover:underline'
                >
                  <i className='fas  fa-envelope text-lg text-stone-500 opacity-75'></i>
                  <span className='ml-2'>rheangocle@gmail</span>
                </a>
              </li>
              <li className='mb-4'>
                <i className='fas fa-mobile-alt text-lg text-stone-500 opacity-75'></i>
                <span className='ml-2'>(720)648-8844</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='border-stone-500 sm:mx-auto border-gray-700 lg:my-8' />
      <div className='pb-5 sm:flex sm:items-center sm:justify-center'>
        <span className='text-sm text-gray-500 sm:text-center'>
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
