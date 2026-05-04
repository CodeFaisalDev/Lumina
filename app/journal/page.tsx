"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const JOURNAL_HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuALPrhjcUlMDtfDKL3ny6AMJZBHrRP9VOe4l8iSrxVFdSmF62tlPy332mpwLdcFdtHH3dVIunGGdahD5OtDfRTlAXe_K0dZQvTIhS25cyxmuL_u_W00LyjREaxJqXCUs-DwXWFvKLoyZSQDZ-6W4rLS6RvtdP7HcSqzJaL1DFgnwWplqO_wBFfYAOmE04wBSbwhseEUBa1ZSBxNxNF66QXFxT1gLKwENb6AnB_w3DJqK5AtKu3CgaDdoj-HL5O7v0AN_Sv2wFkW8SuE";

const articles = [
  { title: "The Brutalist Revival in Domestic Spaces", description: "Examining how raw concrete and exposed structural elements are being softened for residential interiors.", category: "Case Studies", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAL_j5ZCvkCuSkpClvfwSrJerJ4WRFoK-MMT5QKbSmqgCcLAWwZzRCZDg0HVGpAr-QwqrjDcirdK_cIZTvvssCIMRliXttMn9637ydfKuWcUPLsAWyLodDb7BUO5fPhh5yXZwvs8Q-kMaLYkcofdcrLhj6iLXL58oiaLxxiGaieOplxJPtBfPyuOzbkokjO_8qQbyClbSm-jqQXdyS7xLU0mhZj-jsPd7BvoYvnSxR1HoOcRnqW1YIHzNCzJyHMTSduALitHZrv2XFC" },
  { title: "Acoustic Properties of Porous Stone", description: "Recent research into leveraging natural volcanic rock formations for superior sound dampening in open-plan offices.", category: "Material Science", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArX08EM1rj2J4_bM5oUT-TEsq5XAXpMqvj3AP2150E0n1IdDC5hIOI1WssgV-G4GHzhlzDMGBZ0U4mTMYyBy056vmMDA1BHXvgZACUakv9neBw2vWo3qIFewiNFC_jtFNgLwGWkT2vGAue4-gAzAfffH3ULaUc4cYvFY3BVZccGE3h658qDlNV8scab4dhImmIHOfRnWIIjVk6uTNtL_vEktwWnt2rtsZliRAaiapI2wQq9LKEdj_JoH_uabSRSPPAjm3EOngHNYsv" },
  { title: "Algorithmic Circulation Planning", description: "How machine learning models are optimizing human traffic flows in large-scale commercial developments.", category: "Spatial AI", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6owxunrbvvKqKdZ_0lfuvv4Tj1htXkC-bjzXCHJvDRxaqzMVsa7KAn_KKCvEEUy_FjLSu7yO6LqjnGX7JVHehyJFiIA-aIURB8lgei3hl8UAW3tmpGEiK96Akk5AVdfgoJgTCtTjYc-b0O85luYjQFLM67GzSM8IG-IZ9Xa3xoLEpB3ciPygcUFxWxcHhBjB_s2-ptfwPGllOhiNGnlgowPzukG5HM0czET6nohgYziovHU8zb6PqbF770dU93Vi1zsnVmas55lYM" },
];

const filters = ["All", "Research", "Case Studies", "Material Science", "Spatial AI"];

export default function JournalPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main className="flex-grow pt-[72px] sm:pt-24">
        {/* Hero */}
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[614px] flex items-center justify-center bg-[#f1eded] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Abstract architectural forms" className="w-full h-full object-cover opacity-60" src={JOURNAL_HERO} />
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
            <h1 className="font-['Space_Grotesk'] text-[48px] sm:text-[72px] md:text-[96px] leading-none tracking-tighter text-[#1c1b1c]">Journal</h1>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {filters.map((f) => (
              <button key={f} className="px-4 sm:px-6 py-2 rounded-full border border-[#d9d9dd] text-[#1c1b1c] font-['Space_Grotesk'] text-[13px] sm:text-[14px] font-medium bg-[#fdf8f8] hover:bg-[#f2f2f2] transition-colors">{f}</button>
            ))}
          </div>
        </section>

        {/* Articles */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article, i) => (
              <motion.article key={article.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f2f2f2] rounded mb-4 sm:mb-6">
                  <img alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={article.img} />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-[#ebe7e7] px-2.5 sm:px-3 py-1 font-['Space_Grotesk'] text-[12px] sm:text-[14px] font-medium text-[#1c1b1c] rounded shadow-sm">{article.category}</span>
                  </div>
                </div>
                <div className="flex-grow flex flex-col">
                  <h2 className="font-['Space_Grotesk'] text-[22px] sm:text-[28px] md:text-[32px] leading-tight text-[#1c1b1c] mb-3 sm:mb-4">{article.title}</h2>
                  <p className="font-['Inter'] text-[15px] sm:text-[18px] text-[#75758a] mb-4 sm:mb-6 line-clamp-3 leading-relaxed">{article.description}</p>
                  <div className="mt-auto flex items-center text-[#1c1b1c] font-['Space_Grotesk'] text-[13px] sm:text-[14px] font-medium uppercase tracking-widest group-hover:text-[#5f5e64] transition-colors">
                    Read Article <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#1b1b20] py-16 sm:py-20 md:py-24">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-['Inter'] text-[28px] sm:text-[36px] md:text-[48px] text-white mb-4 sm:mb-6 tracking-tight">The Architecture of Tomorrow</motion.h2>
            <p className="font-['Inter'] text-[15px] sm:text-[18px] text-[#848389] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">Subscribe to our journal for weekly insights on materials, process, and the evolving landscape of interior space.</p>
            <form className="flex max-w-sm sm:max-w-md mx-auto relative">
              <input className="w-full bg-transparent border-b border-[#848389] text-white focus:outline-none focus:border-white py-3 px-2 font-['Inter'] text-[16px] sm:text-[18px] placeholder:text-[#848389]/50" placeholder="Email Address" type="email" />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-[#848389] transition-colors" type="submit">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
