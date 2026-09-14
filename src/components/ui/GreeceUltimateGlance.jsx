import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  Anchor,
  Heart,
  Users,
  Landmark,
  Utensils,
  Waves,
  Sun,
  ShieldCheck,
  Clock,
  MapPin,
  Flame,
  Award,
  Filter
} from 'lucide-react';

/**
 * Enhanced icon and category mapper for Greece Matrix Items
 */
const getMatrixMeta = (question = '') => {
  const q = question.toLowerCase();
  if (q.includes('first trip')) return { icon: Compass, category: 'First-Timers', tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };
  if (q.includes('iconic')) return { icon: Sparkles, category: 'Iconic', tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
  if (q.includes('nightlife') || q.includes('glamour')) return { icon: Flame, category: 'Nightlife', tagColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30' };
  if (q.includes('authenticity') || q.includes('luxury & authenticity')) return { icon: Award, category: 'Authentic Luxury', tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
  if (q.includes('complete island')) return { icon: MapPin, category: 'Immersion', tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' };
  if (q.includes('food') || q.includes('wine')) return { icon: Utensils, category: 'Gastronomy', tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30' };
  if (q.includes('beach') || q.includes('beaches')) return { icon: Waves, category: 'Coastal', tagColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30' };
  if (q.includes('romance') || q.includes('honeymoon')) return { icon: Heart, category: 'Romance', tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30' };
  if (q.includes('family') || q.includes('families')) return { icon: Users, category: 'Family', tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' };
  if (q.includes('history') || q.includes('ancient')) return { icon: Landmark, category: 'History', tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30' };
  if (q.includes('quiet luxury')) return { icon: Sun, category: 'Quiet Luxury', tagColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30' };
  if (q.includes('cruise') || q.includes('cruising')) return { icon: Anchor, category: 'Cruising', tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
  if (q.includes('yacht')) return { icon: Anchor, category: 'Sailing', tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' };
  if (q.includes('pacing') || q.includes('days') || q.includes('length')) return { icon: Clock, category: 'Pacing', tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' };
  return { icon: ShieldCheck, category: 'Strategic', tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30' };
};

const filterTabs = [
  'All Decisions',
  'First-Time & Iconic',
  'Islands & Beaches',
  'Food & History',
  'Cruising & Pacing'
];

/**
 * GreeceUltimateGlance (Redesigned Luxury Decision Matrix)
 */
const GreeceUltimateGlance = ({ items = [] }) => {
  const [selectedTab, setSelectedTab] = useState('All Decisions');

  // Filter items based on tab
  const filteredItems = items.filter((item) => {
    if (selectedTab === 'All Decisions') return true;
    const q = (item.question || '').toLowerCase();
    if (selectedTab === 'First-Time & Iconic') {
      return q.includes('first') || q.includes('iconic') || q.includes('glamour') || q.includes('best for');
    }
    if (selectedTab === 'Islands & Beaches') {
      return q.includes('beach') || q.includes('authenticity') || q.includes('complete') || q.includes('quiet') || q.includes('romance') || q.includes('family');
    }
    if (selectedTab === 'Food & History') {
      return q.includes('food') || q.includes('history');
    }
    if (selectedTab === 'Cruising & Pacing') {
      return q.includes('cruise') || q.includes('cruising') || q.includes('yacht') || q.includes('pacing');
    }
    return true;
  });

  return (
    <section className="py-24 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white relative overflow-hidden border-y border-blue-900/30">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-widest uppercase mb-4 shadow-inner">
            <Compass className="w-3.5 h-3.5 text-blue-400 animate-spin-slow" />
            <span>Strategic Destination Intelligence</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            Greece at a Glance: <span className="font-serif italic text-blue-200">The Decision Matrix</span>
          </h2>

          <p className="font-sans text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            With 6,000 islands and 227 inhabited communities across six distinct marine regions, pinpoint your exact travel match with Angela Hughes' curated decision blueprint.
          </p>
        </div>

        {/* Top Summary Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md text-center hover:border-blue-500/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-display font-light text-blue-300 block mb-1">227</span>
            <span className="text-xs font-sans uppercase tracking-wider text-slate-400">Inhabited Islands</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md text-center hover:border-blue-500/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-display font-light text-blue-300 block mb-1">6</span>
            <span className="text-xs font-sans uppercase tracking-wider text-slate-400">Island Archipelagos</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md text-center hover:border-blue-500/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-display font-light text-blue-300 block mb-1">3–4 Nights</span>
            <span className="text-xs font-sans uppercase tracking-wider text-slate-400">Ideal Island Stay</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-md text-center hover:border-blue-500/40 transition-colors">
            <span className="text-2xl sm:text-3xl font-display font-light text-blue-300 block mb-1">100%</span>
            <span className="text-xs font-sans uppercase tracking-wider text-slate-400">Tailored Pacing</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 uppercase tracking-wider font-semibold mr-2">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            <span>Filter By:</span>
          </div>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                selectedTab === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700/70 hover:border-blue-500/40'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Matrix Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const meta = getMatrixMeta(item.question);
            const Icon = meta.icon;

            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 border border-slate-700/60 hover:border-blue-500/50 p-6 sm:p-7 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Gradient Hover Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase border ${meta.tagColor}`}>
                      <Icon className="w-3 h-3" />
                      <span>{meta.category}</span>
                    </span>

                    <span className="text-xs font-mono text-slate-500 font-bold">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Question / Objective Title */}
                  <h3 className="font-display text-lg sm:text-xl font-normal text-white group-hover:text-blue-200 transition-colors leading-snug">
                    {item.question}
                  </h3>
                </div>

                {/* Recommendation Box */}
                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-blue-400 block mb-1">
                    Luxury Recommendation:
                  </span>
                  <p className="font-sans text-sm sm:text-base text-slate-200 font-light leading-relaxed">
                    {item.recommendation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strategic Note */}
        <div className="mt-12 p-6 rounded-2xl bg-blue-950/40 border border-blue-800/30 text-center max-w-2xl mx-auto backdrop-blur-sm">
          <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
            <span className="text-blue-400 font-semibold uppercase tracking-wider mr-1">✦ Advisor Insight:</span>
            Never pair two identical island profiles (e.g. Mykonos + Ios). Combine contrasting personalities such as dramatic Santorini with authentic Paros or mountainous Crete.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GreeceUltimateGlance;
