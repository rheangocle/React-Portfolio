import React from "react";

function Ethic() {
  return (
    <section id='ethic' className='bg-emerald-900 text-stone-200'>
      <div className='container mx-auto px-20 py-20 flex md:flex-row flex-col items-end'>
        <div className='lg:flex-grow md:w-2/3 flex flex-col md:items-end md:mb-0 items-center'>
          <h1 className='z-0 lg:text-5xl md:text-4xl sm:text-4xl font-bold text-right text-slate-100'>
            Motivation & Work Ethic
          </h1>
          <p className='md:text-left text-neutral-800 md:px-10 bg-stone-200/70 rounded-lg p-10 hover:text-lg hover:bg-stone-200/75 sm:px-5'>
            "I am a very motivated and hard working individual. Coding is a way
            to express my creativeness, critical thinking, and hard work. It
            gives me great pride to create the best product that I can and make
            the code just a little better than how I found it. Aside from this,
            I have worked extensively as a team and group member during my time
            in undergraduate and graduate programs. My work experience include
            leadership experience (testing coordinator & quality chemist)
            provided me with great communication skills to be a valuable team
            member. I am a quick learner and I am eager to gain experience in
            coding!"
          </p>
        </div>
      </div>
    </section>
  );
}

export default Ethic;
