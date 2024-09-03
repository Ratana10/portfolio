import React from "react";
import { experiences } from "../db/data";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = () => {
  return (
    <section className="relative container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Experience
      </h1>
      <p className="text-lg text-center text-gray-400 mb-12">
        My work experience as a software engineer and working on different
        companies and projects.
      </p>

      {/* Vertical Line */}
      <div className="absolute left-5 md:left-1/2 transform md:translate-x-1/2 w-px h-[calc(100%-6rem)] bg-gray-700"></div>

      <div className="relative space-y-12">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex items-center justify-${
              index % 2 === 0 ? "start" : "end"
            } w-full`}
          >
            {/* Card with spacing */}
            <div
              className={`relative flex ${
                index % 2 === 0
                  ? "justify-end md:justify-start"
                  : "justify-start md:justify-end"
              } items-center w-full md:w-1/2`}
            >
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg md:mx-6 ml-6">
                <div className="flex items-center mb-4">
                  <img
                    src={experience.logo}
                    alt={`${experience.company} Logo`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <span className="text-sm text-gray-400">
                      {experience.company}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{experience.duration}</p>
                <p className="text-gray-400 mb-4">{experience.description}</p>
                <div className="flex flex-wrap space-x-2">
                  {experience.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-800 text-gray-300 text-sm px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* Circle Marker */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-gray-700 ${
                  index % 2 === 0 ? "right-0 md:-mr-4" : "left-0 md:-ml-4"
                } md:mx-0 mx-auto`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
