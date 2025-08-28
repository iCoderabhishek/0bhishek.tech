"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { USER } from "@/data/user";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const texts = USER.aniamtedText;

const AnimatedStatement = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  const currentText = texts[index];
  const words = currentText.split(" ");

  return (
    <div className="flex items-center lg:h-auto  dark:border-zinc-800  sm:h-auto">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentText}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="font-mono text-md text-balanceb  text-neutral-300 dark:text-neutral-300 select-none"
          aria-label={currentText}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.50em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedStatement;
