import React, { useEffect, useRef } from "react";
import hero from "./data/hero.json";
import Typed from "typed.js";
import { FaDownload } from "react-icons/fa6";
import pdf from "../pdf/Avinash_React.pdf";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Profile",
        "My Name is Avinash",
        "I'm Front-End Developer",
        "Web Developer(React Js)",
        "MERN Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[70vh] m-10"
      id="home"
    >
      <div
        className="flex flex-col-reverse gap-40 md:flex-row mt-28 lg:flex-row h-full w-full justify-between items-center space-y-8 md:space-y-0 md:px-24 lg:py-12"
        id="home"
      >
        <div className="lg:min-w-[600px] space-y-6 text-center rounded-2xl border-3 border-yellow-300 p-6 shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)] bg-[rgb(40,47,97)]">
          <h1
            ref={typedRef}
            className="text-base text-yellow-300 font-bold lg:text-3xl"
          ></h1>
          <p className=" lg:text-lg leading-7 max-w-[400px] mx-auto">
            I'm a Full Stack Developer focused on building user-friendly web
            apps with React and the MERN stack, eager to join creative,
            innovative teams.
          </p>

          <a
            href={pdf}
            download="Avi_resume.pdf"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden
             text-sm font-medium text-yellow-300 hover:text-gray-900 rounded-lg  
             bg-black border-red-200 border-2 hover:border-none
             hover:bg-gradient-to-br hover:from-red-200 hover:via-red-300 hover:to-yellow-200 
             transition-transform duration-200 hover:scale-105 shadow-lg group"
          >
            <span className="relative z-10 text-xs lg:text-xl px-2 py-2 rounded-md transition-all duration-500">
              Download Resume{" "}
              <span className="text-white group-hover:text-gray-900 inline-block ml-1">
                <FaDownload />
              </span>
            </span>
          </a>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={`./assets/${hero.imgSrc}`}
            alt="Hero"
            className=" home-image h-[250px] w-[250px] lg:h-[250px] lg:w-[250px] rounded-full border-4 border-yellow-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
