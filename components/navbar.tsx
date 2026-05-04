"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  variant?: "glass" | "solid";
}

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#process", label: "Process" },
  { href: "/materials", label: "Materials" },
  { href: "/materials#research", label: "Archive" },
  { href: "/journal", label: "Journal" },
];

export default function Navbar({ variant = "solid" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  if (variant === "glass") {
    return (
      <>
        <nav
          className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1440px] z-50 rounded-full transition-all duration-500 ${hasScrolled
              ? "bg-white/70 backdrop-blur-xl shadow-lg border border-zinc-200/50"
              : "glass-card"
            }`}
        >
          <div className="flex justify-between items-center px-8 py-4">
            <Link
              href="/"
              className="font-['Space_Grotesk'] text-2xl font-bold tracking-tighter text-zinc-900 hover:opacity-80 transition-opacity"
            >
              Lumina
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-['Inter'] font-medium tracking-tight uppercase text-[12px] transition-colors duration-300 relative group ${isActive(link.href)
                      ? "text-zinc-900"
                      : "text-zinc-600 hover:text-zinc-900"
                    }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute inset-x-0 -bottom-2 h-0.5 bg-zinc-900 transform transition-transform origin-left ${isActive(link.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                      }`}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/#contact"
                className="hidden md:flex bg-primary text-primary-foreground font-['Space_Grotesk'] font-medium text-[14px] px-6 py-3 rounded-full hover:bg-zinc-800 transition-all duration-500 items-center space-x-2 group overflow-hidden relative shadow-lg"
              >
                <span className="relative z-10">Consultation</span>
                <span className="material-symbols-outlined text-[18px] relative z-10 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-zinc-900 p-2"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-[24px]">
                  {isOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[1440px] z-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-200/50 p-8 md:hidden"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-['Inter'] font-medium tracking-tight uppercase text-[14px] ${isActive(link.href)
                        ? "text-zinc-900"
                        : "text-zinc-500"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-primary-foreground font-['Space_Grotesk'] font-medium text-[14px] px-6 py-3 rounded-full text-center"
                >
                  Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Solid variant for inner pages
  return (
    <>
      <nav className="bg-white/80 backdrop-blur-xl border-b border-zinc-200 fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1440px] mx-auto">
          <Link
            href="/"
            className="font-['Space_Grotesk'] text-2xl font-bold tracking-tighter text-zinc-900"
          >
            Lumina
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-['Inter'] font-medium tracking-tight uppercase text-[12px] transition-colors duration-300 ${isActive(link.href)
                    ? "text-zinc-900 border-b-2 border-zinc-900 pb-1"
                    : "text-zinc-500 hover:text-zinc-900"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:block bg-zinc-900 text-zinc-50 px-6 py-3 rounded-full font-['Inter'] text-[12px] uppercase font-medium tracking-wide hover:bg-zinc-800 transition-colors"
            >
              Consultation
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-zinc-900 p-2"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[80px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-2xl border-b border-zinc-200 p-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-['Inter'] font-medium tracking-tight uppercase text-[14px] ${isActive(link.href) ? "text-zinc-900" : "text-zinc-500"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="bg-zinc-900 text-zinc-50 px-6 py-3 rounded-full font-['Inter'] text-[12px] uppercase font-medium tracking-wide text-center"
              >
                Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
