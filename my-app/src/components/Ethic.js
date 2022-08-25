import React from "react";

function Ethic() {
  return (
    <section
      id='ethic'
      style={{ background: "#7714e4" }}
      className='flex justify-center align-center flex-wrap h-screen'
    >
      <div className='w-2/3 container mx-auto flex md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-2/3 flex flex-col md:items-end md:mb-0 items-center'>
          <h1
            style={{ color: "yellow" }}
            className='animate-slide p-10 font-heading font-bold lg:text-8xl sm:text-8xl text-right text-yellow'
          >
            Work Ethic
          </h1>
        </div>
        <div>
          <p
            style={{ background: "#f87749" }}
            className='p-10 text-left text-neutral-800'
          >
            "I am a very motivated and hard working individual. Coding is a way
            for me to express my creativeness. I enjoy applying critical
            thinking and hard work to create the an amazing product. Aside from
            this, I have worked extensively as a team and group member during my
            time in undergraduate and graduate programs. My work experience
            include leadership experience (testing coordinator & quality
            chemist) provided me with great communication skills to be a
            valuable team member. I am a quick learner and I am eager to gain
            experience in coding!"
          </p>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <icon className='animate-bounce self-center fas fa-chevron-down'></icon>
      </div>
    </section>
  );
}

export default Ethic;
