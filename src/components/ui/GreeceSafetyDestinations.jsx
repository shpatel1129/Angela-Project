import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { MapPin, AlertCircle, Shield, Check, Compass, ChevronRight } from 'lucide-react';

const GreeceSafetyDestinations = ({ destinationsData, images = [] }) => {
  const { 
    title = "Island-by-Island Safety Breakdown", 
    subtitle = "Safety profiles, unique geography, and transport strategies across major Greek destinations.",
    items = [],
    comparisonTable = { headers: [], rows: [] }
  } = destinationsData || {};

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="destinations-safety" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-4 block">
            DESTINATION-SPECIFIC LOGISTICS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
            {title}
          </h2>
          <p className="font-sans text-slate-600 font-light leading-relaxed text-lg">
            {subtitle}
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {items.map((dest, idx) => {
            const imageSrc = images[idx] || images[0];
            return (
              <FadeIn key={idx}>
                <div className={`bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full ${idx === items.length - 1 && items.length % 3 !== 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  
                  {/* Image & Badge */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={imageSrc} 
                      alt={dest.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-sans font-medium uppercase tracking-wider bg-white/90 backdrop-blur-sm text-navy-950 shadow-sm">
                        {dest.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-2xl text-white font-normal drop-shadow-sm">
                        {dest.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1 text-[#c9a15c] text-xs font-sans font-semibold">
                        <Shield size={14} />
                        <span>{dest.safetyRating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    
                    {/* Primary Risks */}
                    <div>
                      <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Primary Safety Considerations
                      </span>
                      <ul className="space-y-1.5">
                        {dest.mainRisks?.map((risk, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs font-sans text-slate-600 font-light">
                            <AlertCircle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Luxury Expert Advice */}
                    <div className="p-4 rounded-2xl bg-ice-50 border border-border-light mt-auto">
                      <div className="flex items-center gap-2 text-navy-950 font-sans text-xs font-semibold uppercase tracking-wider mb-1">
                        <Compass size={14} className="text-[#c9a15c]" />
                        <span>Luxury Travel Strategy</span>
                      </div>
                      <p className="text-xs font-sans text-slate-600 font-light leading-relaxed">
                        {dest.luxuryAdvice}
                      </p>
                    </div>

                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Athens vs. Greek Islands Comparison Table */}
        {comparisonTable?.rows?.length > 0 && (
          <FadeIn>
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#c9a15c] uppercase mb-2 block">
                  SIDE-BY-SIDE MATRIX
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-light text-navy-950">
                  Athens vs. Greek Islands: Key Safety Differences
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-sans text-xs uppercase tracking-wider">
                      {comparisonTable.headers?.map((header, hIdx) => (
                        <th key={hIdx} className={`pb-4 font-semibold ${hIdx === 0 ? 'w-1/3 text-left' : 'w-1/3 text-left'}`}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/60 font-sans text-sm text-slate-700">
                    {comparisonTable.rows?.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/60 transition-colors">
                        <td className="py-4 font-medium text-navy-950">{row[0]}</td>
                        <td className="py-4 text-slate-600 font-light pr-4">{row[1]}</td>
                        <td className="py-4 text-slate-600 font-light">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default GreeceSafetyDestinations;
