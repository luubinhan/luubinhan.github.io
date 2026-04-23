import React from 'react';

// Client-side only wrapper for framer-motion
const AnimatedDiv = ({ children, initial, whileInView, animate, viewport, transition, ...rest }) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || typeof window === 'undefined') {
    // During SSR or before hydration, render a plain div
    return <div {...rest}>{children}</div>;
  }

  // Dynamically import motion after component mounts
  const { motion } = require('framer-motion');

  // After hydration, use motion.div
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      animate={animate}
      viewport={viewport}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
