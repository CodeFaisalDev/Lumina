"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";

gsap.registerPlugin(ScrollTrigger);

const PHILOSOPHY_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAmI8pfRbI11TTvQ7asQa9twGtgGI8GuODuX2pzU4HI82kF1Qe9Y5rrTDZWT8AROO6PwHEsMZCTtKWF6YIznShoA_cl9eKkS9fWmSpaAm7VB5P5aeb6zBYTkgoZ1caKn6v1BcxxU47m5qi68Ot_gcQf7POjLTmAHGbWGKBpvxsEKBPa4me6NP5nzhhFXpR6n3P1PcOuOuUclsYo0syeSpDehA6FSbYJTaJW1XLtM35XY6FDXtFp5jHnYud08RpdSlUy8e2DXtiuuo_b";
const PROCESS_IMG_1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuD_vloPdWr_rpxhBKohWX74XO5e5DMmCNTbs42k53yrz5E-D8O7GTLFbABoJKFq874TtUa_4q4oqVMhbn57ptZEEwVCiCt7wJBAGt4MJ4c7HAHh9aMU94HUCCZ3aEJhhG6Aj8te5u4q-MZsbdWD8NH0Le7luzP7rfvv7Ak5UqbJba133nXQnhCMXRN74pBj7XY6LLahj9s6CvNFZCRAEodXzj_kJU0wuw2h_1divc2zZBUAKwgxcA49HH4lkMpdkUVIgHbGuQRdqKy3";
const PROCESS_IMG_2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBo1Gn1ir9gsAoMJ5AyDXnpr665Zk4XAlat-Nuzj6r2zhP8PbMlpElQLwi-s6RG2IFlA1bmk6m4NO6x5SYMcK6rkwhTw3XGstm2Vg2mEGpKXHTzhzPKbpIOqUuaHEMoixcHXVprMjuyV44-1XTg7M9F-T3YIVRZej5f-Dvulor_ZXkP-iNV6kVq2w6gyq4cwCFPz1VxSQdDuCK_0WO2qhPqOkY2-_icwBuD4GQdUotssRYcJ8buOq21X5vkWGiRT9nERfRxiKJT1I56";
const WORK_IMG_1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAl565kkeyIsPoenPgSUglRKz4MVpYVyoVaOGVWdJimqaKKeMLGjohWFZBSlbLHQdK0uck_FFOPTbQoXes500nrcY2GxCXEoQjcDqr5gB74kbofaArnmHGfF63LiVIBH9Q-kUpnRrWWRbsMB7USZjPr2d4B4NnOXZEidY2U30vwSEG1obNO1pBiwImot699J7P64gDUk6T7ALj00ni1yhfzKwpTR6jRub1MwxmVIE9fCP-MLrwcba_I8OHOXduHHrATbjXFfoJ4woo2";
const WORK_IMG_2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRKWtwTicZs7j7gOOaiOIOce2CIzrVuyLZLqnFLDd5nIIi-tekfXdzPLYXSvH8yoS3XHXWRNN3sktbNeLSYU-6jxrpg8ZEvZ4lWj9dvE8a0Y5hKCFAeOnYZbQxBoYC2VDUWb0ck8yNNlNEXEcUGj7f9oGdil3ZUq7A4QTuF6CectHclRhDB9HKV3LPygC2JiybDdDWvCo-C4VT-2knQa-Y_2GJW3Kw9rFoTU28yLKjMP8K3Hn3MTgtymhto0NwdDY3UXHWNXzfVnh";
const WORK_IMG_3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuA0PETiv8wk7SucAeekJs5Qbw-3ztfWK-N8d_zhygXK184uyhG2Ssn-H7tv5DY89WFyi2WvrlBvv3Tqo7eOtRAuvbXk8N-mRa1IzzXPQCX8ofccHlr9BsbJA7QCbll5ulYQUwdL0U8Y2Wjd2JP5JpvKhx2SxYo1OHIhIXKT19bX8-JKN6TIDVGi8kQn4A8XFvJorC6O-rlGcGNVmjS5K8gsuSc531hrHpzNMUAQXQ4p8ouWamP1qab7f3-RLOd-RN51hk8nPZnd0Iuo";

const Philosophy = () => (
  <section className="bg-white py-14 sm:py-20 md:py-28 relative z-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#f2f2f2] to-white pointer-events-none" />
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-16 gap-y-12 items-start relative z-10">
      <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-5 md:sticky top-40 flex flex-col space-y-8 sm:space-y-12">
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="h-[2px] w-12 sm:w-16 bg-[#1c1b1c]" />
          <h2 className="font-['Space_Grotesk'] text-[14px] font-medium text-[#1c1b1c] tracking-widest uppercase">The Philosophy</h2>
        </div>
        <h3 className="font-['Space_Grotesk'] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[68px] xl:text-[80px] leading-[0.85] tracking-tighter text-[#1c1b1c]">
          Rigorous<br />Organization<br />of Void.
        </h3>
        <button className="w-fit border-b-2 border-[#1c1b1c] font-['Space_Grotesk'] text-[16px] sm:text-[18px] pb-2 text-[#1c1b1c] hover:text-[#75758a] hover:border-[#75758a] transition-all duration-300 flex items-center gap-4 group">
          Read Our Manifesto
          <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">arrow_outward</span>
        </button>
      </motion.div>
      <div className="md:col-span-7 flex flex-col space-y-12 sm:space-y-16 md:space-y-24 mt-0 md:mt-16">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] w-full rounded-[22px] overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group">
          <img alt="Interior design minimal living room" className="w-full h-full object-cover contrast-125 saturate-50 scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" src={PHILOSOPHY_IMG} />
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <span className="text-white font-['Space_Grotesk'] uppercase tracking-wider text-xs sm:text-sm">Minimalist Approach</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="p-6 sm:p-8 md:p-10 rounded-[22px] shadow-2xl relative mt-4 sm:mt-2 md:-mt-20 ml-0 sm:ml-4 md:ml-24 max-w-2xl bg-white border border-zinc-100">
          <p className="font-['Inter'] text-[15px] sm:text-[17px] md:text-[20px] text-[#75758a] leading-relaxed border-l-4 border-[#1c1b1c] pl-6 sm:pl-8">
            Our approach strips away the superfluous to reveal the essential structural and material truth of a space. By treating &apos;empty&apos; space not as an absence, but as a sculpted volume, we create environments that are both profoundly quiet and dynamically alive.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProcessSpotlight = () => (
  <section id="process" className="bg-black text-white py-24 sm:py-24 md:py-32 clip-path-slant -mt-20 pb-24 sm:pb-36 md:pb-48 relative z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,40,40,0.5),_black_70%)] opacity-50" />
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 md:mb-28 border-b border-white/10 pb-6 sm:pb-12">
        <h2 className="font-['Space_Grotesk'] text-[36px] sm:text-[56px] md:text-[76px] leading-none tracking-tighter">Process<br />Spotlight</h2>
        <p className="font-['Inter'] text-sm sm:text-lg md:text-xl text-zinc-400 max-w-md md:text-right mt-6 md:mt-0 md:mb-4">A systematic approach to spatial perfection, driven by intense material research.</p>
      </motion.div>
      <div className="grid grid-cols-1 gap-12 sm:gap-20 md:gap-28">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-14 group">
          <div className="font-['Space_Grotesk'] text-[70px] sm:text-[100px] md:text-[160px] font-black text-white/5 group-hover:text-white/20 transition-colors duration-700 leading-none">01</div>
          <div className="flex-1 w-full text-center md:text-left">
            <h4 className="font-['Space_Grotesk'] text-[24px] sm:text-[32px] md:text-[44px] mb-3 sm:mb-6">Consultation &amp; Analysis</h4>
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto md:mx-0">Deep analysis of functional requirements, psychological needs, and site characteristics to establish the architectural baseline.</p>
          </div>
          <div className="w-full md:w-[350px] lg:w-[420px] h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden rounded-[22px] opacity-60 group-hover:opacity-100 transition-all duration-700 shadow-2xl group-hover:scale-105 flex-shrink-0">
            <img alt="Architectural planning" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={PROCESS_IMG_1} />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-8 md:gap-14 group">
          <div className="font-['Space_Grotesk'] text-[70px] sm:text-[100px] md:text-[160px] font-black text-white/5 group-hover:text-white/20 transition-colors duration-700 leading-none">02</div>
          <div className="flex-1 w-full text-center md:text-right">
            <h4 className="font-['Space_Grotesk'] text-[24px] sm:text-[32px] md:text-[44px] mb-3 sm:mb-6">Spatial Modeling</h4>
            <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto md:ml-auto">Iterative modeling to sculpt the void, defining the interaction between light, geometry, and material for the environmental narrative.</p>
          </div>
          <div className="w-full md:w-[350px] lg:w-[420px] h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden rounded-[22px] opacity-60 group-hover:opacity-100 transition-all duration-700 shadow-2xl group-hover:scale-105 flex-shrink-0">
            <img alt="Material selection" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={PROCESS_IMG_2} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeaturedWorks = () => (
  <section className="bg-gradient-to-b from-[#f2f2f2] to-white py-14 sm:py-20 md:py-28 -mt-20 relative z-20">
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-14 md:mb-24">
        <h2 className="font-['Space_Grotesk'] text-[36px] sm:text-[56px] md:text-[76px] tracking-tighter leading-none text-[#1c1b1c]">Featured<br />Works</h2>
        <Link href="/portfolio" className="font-['Space_Grotesk'] text-sm sm:text-base md:text-lg text-[#1c1b1c] hover:text-[#75758a] transition-colors flex items-center gap-3 border-b-2 border-[#1c1b1c] pb-2 group mt-6 sm:mt-0 sm:mb-4">
          View Complete Archive
          <span className="material-symbols-outlined transform group-hover:translate-x-3 transition-transform text-[20px] sm:text-[24px]">east</span>
        </Link>
      </motion.div>

      {/* Large Project */}
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="group cursor-pointer block relative mb-24 sm:mb-32">
        <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] w-full rounded-[22px] overflow-hidden bg-[#f1eded] relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] group-hover:-translate-y-2 transition-transform duration-700">
          <img alt="Dark minimalist kitchen" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 saturate-50 contrast-125" src={WORK_IMG_1} />
          <div className="absolute top-6 sm:top-12 left-6 sm:left-12 glass-card px-5 sm:px-8 py-3 sm:py-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-white font-['Space_Grotesk'] tracking-widest uppercase text-xs sm:text-sm">Explore Project</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-end p-4 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[22px] absolute -bottom-10 sm:-bottom-12 left-3 sm:left-8 md:left-12 right-3 sm:right-8 md:right-12 shadow-2xl bg-white/95 backdrop-blur-2xl border border-zinc-200/50 overflow-hidden">
          <div className="min-w-0 flex-1">
            <h3 className="font-['Space_Grotesk'] text-[22px] sm:text-[30px] md:text-[40px] lg:text-[48px] leading-none mb-2 sm:mb-3 text-[#1c1b1c] truncate">The Obsidian House</h3>
            <p className="font-['Inter'] text-sm sm:text-lg md:text-xl text-[#75758a] font-medium">Residential \ Kyoto</p>
          </div>
          <span className="font-['Space_Grotesk'] text-[24px] sm:text-[32px] md:text-[40px] text-[#1c1b1c]/20 mt-2 sm:mt-0 flex-shrink-0">2023</span>
        </div>
      </motion.div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 md:gap-20 mt-8 md:mt-16">
        {[
          { title: "Nexus Headquarters", cat: "Commercial", loc: "London", year: "2024", img: WORK_IMG_2, offset: false },
          { title: "Villa Aether", cat: "Residential", loc: "Malibu", year: "2022", img: WORK_IMG_3, offset: true },
        ].map((p, i) => (
          <motion.div key={p.title} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2 }} className={`group cursor-pointer relative ${p.offset ? "mt-0 md:mt-28" : ""}`}>
            <div className="h-[300px] sm:h-[380px] md:h-[450px] lg:h-[550px] rounded-[22px] overflow-hidden bg-[#f1eded] relative shadow-2xl group-hover:-translate-y-2 transition-transform duration-700">
              <img alt={p.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 saturate-50 contrast-125" src={p.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-end p-4 sm:p-5 md:p-6 rounded-[16px] sm:rounded-[22px] absolute -bottom-8 left-3 sm:left-6 md:left-8 right-3 sm:right-6 md:right-8 shadow-xl bg-white/95 backdrop-blur-xl border border-zinc-200/50 overflow-hidden">
              <div className="min-w-0 flex-1">
                <h3 className="font-['Space_Grotesk'] text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] leading-none mb-1 sm:mb-2 text-[#1c1b1c] truncate">{p.title}</h3>
                <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-[#75758a] font-medium">{p.cat} \ {p.loc}</p>
              </div>
              <span className="font-['Space_Grotesk'] text-[20px] sm:text-[24px] md:text-[32px] text-[#1c1b1c]/20 mt-1 sm:mt-0 flex-shrink-0">{p.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function HomePage() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      syncTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      gestureOrientation: "vertical"
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Navbar variant="glass" />
      <main><HeroSection /><Philosophy /><ProcessSpotlight /><FeaturedWorks /></main>
      <Footer />
    </>
  );
}
