import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";


const SocialMediaButtons = () => {

  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 5,
    
  };

  return (
    <div className="mt-1 flex">
      <motion.a
        href="https://www.facebook.com/ratana.san.79/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white p-1 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:rotate-6"
        style={{
          background: 'linear-gradient(45deg, #3b5998, #8b9dc3)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      >
        <FaFacebook size={30} />
      </motion.a>
      <motion.a
        href="https://t.me/Ratana10"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 text-white p-1 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:rotate-6"
        style={{
          background: 'linear-gradient(45deg, #0088cc, #00c6ff)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      >
        <FaTelegram size={30} />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/ratana-san-a624bb243/"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 text-white p-1 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:rotate-6"
        style={{
          background: 'linear-gradient(45deg, #0077b5, #00a0dc)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      >
        <FaLinkedin size={30} />
      </motion.a>
    </div>
  );
};

export default SocialMediaButtons;
