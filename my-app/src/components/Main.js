import React from "react";

const sections = [
  {
    id: 1,
    name: "home",
    path: "",
  },
  {
    id: 2,
    name: "about",
    path: "#about",
  },
  {
    id: 3,
    name: "work",
    path: "#projects",
  },
  {
    id: 4,
    name: "skills",
    path: "#skills",
  },
  {
    id: 1,
    name: "contact",
    path: "#contact",
  },
];

function Main() {
  return (
    <div
      style={{ background: "linear-gradient(#f87749, #f4b393)" }}
      className='grid justify-center w-screen h-screen bg-orange px-10 py-5'
    >
      <nav className='row flex items-start justify-center'>
        {sections.map((section) => (
          <a
            key={section.id}
            className='text-xs pr-5 font-extrabold uppercase text-stone-900 hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy '
            href={section.path}
          >
            {section.name}
          </a>
        ))}
      </nav>

      <div className='row flex justify-center '>
        <p className='animate-wave self-end text-white font-marker transform -skew-y-12 lg:scale-150 text-9xl sm:scale-50 px-10'>
          Rhea Le
        </p>
      </div>
      <div className='row flex justify-center'>
        <h2 className='pt-5 self-center font-bold text-xl text-white'>
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
