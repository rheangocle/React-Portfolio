import React from "react";
import "../styles.css";
import {
  motion,
  useScroll,
  useSpring,
  useTime,
  useTransform,
} from "framer-motion";
const sections = [
  {
    id: 1,
    name: "home",
    path: "",
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
    id: 5,
    name: "contact",
    path: "#contact",
  },
];

const links = [
  {
    name: "email",
    link: "mailto:rheangocle@gmail.com",
    icon: "fas fa-envelope ",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/rhea-le-39165280/",
    icon: "fa-brands fa-linkedin-in ",
  },
  {
    name: "github",
    link: "https://github.com/rheangocle",
    icon: "fa-brands fa-github ",
  },
  {
    name: "resume",
    link: "./images/Resume.pdf",
    icon: "fas fa-file-pdf ",
  },
];

function Main() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      style={{ background: "linear-gradient(#f87749, #f4b393)" }}
      className='grid justify-center w-screen lg:h-screen bg-orange px-10 py-5'
    >
      <motion.div className='progress-bar' style={{ scaleX }} />
      <nav className='row flex items-start justify-center z-40 mb-10'>
        {sections.map((section) => (
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              key={section.id}
              className='text-xs pr-5 font-extrabold uppercase text-stone-900 hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy '
              href={section.path}
            >
              {section.name}
            </a>
          </motion.button>
        ))}
      </nav>

      <div className='row flex justify-center mb-10 mt-10'>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
        >
          <p className='self-center text-white font-marker transform -skew-y-12 text-8xl lg:scale-150 sm:scale-50'>
            Rhea Le
          </p>
        </motion.div>
      </div>
      <div className='mt-10 container justify-center content-center px-10'>
        <p className='text-slate-700 font-heading self-center lg:text-lg sm:text-s font-semibold p-5'>
          <i className='text-black fas fa-angle-double-right' /> Graduate of
          UCF’s Full Stack Web Development program with focused expertise in
          MERN applications, REST APIs, and DBMS. Skilled at working in and
          across teams to achieve mutual success. Outstanding technical
          aptitude, creativity, and learning agility. />
        </p>

        {/* <p className='lg:text-lg sm:text-s bg-white/50 p-5'>
          <i className='fa-lg fas fa-play-circle animate-spin p-1'> </i>
          My side interests include social media management and video editing. I
          have experience using Adobe Premiere Pro, Adobe After Effects, & OBS
          Studio!
        </p> */}
      </div>

      <div className='row flex justify-center'>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target='_blank'
            rel='noopener noreferrer'
            className='p-5'
          >
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <i
                className={`${link.icon} text-3xl text-black hover:underline hover:underline-offset-8 hover:decoration-yellow-300 hover:decoration-wavy`}
              ></i>
            </motion.button>
          </a>
        ))}
      </div>

      <div className='row flex justify-center'>
        <icon className='animate-bounce justify-center self-end fas fa-chevron-down'></icon>
      </div>
    </div>
  );
}

export default Main;
