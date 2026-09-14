import React, { useState } from 'react';
import FadeIn from './FadeIn';
import { Award, Compass, Ship, Star, CheckCircle, Info } from 'lucide-react';
import MasterImage from './MasterImage';

const WindstarCabinsComparison = ({ title, intro, comparisonData, sideImage }) => {
  const [activeShip, setActiveShip] = useState('Star Seeker');

  const ships = [
    {
      name: 'Star Seeker',
      tag: '🥇 Best Overall',
      strength: 'New suites + outdoor space',
      desc: 'Introduces Windstar\'s modern suite concept. Features Infinity-window suites, Veranda suites, and massive Horizon Owner\'s Suites with wraparound balconies. A cabin design centered on natural light and outdoor living.',
      bestFor: 'Modern luxury, milestone celebrations, couples who love private outdoor space.'
    },
    {
      name: 'Star Pride',
      tag: '🥈 Best Established',
      strength: 'Exceptional interior space',
      desc: 'Features proven Star Class layouts with spacious living and sleeping areas. The Midship Owner\'s Suites are a standout, offering approximately 820 square feet of private space on a small yacht.',
      bestFor: 'Travelers who prioritize spacious interior layouts and classic luxury.'
    },
    {
      name: 'Star Legend',
      tag: '🥉 Excellent',
      strength: 'Large Owner\'s Suites',
      desc: 'All-suite configuration, offering a range of classic layouts. Known for the forward-facing Forward Owner\'s Suite (575 sq ft) and central Midship Owner\'s Suites.',
      bestFor: 'Traditional luxury suite layouts and panoramic forward views.'
    },
    {
      name: 'Star Breeze',
      tag: 'Renovated Classic',
      strength: 'Spacious renovated suites',
      desc: 'Lengthened and modernized in 2021. Features USB ports, modernized bathrooms, French balconies, and Deluxe Suites (468 sq ft) with private verandas.',
      bestFor: 'Itinerary flexibility, updated cabin tech, and balanced pricing.'
    },
    {
      name: 'Wind Surf',
      tag: 'Best Sailing',
      strength: 'Classic sailing experience',
      desc: 'Windstar\'s five-masted flagship. Cabins are comfortable (Ocean View Suites and Bridge Suites) but secondary to the iconic sailing atmosphere.',
      bestFor: 'Romantic sailing enthusiasts and small-ship community vibes.'
    },
    {
      name: 'Wind Star & Spirit',
      tag: 'Best Intimate',
      strength: 'Small yacht experience',
      desc: 'Intimate 148-guest sister sailing yachts. Cabins are cozy (approx. 188 sq ft) with traditional portholes and nautical wood tones, emphasizing destination intimacy.',
      bestFor: 'True sailing connection, remote ports, and personalized service.'
    },
    {
      name: 'Star Explorer',
      tag: 'Upcoming Debut',
      strength: 'New-generation suites',
      desc: 'Windstar\'s upcoming sister ship to Star Seeker, debuting late 2026. Follows the modern all-suite and veranda accommodation concept.',
      bestFor: 'Early booking for late 2026 and 2027 luxury cruises.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title and Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-ts-gold">
              Quick Decision Helper
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight">
              {title || "Which Windstar Ship Has the Best Cabins?"}
            </h2>
            <div className="w-12 h-1 bg-ts-gold rounded-full"></div>
            <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed">
              {intro || "Compare Windstar's fleet cabins at a glance. Select a ship to view key highlights or browse the quick matrix below."}
            </p>
          </div>
          
          {/* Side Image */}
          {sideImage && (
            <div className="lg:col-span-7 relative">
              <div className="absolute inset-0 bg-ts-gold/10 rounded-[32px] transform translate-x-3 translate-y-3 -z-10"></div>
              <div className="rounded-[32px] overflow-hidden aspect-[16/9] shadow-lg border border-white">
                <MasterImage src={sideImage} alt="Windstar Star Seeker Suite" className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Dynamic Switcher Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Ship Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {ships.map((ship, idx) => (
              <button
                key={idx}
                onClick={() => setActiveShip(ship.name)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                  activeShip === ship.name
                    ? 'bg-navy-950 border-navy-950 text-white shadow-md'
                    : 'bg-white border-slate-200/60 text-navy-900 hover:border-ts-gold/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Ship className={`w-5 h-5 ${activeShip === ship.name ? 'text-ts-gold' : 'text-slate-400 group-hover:text-ts-gold'}`} />
                  <span className="font-display text-sm font-semibold">{ship.name}</span>
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                  activeShip === ship.name ? 'bg-ts-gold/20 text-ts-gold' : 'bg-slate-100 text-slate-500'
                }`}>
                  {ship.tag}
                </span>
              </button>
            ))}
          </div>

          {/* Active Ship Details */}
          <div className="lg:col-span-8 bg-white border border-slate-200/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ts-gold/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            {(() => {
              const ship = ships.find(s => s.name === activeShip) || ships[0];
              return (
                <div className="space-y-6 relative z-10 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl sm:text-3xl text-navy-950">{ship.name} Suite Review</h3>
                      <span className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/10 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5" /> {ship.strength}
                      </span>
                    </div>
                    <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
                      {ship.desc}
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ts-gold mb-2">Best For</p>
                    <p className="font-sans text-navy-900 text-xs sm:text-sm leading-relaxed italic">
                      "{ship.bestFor}"
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border border-slate-200/60 rounded-[32px] overflow-hidden shadow-sm">
          <div className="p-6 md:p-8 bg-navy-950 text-white flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-white">Windstar Cabin Matrix</h3>
              <p className="text-xs text-slate-400 font-sans">Quick comparative reference for the entire fleet</p>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-ts-gold">Verified Fleet Specs</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200/80 text-xs text-slate-500 font-bold uppercase">
                  <th className="p-4 sm:p-6">Ship</th>
                  <th className="p-4 sm:p-6">Best For</th>
                  <th className="p-4 sm:p-6">Cabin Strength</th>
                  <th className="p-4 sm:p-6 text-right">Overall Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {ships.map((ship, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 sm:p-6 font-display font-bold text-navy-950">{ship.name}</td>
                    <td className="p-4 sm:p-6 text-xs sm:text-sm">{ship.bestFor}</td>
                    <td className="p-4 sm:p-6 text-xs sm:text-sm font-medium text-slate-900">{ship.strength}</td>
                    <td className="p-4 sm:p-6 text-right">
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                        idx === 0 ? 'bg-ts-gold/20 text-navy-950 border border-ts-gold/30' :
                        idx === 1 ? 'bg-slate-100 text-slate-800' : 'bg-slate-50 text-slate-600'
                      }`}>
                        {ship.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WindstarCabinsComparison;
