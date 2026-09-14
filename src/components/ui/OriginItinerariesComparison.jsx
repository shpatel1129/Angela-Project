import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Compass, CheckCircle2, ChevronRight, HelpCircle, Award } from 'lucide-react';

const OriginItinerariesComparison = ({ title, intro, loops, comparisons, checklist, itineraryImage }) => {
  const [activeCheckItems, setActiveCheckItems] = useState({});

  const toggleCheck = (idx) => {
    setActiveCheckItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="itineraries">
      <div className="absolute top-10 left-0 w-96 h-96 bg-sky-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-5">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase bg-navy-950/5 px-5 py-2 rounded-full border border-slate-200">
            Itinerary Selection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-ts-gold"></div>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 50:50 Split: North vs South Itinerary details + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left Column: Loops Details */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-display text-2xl text-navy-950 font-bold flex items-center gap-3">
              <Compass className="w-6 h-6 text-ts-gold" />
              Galápagos Loop Strategies
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {loops && loops.map((loop, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 space-y-4 hover:shadow-sm transition-all">
                  <span className="text-[9px] font-bold tracking-widest text-ts-gold uppercase bg-white px-3 py-1 rounded-full border border-slate-100 inline-block">
                    {loop.tag || "Loop"}
                  </span>
                  <h4 className="font-display text-lg text-navy-950 font-bold">{loop.name}</h4>
                  <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {loop.description}
                  </p>
                  <div className="pt-4 border-t border-slate-200/50 space-y-2">
                    <span className="text-[10px] font-bold text-navy-950 uppercase tracking-wider block">Key Species:</span>
                    <p className="font-sans text-xs text-slate-500 font-semibold">{loop.species}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Image representation */}
          {itineraryImage && (
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 bg-slate-100 rounded-[32px] -z-10"></div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-200/50">
                <MasterImage src={itineraryImage} alt="Galápagos Itinerary Views" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

        </div>

        {/* Silver Origin Comparison Table */}
        <div className="space-y-6 mb-24">
          <div className="space-y-2">
            <h3 className="font-display text-2xl text-navy-950 font-bold flex items-center gap-3">
              <Award className="w-6 h-6 text-ts-gold" />
              Origin vs. Other Luxury Galápagos Cruises
            </h3>
            <p className="font-sans text-slate-500 text-xs sm:text-sm">
              How Silver Origin compares side-by-side with other luxury small-ship operators:
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 shadow-lg rounded-[32px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans text-sm">
                <thead>
                  <tr className="bg-navy-950 text-white font-display text-xs font-bold uppercase tracking-wider">
                    <th className="p-5">Yacht/Ship</th>
                    <th className="p-5">Guest Count</th>
                    <th className="p-5">Style / Focus</th>
                    <th className="p-5">Private Butler</th>
                    <th className="p-5">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {comparisons && comparisons.map((comp, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-5 font-bold text-navy-950">{comp.name}</td>
                      <td className="p-5 font-medium">{comp.guests}</td>
                      <td className="p-5 text-xs sm:text-sm">{comp.style}</td>
                      <td className="p-5">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          comp.butler === "Yes" ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {comp.butler}
                        </span>
                      </td>
                      <td className="p-5 text-xs text-navy-950 font-bold italic">{comp.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Planning Checklist Grid */}
        <div className="bg-navy-950 text-white rounded-[40px] p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-ts-gold/5 rounded-full filter blur-[100px]"></div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-2">
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-ts-gold" />
                Silver Origin Planning Checklist
              </h3>
              <p className="font-sans text-slate-400 text-xs sm:text-sm">
                Interact with the cards below to track your booking preparation:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
              {checklist && checklist.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`text-left rounded-2xl p-5 border transition-all duration-300 flex items-start gap-4 ${
                    activeCheckItems[idx]
                      ? 'bg-white/10 border-ts-gold shadow-md'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    activeCheckItems[idx]
                      ? 'bg-ts-gold border-ts-gold text-navy-950'
                      : 'border-white/30 text-transparent'
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200 leading-normal">
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OriginItinerariesComparison;
