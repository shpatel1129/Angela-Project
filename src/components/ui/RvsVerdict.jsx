import React from 'react';
import FadeIn from './FadeIn';
import { Award } from 'lucide-react';

const RvsVerdict = ({ data }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6">

        <FadeIn className="text-center mb-12">
          <Award className="w-8 h-8 text-ts-gold mx-auto mb-4" />
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 block mb-3">FINAL VERDICT</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">{data.title}</h2>
          <div className="w-12 h-1 bg-ts-gold mx-auto mt-5"></div>
        </FadeIn>

        {/* Two Verdict Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Regent Verdict */}
          <FadeIn direction="right">
            <div className="bg-navy-950 text-white rounded-3xl p-8 h-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ts-gold/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 group-hover:bg-ts-gold/10 transition-colors duration-700"></div>
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] uppercase text-ts-gold block mb-4">CHOOSE REGENT IF</span>
              <p className="font-serif text-base text-slate-200 leading-relaxed font-light relative z-10">{data.regentVerdict}</p>
            </div>
          </FadeIn>

          {/* Silversea Verdict */}
          <FadeIn direction="left">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 h-full relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-50 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 group-hover:bg-sky-100 transition-colors duration-700"></div>
              <span className="font-sans text-[9px] font-bold tracking-[0.25em] uppercase text-slate-400 block mb-4">CHOOSE SILVERSEA IF</span>
              <p className="font-serif text-base text-slate-600 leading-relaxed font-light relative z-10">{data.silverseaVerdict}</p>
            </div>
          </FadeIn>
        </div>

        {/* Closing Statement */}
        <FadeIn delay={0.15} className="text-center">
          <div className="bg-ice-50 rounded-2xl p-6 border border-slate-100 max-w-2xl mx-auto">
            <p className="font-serif text-base text-slate-700 leading-relaxed font-light italic">{data.closing}</p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default RvsVerdict;
