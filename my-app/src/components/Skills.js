import React from "react";
import { skills } from "../data";

const styles = {
  background: {
    background: "#1644BE",
    color: "#75DDDD",
  },
};
export default function Skills() {
  return (
    <section id='skills' style={styles.background} className='px-10'>
      <div className='container p-10 flex md:flex-row flex-col items-center'>
        <h1 className='z-0 lg:text-7xl md:text-4xl sm:text-4xl font-heading font-bold md:text-right sm:text-left text-slate-100 pb-10'>
          Technologies
        </h1>
        <div className='container flex flex-wrap items-stretch lg:px-10 sm:px-5 lg:w-full sm:mx-auto"'>
          {skills.map((skill) => (
            <div className='flex flex-wrap items-evenly px-4'>
              <span className='font-semibold'>
                {skill.name}
                <img
                  className='pl-1 mt-1 mb-2 py-1 animate-bounce'
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
