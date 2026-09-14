import React from 'react';
import FadeIn from './FadeIn';

const SvsSDiningShowdown = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-navy-950 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-ts-gold font-bold mb-3 block">
              {data.subtitle || "Culinary & Lifestyle Head-to-Head"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold">
              {data.title || "Dining & Onboard Atmosphere"}
            </h2>
            <div className="w-12 h-[2px] bg-ts-gold mx-auto mt-6"></div>
          </FadeIn>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.categories?.map((cat, idx) => {
            const isLastOdd = idx === data.categories.length - 1 && data.categories.length % 2 !== 0;
            return (
              <FadeIn key={idx} delay={idx * 0.1} className={isLastOdd ? "md:col-span-2" : ""}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col hover:bg-white/10 transition-colors duration-300">
                <h3 className="font-display text-2xl text-ts-gold font-bold mb-6 text-center border-b border-white/10 pb-4">
                  {cat.categoryName}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                  <div className="border-r border-white/10 pr-6">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-slate-400 font-bold block mb-3">{data.brand1Name || "BRAND 1"}</span>
                    <p className="font-serif text-sm text-slate-200 leading-relaxed font-light">
                      {cat.silverseaDesc}
                    </p>
                  </div>
                  
                  <div className="pl-2">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-slate-400 font-bold block mb-3">{data.brand2Name || "BRAND 2"}</span>
                    <p className="font-serif text-sm text-slate-200 leading-relaxed font-light">
                      {cat.seabournDesc}
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SvsSDiningShowdown;
