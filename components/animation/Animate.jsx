import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import React from "react";

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Animate = ({ children, delay = 0, fullWidth = false }) => {
  return (
    <MotionDiv
      width={fullWidth ? "full" : "auto"}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.4, delay }}
    >
      {children}
    </MotionDiv>
  );
};

export default Animate;
