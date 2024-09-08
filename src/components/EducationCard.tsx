import  { useEffect, useRef } from "react";
import { Education } from "../types";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

interface Props {
  education: Education;
  isEven: boolean;
}

const EducationCard = ({ education, isEven }: Props) => {
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
        threshold: 0.1,
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
            {education.logo && (
              <img
                src={education.logo}
                alt={`${education.institution} Logo`}
                className="w-12 h-12 rounded-full mr-4 ring-2 ring-white"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold text-white">
                {education.course}
              </h3>
              <span className="text-sm text-gray-400">
                {education.institution}
              </span>
              <p className="text-gray-300 mb-4">{education.duration}</p>
            </div>
          </div>

          {/* List of topics covered in the course */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {education.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="bg-[#7C00FE] text-white text-sm px-2 py-1 rounded"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
