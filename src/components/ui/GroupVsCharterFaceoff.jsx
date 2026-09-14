import React from 'react';
import FadeIn from './FadeIn';

const GroupVsCharterFaceoff = ({ title, subtitle, options }) => {
  if (!options || options.length !== 2) return null;

  const option1 = options[0];
  const option2 = options[1];

  const formatList = (option) => [
    { name: "Overview", desc: option.description },
    { name: "Key Advantages", desc: option.keyAdvantages.join(' • ') },
    { name: "Trade-Offs", desc: option.tradeOffs },
    { name: "The Verdict", desc: option.verdict }
  ];

  const list1 = formatList(option1);
  const list2 = formatList(option2);

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-900/50 via-navy-950 to-navy-950"></div>
      
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 md:mb-24">
            <span className="font-sans text-gold-400 uppercase tracking-widest text-sm font-bold mb-4 block">
              The Ultimate Face-Off
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {title}
            </h2>
            <div className="w-24 h-[1px] bg-gold-400/50 mx-auto mb-6"></div>
            <p className="font-sans text-slate-300 text-lg max-w-2xl mx-auto italic">
              "{subtitle}"
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* VS Badge (desktop only) */}
          <div className="hidden lg:flex absolute left-1/2 top-[15%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gold-400 text-navy-950 font-display text-2xl items-center justify-center z-30 shadow-2xl border-4 border-navy-950">
            VS
          </div>

          {/* COLUMN 1: Group Cruise */}
          <div className="flex flex-col relative">
            <FadeIn delay={0.1}>
              {/* Polaroid Image */}
              <div className="relative rotate-[-4deg] rounded-sm overflow-hidden shadow-2xl border-[12px] md:border-[16px] border-white bg-white hover:rotate-0 transition-transform duration-500 ease-out z-20 mx-auto max-w-md w-full group">
                <div className="aspect-[4/3] relative bg-slate-200">
                  <img 
                    src={option1.image} 
                    alt={option1.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="pt-5 pb-3 text-center bg-white border-t-2 border-slate-100">
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-1">
                    {option1.name}
                  </h3>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-navy-600">
                    {option1.category}
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Features List */}
            <div className="mt-16 space-y-8 max-w-md mx-auto w-full">
              {list1.map((item, idx) => (
                <FadeIn key={idx} delay={0.2 + (idx * 0.1)} direction="up">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                      {idx !== list1.length - 1 && (
                        <div className="w-px h-full bg-white/20 mt-3 min-h-[40px]"></div>
                      )}
                    </div>
                    <div className="pb-2">
                      <h4 className="font-sans font-bold text-white text-xl mb-1">{item.name}</h4>
                      <p className="font-sans text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Private Charter */}
          <div className="flex flex-col relative mt-12 lg:mt-0">
            <FadeIn delay={0.3}>
              {/* Polaroid Image */}
              <div className="relative rotate-[3deg] rounded-sm overflow-hidden shadow-2xl border-[12px] md:border-[16px] border-white bg-white hover:rotate-0 transition-transform duration-500 ease-out z-20 mx-auto max-w-md w-full group">
                <div className="aspect-[4/3] relative bg-slate-200">
                  <img 
                    src={option2.image} 
                    alt={option2.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="pt-5 pb-3 text-center bg-white border-t-2 border-slate-100">
                  <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-1">
                    {option2.name}
                  </h3>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-navy-600">
                    {option2.category}
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Features List */}
            <div className="mt-16 space-y-8 max-w-md mx-auto w-full">
              {list2.map((item, idx) => (
                <FadeIn key={idx} delay={0.4 + (idx * 0.1)} direction="up">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1 flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                      {idx !== list2.length - 1 && (
                        <div className="w-px h-full bg-white/20 mt-3 min-h-[40px]"></div>
                      )}
                    </div>
                    <div className="pb-2">
                      <h4 className="font-sans font-bold text-white text-xl mb-1">{item.name}</h4>
                      <p className="font-sans text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GroupVsCharterFaceoff;
