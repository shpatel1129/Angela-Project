import React from 'react';
import FadeIn from './FadeIn';

const SvsSServiceDifference = ({ data, silverseaImage, seabournImage }) => {
  if (!data) return null;

  return (
    <section className="w-full py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 block mb-4">
            THE CORE DIFFERENCE
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-navy-950 font-bold mb-6">
            {data.title}
          </h2>
          <p className="font-serif text-lg text-slate-600 leading-relaxed font-light">
            {data.description}
          </p>
          <div className="w-16 h-0.5 bg-ts-gold mx-auto mt-8"></div>
        </FadeIn>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Silversea Column */}
          <FadeIn direction="right" className="flex flex-col">
            <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl mb-8 group">
              <img 
                src={silverseaImage} 
                alt="Silversea Butler Service" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                    <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-navy-950 block mb-2">{data.brand1Name || "BRAND 1"}</span>
                    <h3 className="font-display text-2xl text-navy-950 font-bold">{data.silverseaTitle}</h3>
                 </div>
              </div>
            </div>
            <div className="px-4">
              <p className="font-serif text-base text-slate-700 leading-relaxed font-light">
                {data.silverseaText}
              </p>
            </div>
          </FadeIn>

          {/* Seabourn Column */}
          <FadeIn direction="left" delay={0.2} className="flex flex-col lg:mt-16">
            <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl mb-8 group">
              <img 
                src={seabournImage} 
                alt="Seabourn Suite Service" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-navy-950/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 text-white">
                    <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-ts-gold block mb-2">{data.brand2Name || "BRAND 2"}</span>
                    <h3 className="font-display text-2xl text-white font-bold">{data.seabournTitle}</h3>
                 </div>
              </div>
            </div>
            <div className="px-4">
              <p className="font-serif text-base text-slate-700 leading-relaxed font-light">
                {data.seabournText}
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default SvsSServiceDifference;
