"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 w-full pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 border-t border-zinc-800 relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-16 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="col-span-1 sm:col-span-2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-['Space_Grotesk'] text-[40px] sm:text-[60px] md:text-[80px] leading-none font-black uppercase tracking-tighter text-zinc-50 mb-6 sm:mb-8 block hover:text-zinc-300 transition-colors duration-500 cursor-default"
          >
            Lumina
          </motion.span>
          <p className="font-['Inter'] text-base sm:text-lg leading-relaxed text-zinc-400 max-w-sm mt-8 sm:mt-12 border-t border-zinc-800 pt-6 sm:pt-8">
            © 2024 Lumina Collective.<br />Architectural Integrity.
          </p>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-6 pt-0 sm:pt-4">
          <span className="font-['Inter'] text-sm text-zinc-600 uppercase tracking-widest mb-2 sm:mb-4 border-b border-zinc-800 pb-3 sm:pb-4">Connect</span>
          <a className="font-['Inter'] text-base sm:text-lg leading-relaxed text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block" href="#">Instagram</a>
          <a className="font-['Inter'] text-base sm:text-lg leading-relaxed text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block" href="#">LinkedIn</a>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-6 pt-0 sm:pt-4">
          <span className="font-['Inter'] text-sm text-zinc-600 uppercase tracking-widest mb-2 sm:mb-4 border-b border-zinc-800 pb-3 sm:pb-4">Legal</span>
          <Link className="font-['Inter'] text-base sm:text-lg leading-relaxed text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block" href="#">Privacy</Link>
          <Link className="font-['Inter'] text-base sm:text-lg leading-relaxed text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block" href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
