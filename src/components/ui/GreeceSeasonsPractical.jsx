import React, { useState } from 'react';
import { Leaf, Sun, Wine, CreditCard, Utensils, ShieldCheck, CheckCircle2 } from 'lucide-react';

/**
 * GreeceSeasonsPractical
 * Renders Part 5 (Seasons), Part 6 (Money), Part 7 (Culture/Dining), and Part 8 (Practical).
 * Layout:
 * - Top: 3-column seasonal comparison panel.
 * - Bottom: 3 styled cards grouping the practical guidelines.
 */
const GreeceSeasonsPractical = ({ seasons = [], money = {}, culture = {}, practical = {} }) => {
  const [activeSeason, setActiveSeason] = useState(0);

  const seasonIcons = [
    <Leaf size={24} strokeWidth={1.5} />,
    <Sun size={24} strokeWidth={1.5} />,
    <Wine size={24} strokeWidth={1.5} />
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 space-y-24">
        
        {/* 1. Seasons Section */}
        <div>
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
              SEASONAL STRATEGIES
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
              When to Visit Greece
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Choosing the right month changes everything from weather and local ferry schedules to hotel availability and local service levels.
            </p>
          </div>

          {/* 3 Seasons Interactive Accordion */}
          <div className="flex flex-col md:flex-row h-auto md:h-[420px] gap-4">
            {seasons.map((season, idx) => {
              const isActive = activeSeason === idx;
              const Icon = seasonIcons[idx] || <Sun size={24} strokeWidth={1.5} />;
              
              return (
                <div
                  key={idx}
                  onClick={() => setActiveSeason(idx)}
                  className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col p-6 md:p-8
                    ${isActive ? 'md:flex-[3] bg-navy-950 text-white shadow-2xl' : 'md:flex-[1] bg-slate-50 border border-slate-200 hover:bg-slate-100 justify-center items-center text-center'}`}
                >
                  {/* Subtle background decoration when active */}
                  <div className={`absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#c9a15c]/10 blur-3xl transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                  <div className={`relative z-10 flex flex-col h-full ${isActive ? 'justify-between w-full' : 'justify-center items-center'}`}>
                    {/* Top part: Icon and Status */}
                    <div className={`flex w-full transition-all duration-500 ${isActive ? 'justify-between items-start mb-8 md:mb-0' : 'justify-center mb-4'}`}>
                      <div className={`p-4 rounded-full transition-colors duration-500 ${isActive ? 'bg-[#c9a15c]/20 text-[#c9a15c]' : 'bg-white text-slate-400 shadow-sm border border-slate-100'}`}>
                        {Icon}
                      </div>
                      
                      <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#c9a15c]/20 text-[#c9a15c] whitespace-nowrap block">
                          {season.status}
                        </span>
                      </div>
                    </div>

                    {/* Bottom part: Content */}
                    <div className={`w-full transition-all duration-500 ${isActive ? 'text-left' : 'text-center'}`}>
                      <h3 className={`font-display font-light transition-all duration-500 ${isActive ? 'text-2xl md:text-3xl text-white mb-4' : 'text-xl md:text-2xl text-navy-950'}`}>
                        {isActive ? season.period : season.period.split(' ')[0]}
                      </h3>
                      
                      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="font-sans text-sm md:text-base leading-relaxed text-white/80">
                            {season.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Practical Advisor Guidelines (3-Column Panels) */}
        <div>
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-blue-600 uppercase mb-4 block">
              ADVISOR INTELLIGENCE
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy-950 mb-6">
              Practical Greece Advice
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              Essential tips on money, local dining culture, and administrative guidelines curated by our travel advisors.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* 1. Money & Tipping Row */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col md:flex-row gap-8 md:gap-16 group hover:shadow-[0_8px_40px_rgb(0,0,0,0.04)] transition-all duration-500">
              
              {/* Left Column: Icon & Title */}
              <div className="md:w-1/3 flex flex-col items-start border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 md:pr-8">
                <div className="w-14 h-14 rounded-full bg-[#c9a15c]/10 text-[#c9a15c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <CreditCard size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">
                  Money & Tipping
                </h4>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  Financial strategies and tipping etiquette for seamless travel across the Greek islands.
                </p>
              </div>

              {/* Right Column: Structured Data Grid */}
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Currency */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-3 block">Currency</span>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="font-display text-3xl text-navy-950">{money.currency.primary}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-500">{money.currency.note}</p>
                </div>

                {/* Tipping */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-3 block">Tipping Standards</span>
                  <div className="space-y-3">
                    {money.tipping.map((tip, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-slate-200 last:border-0 pb-2 last:pb-0">
                        <span className="font-sans text-sm text-slate-600">{tip.context}</span>
                        <span className="font-sans text-sm font-medium text-navy-950">{tip.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cards */}
                <div className="bg-slate-50 rounded-xl p-6 sm:col-span-2 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                     <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-3 block">Widely Accepted</span>
                     <ul className="space-y-3">
                       {money.cards.accepted.map((item, i) => (
                         <li key={i} className="flex items-center gap-3 font-sans text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#c9a15c] flex-shrink-0" /> {item}
                         </li>
                       ))}
                     </ul>
                  </div>
                  <div className="hidden md:block w-px bg-slate-200"></div>
                  <div className="flex-1">
                     <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-3 block">Cash Recommended</span>
                     <ul className="space-y-3">
                       {money.cards.cashNeeded.map((item, i) => (
                         <li key={i} className="flex items-center gap-3 font-sans text-sm text-slate-700">
                           <CheckCircle2 size={16} className="text-[#c9a15c] flex-shrink-0" /> {item}
                         </li>
                       ))}
                     </ul>
                  </div>
                </div>

                {/* VAT */}
                <div className="sm:col-span-2 pt-2">
                  <p className="font-sans text-xs text-slate-400 italic text-center">
                    * {money.vat}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Gastronomy & Culture Row */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col md:flex-row gap-8 md:gap-16 group hover:shadow-[0_8px_40px_rgb(0,0,0,0.04)] transition-all duration-500">
              
              <div className="md:w-1/3 flex flex-col items-start border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 md:pr-8">
                <div className="w-14 h-14 rounded-full bg-[#c9a15c]/10 text-[#c9a15c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Utensils size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">
                  Gastronomy & Culture
                </h4>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  Navigating the rich culinary traditions and sustainable practices of local communities.
                </p>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Dining Style */}
                <div className="bg-slate-50 rounded-xl p-6 sm:col-span-2">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-4 block">Signature Diet</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {culture.diningStyle.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#c9a15c] flex-shrink-0"></div>
                         <span className="font-sans text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Souvenirs */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-4 block">Authentic Souvenirs</span>
                  <ul className="space-y-4">
                    {culture.souvenirs.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-sans text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-[#c9a15c] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Sustainability */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-4 block">Sustainable Travel</span>
                  <ul className="space-y-4">
                    {culture.sustainability.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-sans text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-[#c9a15c] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* 3. Planning Details Row */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col md:flex-row gap-8 md:gap-16 group hover:shadow-[0_8px_40px_rgb(0,0,0,0.04)] transition-all duration-500">
              
              <div className="md:w-1/3 flex flex-col items-start border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 md:pr-8">
                <div className="w-14 h-14 rounded-full bg-[#c9a15c]/10 text-[#c9a15c] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck size={28} strokeWidth={1.5} />
                </div>
                <h4 className="font-display text-2xl md:text-3xl text-navy-950 mb-4">
                  Planning Details
                </h4>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  Crucial logistical requirements and administrative preparations prior to departure.
                </p>
              </div>

              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Visa */}
                <div className="bg-slate-50 rounded-xl p-6 sm:col-span-2 flex flex-col sm:flex-row gap-6 sm:items-center">
                  <div className="flex-1">
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-2 block">Visa Requirements</span>
                    <span className="font-display text-2xl text-navy-950">{practical.visa.requirement}</span>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
                  <div className="flex-1">
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 block">Exemptions</span>
                    <span className="font-sans text-sm md:text-base text-slate-700">{practical.visa.exemptions}</span>
                  </div>
                </div>

                {/* Packing */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-4 block">Packing Essentials</span>
                  <ul className="space-y-4">
                    {practical.packing.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-sans text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-[#c9a15c] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Insurance */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#c9a15c] mb-4 block">Insurance Coverage</span>
                  <ul className="space-y-4">
                    {practical.insurance.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 font-sans text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-[#c9a15c] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GreeceSeasonsPractical;
