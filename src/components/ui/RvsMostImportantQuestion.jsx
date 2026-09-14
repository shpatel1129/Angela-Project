import React from 'react';
import FadeIn from './FadeIn';
import { MessageCircle } from 'lucide-react';

const RvsMostImportantQuestion = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 block mb-3">CHANGE YOUR PERSPECTIVE</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950">{data.title}</h2>
          <div className="w-12 h-1 bg-ts-gold mx-auto mt-5"></div>
        </FadeIn>

        {/* Question Transformation Block */}
        <FadeIn delay={0.1} className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Wrong Question */}
            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200/60 relative">
              <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-red-400 block mb-3">INSTEAD OF ASKING</span>
              <p className="font-display text-lg text-slate-400 line-through decoration-red-300/50 italic">"{data.wrongQuestion}"</p>
            </div>

            {/* Right Question */}
            <div className="bg-navy-950 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-ts-gold/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
              <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-ts-gold block mb-3 relative z-10">ASK THIS INSTEAD</span>
              <p className="font-display text-lg text-white font-bold italic relative z-10">"{data.rightQuestion}"</p>
            </div>
          </div>

          <FadeIn delay={0.15} className="text-center mt-6">
            <p className="font-serif text-base text-slate-600 leading-relaxed font-light italic">{data.insight}</p>
          </FadeIn>
        </FadeIn>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Examples */}
          <div className="lg:col-span-7 space-y-4">
            {data.examples?.map((example, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="bg-ice-50 rounded-2xl p-5 border border-slate-100 flex items-start gap-4 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                  <MessageCircle className="w-5 h-5 text-ts-gold flex-shrink-0 mt-1" />
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{example}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" className="h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 min-h-[300px] relative">
              {image && (
                <img src={image} alt="Luxury cruising destination" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <p className="font-display text-sm text-white leading-relaxed italic">
                  "Luxury travel should be personalized."
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RvsMostImportantQuestion;
