"use client";

import { motion } from "framer-motion";
import React from "react";

type CardSlideTransitionProps = {
  children: React.ReactNode;
};

export default function CardSlideTransition({ children }: CardSlideTransitionProps) {
  return (
    <motion.div
      key={Math.random()} // Ensures re-triggering of animation
      initial={{ x: "100%", opacity: 0 }} // Start off-screen (right)
      animate={{ x: "0%", opacity: 1 }} // Slide to center
      exit={{ x: "-100%", opacity: 0 }} // Exit to the left
      transition={{
        duration: 0.4, // Animation duration
        ease: "easeInOut",
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

