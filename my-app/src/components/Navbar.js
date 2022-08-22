import React from "react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <section id='navbar'>
      <nav className='relative flex flex-wrap items-center justify-between px-4 py-3 bg-lime-200 mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className='text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-stone-500'
              href='/'
            >
              Rhea Le
            </a>
            <button
              className='text-stone-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
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
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-stone-500 hover:opacity-75'
                  href='#pablo'
                  target='_blank'
                >
                  <i className='fa-brands fa-linkedin-in text-lg leading-lg text-stone-500 opacity-75'></i>
                  <span className='ml-2'>LinkedIn</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-stone-500 hover:opacity-75'
                  href='https://github.com/rheangocle'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa-brands fa-github text-lg leading-lg text-stone-500 opacity-75'></i>
                  <span className='ml-2'>GitHub</span>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-stone-500 hover:opacity-75'
                  href='https://github.com/rheangocle'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fas fa-file-pdf text-lg leading-lg text-stone-500 opacity-75'></i>
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
