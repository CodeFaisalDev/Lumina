"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

// Increased to 720 frames (30fps) for ultimate smoothness
const FRAME_COUNT = 720;

const MobileHero = () => {
  return (
    <section className="w-full h-[100svh] bg-[#fdfbf9] flex flex-col pt-24 px-6 pb-6 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-end w-full mb-10 relative z-10 shrink-0 gap-2">
        <h1 className="text-[#333333] font-display text-[52px] sm:text-[64px] font-bold leading-[0.8] tracking-tighter uppercase m-0 p-0 mb-1">
          LUMINA
        </h1>
        <div className="flex flex-col items-end text-right pb-1">
          <h2 className="text-[#333333] text-[14px] sm:text-lg font-sans font-bold leading-tight mb-2 max-w-[150px]">
            Creating <span className="text-[#a47b59]">Interiors</span> That Inspire Living
          </h2>
          <Link href="/portfolio" className="text-[#a47b59] font-sans font-bold tracking-widest uppercase text-xs sm:text-sm flex items-center hover:opacity-80 transition-opacity border-b border-[#a47b59]/30 pb-0.5">
            VIEW PORTFOLIO <span className="ml-1">›</span>
          </Link>
        </div>
      </div>

      {/* Comparison Slider Section */}
      <div className="w-full flex-1 relative rounded-2xl overflow-hidden shadow-2xl min-h-0">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="/hero/pc/before.png" alt="Before" className="object-cover w-full h-full" />}
          itemTwo={<ReactCompareSliderImage src="/hero/pc/after.png" alt="After" className="object-cover w-full h-full" />}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

const DesktopHero = () => {
  return (
    <section className="w-full h-screen bg-[#fdfbf9] flex flex-col pt-20 px-8 md:px-16 lg:px-24 pb-8 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-6 relative z-10 shrink-0">
        <h1 className="text-[#333333] font-display text-[60px] md:text-[100px] lg:text-[140px] font-bold leading-[0.8] tracking-tighter uppercase m-0 p-0">
          LUMINA
        </h1>
        <div className="flex flex-col items-start md:items-end mt-6 md:mt-0 pb-2 md:pb-4">
          <h2 className="text-[#333333] text-xl md:text-2xl lg:text-3xl font-sans font-bold leading-tight text-left md:text-right max-w-xs md:max-w-sm mb-4">
            Creating<br/><span className="text-[#a47b59]">Interiors</span> That<br/>Inspire Living
          </h2>
          <Link href="/portfolio" className="text-[#a47b59] font-sans font-bold tracking-widest uppercase text-sm flex items-center hover:opacity-80 transition-opacity border-b border-[#a47b59]/30 pb-1">
            VIEW PORTFOLIO <span className="ml-2">›</span>
          </Link>
        </div>
      </div>

      {/* Comparison Slider Section */}
      <div className="w-full flex-1 relative rounded-3xl overflow-hidden shadow-2xl min-h-0">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="/hero/pc/before.png" alt="Before" className="object-cover w-full h-full" />}
          itemTwo={<ReactCompareSliderImage src="/hero/pc/after.png" alt="After" className="object-cover w-full h-full" />}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) {
    return <div className="w-full h-screen bg-[#fdfbf9]" />;
  }

  return isMobile ? <MobileHero /> : <DesktopHero />;
}

/**
 * LEGACY CANVAS HERO
 * This is the original 720-frame image sequence hero, preserved as requested.
 * It is currently not rendered, but safely tucked aside here.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LegacyCanvasHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>(new Array(FRAME_COUNT));

  const state1Ref = useRef<HTMLDivElement>(null);
  const state2Ref = useRef<HTMLDivElement>(null);
  const state3Ref = useRef<HTMLDivElement>(null);
  const state4Ref = useRef<HTMLDivElement>(null);

  // Optimized Chunked Image Sequence Preloader
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);
    imagesRef.current = images;

    let currentFrame = 1;

    // Load first 60 frames immediately (first 2 seconds of scroll) to prevent initial lag
    for (; currentFrame <= 60 && currentFrame <= FRAME_COUNT; currentFrame++) {
      const img = new window.Image();
      const indexStr = currentFrame.toString().padStart(4, "0");
      img.src = `/hero/sequence/${indexStr}.jpg`;
      images[currentFrame - 1] = img;
    }

    // Lazy load the rest in background chunks using requestIdleCallback to completely free the main thread
    const loadChunk = () => {
      const endFrame = Math.min(currentFrame + 30, FRAME_COUNT);
      for (; currentFrame <= endFrame; currentFrame++) {
        const img = new window.Image();
        const indexStr = currentFrame.toString().padStart(4, "0");
        img.src = `/hero/sequence/${indexStr}.jpg`;
        images[currentFrame - 1] = img;
      }

      if (currentFrame <= FRAME_COUNT) {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(loadChunk);
        } else {
          setTimeout(loadChunk, 50); // Fallback for older Safari
        }
      }
    };

    if (currentFrame <= FRAME_COUNT) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadChunk);
      } else {
        setTimeout(loadChunk, 50);
      }
    }
  }, []);

  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: false }); // Optimize rendering by disabling alpha
    if (!context) return;

    const img = imagesRef.current[index];
    if (img && img.complete && img.naturalHeight !== 0) {
      // Calculate object-cover dimensions
      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, []);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const scrollProgress = ScrollTrigger.getById("hero-scroll")?.progress || 0;
      const currentFrame = Math.round(scrollProgress * (FRAME_COUNT - 1));
      renderFrame(currentFrame);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initial size

    // Try to render frame 0 as soon as it loads
    const firstImg = imagesRef.current[0];
    if (firstImg) {
      if (firstImg.complete) {
        renderFrame(0);
      } else {
        firstImg.onload = () => renderFrame(0);
      }
    }

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [renderFrame]);

  // Setup GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx: gsap.Context;

    const initGSAP = () => {
      if (ctx) ctx.revert();

      // Ensure state 2, 3, 4 texts start invisible and pushed down
      gsap.set([state2Ref.current, state3Ref.current, state4Ref.current].map(ref =>
        ref ? gsap.utils.toArray(ref.querySelectorAll(".hero-text-line")) : []
      ).flat(), { opacity: 0, y: 50, rotationX: -15, transformPerspective: 800 });

      // State 1 starts fully visible
      if (state1Ref.current) {
        gsap.set(state1Ref.current.querySelectorAll(".hero-text-line"), { opacity: 1, y: 0, rotationX: 0 });
      }

      ctx = gsap.context(() => {
        const frameObj = { frame: 0 };

        gsap.to(frameObj, {
          frame: FRAME_COUNT - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            id: "hero-scroll",
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
          onUpdate: () => renderFrame(frameObj.frame)
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          }
        });

        tl.to({}, { duration: 10 }); // Dummy tween to define timeline length

        const getLines = (ref: React.RefObject<HTMLDivElement | null>) => {
          if (!ref.current) return [];
          return gsap.utils.toArray(ref.current.querySelectorAll(".hero-text-line"));
        };

        // --- STATE 1 ---
        tl.to(getLines(state1Ref), { y: -50, opacity: 0, rotationX: 15, duration: 0.8, stagger: 0.1, ease: "power2.inOut" }, 1.0);

        // --- STATE 2 ---
        tl.to(getLines(state2Ref), { y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.4)" }, 1.8);
        tl.to(getLines(state2Ref), { y: -50, opacity: 0, rotationX: 15, duration: 0.6, stagger: 0.05, ease: "power2.inOut" }, 4.4);

        // --- STATE 3 ---
        tl.to(getLines(state3Ref), { y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.4)" }, 5.0);
        tl.to(getLines(state3Ref), { y: -50, opacity: 0, rotationX: 15, duration: 0.6, stagger: 0.05, ease: "power2.inOut" }, 7.4);

        // --- STATE 4 ---
        tl.to(getLines(state4Ref), { y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.4)" }, 8.0);

      }, containerRef);
    };

    initGSAP();

    return () => {
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [renderFrame]);

  return (
    <section ref={containerRef} className="relative w-full h-[800vh]">
      {/* Padded container statically frames the video inside a white background */}
      <div className="sticky top-0 w-screen h-screen overflow-hidden bg-white flex items-center justify-center p-8 md:p-16 lg:p-24">

        {/* Fixed Canvas Wrapper - Shrunk significantly */}
        <div className="relative w-full h-full max-w-[85vw] max-h-[75vh] md:max-h-[70vh] overflow-hidden bg-black rounded-2xl md:rounded-[40px]">
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ transform: "translateZ(0)" }}
          />
          {/* Lighter overlay to retain video HQ while keeping text readable */}
          <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none"></div>
        </div>

        {/* --- Text State 1 --- */}
        <div ref={state1Ref} className="absolute inset-0 z-10 p-8 pt-28 md:p-16 md:pt-40 lg:p-24 lg:pt-40 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between w-full items-start">
            <div className={`hero-text-line bg-white text-[#4a3a31] px-4 py-2 inline-block font-sans text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase`}>
              EST --2019
            </div>
            <div className="text-right max-w-lg mt-4 md:mt-0 flex flex-col items-end">
              <h2 className={`hero-text-line bg-white text-[#4a3a31] px-5 py-3 inline-block font-sans text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6`}>
                We see potential where<br />others see chaos.
              </h2>
              <p className={`hero-text-line bg-white text-[#4a3a31] px-4 py-2 inline-block font-sans text-xl md:text-2xl font-light mb-2`}>
                Every great space starts somewhere
              </p>
              <p className={`hero-text-line bg-white text-[#4a3a31] px-4 py-2 inline-block font-sans text-xl md:text-2xl font-light mt-4`}>
                This is where transformation begins
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <h1 className={`hero-text-line bg-white text-[#4a3a31] px-6 py-2 inline-block font-display text-[70px] md:text-[110px] lg:text-[130px] uppercase tracking-widest leading-none`}>
              LUMINA
            </h1>
          </div>
        </div>

        {/* --- Text State 2 --- */}
        <div ref={state2Ref} className="absolute inset-0 z-10 p-8 pt-28 md:p-16 md:pt-40 lg:p-24 lg:pt-40 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between w-full items-start">
            <div className="max-w-lg mt-4 md:mt-0 flex flex-col items-start">
              <h2 className={`hero-text-line bg-white text-[#4a3a31] px-5 py-3 inline-block font-sans text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6`}>
                A blank canvas.<br />Endless possibilities.
              </h2>
              <p className={`hero-text-line bg-white text-[#4a3a31] px-4 py-2 inline-block font-sans text-xl md:text-2xl font-light mb-2`}>
                This is where we begin.
              </p>
              <p className={`hero-text-line bg-white text-[#4a3a31] px-4 py-2 inline-block font-sans text-xl md:text-2xl font-light`}>
                The space is ready. So are we.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full">
            <h1 className={`hero-text-line bg-white text-[#4a3a31] px-6 py-2 inline-block font-display text-[70px] md:text-[110px] lg:text-[130px] uppercase tracking-widest leading-none mb-8 md:mb-0`}>
              LUMINA
            </h1>
            <div className="text-left md:text-right pb-4 md:pb-8 flex flex-col items-start md:items-end">
              <h2 className={`hero-text-line bg-white text-[#4a3a31] px-5 py-3 inline-block font-sans text-2xl md:text-3xl lg:text-4xl font-bold leading-tight`}>
                Minimal by design.<br />Intentional by nature.
              </h2>
            </div>
          </div>
        </div>

        {/* --- Text State 3 --- */}
        <div ref={state3Ref} className="absolute inset-0 z-10 p-8 pt-28 md:p-16 md:pt-40 lg:p-24 lg:pt-40 flex flex-col justify-between pointer-events-none">
          <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-12 md:mt-0">
            <h2 className={`hero-text-line bg-white text-[#4a3a31] px-5 py-3 inline-block font-sans text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-md mb-8 md:mb-0`}>
              Designed to feel like home.
            </h2>
            <div className="text-left md:text-right max-w-md flex flex-col items-start md:items-end">
              <p className={`hero-text-line bg-white text-[#4a3a31] px-4 py-2 inline-block font-sans text-xl md:text-2xl font-light mb-2`}>
                Every detail. Intentional.
              </p>
              <p className={`hero-text-line bg-white text-[#4a3a31] px-4 py-2 inline-block font-sans text-xl md:text-2xl font-light`}>
                Luxury lives in the details.
              </p>
            </div>
          </div>
          <div className="flex justify-start md:justify-end w-full">
            <h1 className={`hero-text-line bg-white text-[#4a3a31] px-6 py-2 inline-block font-display text-[70px] md:text-[110px] lg:text-[130px] uppercase tracking-widest leading-none`}>
              LUMINA
            </h1>
          </div>
        </div>

        {/* --- Text State 4 --- */}
        <div ref={state4Ref} className="absolute inset-0 z-10 p-8 pt-28 md:p-16 md:pt-40 lg:p-24 lg:pt-40 flex flex-col justify-center items-start pointer-events-none md:pl-[10%]">
          <h1 className={`hero-text-line bg-white text-[#4a3a31] px-6 py-2 inline-block font-display text-[70px] md:text-[110px] lg:text-[140px] uppercase tracking-widest leading-none mb-10`}>
            LUMINA
          </h1>
          <div className="flex flex-col items-start gap-6 pointer-events-auto">
            <button className={`hero-text-line bg-white border border-[#4a3a31]/20 text-[#4a3a31] font-medium uppercase tracking-[0.15em] py-[16px] px-[40px] transition-colors duration-300 hover:bg-[#4a3a31] hover:text-white cursor-pointer`}>
              Start Your Project
            </button>
            <p className={`hero-text-line bg-white text-[#4a3a31] px-4 py-2 inline-block font-sans text-xl md:text-2xl font-light tracking-wide pl-2`}>
              Your space, reimagined.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
