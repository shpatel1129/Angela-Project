import React from 'react';
import FadeIn from './FadeIn';
import { ArrowRight } from 'lucide-react';

const TheTravelerDilemma = ({ title, subtitle, priorities, image }) => {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* ─── TOP EDITORIAL HEADER STRIP ─── */}
      <div className="bg-navy-950 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-5">
              <span className="w-8 h-px bg-gold-400"></span>
              The Travel Style Match
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display text-white leading-[1.1] max-w-xl">
              {title}
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-300 max-w-md leading-relaxed md:text-right">
            {subtitle}
          </p>
        </div>
      </div>

      {/* ─── MAIN CONTENT: ALTERNATING EDITORIAL ROWS ─── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-0">
        {priorities.map((priority, idx) => {
          const isEven = idx % 2 === 0;
          const num = String(idx + 1).padStart(2, '0');
          return (
            <FadeIn key={idx} delay={idx * 60} direction="up">
              <div className={`group flex flex-col md:flex-row items-stretch border-b border-slate-100 last:border-b-0 transition-colors duration-300 hover:bg-slate-50 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                {/* Number + Statement Column */}
                <div className="md:w-5/12 flex items-center gap-6 py-8 md:py-10 px-0 md:px-8">
                  <span className="text-5xl md:text-6xl font-display text-slate-100 group-hover:text-gold-400/30 transition-colors duration-300 leading-none shrink-0 select-none">
                    {num}
                  </span>
                  <div>
                    <p className="text-xl md:text-2xl font-display text-navy-950 leading-snug group-hover:text-navy-800 transition-colors">
                      "{priority.statement}"
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:flex items-stretch py-6">
                  <div className="w-px bg-slate-200 group-hover:bg-gold-400/40 transition-colors duration-300"></div>
                </div>

                {/* Description Column */}
                <div className="md:w-7/12 flex items-center py-6 md:py-10 px-0 md:px-10">
                  <div className="flex items-start gap-5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:text-navy-950 transition-colors duration-300" />
                    </div>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {priority.description}
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* ─── BOTTOM VERDICT BANNER ─── */}
      <FadeIn direction="up" delay={400}>
        <div className="relative overflow-hidden bg-navy-950 mt-0">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="block text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-3">
                The Verdict
              </span>
              <p className="text-2xl md:text-3xl font-display text-white max-w-2xl">
                If these are your priorities, Windstar's small-ship philosophy will feel{' '}
                <em className="text-gold-400 not-italic">remarkably familiar</em>
                —and profoundly better.
              </p>
            </div>
            <div className="shrink-0 w-px h-20 bg-white/10 hidden md:block"></div>
            <div className="shrink-0">
              <a
                href="#contact-advisor"
                className="inline-flex items-center gap-3 bg-gold-400 text-navy-950 font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-gold-300 transition-colors duration-300 shadow-lg shadow-gold-400/20"
              >
                <span>Speak to an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

    </section>
  );
};

export default TheTravelerDilemma;
