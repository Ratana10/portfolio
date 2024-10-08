import { educationDescription, educations } from "../db/data";
import EducationCard from "./EducationCard";

const EducationSection = () => {
  return (
    <section id="courses" className="relative container mx-auto px-4 mt-20">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        {educationDescription.title}
      </h1>

      {/* Section Description */}
      <p className="text-lg text-center text-gray-400 mb-12">
        {educationDescription.description}
      </p>

      {/* Vertical Line */}
      <div className="absolute left-5 md:left-1/2 transform md:translate-x-1/2 w-px h-[calc(100%-6rem)] bg-gray-700"></div>

      {/* Experience Cards */}
      <div className="relative space-y-12">
        {educations.map((education: any, index: number) => (
          <EducationCard
            key={index}
            education={education}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
