import React, { useState } from 'react';
import { Sparkles, Ship, Anchor, Compass, Waves } from 'lucide-react';

const FifteenDifferencesShowcase = ({ data }) => {
  if (!data || !data.points) return null;

  const [hoveredId, setHoveredId] = useState(null);

  // We can assign a subtle icon to each card based on its index
  const getIcon = (index) => {
    const icons = [Ship, Anchor, Compass, Waves, Sparkles];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6" />;
  };

  const getCategory = (title) => {
    const t = title.toLowerCase();
    if (t.includes('passenger') || t.includes('crowd') || t.includes('intimate')) return 'Atmosphere';
    if (t.includes('port') || t.includes('destination') || t.includes('immersion')) return 'Exploration';
    if (t.includes('service') || t.includes('personal')) return 'Service';
    if (t.includes('casino') || t.includes('vibe') || t.includes('party')) return 'Onboard Culture';
    return 'The Windstar Way';
  };

  return (
    <section className="relative bg-navy-950 text-white overflow-hidden py-32 border-y border-gold-500/20">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ice-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[100rem] w-full mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Sticky Header Section (Perfectly Even 50% Width) */}
        <div className="lg:sticky lg:top-24 flex flex-col gap-10 w-full">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Boutique Advantage</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl text-white mb-6 leading-tight">
              {data.title}
            </h2>
            <div className="w-20 h-0.5 bg-gold-500 mb-8"></div>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          <div className="hidden lg:block relative rounded-3xl overflow-hidden aspect-[4/5] border border-gold-500/20 shadow-2xl w-full">
            <img 
              src="/assets/2025_WindStar_Deck_08_V0-C6nr5qk7.webp" 
              alt="Windstar Luxury" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1974&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy-900/90 backdrop-blur-md border border-gold-500/30 rounded-xl p-5 text-center shadow-xl">
                  <div className="font-display text-4xl text-gold-400 mb-1">1:1.5</div>
                  <div className="text-xs uppercase tracking-widest text-ice-200">Staff to Guest</div>
                </div>
                <div className="bg-navy-900/90 backdrop-blur-md border border-gold-500/30 rounded-xl p-5 text-center shadow-xl">
                  <div className="font-display text-4xl text-gold-400 mb-1">Zero</div>
                  <div className="text-xs uppercase tracking-widest text-ice-200">Crowds & Lines</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block p-8 rounded-2xl bg-navy-900/50 border border-gold-500/20 backdrop-blur-sm shadow-xl">
            <p className="text-base text-gold-200/80 italic font-serif leading-relaxed">
              "When you eliminate the mega-ship crowds, you make room for authentic connection, quiet relaxation, and genuine discovery."
            </p>
          </div>
        </div>

        {/* Scrolling Grid Section (Perfectly Even 50% Width) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full pb-12">
          {data.points.map((point, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            
            return (
              <div 
                key={point.id}
                onMouseEnter={() => setHoveredId(point.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group rounded-3xl overflow-hidden transition-all duration-700 aspect-square sm:aspect-auto sm:h-80 border ${hoveredId === point.id ? 'border-gold-400/50 shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] scale-[1.02]' : 'border-slate-800 bg-navy-900/40'}`}
              >
                {/* Giant background number */}
                <div className="absolute -bottom-6 -right-4 font-display text-[140px] leading-none text-white/[0.03] group-hover:text-gold-500/[0.08] transition-colors duration-700 pointer-events-none select-none z-0">
                  {num}
                </div>

                  {/* Glass Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-900/50 to-navy-950/80 backdrop-blur-sm z-0"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`}></div>
  
                  {/* Internal Grid/Map Pattern Texture */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:20px_20px] z-0"></div>
  
                  <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                    {/* Top Row: Meta & Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col space-y-2">
                        <span className="font-sans text-xs uppercase text-gold-400 font-semibold tracking-[0.2em]">
                          Signature {num}
                        </span>
                        <span className="inline-block px-2.5 py-1 rounded border border-slate-700/50 bg-navy-950/50 text-[10px] uppercase tracking-widest text-slate-400">
                          {getCategory(point.title)}
                        </span>
                      </div>
                      <div className="p-3 rounded-full bg-navy-950/50 border border-slate-800 text-slate-500 group-hover:text-gold-400 group-hover:border-gold-400/30 transition-all duration-500">
                        {getIcon(index)}
                      </div>
                    </div>
                    
                    {/* Bottom Row: Content & Structure */}
                    <div className="flex flex-col">
                      <div className="w-full">
                        <h3 className="font-display text-2xl text-white mb-4 group-hover:text-gold-100 transition-colors">
                          {point.title}
                        </h3>
                        <div className="w-12 h-px bg-gold-500/30 mb-4 group-hover:w-24 group-hover:bg-gold-400 transition-all duration-700"></div>
                        <p className="text-slate-300/90 text-sm leading-relaxed group-hover:text-white transition-colors">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FifteenDifferencesShowcase;
