import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-gray-800">
      <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-10 text-center lg:text-left">
        Projects
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 text-white">
        {userData.projects.map((project, idx) => (
          <div key={idx}>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.imgUrl}
                alt={project.title}
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </a>
            <h1 className="text-2xl font-bold text-gray-400 text-center my-5">
              {project.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
