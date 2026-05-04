"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Increased to 720 frames (30fps) for ultimate smoothness
const FRAME_COUNT = 720;

const MobileHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);

  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // Initial states
      gsap.set([img2Ref.current, img3Ref.current], { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 });
      gsap.set([text2Ref.current, text3Ref.current], { opacity: 0, y: 30 });

      // Anim 1
      tl.to(wrapperRef.current, { scale: 0.95, borderRadius: "24px", duration: 1 })
        .to(text1Ref.current, { opacity: 0, y: -30, duration: 1 }, "<")

        // Anim 2
        .to(img2Ref.current, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 2 })
        .to(text2Ref.current, { opacity: 1, y: 0, duration: 1 }, "-=1")
        .to(text2Ref.current, { opacity: 0, y: -30, duration: 1 })

        // Anim 3
        .to(img3Ref.current, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 2 })
        .to(text3Ref.current, { opacity: 1, y: 0, duration: 1 }, "-=1");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-white">
      <div className="sticky top-0 w-full h-[100svh] p-4 flex flex-col justify-center items-center overflow-hidden">

        <div ref={wrapperRef} className="relative w-full h-full overflow-hidden rounded-[20px] bg-black">
          <Image
            ref={img1Ref}
            src="/hero/mobile/hero1.jpg"
            alt="Lumina Space 1"
            fill
            className="object-cover opacity-80"
            priority
          />
          <Image
            ref={img2Ref}
            src="/hero/mobile/hero2.jpg"
            alt="Lumina Space 2"
            fill
            className="object-cover opacity-80"
          />
          <Image
            ref={img3Ref}
            src="/hero/mobile/hero3.jpg"
            alt="Lumina Space 3"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none" />
        </div>

        {/* Text 1 */}
        <div ref={text1Ref} className="absolute inset-0 z-10 p-8 pt-28 flex flex-col justify-between pointer-events-none">
          <div className="flex flex-col items-start gap-3">
            <div className="text-white/80 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 border-b border-white/30 pb-2 drop-shadow-md">
              EST --2019
            </div>
            <h2 className="text-white font-display text-[32px] sm:text-[40px] font-medium leading-[1.1] tracking-tight drop-shadow-lg">
              Minimal by design.<br />Intentional by nature.
            </h2>
          </div>
          <div className="pb-12">
            <h1 className="text-white font-display text-[64px] sm:text-[72px] uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
              LUMINA
            </h1>
            <p className="text-white/90 font-sans text-base font-light tracking-wide max-w-[250px] leading-relaxed drop-shadow-md">
              We see potential where others see chaos.
            </p>
          </div>
        </div>

        {/* Text 2 */}
        <div ref={text2Ref} className="absolute inset-0 z-10 p-8 pt-28 flex flex-col justify-end pointer-events-none pb-[120px]">
          <div className="flex flex-col items-end text-right gap-3">
            <h2 className="text-white font-display text-[32px] sm:text-[40px] font-medium leading-[1.1] tracking-tight drop-shadow-lg">
              A blank canvas.<br />Endless possibilities.
            </h2>
            <p className="text-white/90 font-sans text-base font-light tracking-wide max-w-[250px] leading-relaxed mt-2 drop-shadow-md">
              This is where transformation begins.
            </p>
          </div>
        </div>

        {/* Text 3 */}
        <div ref={text3Ref} className="absolute inset-0 z-10 p-8 flex flex-col justify-center items-center pointer-events-none text-center">
          <h1 className="text-white font-display text-[72px] sm:text-[84px] uppercase tracking-tighter leading-none mb-10 drop-shadow-2xl">
            LUMINA
          </h1>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium uppercase tracking-[0.15em] py-[16px] px-[40px] pointer-events-auto transition-all duration-300 hover:bg-white hover:text-[#1c1b1c] rounded-full text-sm shadow-xl">
            Start Your Project
          </button>
        </div>

      </div>
    </section>
  );
};

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>(new Array(FRAME_COUNT));

  const state1Ref = useRef<HTMLDivElement>(null);
  const state2Ref = useRef<HTMLDivElement>(null);
  const state3Ref = useRef<HTMLDivElement>(null);
  const state4Ref = useRef<HTMLDivElement>(null);

  // Resize listener for mobile and canvas
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized Chunked Image Sequence Preloader
  useEffect(() => {
    if (isMobile) return;

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
      if (isMobile) return;
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
  }, [isMobile]);

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
    if (isMobile) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      // Set logical resolution to window width/height for high quality rendering
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-render current frame on resize
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
  }, [isMobile, renderFrame]);

  // Setup GSAP
  useEffect(() => {
    if (isMobile) return;

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
        // Image Sequence Animation
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
            scrub: 1, // Slight scrub smoothing for butter flow
          },
          onUpdate: () => renderFrame(frameObj.frame)
        });

        // Text Animations Timeline
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
  }, [isMobile, renderFrame]);

  if (isMobile) {
    return <MobileHero />;
  }

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
}
