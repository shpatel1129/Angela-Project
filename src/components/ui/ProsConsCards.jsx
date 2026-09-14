import React from 'react';
import FadeIn from './FadeIn';
import { Check, Minus } from 'lucide-react';

const ProsConsCards = ({ title, bestFor, notBestFor, bottomNote, prosTitle, consTitle, type = 'pros-cons', bgClass = 'bg-white' }) => {
  if (!bestFor || !notBestFor) return null;

  const isCompare = type === 'compare';

  return (
    <section className={`w-full py-16 ${bgClass}`}>
      <div className="max-w-[1024px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Best For Card */}
          <FadeIn direction="right">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-navy-800 rounded-t-2xl"></div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-navy-900 mb-8 mt-2">{prosTitle || "Best For"}</h3>
              <ul className="space-y-5">
                {bestFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 font-sans text-slate-700">
                    <Check className="w-5 h-5 text-navy-700 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Not Best For Card / Right Card */}
          <FadeIn direction="left">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10 h-full relative overflow-hidden">
              <div className={`absolute top-0 left-0 right-0 h-1 ${isCompare ? 'bg-ts-gold' : 'bg-slate-300'} rounded-t-2xl`}></div>
              <h3 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-navy-900 mb-8 mt-2">{consTitle || "May Not Be Best For"}</h3>
              <ul className="space-y-5">
                {notBestFor.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-4 font-sans ${isCompare ? 'text-slate-700' : 'text-slate-500'}`}>
                    {isCompare ? (
                      <Check className="w-5 h-5 text-ts-gold flex-shrink-0 mt-0.5" />
                    ) : (
                      <Minus className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {bottomNote && (
          <FadeIn delay={0.2} className="mt-12 text-center max-w-2xl mx-auto">
            <p className="font-sans text-slate-400 italic text-sm">
              {bottomNote}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ProsConsCards;
