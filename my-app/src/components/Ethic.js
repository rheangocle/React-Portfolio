import React from "react";

function Ethic() {
  return (
    <section
      id='ethic'
      style={{ background: "#7714e4" }}
      className='h-screen pt-10'
    >
      <div className='container mx-auto px-10 flex md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-2/3 flex flex-col md:items-end md:mb-0 items-center'>
          <h1
            style={{ color: "yellow" }}
            className='animate-slide pt-20 pb-10 px-10 font-heading font-bold z-0 lg:text-8xl sm:text-8xl font-bold text-right text-yellow'
          >
            Work Ethic
          </h1>
        </div>
        <div>
          <p
            style={{ background: "#f87749" }}
            className='p-10 md:text-left text-neutral-800 md:px-10 bg-stone-200/70 sm:px-5'
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

        <div className='pt-20 flex justify-center'>
          <icon className='animate-bounce justify-center self-end fas fa-chevron-down'></icon>
        </div>
      </div>
    </section>
  );
}

export default Ethic;
