"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const PORTFOLIO_IMGS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCIFMSjnCeaSop6tV-ukUOyBiY2Y3eeenYMLDS_d-YozaGNBeccKTVWZD-RJYG2qLrdmdnP5xZ-DDyUIq3bQ-PDVtYrc0krvt9O8GSMo_WaEcsSWH5NGPHLfSPzRYxA2xy9ZQ_-_xK_3LtUdjZxyFpbVIxnRqBkFp_wc62JWJmr-yGDWGVsSOCpy7SMcV1qEKD7JpmQ72sFUm43Z4eQYQlQH8qlmGiaDsVPENjbhpn2yOSF-vbTQJe2xEUIUv-wR53m9sMGN8AycUzn",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBi3MBIJ3NPRZUi0UJyIdyT16g6UqXpgNZzmoN8jhMtETKACnb0fB1jAYjoQZ_GbL6-9yx7AsIQzk8LKilTndMFYaexYlV8VEp8NW1NCVlTT0zdcVZf7iAfZ84QKNan-F4J15TgVAbyhAvv2UuCIQF0p5XHKiACzicDbOVE0QzXKTrhXS1l84SbS5ips-YrQ4ZLmMlZStRHktB1hgXsYTlcvHXRSGT1aw7JT2m_TklXOe-jW3dszSYRQJaXPnlIf_-fYSNr-FUByxJn",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBhhnj8WQ3vdHdoRyvuzoyyyYs1j4hx49Osg8TLi8moLI0vmtuTbV3tcq_V1A5Nrn21ZcTTo11BlZJJCuOgizErRBn7KE-Mw8JPerUiRWNnTXdrtn6_nm-AslzJog8p4t2IxF9ToSzSQVbwlKKxs4lraPbw_sXn053cvmUcKPo5isRCZP-mnW9OxM0a5ttWlMYIPSXowNAz2BTjZj2BdQsl82yDkGB-Wg2QHm3mEa6xCVa-M1W-whc5HkkcL1BvFWryZUzye7NHEnHx",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRNDy2kCYwgbN9pNi0LK9IcZqvv3KmHAI3kMxowji5MakXfp2DFw1Xu19xusmop5PB8jnmHaaCvDsba5guJzLZmUEcD4uhY_zh8d7-2p1ZQbC8gDj-tNdx_swDR8DYPMfhDLCt7XtqsEJA7E9wgLNSsyQTmSbjktCLTNa63GfnNcPht0QB6-q4-mWM0wTnbILfuZSUBxz6cD8VkgXKzw2bzLsTzsjx0E_8zzN5ZnLwOuH_hfIc1YhMrtvsX8k4SHFZU7FVvaANG8L6",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCJnW9QNc1eMsP7NGl3Rw4TqpJ0XfF0pjCQwtRwu530FaWedApMND2i2DSLIxOyjGXWcXipIUticPbQ9qPcimFvRkFqdm44tReV2FxfZR3wi1tJp7TM44B7nGn_mWX0VZ6GZjsuGzqIWecDnPr30zQpcXmieI0TcdDFKcSOC88-Gxbn0uX8O3dIzmn0x3zaE5A-plbvByE_yAOqji3zy9C1tUyIK-N8jgsuUKDs-BuH7U3hqCA3d1mj6WgzhcyLOxvCP-Kuq9Zcwb_y",
];

const filters = ["All Projects", "Residential", "Commercial", "Hospitality", "Restoration"];

const indexData = [
  { year: "2024", name: "The Glass Pavilion", location: "Kyoto, JP", category: "Residential", scale: "420m²" },
  { year: "2023", name: "Brutalist Loft", location: "Berlin, DE", category: "Residential", scale: "180m²" },
  { year: "2023", name: "Aesop Flagship", location: "New York, US", category: "Commercial", scale: "350m²" },
  { year: "2022", name: "Monolith Hotel", location: "Swiss Alps, CH", category: "Hospitality", scale: "4,200m²" },
  { year: "2021", name: "Cathedral Adaptive Reuse", location: "London, UK", category: "Restoration", scale: "1,800m²" },
];

const archiveCards = [
  { title: "The Glass Pavilion", category: "Residential", year: "2024", img: PORTFOLIO_IMGS[0], aspect: "aspect-[4/5]", colSpan: "", mt: "" },
  { title: "Brutalist Loft", category: "Residential", year: "2023", img: PORTFOLIO_IMGS[1], aspect: "aspect-[4/5]", colSpan: "", mt: "lg:-mt-8" },
  { title: "Aesop Flagship", category: "Commercial", year: "2023", img: PORTFOLIO_IMGS[2], aspect: "aspect-[4/5]", colSpan: "", mt: "" },
  { title: "Monolith Hotel", category: "Hospitality", year: "2022", img: PORTFOLIO_IMGS[3], aspect: "aspect-[16/9]", colSpan: "md:col-span-2 lg:col-span-2", mt: "" },
  { title: "Cathedral Adaptive Reuse", category: "Restoration", year: "2021", img: PORTFOLIO_IMGS[4], aspect: "aspect-[4/5]", colSpan: "", mt: "lg:-mt-8" },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main className="flex-grow pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10 sm:mb-16 md:mb-20 mt-4 sm:mt-8">
          <h1 className="font-['Space_Grotesk'] text-[48px] sm:text-[64px] md:text-[80px] leading-none tracking-tighter mb-4 sm:mb-6 text-[#1c1b1c]">Portfolio</h1>
          <p className="font-['Inter'] text-[15px] sm:text-[17px] text-[#75758a] max-w-2xl leading-relaxed">A curated selection of interior spaces, demonstrating our commitment to architectural integrity, material truth, and spatial harmony.</p>
        </motion.header>

        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-10 sm:mb-16 md:mb-20">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {filters.map((f, i) => (
              <button key={f} className={`px-4 sm:px-6 py-2 rounded-full font-['Space_Grotesk'] text-[13px] sm:text-[14px] font-medium transition-colors ${i === 0 ? "bg-[#ff7759] text-white" : "bg-[#ebe7e7] text-[#1c1b1c] hover:bg-[#ff7759] hover:text-white border border-[#d9d9dd]"}`}>{f}</button>
            ))}
          </div>
        </motion.section>

        {/* Index */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-16 sm:mb-24">
          <div className="border-b border-[#d9d9dd] mb-5 sm:mb-6 pb-3 flex justify-between items-end">
            <h2 className="font-['Space_Grotesk'] text-[32px] sm:text-[44px] md:text-[60px] leading-none tracking-tighter text-[#1c1b1c]">Index</h2>
            <span className="font-['Space_Grotesk'] text-[12px] sm:text-[14px] font-medium text-[#75758a] uppercase tracking-widest">Chronological</span>
          </div>
          <div className="hidden md:grid grid-cols-12 gap-4 border-b border-[#d9d9dd] pb-4 mb-4 font-['Space_Grotesk'] text-[14px] font-medium text-[#75758a] uppercase">
            <div className="col-span-1">Year</div><div className="col-span-4">Project Name</div><div className="col-span-3">Location</div><div className="col-span-3">Category</div><div className="col-span-1 text-right">Scale</div>
          </div>
          {indexData.map((row) => (
            <div key={row.name} className="flex flex-col md:grid md:grid-cols-12 gap-1 sm:gap-2 md:gap-4 border-b border-[#d9d9dd]/50 py-4 font-['Inter'] text-[14px] sm:text-[16px] hover:bg-[#f8f7f6] transition-colors cursor-pointer px-2 -mx-2">
              <div className="flex justify-between items-center md:hidden mb-1">
                <span className="text-[#75758a] text-xs font-medium">{row.year}</span>
                <span className="text-[#ff7759] text-xs font-medium">{row.category}</span>
              </div>
              <div className="md:col-span-1 text-[#75758a] hidden md:block">{row.year}</div>
              <div className="md:col-span-4 font-medium text-[#1c1b1c] text-lg md:text-base">{row.name}</div>
              <div className="md:col-span-3 text-[#75758a]">{row.location}</div>
              <div className="md:col-span-3 text-[#ff7759] hidden md:block">{row.category}</div>
              <div className="md:col-span-1 md:text-right text-[#75758a] hidden md:block">{row.scale}</div>
            </div>
          ))}
        </motion.section>

        {/* Visual Archive */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="border-b border-[#d9d9dd] mb-6 sm:mb-10 pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <h2 className="font-['Space_Grotesk'] text-[32px] sm:text-[44px] md:text-[60px] leading-none tracking-tighter text-[#1c1b1c]">Visual Archive</h2>
            <span className="font-['Space_Grotesk'] text-[12px] sm:text-[14px] font-medium text-[#75758a] uppercase tracking-widest">Selected Works</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {archiveCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`group cursor-pointer ${card.colSpan} ${card.mt}`}>
                <div className={`w-full ${card.aspect} bg-[#f2f2f2] rounded-[16px] sm:rounded-[22px] overflow-hidden mb-3 sm:mb-4 relative`}>
                  <img alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={card.img} />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-display text-[13px] sm:text-[14px] font-medium uppercase mb-1 text-[#4a3a31]">{card.title}</h3>
                  <p className="font-sans text-[13px] sm:text-[14px] text-[#4a3a31]/60">{card.category} / {card.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
