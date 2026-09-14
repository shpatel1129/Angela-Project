import React from 'react';
import MasterImage from './MasterImage';

const HeadToHeadComparison = ({ comparisons }) => {
  if (!comparisons || comparisons.length === 0) return null;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-amber-600 font-sans font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Details</span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-6">Head-to-Head Comparison</h2>
          <p className="text-slate-500 font-sans text-lg max-w-2xl mx-auto">
            Explore how Avalon and Viking compare across the categories that matter most to luxury travelers.
          </p>
        </div>

        <div className="space-y-24">
          {comparisons.map((comp, idx) => (
            <div key={idx} className="relative">
              {/* Category Title Marker */}
              <div className="flex justify-center mb-10 relative z-10">
                <div className="bg-white px-8 py-3 rounded-full shadow-lg border border-slate-100 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <h3 className="text-lg md:text-xl font-display text-navy-950 uppercase tracking-widest">{comp.category}</h3>
                  <span className="w-2 h-2 rounded-full bg-navy-900"></span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="absolute top-10 bottom-0 left-1/2 w-px bg-slate-200 hidden md:block transform -translate-x-1/2 -z-10"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                
                {/* Avalon Side (Left) */}
                <div className="bg-navy-900 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col relative border border-navy-800">
                  {comp.avalon.image && (
                    <div className="h-72 w-full relative overflow-hidden">
                      <MasterImage src={comp.avalon.image} alt={comp.avalon.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
                    </div>
                  )}
                  <div className={`p-8 md:p-12 relative z-10 flex-grow ${comp.avalon.image ? '-mt-16' : ''}`}>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold mb-4 drop-shadow-md">Avalon Waterways</h4>
                    <h5 className="text-3xl font-display mb-6 leading-tight text-white">{comp.avalon.title}</h5>
                    <p className="text-ice-200 font-sans leading-relaxed text-sm mb-8">
                      {comp.avalon.description}
                    </p>
                    
                    <ul className="space-y-4 border-t border-white/10 pt-6">
                      {comp.avalon.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-3 items-start">
                          <svg className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span className="text-white font-sans text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Viking Side (Right) */}
                <div className="bg-ice-50 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col relative border border-slate-200">
                  {comp.viking.image && (
                    <div className="h-72 w-full relative overflow-hidden">
                      <MasterImage src={comp.viking.image} alt={comp.viking.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ice-50 to-transparent"></div>
                    </div>
                  )}
                  <div className={`p-8 md:p-12 relative z-10 flex-grow ${comp.viking.image ? '-mt-16' : ''}`}>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-4 drop-shadow-md">Viking River Cruises</h4>
                    <h5 className="text-3xl font-display mb-6 leading-tight text-navy-950">{comp.viking.title}</h5>
                    <p className="text-slate-600 font-sans leading-relaxed text-sm mb-8">
                      {comp.viking.description}
                    </p>
                    
                    <ul className="space-y-4 border-t border-slate-200 pt-6">
                      {comp.viking.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex gap-3 items-start">
                          <svg className="w-5 h-5 text-navy-900 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span className="text-slate-700 font-sans text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeadToHeadComparison;
