import React from "react";
import { Experience } from "../types";

interface Props {
  experience: Experience;
  isEven: boolean;
}

const ExperienceCard: React.FC<Props> = ({ experience, isEven }) => {
  return (
    <div
      className={`flex items-center justify-${isEven ? "start" : "end"} w-full`}
    >
      <div
        className={`relative flex ${
          isEven
            ? "justify-end md:justify-start"
            : "justify-start md:justify-end"
        } items-center w-full md:w-1/2`}
      >
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg md:mx-6 ml-6">
          <div className="flex items-center mb-4">
            <img
              src={experience.logo}
              alt={`${experience.company} Logo`}
              className="w-12 h-12 rounded-full mr-4 ring-2 ring-white"
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
          
          {/* Loop through each project */}
          <div className="space-y-4">
            {experience.projects.map((project, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-[#FFAF00]">
                  - {project.name}
                </h4>
                <p className="text-gray-400 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="bg-[#7C00FE] text-white text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
