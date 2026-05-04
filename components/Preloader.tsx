"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_WORDS = [
  "CONCEPT", "RESEARCH", "ANALYSIS", "STRUCTURE", "MATERIAL", 
  "TEXTURE", "SHADOW", "LIGHT", "VOID", "FORM", "SPACE", "LUMINA"
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on the browser
    if (typeof window === "undefined") return;

    const images = Array.from(document.images);
    let loadedImages = 0;
    const totalImages = images.length;

    // Minimum display time for the preloader to ensure the animation isn't jarringly fast
    const minTime = 1800;
    const startTime = Date.now();
    let isCancelled = false;

    let displayProgress = 0;
    let targetProgress = 0;

    const imageLoaded = () => {
      loadedImages++;
    };

    if (totalImages > 0) {
      images.forEach((img) => {
        if (img.complete) {
          imageLoaded();
        } else {
          img.addEventListener("load", imageLoaded);
          img.addEventListener("error", imageLoaded); // Count errors as loaded to avoid hang
        }
      });
    }

    const animate = () => {
      if (isCancelled) return;

      const elapsedTime = Date.now() - startTime;
      const timeRatio = Math.min(elapsedTime / minTime, 1);

      let imgRatio = 1;
      if (totalImages > 0) {
        imgRatio = loadedImages / totalImages;
      }

      // Bound the target progress by both the image loading ratio and time ratio
      targetProgress = Math.min(imgRatio * 100, timeRatio * 100);

      // Smooth interpolation (lerp) towards the target
      displayProgress += (targetProgress - displayProgress) * 0.1;

      if (displayProgress >= 99.5 && imgRatio === 1 && timeRatio === 1) {
        setProgress(100);
        setTimeout(() => {
          if (!isCancelled) setIsLoading(false);
        }, 300);
      } else {
        setProgress(Math.floor(displayProgress));
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      isCancelled = true;
      images.forEach((img) => {
        img.removeEventListener("load", imageLoaded);
        img.removeEventListener("error", imageLoaded);
      });
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isLoading]);

  const currentWordIndex = Math.min(
    Math.floor((progress / 100) * LOADING_WORDS.length),
    LOADING_WORDS.length - 1
  );
  const currentWord = LOADING_WORDS[currentWordIndex];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#1c1b1c] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Rapid Word Flipper */}
          <div className="overflow-hidden h-[150px] sm:h-[220px] md:h-[300px] flex items-center justify-center px-4 text-center w-full">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="font-['Space_Grotesk'] text-[40px] sm:text-[80px] md:text-[140px] font-bold text-white leading-none tracking-tighter"
            >
              {currentWord}
            </motion.div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-8 sm:bottom-12 w-full px-6 sm:px-12 flex justify-between items-center text-white/50 font-['Space_Grotesk'] text-[10px] sm:text-xs uppercase tracking-[0.2em]">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Lumina Collective
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-white/50 animate-pulse" />
              Initializing
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
