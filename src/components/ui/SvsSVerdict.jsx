import React from 'react';
import FadeIn from './FadeIn';
import { Award } from 'lucide-react';

const SvsSVerdict = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6">

        <FadeIn className="text-center mb-12">
          <Award className="w-8 h-8 text-ts-gold mx-auto mb-4" />
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 block mb-3">FINAL VERDICT</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">{data.title}</h2>
          <div className="w-12 h-1 bg-ts-gold mx-auto mt-5"></div>
          {data.description && (
             <p className="mt-6 font-serif text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
               {data.description}
             </p>
          )}
        </FadeIn>

      </div>
    </section>
  );
};

export default SvsSVerdict;
