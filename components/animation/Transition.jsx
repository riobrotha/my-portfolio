import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -20 },
  entrance: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

export const Transition = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="entrance"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.2, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
};
