import React from 'react';
import FadeIn from './FadeIn';
import { Sailboat, Building2, ArrowRight } from 'lucide-react';

const DualPhilosophyShowcase = ({ data, imageSailing, imageAllSuite }) => {
  if (!data) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-ice-50 rounded-full blur-[150px] opacity-40"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-navy-500 font-bold mb-4">Philosophy Comparison</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 mb-4">{data.title}</h2>
            {data.subtitle && <p className="font-sans text-lg text-navy-600 max-w-2xl mx-auto">{data.subtitle}</p>}
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-6 rounded-full"></div>
          </FadeIn>
        </div>

        {/* Two Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Sailing Yacht Side */}
          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl overflow-hidden shadow-xl border border-ice-100 group bg-white">
              {/* Image */}
              {imageSailing && (
                <div className="relative h-72 overflow-hidden">
                  <img src={imageSailing} alt="Sailing yacht experience" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Sailboat className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-white">{data.sailing.label}</h3>
                      <p className="font-sans text-xs text-gold-300 uppercase tracking-widest font-semibold">{data.sailing.philosophy}</p>
                    </div>
                  </div>
                </div>
              )}
              {/* Content */}
              <div className="p-8 lg:p-10">
                {!imageSailing && (
                  <div className="flex items-center gap-3 mb-6">
                    <Sailboat className="w-6 h-6 text-navy-800" />
                    <h3 className="font-display text-2xl text-navy-900">{data.sailing.label}</h3>
                  </div>
                )}
                <ul className="space-y-4">
                  {data.sailing.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <span className="font-sans text-navy-700 text-base">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-ice-100">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-ice-50 rounded-full">
                    <span className="font-sans text-sm text-navy-700 font-medium">Focus: The Journey</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* All-Suite Yacht Side */}
          <FadeIn delay={0.2}>
            <div className="h-full rounded-3xl overflow-hidden shadow-xl border border-ice-100 group bg-white">
              {/* Image */}
              {imageAllSuite && (
                <div className="relative h-72 overflow-hidden">
                  <img src={imageAllSuite} alt="All-suite yacht luxury" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-white">{data.allSuite.label}</h3>
                      <p className="font-sans text-xs text-gold-300 uppercase tracking-widest font-semibold">{data.allSuite.philosophy}</p>
                    </div>
                  </div>
                </div>
              )}
              {/* Content */}
              <div className="p-8 lg:p-10">
                {!imageAllSuite && (
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-6 h-6 text-navy-800" />
                    <h3 className="font-display text-2xl text-navy-900">{data.allSuite.label}</h3>
                  </div>
                )}
                <ul className="space-y-4">
                  {data.allSuite.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-navy-800 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <span className="font-sans text-navy-700 text-base">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-ice-100">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-950 rounded-full">
                    <span className="font-sans text-sm text-gold-400 font-medium">Focus: Luxury Living</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Verdict */}
        {data.verdict && (
          <FadeIn delay={0.3}>
            <div className="bg-ice-50 rounded-2xl p-8 max-w-4xl mx-auto text-center border border-ice-100">
              <div className="flex items-center justify-center gap-2 mb-4">
                <ArrowRight className="w-4 h-4 text-gold-500" />
                <span className="font-sans text-xs uppercase tracking-widest text-navy-500 font-bold">The Takeaway</span>
                <ArrowRight className="w-4 h-4 text-gold-500 rotate-180" />
              </div>
              <p className="font-display text-xl md:text-2xl text-navy-900 leading-relaxed">{data.verdict}</p>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default DualPhilosophyShowcase;
