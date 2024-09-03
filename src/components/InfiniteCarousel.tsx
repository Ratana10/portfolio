import { skills } from "../db/data";
import { motion } from "framer-motion";

const InfiniteCarousel = () => {
  return (
    <div className="overflow-hidden relative flex items-center w-full mt-5">
      <motion.div 
      className="flex space-x-6"
      initial={{ x: 0 }}
      animate={{ x: -2000 }}
      transition={{
        ease: "linear",
        duration: 10, // Adjust duration for speed
        repeat: Infinity,
      }}

      >
        {[...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((item, index) => (
          <motion.div
           className="flex flex-col items-center cursor-pointer"
           key={index}

            style={{ x: 200 }} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
           >
            <img
              src={item.src}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />
            <p className="mt-2 text-sm text-[#FFAF00]">{item.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
