import React from 'react';
import FadeIn from './FadeIn';
import { Target, Clock, CheckSquare, TrendingUp, Zap, Heart } from 'lucide-react';

const tipIcons = [Target, Clock, Heart, Zap, CheckSquare, TrendingUp];

const ButlerMaximizeValue = ({ data, image }) => {
  if (!data) return null;

  return (
    <section className="w-full py-20 lg:py-28 bg-ice-50/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
            {data?.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 leading-tight mb-6">
            {data?.heading}
          </h2>
          <div className="w-14 h-[2px] bg-gold-400 mx-auto mb-6" />
          <p className="font-sans text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {data?.description}
          </p>
        </FadeIn>

        {/* Strategy Tips — 3x2 grid */}
        {data?.tips && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {data.tips.map((tip, index) => {
              const Icon = tipIcons[index % tipIcons.length];
              return (
                <FadeIn key={index} delay={0.05 * index}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-200/60 hover:shadow-lg hover:border-gold-400/30 transition-all duration-400 h-full flex flex-col group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-display text-2xl text-navy-950/10">{tip?.number}</span>
                    </div>
                    <h3 className="font-display text-lg text-navy-950 mb-3">{tip?.title}</h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed flex-1">{tip?.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        )}

        {/* 7-Day Strategy Timeline */}
        {data?.weekStrategy && (
          <FadeIn delay={0.1}>
            <div className="mb-20">
              <h3 className="font-display text-2xl lg:text-3xl text-navy-950 text-center mb-10">
                {data.weekStrategy.title}
              </h3>
              {/* Desktop: Horizontal Timeline */}
              <div className="hidden lg:block relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-navy-950/20 via-gold-400/40 to-navy-950/20" />

                <div className="grid grid-cols-7 gap-3 relative z-10">
                  {data.weekStrategy.days.map((day, i) => (
                    <div key={i} className="flex flex-col items-center">
                      {/* Day Circle */}
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-sans text-xs font-bold shadow-lg mb-4 ${i === 4 ? 'bg-gold-500' : 'bg-navy-950'}`}>
                        {day?.day?.replace('Day ', 'D')}
                      </div>
                      <span className="font-display text-sm text-navy-950 mb-2 text-center">{day?.label}</span>
                      <div className="space-y-1">
                        {day?.tasks?.map((task, j) => (
                          <p key={j} className="font-sans text-[11px] text-slate-500 text-center leading-snug">
                            {task}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: Vertical Timeline */}
              <div className="lg:hidden space-y-4">
                {data.weekStrategy.days.map((day, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-sans text-xs font-bold flex-shrink-0 ${i === 4 ? 'bg-gold-500' : 'bg-navy-950'}`}>
                      {day?.day?.replace('Day ', 'D')}
                    </div>
                    <div>
                      <span className="font-display text-sm text-navy-950">{day?.label}</span>
                      <div className="mt-1 space-y-0.5">
                        {day?.tasks?.map((task, j) => (
                          <p key={j} className="font-sans text-xs text-slate-500">{task}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Stats Strip */}
        {data?.stats && (
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {data.stats.map((stat, i) => (
                <div key={i} className="bg-navy-950 rounded-xl p-6 text-center">
                  <span className="font-display text-3xl lg:text-4xl text-gold-400 block mb-1">{stat?.value}</span>
                  <span className="font-sans text-xs text-white/60 uppercase tracking-wider">{stat?.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* High-Value Uses */}
        {data?.valueTips && (
          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm">
              <h3 className="font-display text-xl text-navy-950 mb-6 text-center">
                {data.valueTips.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.valueTips.items?.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    <span className="font-sans text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default ButlerMaximizeValue;
