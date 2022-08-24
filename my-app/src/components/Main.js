import React from "react";

function Main() {
  return (
    <div
      style={{ background: "linear-gradient(#f87749, #f4b393)" }}
      className='grid bg-orange-400 flex justify-center w-screen h-screen bg-orange p-5'
    >
      <nav className='row flex items-start justify-center'>
        <a
          className='text-xs pr-5 font-extrabold uppercase text-stone-900 hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy '
          href='/'
        >
          Home
        </a>
        <a
          className='text-xs pr-5 font-extrabold uppercase text-stone-900 hover:underline hover:decoration-wavy hover:decoration-yellow-300 hover:underline-offset-8'
          href='#about'
        >
          About
        </a>
        <a
          className='text-xs pr-5 font-extrabold uppercase text-stone-900 hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy'
          href='#projects'
        >
          work
        </a>
        <a
          className='text-xs pr-5 font-extrabold uppercase text-stone-900 hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy '
          href='#skills'
        >
          Skills
        </a>
        <a
          className='text-xs pr-5 font-extrabold uppercase text-stone-900 hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy'
          href='#projects'
        >
          contact
        </a>
      </nav>

      <div className='row flex justify-center '>
        <p className='animate-wave self-end text-white font-marker transform -skew-y-12 lg:scale-150 text-9xl sm:scale-100'>
          Rhea Le
        </p>
      </div>
      <div className='row flex justify-center'>
        <h2 className='pt-5 self-center font-bold text-xl text-stone-700'>
          Hey there 🖐️, welcome to my page!
        </h2>
      </div>
      <div className='row flex justify-center'>
        <icon className='animate-bounce justify-center self-end fas fa-chevron-down'></icon>
      </div>
    </div>
  );
}

export default Main;
