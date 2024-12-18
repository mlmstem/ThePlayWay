"use client";

import { motion } from "framer-motion";
import React from "react";

export default function LoadingTransition() {
  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-700 font-semibold text-lg">Loading Result...</p>
      </div>
    </motion.div>
  );
}