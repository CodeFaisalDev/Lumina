"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const MATERIAL_IMGS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBDkQ2Umw5pMR5naAIVszVt_3jujIQLLsz6veE7a3_6VuNxzzZCihCcINhmY_qkHx26nun3JqFUIJNIo00McW1PDOzdID74-b6Xnh_kvzOqkRZeWiuxVwQcxo5CDm_2YttJLP0icPRvD7-YyGpA4DXAxkeNSJ7h3GtDHWPVXVf5pYFD4oYh1TpbhSe0j-n2pT8mh5NAN2T57xwzaJtp_S76UiypyzqRTpWKmyjN47FZYnLLoK7lwhwY7jXSfOTB_z8hVJMQeudCqw1O",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCmXGIed9wnmgIQ6GDCQWW6JqVZpysBcmcIlCyu26zOuQWZxsjUVzhZVlET3TbRPb0r3yBMptX8XHDG3n9EZYXlLiNY5lA-yMJu_3U4mzyrWVlixQlnZFjMc_qpcaZpwxBYqygI6xneVReP3GuID3k3Pm_yUakAjucVsYMzjwCPk8awjoSMSWDP0Je69WspzN_l8y0cAkMFAiWcyZzQ6YaYEy9XTMAyT6lu6gUbnmLdq1mV3uhoRQJnTO1EwWd0_0FrneTY3rE4T7hE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDasd9UPzwZowzNeiKQBoo5EGD-weYYIdq-qaSAzWs8KDp-d3Rbobr-PDtDiKLS5pibxLoim3W9qlHNryDxJrKmRFMhp54PbBql90n3jPgqHJDMNDqZuGw8F_WHcugcsV6jClEHvOmNm3Iabw8dTLrsYQKX48vtZFpa8MTPkuUJp0tOPLoJYJqc4a18EdF0EE32mMQpuiQ16gIiGmcSYm5UBCJ26Ap5c9HRvbbdXmFtLlXq-5PO88cQIB9c0ehs9Y7DXLnxKINJtDMu",
];

const materials = [
  {
    name: "Calacatta Borghini", type: "Metamorphic Rock / Marble", img: MATERIAL_IMGS[0],
    specs: [{ label: "Density", value: "2.71 g/cm³" }, { label: "Tensile Strength", value: "15 MPa" }, { label: "Compressive Yield", value: "110 MPa" }, { label: "Porosity", value: "0.3%" }],
  },
  {
    name: "Oxidized Alloy 7075", type: "Metal / Aluminum Zinc", img: MATERIAL_IMGS[1],
    specs: [{ label: "Density", value: "2.81 g/cm³" }, { label: "Tensile Strength", value: "572 MPa" }, { label: "Compressive Yield", value: "503 MPa" }, { label: "Hardness (Brinell)", value: "150" }],
  },
  {
    name: "Ebonized Ash", type: "Organic / Hardwood", img: MATERIAL_IMGS[2],
    specs: [{ label: "Density", value: "0.67 g/cm³" }, { label: "Modulus of Rupture", value: "103 MPa" }, { label: "Crushing Strength", value: "51.1 MPa" }, { label: "Janka Hardness", value: "5,870 N" }],
  },
];

const researchItems = [
  { id: "PUB-882", date: "Oct 2023", title: "Acoustic Properties of Mycelium Composites in Brutalist Interventions" },
  { id: "PUB-741", date: "Aug 2023", title: "Photovoltaic Glass Integration in High-Density Urban Atriums" },
  { id: "PUB-619", date: "May 2023", title: "Thermal Mass Optimization Using Rammed Earth Monoliths" },
];

export default function MaterialsPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main className="flex-grow pt-[100px] sm:pt-[120px] pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#d9d9dd] pb-6">
          <div>
            <span className="font-['Space_Grotesk'] text-[12px] sm:text-[14px] font-medium text-[#75758a] uppercase tracking-widest block mb-2 sm:mb-3">Index No. 04.9A</span>
            <h1 className="font-['Space_Grotesk'] text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-none tracking-tighter text-[#1c1b1c]">Materials &amp; Archive</h1>
          </div>
          <p className="font-['Inter'] text-[16px] sm:text-[18px] text-[#75758a] max-w-md leading-relaxed">A curated repository of tactile elements and empirical research dictating the structural and aesthetic principles of Lumina interiors.</p>
        </motion.header>

        {/* Library Console */}
        <section className="mb-16 sm:mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 border-b border-[#d9d9dd] pb-3 gap-4">
            <h2 className="font-['Inter'] text-[28px] sm:text-[36px] md:text-[48px] tracking-tight text-[#1c1b1c]">Library Console</h2>
            <button className="font-['Space_Grotesk'] text-[14px] font-medium bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-[#313030] transition-colors flex-shrink-0">View All Specs</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {materials.map((material, i) => (
              <motion.article key={material.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="bg-[#f2f2f2] border border-[#d9d9dd] p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 hover:border-[#5f5e64] transition-colors cursor-pointer group">
                <div className="aspect-square w-full bg-[#e5e2e2] relative overflow-hidden rounded">
                  <img alt={material.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" src={material.img} />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-[22px] sm:text-[28px] md:text-[32px] tracking-tight mb-2 text-[#1c1b1c]">{material.name}</h3>
                  <p className="font-['Space_Grotesk'] text-[12px] sm:text-[14px] font-medium text-[#75758a] mb-4 sm:mb-6 uppercase tracking-wide">{material.type}</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 border-t border-[#d9d9dd] pt-3 sm:pt-4">
                    {material.specs.map((spec) => (
                      <div key={spec.label}>
                        <span className="font-['Space_Grotesk'] text-[10px] text-[#75758a] block uppercase">{spec.label}</span>
                        <span className="font-['Inter'] text-[13px] sm:text-[14px] text-[#1c1b1c]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Research Index */}
        <section id="research">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 border-b border-[#d9d9dd] pb-3 gap-4">
            <h2 className="font-['Inter'] text-[28px] sm:text-[36px] md:text-[48px] tracking-tight text-[#1c1b1c]">Research Index</h2>
            <div className="flex gap-2 sm:gap-3">
              <span className="font-['Space_Grotesk'] text-[13px] sm:text-[14px] font-medium bg-[#ebe7e7] px-3 sm:px-4 py-1 rounded-full cursor-pointer hover:bg-[#d9d9dd] transition-colors text-[#1c1b1c]">Date</span>
              <span className="font-['Space_Grotesk'] text-[13px] sm:text-[14px] font-medium bg-[#ebe7e7] px-3 sm:px-4 py-1 rounded-full cursor-pointer hover:bg-[#d9d9dd] transition-colors text-[#1c1b1c]">Relevance</span>
            </div>
          </div>
          <ul className="flex flex-col">
            {researchItems.map((item, i) => (
              <motion.li key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="border-b border-[#d9d9dd] py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 hover:bg-[#f8f7f6] transition-colors px-3 -mx-3 cursor-pointer group">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-['Space_Grotesk'] text-[11px] sm:text-[12px] bg-black text-white px-2 py-1 rounded">{item.id}</span>
                    <span className="font-['Space_Grotesk'] text-[11px] sm:text-[12px] text-[#75758a] tracking-widest uppercase">{item.date}</span>
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-[18px] sm:text-[20px] md:text-[24px] tracking-tight text-[#1c1b1c]">{item.title}</h4>
                </div>
                <span className="material-symbols-outlined text-[#75758a] group-hover:text-[#1c1b1c] transition-colors flex-shrink-0">arrow_forward</span>
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
