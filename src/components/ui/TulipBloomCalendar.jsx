import React, { useState } from 'react';
import FadeIn from './FadeIn';

const TulipBloomCalendar = ({ title, subtitle, items = [] }) => {
  const [active, setActive] = useState(0);

  const bloomIntensity = [30, 55, 95, 90, 60];
  const bloomColors = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-rose-500',
    'bg-rose-600',
    'bg-purple-400',
  ];
  const bloomLabels = ['Early', 'Developing', 'Peak', 'Peak+', 'Late'];

  const icons = [
    <svg key="1" className="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v18M3 12h18M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34" /></svg>,
    <svg key="2" className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9 9 0 009-9H3a9 9 0 009 9zM12 3v9" /></svg>,
    <svg key="3" className="w-7 h-7 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 5v14M5 12h14" /></svg>,
    <svg key="4" className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" /></svg>,
    <svg key="5" className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-400 mb-4 block">
              Seasonal Planning
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-800 mb-4">
              {title}
            </h2>
            <div className="w-16 h-px bg-gold-400 mx-auto mb-6" />
            {subtitle && (
              <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Season Selector Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`relative flex flex-col items-center px-6 py-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  active === idx
                    ? 'border-navy-800 bg-navy-800 shadow-lg scale-105'
                    : 'border-slate-200 bg-white hover:border-navy-800/30 hover:bg-ice-50'
                }`}
              >
                <div className="mb-2 flex items-center justify-center">{icons[idx]}</div>
                <span
                  className={`font-display text-sm md:text-base font-medium ${
                    active === idx ? 'text-white' : 'text-navy-800'
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`font-sans text-xs mt-0.5 ${
                    active === idx ? 'text-ice-50/80' : 'text-slate-500'
                  }`}
                >
                  {bloomLabels[idx]}
                </span>

                {/* Bloom bar */}
                <div className="mt-3 w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${bloomColors[idx]}`}
                    style={{ width: `${bloomIntensity[idx]}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Active Content Panel */}
        <div className="relative">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                active === idx
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-4 pointer-events-none absolute inset-0'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-ice-50 rounded-3xl p-8 md:p-12 border border-slate-200">
                {/* Left: Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center">{icons[idx]}</div>
                    <div>
                      <h3 className="font-display text-3xl text-navy-800">
                        {item.title}
                      </h3>
                      <span className="font-sans text-sm text-gold-400 uppercase tracking-widest">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="font-sans text-slate-600 text-lg leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bloom intensity visual */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-sans text-slate-500 uppercase tracking-wider">
                      <span>Bloom Intensity</span>
                      <span>{bloomIntensity[idx]}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${bloomColors[idx]} transition-all duration-700`}
                        style={{ width: `${bloomIntensity[idx]}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs font-sans text-slate-400">
                      <span>Sparse</span>
                      <span>Peak Color</span>
                    </div>
                  </div>
                </div>

                {/* Right: Visual bloom dots */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-48 h-48 md:w-56 md:h-56">
                    {/* Circular bloom visualization */}
                    {Array.from({ length: 12 }).map((_, i) => {
                      const angle = (i / 12) * 360;
                      const rad = (angle * Math.PI) / 180;
                      const r = 88;
                      const x = 50 + (r / 2) * Math.cos(rad);
                      const y = 50 + (r / 2) * Math.sin(rad);
                      const filled = i < Math.round((bloomIntensity[idx] / 100) * 12);
                      return (
                        <div
                          key={i}
                          className={`absolute w-5 h-5 rounded-full transition-all duration-500 ${
                            filled ? bloomColors[idx] : 'bg-slate-200'
                          }`}
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: 'translate(-50%, -50%)',
                            transitionDelay: `${i * 40}ms`,
                          }}
                        />
                      );
                    })}
                    {/* Center text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-4xl text-navy-800">
                        {bloomIntensity[idx]}%
                      </span>
                      <span className="font-sans text-xs text-slate-500 uppercase tracking-wider mt-1">
                        Bloom
                      </span>
                    </div>
                  </div>
                  <p className="font-sans text-sm text-slate-500 text-center mt-4 italic">
                    Typical conditions — nature varies each year
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TulipBloomCalendar;
