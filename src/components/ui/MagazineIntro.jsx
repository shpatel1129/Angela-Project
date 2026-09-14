import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';

const MagazineIntro = ({ sections, image1, image2 }) => {
  if (!sections || sections.length === 0) return null;
  const firstSection = sections[0];

  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Magazine style layout: Image left/center, text card overlapping on right */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start min-h-[500px] lg:min-h-[700px]">
          
          {/* Main Image Base */}
          <div className="w-full lg:w-8/12 h-[400px] md:h-[500px] lg:h-[700px] relative rounded-2xl overflow-hidden shadow-2xl lg:ml-0 z-10">
             <FadeIn className="absolute inset-0 h-full w-full">
               {image1 && (
                 <MasterImage 
                   asBackground={true} 
                   src={image1} 
                   className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-[3000ms]" 
                 />
               )}
               <div className="absolute inset-0 bg-navy-950/10"></div>
             </FadeIn>
             
             {/* Secondary smaller image floating bottom-left */}
             <FadeIn delay={0.4} direction="up" className="hidden md:block absolute bottom-8 left-8 w-64 h-48 rounded-xl border-4 border-white shadow-xl overflow-hidden z-20">
                {image2 && (
                 <MasterImage 
                   asBackground={true} 
                   src={image2} 
                   className="absolute inset-0 bg-cover bg-center" 
                 />
               )}
             </FadeIn>
          </div>

          {/* Overlapping Text Card */}
          <div className="w-[90%] md:w-10/12 lg:w-5/12 bg-white/95 backdrop-blur-md p-10 md:p-14 lg:p-16 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] relative lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 -mt-16 lg:mt-0 z-30 border border-slate-100">
             <FadeIn delay={0.2} direction="left">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-8 h-[1px] bg-navy-800"></div>
                 <span className="uppercase tracking-[0.2em] text-xs font-bold text-navy-800">
                   Overview
                 </span>
               </div>
               
               <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] text-navy-950 mb-8 leading-[1.15]">
                 {firstSection.heading}
               </h2>
               
               <div className="space-y-6">
                 {firstSection.paragraphs?.map((p, idx) => (
                   <p key={idx} className="font-sans text-lg text-slate-600 leading-relaxed font-light">
                     {p}
                   </p>
                 ))}
               </div>
               
               {firstSection.list && (
                 <ul className="mt-8 grid grid-cols-1 gap-4">
                   {firstSection.list.map((item, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <span className="flex-shrink-0 w-5 h-5 rounded-full bg-ice-100 text-navy-800 flex items-center justify-center mt-0.5">
                         <span className="font-bold text-[10px]">✦</span>
                       </span>
                       <span className="font-sans text-sm text-slate-700 font-medium leading-snug">{item}</span>
                     </li>
                   ))}
                 </ul>
               )}
             </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MagazineIntro;
