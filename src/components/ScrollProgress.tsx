import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    setScrollY(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-[#FFAF00] z-10 text-[#FFAF00]"
      style={{ width: `${scrollY}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollY}%` }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
};

export default ScrollProgress;
