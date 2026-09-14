import React from 'react';

const SilverseaStatTicker = ({ stats }) => {
  if (!stats?.length) return null;
  const doubled = [...stats, ...stats]; // for infinite feel

  return (
    <div className="bg-navy-950 py-0 overflow-hidden border-b border-gold-400/20">
      <div className="flex items-center">
        {/* Left label */}
        <div className="shrink-0 bg-gold-400 text-navy-950 font-bold text-[10px] uppercase tracking-[0.3em] px-6 py-5 z-10 whitespace-nowrap">
          Silversea at a Glance
        </div>
        {/* Scrolling ticker */}
        <div className="flex overflow-hidden flex-1">
          <div className="flex animate-[marquee_20s_linear_infinite] gap-0">
            {doubled.map((stat, i) => (
              <div
                key={i}
                className="flex items-center shrink-0 border-r border-white/10 px-10 py-4 gap-3"
              >
                <span className="text-gold-400 font-display text-2xl font-bold leading-none">{stat.value}</span>
                <span className="text-white/60 text-xs uppercase tracking-widest font-sans whitespace-nowrap">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default SilverseaStatTicker;
