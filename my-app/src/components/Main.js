import React from "react";

const sections = [
  {
    id: 1,
    name: "home",
    path: "",
  },
  // {
  //   id: 2,
  //   name: "about",
  //   path: "#about",
  // },
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

      <div className='row flex justify-center mb-10'>
        <p className='self-center text-white font-marker transform -skew-y-12 lg:scale-150 text-9xl sm:scale-50 px-10'>
          Rhea Le
        </p>
      </div>
      <div className='mt-10 container justify-center px-10'>
        <p className='lg:text-lg sm:text-s bg-white/50 p-5'>
          Born in Vietnam, raised in Denver, CO, and recently moved to
          Tallahassee, FL. I am a Full Stack Web Developer seeking remote and
          local (Tallahassee, FL) junior developer positions. My main
          proficiencies are in creating MERN applications, REST APIs, & DBMS. I
          have collaborated in teams of 4-6 people. My background is in
          biochemistry, pharmacy and research and development.
        </p>
        <p className='lg:text-lg sm:text-s bg-white/50 p-5'>
          <i className='fa-lg fas fa-play-circle animate-spin p-1'> </i>
          My side interests include social media management and video editing. I
          have experience using Adobe Premiere Pro, Adobe After Effects, & OBS
          Studio!
        </p>
      </div>

      <div className='row flex justify-center'>
        <a href='mailto:rheangocle@gmail.com' className='p-5 hover:underline'>
          <i className='fas fa-envelope text-xl text-black hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy '></i>
        </a>

        <a
          href='https://www.linkedin.com/in/rhea-le-39165280/'
          target='_blank'
          rel='noopener noreferrer'
          className='p-5'
        >
          <i className='fa-brands fa-linkedin-in text-xl text-black hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy '></i>
        </a>

        <a
          href='https://github.com/rheangocle'
          target='_blank'
          rel='noopener noreferrer'
          className='p-5'
        >
          <i className='fa-brands fa-github text-xl text-black hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy '></i>
        </a>

        <a
          href='https://docs.google.com/document/d/1_q9lLjh5TBEwGS7s5doKBEIJM_cp7mRK/edit?usp=sharing&ouid=103311015899579543846&rtpof=true&sd=true'
          target='_blank'
          rel='noopener norefferer'
          className='p-5 hover:underline'
        >
          <i className='fas fa-file-pdf text-xl text-black hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy '></i>
        </a>
      </div>

      <div className='row flex justify-center'>
        <icon className='animate-bounce justify-center self-end fas fa-chevron-down'></icon>
      </div>
    </div>
  );
}

export default Main;
