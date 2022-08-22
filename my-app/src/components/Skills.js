import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id='skills' className='bg-orange-300'>
      <div className='container px-20 py-20 flex md:flex-row flex-col items-end'>
        <h1 className='z-0 lg:text-5xl md:text-4xl sm:text-4xl font-bold text-right text-slate-100 pb-10'>
          Technologies & Skills
        </h1>
        <div className='flex flex-wrap px-10 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"'>
          {skills.map((skill) => (
            <div className='px-3 py-1'>
              <span className='font-semibold'>
                {skill.name}
                <img src={skill.link} alt='' />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
