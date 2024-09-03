import ExperienceCard from "./ExperienceCard";
import { experiences } from "../db/data";

const ExperienceSection = () => {
  return (
    <section className="relative container mx-auto px-4 mt-20">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Experience
      </h1>

      {/* Section Description */}
      <p className="text-lg text-center text-gray-400 mb-12">
        My work experience as a software engineer and working on different
        companies and projects.
      </p>

      {/* Vertical Line */}
      <div className="absolute left-5 md:left-1/2 transform md:translate-x-1/2 w-px h-[calc(100%-6rem)] bg-gray-700"></div>

      {/* Experience Cards */}
      <div className="relative space-y-12">
        {experiences.map((experience : any, index: number) => (
          <ExperienceCard
            key={index}
            experience={experience}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
