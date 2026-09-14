import React from 'react';
import FadeIn from './FadeIn';
import { Ship, Hotel, ArrowRight } from 'lucide-react';

const ValueVsShowdown = ({ data, image1, image2 }) => {
  if (!data) return null;

  const comparisonRows = [
    { label: 'Style', key1: data.brand1.style, key2: data.brand2.style },
    { label: 'Cabin', key1: data.brand1.cabin, key2: data.brand2.cabin },
    { label: 'Excursions', key1: data.brand1.excursions, key2: data.brand2.excursions },
    { label: 'Vibe', key1: data.brand1.vibe, key2: data.brand2.vibe },
  ];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold-900 rounded-full blur-[150px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ice-800 rounded-full blur-[120px] opacity-10 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4">Value Comparison</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">{data.title}</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Brand 1 */}
          <FadeIn delay={0.1}>
            <div className="bg-navy-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-navy-800 h-full group">
              {image1 && (
                <div className="relative h-64 overflow-hidden">
                  <img src={image1} alt={data.brand1.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500 flex items-center justify-center shadow-lg">
                      <Ship className="w-7 h-7 text-navy-950" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-white">{data.brand1.name}</h3>
                      <p className="font-sans text-xs text-gold-400 uppercase tracking-widest font-semibold">Boutique Luxury</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-8">
                {!image1 && (
                  <div className="flex items-center gap-3 mb-6">
                    <Ship className="w-6 h-6 text-gold-400" />
                    <h3 className="font-display text-2xl text-white">{data.brand1.name}</h3>
                  </div>
                )}
                <div className="space-y-4">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-navy-800/50 pb-4">
                      <span className="font-sans text-sm text-ice-300/60 uppercase tracking-wider font-semibold">{row.label}</span>
                      <span className="font-sans text-white font-medium bg-gold-500/10 border border-gold-500/20 px-4 py-1.5 rounded-full text-sm">{row.key1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Brand 2 */}
          <FadeIn delay={0.2}>
            <div className="bg-navy-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-navy-800/50 h-full group">
              {image2 && (
                <div className="relative h-64 overflow-hidden">
                  <img src={image2} alt={data.brand2.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-navy-700 flex items-center justify-center shadow-lg">
                      <Hotel className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-white">{data.brand2.name}</h3>
                      <p className="font-sans text-xs text-ice-300/60 uppercase tracking-widest font-semibold">Mass Market</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-8">
                {!image2 && (
                  <div className="flex items-center gap-3 mb-6">
                    <Hotel className="w-6 h-6 text-ice-300" />
                    <h3 className="font-display text-2xl text-white">{data.brand2.name}</h3>
                  </div>
                )}
                <div className="space-y-4">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-navy-800/30 pb-4">
                      <span className="font-sans text-sm text-ice-300/60 uppercase tracking-wider font-semibold">{row.label}</span>
                      <span className="font-sans text-ice-100/80 font-medium bg-navy-800/50 px-4 py-1.5 rounded-full text-sm">{row.key2}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Verdict */}
        <FadeIn delay={0.4}>
          <div className="bg-white text-navy-950 rounded-2xl p-10 max-w-5xl mx-auto text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-gold-50 rounded-full blur-3xl -ml-16 -mt-16 opacity-60"></div>
            <h4 className="font-sans text-navy-500 uppercase tracking-widest text-sm font-bold mb-6 flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4" />
              The Verdict
              <ArrowRight className="w-4 h-4 rotate-180" />
            </h4>
            <p className="font-display text-xl md:text-2xl leading-relaxed text-navy-900 relative z-10">
              "{data.verdict}"
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ValueVsShowdown;
