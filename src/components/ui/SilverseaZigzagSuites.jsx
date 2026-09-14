import React from 'react';
import { Check } from 'lucide-react';
import MasterImage from './MasterImage';

const SilverseaZigzagSuites = ({ suites, images }) => {
  if (!suites?.length) return null;

  return (
    <section className="bg-ice-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs block mb-3">Accommodations</span>
          <h2 className="font-display text-4xl md:text-6xl text-navy-950 mb-6">Suites & Accommodations Guide</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Every Silversea guest travels in a suite — but not every suite is right for every traveler. Here is how to choose yours.</p>
        </div>

        {/* Zig-zag suite rows */}
        <div className="space-y-8">
          {suites.map((suite, idx) => {
            const isEven = idx % 2 === 0;
            const img = images?.[idx % images.length];

            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg group ${isEven ? '' : ''}`}
              >
                {/* Image side */}
                <div className={`relative min-h-[380px] ${!isEven ? 'lg:order-2' : ''}`}>
                  {img && (
                    <MasterImage
                      src={img}
                      alt={suite.category}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-navy-950/30"></div>
                  {/* Category number */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center">
                    <span className="font-display text-navy-950 text-lg font-bold">0{idx + 1}</span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`bg-white p-10 lg:p-14 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                  <span className="text-gold-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">{suite.tagline}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-navy-950 mb-4">{suite.category}</h3>
                  <div className="w-12 h-0.5 bg-gold-400 mb-6"></div>
                  <p className="text-slate-600 leading-relaxed mb-6">{suite.description}</p>

                  {/* Best for badge */}
                  <div className="bg-navy-50 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-navy-900 text-xs font-bold uppercase tracking-widest mb-1">Best For</p>
                      <p className="text-slate-600 text-sm">{suite.bestFor}</p>
                    </div>
                  </div>

                  {/* Angela tip */}
                  <div className="border-l-4 border-gold-400 pl-4">
                    <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">Angela's Tip</p>
                    <p className="text-navy-800 text-sm font-medium italic">{suite.tip}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Suite selection callout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { q: 'How much time in suite?', a: 'A lot → upgrade space. A little → focus on location and value.' },
            { q: 'How long is the voyage?', a: 'Longer voyages justify larger suite categories significantly.' },
            { q: 'Is scenery important?', a: 'Yes → prioritize a veranda with unobstructed views.' }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6">
              <p className="font-display text-lg text-navy-950 mb-3">"{item.q}"</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SilverseaZigzagSuites;
