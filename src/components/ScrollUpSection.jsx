import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Detect when the element is in view

const ScrollUpSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and 50px below
      animate={{
        opacity: inView ? 1 : 0, // Fade in
        y: inView ? 0 : 50, // Slide up to original position
      }}
      transition={{
        type: 'spring', // Spring-like animation
        stiffness: 100,
        damping: 20,
        duration: 1, // Animation duration
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollUpSection;
