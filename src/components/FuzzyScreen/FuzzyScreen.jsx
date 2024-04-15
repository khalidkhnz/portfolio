"use client";
import React from "react";
import { motion } from "framer-motion";

const FuzzyScreen = ({ children, alt = false, disabled = false }) => {
  return (
    <div className="relative overflow-hidden">
      {children}
      {!disabled && <FuzzyOverlay alt={alt} />}
    </div>
  );
};

export const FuzzyOverlay = ({ alt }) => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: `${
          alt ? `url("/black-noise.png")` : `url("/noise.png")`
        }`,
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

export default FuzzyScreen;
