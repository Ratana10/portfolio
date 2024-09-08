import { motion } from "framer-motion";

const EndAnimation = () => {
  return (
    <section className="flex justify-center mt-20">
      <motion.div
        animate={{
          rotate: [0, -30, 30, 0], // Swing left and right 30 degrees
        }}
        transition={{
          duration: 2, // Time for a full cycle (left-right-left)
          ease: "easeInOut",
          repeat: Infinity, // Infinite looping of the animation
        }}
      >
        <img
          src="/finished.png"
          alt="Swinging Flags"
          style={{ width: 200, height: 200 }}
        />
      </motion.div>
    </section>
  );
};

export default EndAnimation;
