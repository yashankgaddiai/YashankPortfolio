import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 40,
    restDelta: 0.0001,
    mass: 0.8,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
