import React from 'react';

const AvalonSuiteShowcase = ({ cabins, images }) => {
  if (!cabins || cabins.length === 0) return null;

  return (
    <section className="py-24 bg-ice-50 relative overflow-hidden">
      {/* Decorative background typography */}
      <div className="absolute top-10 left-[-5%] text-[15rem] font-display font-bold text-slate-200/40 tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
        AVALON SUITES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-navy-800 tracking-[0.2em] uppercase text-sm font-semibold mb-4 block">The Collections</span>
          <h2 className="text-5xl md:text-6xl font-display text-navy-950 mb-6">Redefining River Cruise Luxury</h2>
          <div className="w-16 h-px bg-navy-900 mx-auto"></div>
        </div>

        <div className="space-y-32">
          {cabins.map((cabin, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 group`}>
                
                {/* Image Section - Asymmetric styling */}
                <div className="w-full lg:w-3/5 relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
                    <img 
                      src={images[idx] || images[0]} 
                      alt={cabin.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy-950/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                  </div>
                  
                  {/* Floating Glassmorphic Badge */}
                  <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} hidden md:block bg-white/90 backdrop-blur-md border border-white p-5 rounded-xl shadow-xl z-20`}>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 text-center mb-1">Signature</p>
                    <p className="font-display text-2xl text-navy-950 text-center">Collection</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 relative z-10">
                  <div className={`bg-white p-10 md:p-14 shadow-xl rounded-2xl relative ${isEven ? 'lg:-ml-16' : 'lg:-mr-16'} border-t-4 border-navy-900`}>
                    <h3 className="text-3xl md:text-4xl font-display text-navy-950 mb-4">{cabin.name}</h3>
                    <p className="text-amber-700 font-serif italic text-lg mb-6">"{cabin.tagline || cabin.bestFor}"</p>
                    
                    <p className="text-slate-600 font-sans leading-relaxed mb-8 text-base">
                      {cabin.description}
                    </p>
                    
                    <div>
                      <p className="text-xs uppercase tracking-widest text-navy-900 font-bold mb-4">Signature Features</p>
                      <ul className="space-y-3">
                        {cabin.features?.slice(0, 4).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-sm text-slate-700 font-sans">
                            <span className="text-amber-600 mr-3 mt-1 block">✦</span>
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
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

export default AvalonSuiteShowcase;
