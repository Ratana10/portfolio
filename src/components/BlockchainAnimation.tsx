import { motion } from "framer-motion";

const BlockchainAnimation = () => {
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 15,
    
  };

  return (
    <motion.div className="flex justify-center mt-20">
      <motion.img
        src="/other/blockchain.png"
        alt="Blockchain Animation"
        style={{ width: 200, height: 200 }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </motion.div>
  );
};

export default BlockchainAnimation;
