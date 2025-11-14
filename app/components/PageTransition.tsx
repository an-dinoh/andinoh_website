"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      className="bg-white"
    >
      {children}
    </motion.div>
  );
}
