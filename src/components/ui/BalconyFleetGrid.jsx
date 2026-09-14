import React, { useState } from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import { Ship, Check, X, Anchor, Sailboat } from 'lucide-react';

const BalconyFleetGrid = ({ data, gridImage }) => {
  const [hoveredShip, setHoveredShip] = useState(null);

  if (!data || !data.ships) return null;

  return (
    <section className="py-28 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header with side image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-ts-gold uppercase">
              Fleet Comparison
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy-950 leading-tight">
              {data.title}
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-16 h-0.5 bg-ts-gold"></div>
              <div className="w-4 h-0.5 bg-ts-gold/40"></div>
            </div>
            <p className="font-sans text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
              {data.intro}
            </p>
          </div>
          {gridImage && (
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden aspect-[16/10] shadow-lg border border-slate-200/50">
                <MasterImage src={gridImage} alt="Windstar Fleet" className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Fleet Grid — 4 cols top, 4 cols bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.ships.map((ship, idx) => {
            const isSailing = !ship.hasVeranda && !ship.hasFrench && !ship.hasInfinity;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredShip(idx)}
                onMouseLeave={() => setHoveredShip(null)}
                className={`group relative rounded-3xl border p-7 transition-all duration-400 flex flex-col justify-between ${
                  isSailing
                    ? 'bg-slate-50 border-slate-200/60 hover:border-slate-300'
                    : 'bg-white border-slate-200/60 hover:border-ts-gold/40 hover:shadow-lg'
                } ${hoveredShip === idx ? 'scale-[1.02] shadow-xl' : ''}`}
              >
                {/* Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    isSailing ? 'bg-sky-50 text-sky-700 border border-sky-100' : 'bg-ts-gold/10 text-ts-gold border border-ts-gold/20'
                  }`}>
                    {ship.tag}
                  </span>
                  {isSailing ? (
                    <Sailboat className="w-4 h-4 text-sky-400" />
                  ) : (
                    <Ship className="w-4 h-4 text-ts-gold" />
                  )}
                </div>

                {/* Ship Name */}
                <h3 className="font-display text-xl sm:text-2xl text-navy-950 mb-3">{ship.name}</h3>
                <p className="font-sans text-slate-600 text-xs leading-relaxed mb-6 flex-1">
                  {ship.summary}
                </p>

                {/* Balcony Availability Checklist */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    {ship.hasVeranda ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <X className="w-3.5 h-3.5 text-slate-300" />}
                    <span className="text-[11px] text-slate-600">True Veranda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {ship.hasFrench ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <X className="w-3.5 h-3.5 text-slate-300" />}
                    <span className="text-[11px] text-slate-600">French Balcony</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {ship.hasInfinity ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <X className="w-3.5 h-3.5 text-slate-300" />}
                    <span className="text-[11px] text-slate-600">Infinity Style</span>
                  </div>
                </div>

                {/* Best For */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block mb-1">Best For</span>
                  <span className="font-sans text-[11px] text-navy-950 font-medium italic">{ship.bestFor}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BalconyFleetGrid;
