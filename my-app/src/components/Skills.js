import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id='skills' className='bg-orange-300'>
      <div className='container px-20 py-20 flex md:flex-row flex-col items-center'>
        <h1 className='z-0 lg:text-5xl md:text-4xl sm:text-4xl font-bold md:text-right sm:text-left text-slate-100 pb-10'>
          Technologies & Skills
        </h1>
        <div className='container flex flex-wrap items-stretch lg:px-10 sm:px-5 lg:w-full sm:mx-auto"'>
          {skills.map((skill) => (
            <div className='flex flex-wrap items-evenly px-4'>
              <span className='font-semibold'>
                {skill.name}
                <img
                  className='mt-1 py-3 animate-bounce'
                  src={skill.link}
                  alt=''
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
