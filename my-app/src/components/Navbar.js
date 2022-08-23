import React, { useState } from "react";
import { sections } from "../data";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <section id='navbar'>
      <nav className='relative flex flex-wrap items-center justify-between px-4 py-3 bg-blue-400 mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <button
              className='text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-stone-300'
              href=''
              type='button'
              onClick={() => setSidebar(!sidebar)}
            >
              Rhea Le
              <icon className='text-stone-300 px-2 fas fa-angle-down'></icon>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              id='dropdownNavbar'
              className={
                "z-10 fixed w-auto font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 opacity-75" +
                (sidebar ? " flex" : " hidden")
              }
            >
              <ul
                className='py-1 text-sm text-gray-700 dark:text-gray-400'
                aria-labelledby='dropdownLargeButton'
              >
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={section.href}
                      className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      onClick={() => setSidebar(!sidebar)}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className='text-stone-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-stone-300 hover:opacity-75'
                  href='https://www.linkedin.com/in/rhea-le-39165280/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-linkedin-in text-lg leading-lg text-stone-300 opacity-75'></i>
                  <span className='ml-2'>LinkedIn</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-stone-300 hover:opacity-75'
                  href='https://github.com/rheangocle'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-github text-lg leading-lg text-stone-300 opacity-75'></i>
                  <span className='ml-2'>GitHub</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-stone-300 hover:opacity-75'
                  href='https://github.com/rheangocle'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fas fa-file-pdf text-lg leading-lg text-stone-300 opacity-75'></i>
                  <span className='ml-2'>Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
