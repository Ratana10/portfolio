import React from 'react'
import { Experience } from '../types';

interface Props{
  experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div className="relative flex items-center bg-gray-900 rounded-lg shadow-lg p-6 my-4">
      <div className="absolute -left-12 top-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
        <img src={experience.logo} alt={`${experience.company} logo`} className="w-10 h-10" />
      </div>
      <div className="ml-16">
        <h2 className="text-xl font-bold text-white">{experience.role}</h2>
        <h3 className="text-md text-gray-400">{experience.company}</h3>
        <p className="text-sm text-gray-400 mb-2">{experience.duration}</p>
        <p className="text-gray-300">{experience.description}</p>
        <div className="mt-2">
          <h4 className="text-sm font-bold text-gray-400">Skills:</h4>
          <ul className="flex flex-wrap space-x-2">
            {experience.skills.map((skill, index) => (
              <li key={index} className="text-sm text-gray-200">
                • {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard
