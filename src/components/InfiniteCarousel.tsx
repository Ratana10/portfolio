import { useEffect, useRef, useState } from "react";
import { skills } from "../db/data";
import { useAnimation } from 'framer-motion';


const SLOW_DURATION = 20; 
const FAST_DURATION = 10;
const InfiniteCarousel = () => {

  const [xTranslation, setXTranslation] = useState(0);
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let finalPosition = -ref.current?.scrollWidth! / 2;

    if (mustFinish) {
      controls.stop();
    } else {
      controls.start({
        x: [xTranslation, finalPosition],
        transition: {
          x: {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          },
        },
      });
    }

    return () => controls.stop();
  }, [xTranslation, duration, mustFinish]);

  return (
    <div className="overflow-hidden relative flex items-center w-full mt-5">
      <div
        className="flex space-x-6"
     
      >
        {skills.map((item, index) => (
          <div

            className="flex flex-col items-center cursor-pointer"

          >
            <img src={item.src} alt={item.name} className="w-20 h-20 object-contain" />
            <p className="mt-2 text-sm text-[#FFAF00]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;