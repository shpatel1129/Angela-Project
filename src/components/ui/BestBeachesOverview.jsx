import React from 'react';
import { Award, Umbrella, Flame, Gem, Waves, Ship, Heart, Users, Landmark, Leaf, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

const renderIcon = (label) => {
  if (label.startsWith('🏆')) return { icon: <Award className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('🏆', '').trim() };
  if (label.startsWith('🏖️')) return { icon: <Umbrella className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('🏖️', '').trim() };
  if (label.startsWith('🌋')) return { icon: <Flame className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('🌋', '').trim() };
  if (label.startsWith('💎')) return { icon: <Gem className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('💎', '').trim() };
  if (label.startsWith('🌊')) return { icon: <Waves className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('🌊', '').trim() };
  if (label.startsWith('🛥️')) return { icon: <Ship className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('🛥️', '').trim() };
  if (label.startsWith('❤️')) return { icon: <Heart className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('❤️', '').trim() };
  if (label.startsWith('👨‍👩‍👧‍👦')) return { icon: <Users className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('👨‍👩‍👧‍👦', '').trim() };
  if (label.startsWith('🏛️')) return { icon: <Landmark className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('🏛️', '').trim() };
  if (label.startsWith('🌿')) return { icon: <Leaf className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label: label.replace('🌿', '').trim() };
  return { icon: <Sparkles className="w-4 h-4 text-[#c9a15c] flex-shrink-0" />, label };
};

/**
 * BestBeachesOverview
 * 50:50 split text + table matrix comparing different beach needs.
 */
const BestBeachesOverview = ({ image, quickAnswer = [] }) => {
  return (
    <section id="best-beaches-overview" className="w-full bg-white py-24 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Description & Image */}
          <FadeIn>
            <div className="text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a15c] font-bold block">
                THE BEACH PARADOX
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight">
                Not All Beaches Are Created Equal
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                Greece boasts over 8,000 miles of coastline, but for the luxury traveler, finding the perfect match is a matter of style rather than numbers. Some islands feature dramatic white volcanic cliffs, others boast golden sand dunes, while others are renowned for chic beach club vibes and premium services.
              </p>
              
              <div className="relative pt-6">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#c9a15c]/10 to-transparent rounded-3xl blur-2xl z-0"></div>
                <img
                  src={image}
                  alt="Scenic Greek sandy beach overlooking clear turquoise water"
                  className="relative z-10 w-full h-[300px] object-cover rounded-3xl shadow-xl border border-slate-100"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Quick Comparison Table */}
          <FadeIn delay={0.2}>
            <div className="overflow-hidden bg-slate-50 border border-slate-100 rounded-2xl shadow-xl">
              <div className="p-6 bg-navy-950 text-white font-sans">
                <h4 className="font-display text-lg font-bold">Greek Beach Matchmaker</h4>
                <p className="text-xs text-slate-400 font-light">Quick-reference guide by priority</p>
              </div>
              <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-slate-100 font-sans text-xs text-slate-600">
                  {quickAnswer.map((item, idx) => {
                    const matched = renderIcon(item.for);
                    return (
                      <tr key={idx} className="hover:bg-white transition-colors">
                        <td className="py-4 px-6 flex items-center gap-3">
                          {matched.icon}
                          <span className="font-medium text-navy-950">{matched.label}</span>
                        </td>
                        <td className="py-4 px-6 text-right font-bold text-[#c9a15c]">{item.island}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export default BestBeachesOverview;
