import React, { useEffect, useRef } from "react";
import { Experience } from "../types";
import { motion, useAnimation } from "framer-motion";

interface Props {
  experience: Experience;
  isEven: boolean;
}

const ExperienceCard: React.FC<Props> = ({ experience, isEven }: Props) => {
  const controls = useAnimation();
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          });
        } else {
          controls.start({
            opacity: 0,
            y: 100,
            scale: 0.95,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          });
        }
      },
      {
        threshold: 0.1, // Trigger the animation when 10% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      className={`flex items-center justify-${isEven ? "start" : "end"} w-full`}
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
    </motion.div>
  );
};

export default ExperienceCard;
