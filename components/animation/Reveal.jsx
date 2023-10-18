import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: -50 },
  entrance: { opacity: 1, x: 0, y: 0 },
};
const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 200px -100px 0px",
  });

  const animateControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      //activate animation
      animateControls.start("entrance");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={animateControls}
      transition={{ duration: 0.5, delay: 0.3, type: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
