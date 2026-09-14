import React from 'react';
import MasterImage from './MasterImage';

/**
 * GreeceUltimateOverview
 * Premium editorial and visual overview for the Greece Pillar Page.
 */
const GreeceUltimateOverview = ({ image }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-800 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              The Art of Intentional Greek Travel
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-navy-950 leading-[1.15] tracking-tight">
              Why Greece Is One of Europe's <span className="italic font-serif text-blue-900">Greatest Luxury Escapes</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-700 font-light leading-relaxed">
              Few destinations on Earth combine 3,000 years of living history, turquoise Mediterranean seas, cliffside whitewashed architecture, and world-class culinary heritage as seamlessly as Greece.
            </p>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-blue-100/80 shadow-sm space-y-4">
              <h3 className="font-display text-lg font-semibold text-navy-950">
                A Seamless Day in the Greek Islands:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>Private Acropolis or ruins tour</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>Secluded seaside taverna lunch</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>Private catamaran afternoon sail</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>Caldera sunset wine tasting</span>
                </div>
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              For luxury travelers, Greece is not about checking off as many ferry stops as possible. It is about slowing down, eliminating transit fatigue with private transfers and yachting access, and savoring the authentic rhythm of the Mediterranean.
            </p>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/10 via-amber-500/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-[4/5]">
                <MasterImage
                  src={image}
                  alt="Greece Luxury Travel Overview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg text-slate-800">
                  <p className="font-serif text-sm italic text-navy-950 font-medium">
                    "True luxury in Greece is not merely a five-star hotel room — it is waking up to an Aegean breeze, having a private guide unlock ancient secrets, and never waiting in a crowded ferry line."
                  </p>
                  <p className="text-xs font-sans font-semibold text-blue-800 uppercase tracking-widest mt-2">
                    — Angela Hughes, Luxury Travel Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreeceUltimateOverview;
