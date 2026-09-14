import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import MasterImage from './MasterImage';

const SilverseaShipGrid = ({ data, classicImg1, classicImg2, expedImg1, expedImg2 }) => {
  const [activeTab, setActiveTab] = useState('all');

  if (!data) return null;

  const { classic, expedition } = data;

  return (
    <section className="bg-navy-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs block mb-3">Choose Your Journey Type</span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">{data.headline}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{data.intro}</p>
        </div>

        {/* Toggle tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {['all', 'classic', 'expedition'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab
                  ? 'bg-gold-400 text-navy-950'
                  : 'bg-white/10 text-white/60 hover:bg-white/20'
              }`}
            >
              {tab === 'all' ? 'All Ships' : tab === 'classic' ? 'Classic Fleet' : 'Expedition Fleet'}
            </button>
          ))}
        </div>

        {/* Classic vs Expedition — big visual duel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Classic */}
          {(activeTab === 'all' || activeTab === 'classic') && (
            <div className="relative rounded-3xl overflow-hidden group min-h-[420px]">
              <MasterImage src={classicImg1} alt="Silversea Classic Fleet" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-gold-400 text-navy-950 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">{classic.label}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">{classic.tagline}</p>
                <h3 className="font-display text-3xl text-white mb-3">{classic.label}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{classic.description}</p>
                <div className="flex flex-wrap gap-2">
                  {classic.destinations?.map((d, i) => (
                    <span key={i} className="bg-white/15 text-white text-[11px] px-3 py-1 rounded-full">{d}</span>
                  ))}
                </div>
                <p className="text-gold-400/80 text-xs mt-4 italic">{classic.bestFor}</p>
              </div>
            </div>
          )}
          {/* Expedition */}
          {(activeTab === 'all' || activeTab === 'expedition') && (
            <div className="relative rounded-3xl overflow-hidden group min-h-[420px]">
              <MasterImage src={expedImg1} alt="Silversea Expedition Fleet" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-white text-navy-950 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">{expedition.label}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">{expedition.tagline}</p>
                <h3 className="font-display text-3xl text-white mb-3">{expedition.label}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{expedition.description}</p>
                <div className="flex flex-wrap gap-2">
                  {expedition.destinations?.map((d, i) => (
                    <span key={i} className="bg-white/15 text-white text-[11px] px-3 py-1 rounded-full">{d}</span>
                  ))}
                </div>
                <p className="text-gold-400/80 text-xs mt-4 italic">{expedition.bestFor}</p>
              </div>
            </div>
          )}
        </div>

        {/* Angela planning tip */}
        <div className="border border-gold-400/30 rounded-2xl p-8 bg-gold-400/5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 shrink-0">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <p className="text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-1">Angela Hughes' Planning Insight</p>
            <p className="text-white font-display text-xl italic">"Select the experience first and the ship second. The best ship is the one that best matches your reason for traveling."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverseaShipGrid;
