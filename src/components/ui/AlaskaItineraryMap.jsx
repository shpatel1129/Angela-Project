import React from 'react';
import FadeIn from './FadeIn';
import { ChevronRight, ArrowRight } from 'lucide-react';

const AlaskaItineraryMap = () => {
  return (
    <section className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-4 block">
              Route Planning
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-6">
              Vancouver to Seward vs. Seward to Vancouver
            </h2>
            <p className="font-sans text-slate-600 font-light leading-relaxed">
              One of the most critical decisions when booking a Silversea Alaska cruise is deciding which direction to sail. The route determines your land expansion possibilities.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Northbound */}
          <FadeIn className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-300">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2 block">
              NORTHBOUND ROUTE
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-6 flex items-center gap-2">
              Vancouver <ArrowRight size={20} className="text-gold-400" /> Seward
            </h3>
            
            <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
              A gradual progression from the beautiful city of Vancouver into increasingly dramatic glaciers and wilderness. Best for travelers who want to end their trip deep in Alaska's interior.
            </p>

            <ul className="space-y-3 mb-8 border-t border-slate-200/50 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Begin with a luxury pre-cruise stay in Vancouver to recover from travel.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Gradual northward sailing through the Inside Passage and coastal ports.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Ideal for adding an inland rail trip to Denali National Park after disembarkation.</span>
              </li>
            </ul>
          </FadeIn>

          {/* Southbound */}
          <FadeIn delay={0.2} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-300">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2 block">
              SOUTHBOUND ROUTE
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-navy-950 mb-6 flex items-center gap-2">
              Seward <ArrowRight size={20} className="text-gold-400" /> Vancouver
            </h3>

            <p className="font-sans text-slate-600 font-light leading-relaxed mb-6">
              Start with Alaska's interior wilderness and board your cruise as the relaxing second half of the journey. Best for travelers who prefer to complete active land tours before cruising.
            </p>

            <ul className="space-y-3 mb-8 border-t border-slate-200/50 pt-6">
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Explore Denali, Anchorage, and the Kenai Peninsula pre-cruise.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Transition into absolute butler-serviced luxury on board the ship.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <ChevronRight size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Finish your vacation in Vancouver, with convenient onward flights.</span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AlaskaItineraryMap;
