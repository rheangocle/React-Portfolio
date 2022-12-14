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
    <section
      id='skills'
      style={styles.background}
      className='px-10 pb-20 flex justify-center'
    >
      <div className='container justify-center flex-wrap p-10 flex md:flex-row flex-col items-center'>
        <h1 className='z-0 lg:text-7xl md:text-4xl sm:text-4xl font-heading font-bold md:text-right sm:text-left text-slate-100 pb-10'>
          Technologies + Skills
        </h1>

        <div className='container justify-start flex flex-wrap lg:py-10 lg:px-40 sm:px-5 lg:w-full sm:mx-auto"'>
          {skills.map((skill) => (
            <div className='flex flex-wrap px-5 py-2 justify-items-center'>
              <span className='font-semibold'>
                {skill.name}
                <img
                  className='pt-3 pl-1 animate-bounce self-center'
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
