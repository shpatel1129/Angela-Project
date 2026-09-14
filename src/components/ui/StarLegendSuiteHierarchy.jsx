import React from 'react';
import FadeIn from './FadeIn';
import { Star, CheckCircle2 } from 'lucide-react';
import starLegendHero from '../../assets/Windstar Cruises/2025_WindStar_Deck_08_V0.webp';
import starLegendPool from '../../assets/Windstar Cruises/2025_WindStar_Deck_11_V0.webp';
import suitesImg from '../../assets/Windstar Cruises/20260115_Seeker_Infinity-Suite-638-2.webp';
import pageData from '../../pages/WindstarCruises/StarLegendShipGuide/data.json';

const StarLegendSuiteHierarchy = () => {
  return (
    <section className="w-full py-20 bg-ice-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
              156 All-Suite Sanctuaries
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-normal text-navy-950 mb-6">
              Star Legend Suite Categories & Deck Specs
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Every accommodation on Star Legend is a luxury ocean-facing suite starting at 277 square feet, featuring granite baths, walk-in closets, and residential yacht comfort.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {pageData.suiteHierarchy.map((suite, idx) => {
            const isEven = idx % 2 === 0;
            const suiteImage = idx % 3 === 0 ? suitesImg : idx % 3 === 1 ? starLegendPool : starLegendHero;
            return (
              <FadeIn key={suite.id} delay={0.1}>
                <div className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
                  <div className="md:w-1/2 relative min-h-[280px]">
                    <img
                      src={suiteImage}
                      alt={`Windstar Star Legend ${suite.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-gold-400/40">
                      {suite.deck} • {suite.size}
                    </div>
                  </div>

                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-gold-400 mb-2">
                        <Star className="w-4 h-4 fill-gold-400" />
                        <span className="text-xs uppercase tracking-wider font-semibold">Luxury Suite Category</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display text-navy-950 mb-4">
                        {suite.title}
                      </h3>

                      <ul className="space-y-2.5 mb-6 text-sm text-slate-600">
                        {suite.features.map((ft, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2.5">
                            <CheckCircle2 className="w-4 h-4 text-teal-accent shrink-0 mt-0.5" />
                            <span>{ft}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 bg-slate-50/50 p-4 rounded-lg">
                      <span className="text-xs font-semibold text-navy-900 uppercase block mb-1">Best For</span>
                      <p className="text-xs text-slate-600 italic">{suite.bestFor}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default StarLegendSuiteHierarchy;
