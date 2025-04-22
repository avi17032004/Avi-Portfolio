import React from "react";
import projects from "./data/projects.json";

const Projects = () => {
  return (
    <div className="w-full max-w-[90%] mx-auto py-1" id="projects">
      <h1 className="text-xl lg:text-3xl lg:ml-40 mt-16 font-bold mb-10 text-start ">
        My <span className="text-yellow-300">Projects</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-12 ">
        {projects.map((data, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-duration="1000"
            className="flex flex-col justify-center items-center w-full sm:w-[42%] lg:w-[25%] border-2 border-yellow-300 p-5 rounded-lg shadow-[5px_1px_20px_13px_rgba(101,175,10,0.5)]"
          >
            <div className="border-2 border-yellow-300 rounded-xl">
              <img
                src={data.imageSrc}
                alt=""
                className="h-52 w-52 object-cover rounded-lg"
              />
            </div>

            <div className="flex justify-center flex-col items-center text-center mt-2 text-white">
              <h2 className="text-xl font-semibold text-yellow-300">
                {data.title}
              </h2>
              <h4 className="text-sm mt-2">{data.description}</h4>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <a
                href={data.demo}
                target="blank"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Demo
              </a>
              <a
                href={data.source}
                target="blank"
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
