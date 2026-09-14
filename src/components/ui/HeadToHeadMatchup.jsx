import React from 'react';
import FadeIn from './FadeIn';

const HeadToHeadMatchup = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-12 md:py-16 bg-ice-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-ice-50 to-ice-100 opacity-60"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 mb-4">{data.title}</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </FadeIn>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-8 mb-10">
          {/* Brand 1 */}
          <FadeIn className="w-full md:w-5/12" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 border-t-4 border-gold-500 p-8 h-full transform transition-transform hover:-translate-y-1">
              <h3 className="font-display text-2xl text-navy-900 text-center mb-6">{data.brand1.name}</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-ice-100 pb-3">
                  <span className="font-sans text-sm text-navy-600 uppercase tracking-wider font-semibold">Style</span>
                  <span className="font-sans text-navy-900 font-medium text-right">{data.brand1.style}</span>
                </li>
                <li className="flex justify-between items-center border-b border-ice-100 pb-3">
                  <span className="font-sans text-sm text-navy-600 uppercase tracking-wider font-semibold">Cabin</span>
                  <span className="font-sans text-navy-900 font-medium text-right">{data.brand1.cabin}</span>
                </li>
                <li className="flex justify-between items-center border-b border-ice-100 pb-3">
                  <span className="font-sans text-sm text-navy-600 uppercase tracking-wider font-semibold">Excursions</span>
                  <span className="font-sans text-navy-900 font-medium text-right">{data.brand1.excursions}</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span className="font-sans text-sm text-navy-600 uppercase tracking-wider font-semibold">Vibe</span>
                  <span className="font-sans text-navy-900 font-medium text-right">{data.brand1.vibe}</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* VS Badge */}
          <FadeIn className="w-full md:w-2/12 flex justify-center py-4 md:py-0" delay={0.2}>
            <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center shadow-lg shadow-navy-900/20 border-4 border-white z-10 relative self-center">
              <span className="font-display italic font-bold text-xl text-gold-400">VS</span>
            </div>
          </FadeIn>

          {/* Brand 2 */}
          <FadeIn className="w-full md:w-5/12" delay={0.3}>
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 border-t-4 border-navy-700 p-8 h-full transform transition-transform hover:-translate-y-1">
              <h3 className="font-display text-2xl text-navy-900 text-center mb-6">{data.brand2.name}</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-ice-100 pb-3">
                  <span className="font-sans text-sm text-navy-600 uppercase tracking-wider font-semibold">Style</span>
                  <span className="font-sans text-navy-900 font-medium text-right">{data.brand2.style}</span>
                </li>
                <li className="flex justify-between items-center border-b border-ice-100 pb-3">
                  <span className="font-sans text-sm text-navy-600 uppercase tracking-wider font-semibold">Cabin</span>
                  <span className="font-sans text-navy-900 font-medium text-right">{data.brand2.cabin}</span>
                </li>
                <li className="flex justify-between items-center border-b border-ice-100 pb-3">
                  <span className="font-sans text-sm text-navy-600 uppercase tracking-wider font-semibold">Excursions</span>
                  <span className="font-sans text-navy-900 font-medium text-right">{data.brand2.excursions}</span>
                </li>
                <li className="flex justify-between items-center pt-1">
                  <span className="font-sans text-sm text-navy-600 uppercase tracking-wider font-semibold">Vibe</span>
                  <span className="font-sans text-navy-900 font-medium text-right">{data.brand2.vibe}</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="bg-navy-950 text-white rounded-xl p-8 max-w-4xl mx-auto text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-ice-500/10 rounded-full blur-2xl -ml-16 -mb-16"></div>
            
            <h4 className="font-sans text-gold-400 uppercase tracking-widest text-sm font-bold mb-4 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              The Verdict
            </h4>
            <p className="font-display text-xl md:text-2xl leading-relaxed text-ice-50">
              "{data.verdict}"
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default HeadToHeadMatchup;
