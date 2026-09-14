import React from 'react';
import image1 from '../../assets/Amawaterways/AmaBella_Exterior_AT_Durnstein.webp';
import image2 from '../../assets/Amawaterways/AmaDante_Exterior_DE_Passau.webp';
import image3 from '../../assets/Amawaterways/AmaViola_Exterior_AT_Durnstein_MP-IMG-6853_edit.webp';

const AvalonDeckNavigator = ({ decks }) => {
  if (!decks || decks.length === 0) return null;

  const images = [image1, image2, image3];

  return (
    <section className="py-24 bg-ice-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-sans font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Compare</span>
          <h2 className="text-4xl md:text-5xl font-display text-navy-950 mb-6">Decks at a Glance</h2>
          <p className="text-slate-500 font-sans text-lg max-w-2xl mx-auto">
            Every deck on an Avalon ship offers a distinct experience. Find the perfect vantage point for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {decks.map((deck, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group border border-navy-900/5 hover:-translate-y-2">
              
              {/* Card Header / Image */}
              <div className="w-full h-56 relative overflow-hidden shrink-0">
                <img 
                  src={images[idx] || images[0]} 
                  alt={deck.name} 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 pr-6">
                  <h3 className="text-2xl font-display text-white leading-tight">
                    {deck.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-slate-600 font-sans leading-relaxed text-sm mb-6">
                  {deck.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Advantages */}
                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.2em] text-amber-600 font-bold mb-3">Advantages</h4>
                    <ul className="space-y-2">
                      {deck.pros.map((pro, pIdx) => (
                        <li key={pIdx} className="flex gap-2 items-start">
                          <svg className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span className="text-slate-600 font-sans text-xs leading-tight">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Considerations */}
                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">Considerations</h4>
                    <ul className="space-y-2">
                      {deck.cons.map((con, cIdx) => (
                        <li key={cIdx} className="flex gap-2 items-start">
                          <svg className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                          <span className="text-slate-500 font-sans text-xs leading-tight">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">Best For</p>
                  <p className="font-display text-navy-900 text-sm leading-snug">{deck.bestFor}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvalonDeckNavigator;
