import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Check, X, Star, Minus, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const renderCellContent = (text, isBenchmark = false) => {
  if (typeof text !== 'string') return text;
  
  const val = text.trim();
  
  if (val.toLowerCase() === 'yes') {
    return (
      <span className={`inline-flex items-center gap-1.5 font-medium ${isBenchmark ? 'text-gold-400' : 'text-emerald-400/90'}`}>
        <Check size={14} /> Yes
      </span>
    );
  }
  if (val.toLowerCase() === 'no') {
    return (
      <span className="inline-flex items-center gap-1.5 text-ice-300 font-medium">
        <X size={14} /> No
      </span>
    );
  }
  if (['limited', 'mostly', 'rare', 'moderate'].includes(val.toLowerCase())) {
    return (
      <span className="inline-flex items-center gap-1.5 text-ice-200 font-medium capitalize">
        <Minus size={14} /> {val}
      </span>
    );
  }
  
  if (val.includes('Star')) {
    const count = parseInt(val);
    return (
      <span className="inline-flex items-center gap-2">
        <span className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map(s => (
            <Star 
              key={s} 
              size={12} 
              className={s <= count ? (isBenchmark ? 'fill-gold-400 text-gold-400' : 'fill-ice-300 text-ice-300') : 'fill-navy-800 text-navy-800'} 
            />
          ))}
        </span>
        {count === 5 && isBenchmark && <span className="text-[9px] uppercase tracking-widest text-gold-400 ml-1">Exceptional</span>}
      </span>
    );
  }
  
  // Standout superlatives
  if (['exceptional', 'outstanding', 'very high', 'excellent'].includes(val.toLowerCase())) {
     return (
       <span className={isBenchmark ? 'text-gold-400 font-medium' : 'text-ice-200'}>
         {val}
       </span>
     );
  }

  // Default text / numbers
  return <span className={isBenchmark ? 'text-gold-400' : 'text-ice-200'}>{val}</span>;
};

const ExpandableFeatureRow = ({ feature, benchmarkValue, competitorsData, competitorNames, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/[0.04]">
      {/* Default Collapsed View */}
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 group transition-colors text-left"
      >
        <div className="flex items-center gap-3 md:gap-6 flex-1 min-w-0 pr-4">
          <span className="font-sans text-xs md:text-sm tracking-[0.15em] uppercase text-ice-300 group-hover:text-white transition-colors whitespace-nowrap">
            {feature}
          </span>
          <div className="hidden sm:block flex-1 border-b border-dotted border-white/10 group-hover:border-white/30 transition-colors mx-2 relative top-[2px]"></div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8 shrink-0">
          <span className="font-display text-base md:text-lg text-gold-400 text-right">
            {renderCellContent(benchmarkValue, true)}
          </span>
          <div className={`text-ice-300 transition-all duration-300 ${isOpen ? 'text-gold-400 rotate-180' : 'group-hover:text-white'}`}>
            <ChevronDown size={18} />
          </div>
        </div>
      </button>

      {/* Expanded Ribbon */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'max-h-[800px] opacity-100 mb-6 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-900/20 rounded-xl p-5 md:p-8 flex flex-wrap gap-x-12 gap-y-8 border border-white/[0.02]">
          {competitorsData.map((val, idx) => (
            <div key={idx} className="flex flex-col gap-2 min-w-[120px]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-ice-300 font-medium">
                {competitorNames[idx]}
              </span>
              <span className="font-sans text-sm text-ice-200">
                {renderCellContent(val)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LuxuryComparisonAccordion = ({ title, subtitle, headers, rows, image }) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  
  // headers: ["Feature", "Windstar", "Seabourn", "Silversea", ...]
  const benchmarkName = headers[1];
  const competitorNames = headers.slice(2);

  const toggleRow = (idx) => {
    setExpandedRowIndex(expandedRowIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center justify-center gap-2 mb-6">
              <Sparkles className="text-ice-300/50" size={14} />
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-ice-300 font-medium">The Comparison</p>
              <Sparkles className="text-ice-300/50" size={14} />
            </div>
            <h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight leading-tight"
              style={{ color: 'rgb(201, 161, 92)' }}
            >
              {title}
            </h2>
            {subtitle && <p className="font-sans text-lg text-ice-200/60 leading-relaxed max-w-2xl mx-auto">{subtitle}</p>}
          </FadeIn>
        </div>

        {/* Accordion List */}
        <FadeIn delay={0.2}>
          <div className="border-t border-white/[0.04]">
            {/* Header row just for context */}
            <div className="flex justify-between items-center py-4 px-2 mb-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ice-300 font-medium">Feature Overview</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ice-300 font-medium pr-12">{benchmarkName}</span>
            </div>

            {rows.map((row, rIdx) => {
              const featureName = row[0];
              const benchmarkValue = row[1];
              const competitorsData = row.slice(2);
              
              return (
                <ExpandableFeatureRow 
                  key={rIdx}
                  feature={featureName}
                  benchmarkValue={benchmarkValue}
                  competitorsData={competitorsData}
                  competitorNames={competitorNames}
                  isOpen={expandedRowIndex === rIdx}
                  onToggle={() => toggleRow(rIdx)}
                />
              );
            })}
          </div>
        </FadeIn>

        {/* Optional elegant image placement below */}
        {image && (
          <FadeIn delay={0.4} className="mt-20">
            <div className="relative rounded-2xl overflow-hidden h-[400px] border border-white/5 opacity-80 hover:opacity-100 transition-opacity duration-700">
              <img src={image} alt="Luxury cruise details" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-navy-950/20"></div>
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  );
};

export default LuxuryComparisonAccordion;
