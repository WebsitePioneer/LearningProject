// CustomAnimation.jsx or .tsx
"use client";
import { motion } from "framer-motion";

export default function AnimatedKing() {
  return (
    <motion.img
      src="/images/chessgoldking.png"
      className="w-[150px]"
      animate={{
        x: [0, 400, 400], // move right
        rotate: [-30, 30, 30], // slight rotation at end
      }}
      transition={{
        duration: 6, // total animation time
        ease: "easeInOut",
        repeat: Infinity, // repeat forever
        repeatDelay: 1, // delay between repeats
      }}
    />
  );
}
