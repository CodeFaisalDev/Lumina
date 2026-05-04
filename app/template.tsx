"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

export default function Template({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="fixed inset-0 z-50 bg-[#1c1b1c] pointer-events-none"
        initial={{ height: "100vh", top: 0 }}
        animate={{ height: "0vh", top: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.76, 0, 0.24, 1],
          delay: 0.3 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
