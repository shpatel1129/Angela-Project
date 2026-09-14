import React from 'react';
import FadeIn from './FadeIn';
import { Ship, Wine, UtensilsCrossed, Star, Compass, Heart, Check, MapPin } from 'lucide-react';
import MasterImage from './MasterImage';

const iconPool = [Ship, Wine, UtensilsCrossed, Star, Compass, Heart, Check, MapPin];

const InclusionsList = ({ title, inclusions, expertNote, image }) => {
  if (!inclusions || inclusions.length === 0) return null;

  return (
    <section className="w-full py-16 bg-ice-50">
      <div className="max-w-[1280px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950">{title}</h2>
          <div className="w-12 h-0.5 bg-navy-800 mx-auto mt-6"></div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Image & Expert Note */}
          <FadeIn direction="right" className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="rounded-2xl overflow-hidden h-80 bg-slate-200 relative shadow-sm">
              {image ? (
                <MasterImage src={image} alt="Luxury Dining" className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-sans tracking-widest text-sm uppercase">
                  Luxury Dining Image
                </div>
              )}
            </div>
            
            {expertNote && (
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-5 h-5 text-navy-700" />
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-navy-800">Luxury Inclusions</span>
                </div>
                <p className="font-display text-xl text-navy-900 leading-relaxed mb-6">
                  {expertNote.split('. ')[0]}.
                </p>
                <div className="w-full h-px bg-slate-100 mb-6"></div>
                <p className="font-sans text-slate-500 leading-relaxed text-sm">
                  {expertNote.split('. ').slice(1).join('. ')}
                </p>
              </div>
            )}
          </FadeIn>

          {/* Right Column: Inclusions List */}
          <FadeIn direction="left" className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
            {inclusions.map((item, idx) => {
              const IconComp = iconPool[idx % iconPool.length];
              return (
                <div key={idx} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-ice-50 text-navy-700 flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  {typeof item === 'string' ? (
                    <span className="font-sans text-slate-700 font-medium">{item}</span>
                  ) : (
                    <div className="flex flex-col">
                      <span className="font-sans text-slate-700 font-bold">{item.title}</span>
                      {item.description && <span className="font-sans text-slate-500 text-sm mt-1">{item.description}</span>}
                    </div>
                  )}
                </div>
              );
            })}
            
            <p className="font-sans text-sm text-slate-400 mt-4 italic text-center lg:text-left">
              * Certain premium experiences may require additional reservations or costs.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default InclusionsList;
