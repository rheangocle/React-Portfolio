import React from "react";

function About() {
  return (
    <section
      id='about'
      style={{ background: "linear-gradient(#f4b393, #7714e4)" }}
      className=' py-10 text-gray-900'
    >
      <div className='py-5 justify-items-center gap-6 grid grid-cols-6'>
        <div className='py-5 col-span-6'>
          <p className='font-heading font-bold title-font sm:text-4xl lg:text-8xl text-white'>
            About me
          </p>
        </div>
        {/* <img
          className='col-span-6 row-span-1 self-end rounded-full w-40 hover:animate-bounce'
          alt='Profile picture'
          src='./images/image0.jpeg'
        /> */}

        <div className='w-2/3 p-10 bg-white/75 sm:col-span-6 col-span-6 row-span-3'>
          <p className='pb-5 lg:text-lg sm:text-s'>
            Born in Vietnam, raised in Denver, CO, and recently moved to
            Tallahassee, FL. I am a Full Stack Web Developer seeking remote and
            local (Tallahassee, FL) junior developer positions. My main
            proficiencies are the MERN Stack, MySQL & NoSQL. I have collaborated
            in teams of 4-6 people. My background is in biochemistry, pharmacy
            and research and development.
          </p>
          <p className='lg:text-lg sm:text-s'>
            <i className='fa-lg fas fa-play-circle animate-spin p-1'> </i>
            My side interests include social media management and video editing.
            I have experience using Adobe Premiere Pro, Adobe After Effects, &
            OBS Studio!
          </p>
        </div>
        <div className='sm:col-span-6 col-span-6 row-span-1 sm-row-span-3'>
          <a
            href='#contact'
            className='lg:text-lg sm:text-s p-2 inline-flex text-black bg-amber-300 focus:outline-none hover:bg-slate-800 hover:text-white rounded'
          >
            Contact Me!
          </a>
          <a
            href='#projects'
            className='p-2 ml-4 inline-flex text-black bg-amber-300 focus:outline-none hover:bg-slate-800 hover:text-white rounded lg:text-lg sm:text-s'
          >
            View Past Projects!
          </a>
        </div>

        <div className='sm:col-span-6 col-span-6 row-span-1 sm-row-span-3'>
          <a href='mailto:rheangocle@gmail.com' className='p-5 hover:underline'>
            <i className='fas fa-envelope text-xl text-black'></i>
          </a>

          <a
            href='https://www.linkedin.com/in/rhea-le-39165280/'
            target='_blank'
            rel='noopener noreferrer'
            className='p-5'
          >
            <i className='fa-brands fa-linkedin-in text-xl text-black'></i>
          </a>

          <a
            href='https://github.com/rheangocle'
            target='_blank'
            rel='noopener noreferrer'
            className='p-5'
          >
            <i className='fa-brands fa-github text-xl text-black'></i>
          </a>

          <a
            href='./images/Resume.pdf'
            target='_blank'
            rel='noopener norefferer'
            className='p-5 hover:underline'
          >
            <i className='fas fa-file-pdf text-xl text-black'></i>
          </a>
        </div>
      </div>

      <div className='pt-40 flex justify-center'>
        <icon className='animate-bounce justify-center self-end fas fa-chevron-down'></icon>
      </div>
    </section>
  );
}

export default About;
