import React, { useState } from 'react';
import { Utensils, FlaskConical, Wine } from 'lucide-react';
import MasterImage from './MasterImage';

const tabs = ['salt', 'restaurants', 'wellness'];
const tabLabels = { salt: 'S.A.L.T. Program', restaurants: 'Restaurants', wellness: 'Otium Wellness' };

const SilverseaSaltDining = ({ data, diningImg, poolImg }) => {
  const [activeTab, setActiveTab] = useState('salt');
  if (!data) return null;

  return (
    <section className="bg-navy-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs block mb-4">Onboard Experience</span>
            <h2 className="font-display text-4xl md:text-6xl text-white leading-tight">{data.headline}</h2>
          </div>
          <div>
            <p className="text-slate-400 text-lg leading-relaxed">{data.intro}</p>
          </div>
        </div>

        {/* Tab controls */}
        <div className="flex gap-1 bg-white/5 rounded-2xl p-1.5 mb-12 max-w-lg">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab
                  ? 'bg-gold-400 text-navy-950 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left panel: content */}
          <div className="lg:col-span-3">
            {activeTab === 'salt' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl text-white mb-2">{data.salt.headline}</h3>
                  <p className="text-gold-400 font-bold text-sm uppercase tracking-widest mb-4">{data.salt.subheadline}</p>
                  <p className="text-slate-300 leading-relaxed">{data.salt.description}</p>
                </div>
                <div className="space-y-4 mt-6">
                  {data.salt.components?.map((c, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-gold-400/40 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 shrink-0">
                        {i === 0 ? <Utensils className="w-5 h-5" /> : i === 1 ? <FlaskConical className="w-5 h-5" /> : <Wine className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{c.name}</h4>
                        <p className="text-slate-400 text-sm">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'restaurants' && (
              <div>
                <h3 className="font-display text-3xl text-white mb-8">Dining Venues</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.restaurants?.map((r, i) => (
                    <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-gold-400/40 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-display text-lg text-white">{r.name}</h4>
                        <span className="text-[10px] uppercase tracking-widest text-gold-400 bg-gold-400/10 px-2 py-1 rounded-full">{r.style}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{r.bestFor}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wellness' && (
              <div>
                <h3 className="font-display text-3xl text-white mb-4">{data.wellness.headline}</h3>
                <p className="text-slate-300 leading-relaxed mb-8">{data.wellness.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {data.wellness.features?.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                      <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></div>
                      <span className="text-white text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right panel: image */}
          <div className="lg:col-span-2">
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden">
              <MasterImage
                src={activeTab === 'wellness' ? poolImg : diningImg}
                alt={activeTab === 'salt' ? 'SALT dining' : activeTab === 'wellness' ? 'Silversea pool' : 'Dining room'}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-gold-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {activeTab === 'salt' ? 'Sea and Land Taste' : activeTab === 'restaurants' ? 'Multiple Venues' : 'Otium by Silversea'}
                </p>
                <p className="font-display text-xl text-white">
                  {activeTab === 'salt' ? 'Every meal tells a story' : activeTab === 'restaurants' ? 'Dining without boundaries' : 'Wellness through pleasure'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverseaSaltDining;
