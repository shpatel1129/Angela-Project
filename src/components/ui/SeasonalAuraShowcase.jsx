import React, { useState } from 'react';
import { Sun, Cloud, ThermometerSun, Waves, Sparkles, MapPin, Wind } from 'lucide-react';
import FadeIn from './FadeIn';

const SeasonalAuraShowcase = ({ 
  title = "The Aegean Seasonal Aura", 
  subtitle = "Experience the sensory shift across the Greek calendar.",
  seasons = [] 
}) => {
  const [activeSeason, setActiveSeason] = useState(seasons[0]?.id || 'spring');

  const defaultSeasons = [
    {
      id: 'spring',
      name: 'Spring Awakening',
      months: 'April — May',
      description: 'The islands burst into bloom. Crisp, clear skies frame archaeological ruins against a backdrop of wildflowers. The sea remains cool, but the light is crystalline and pure.',
      temperature: '15°C - 24°C',
      water: 'Cool & Refreshing',
      vibe: 'Cultural, Active, Serene',
      color: 'from-emerald-900/80 to-navy-950/90',
      accent: 'text-emerald-400',
      icon: <Wind className="w-6 h-6" />
    },
    {
      id: 'summer',
      name: 'High Summer Energy',
      months: 'June — August',
      description: 'The iconic Greek summer. Intense golden sunlight, warm turquoise waters, and vibrant island energy. The Meltemi winds provide a natural cooling system for the Cyclades.',
      temperature: '25°C - 33°C',
      water: 'Warm & Inviting',
      vibe: 'Lively, Social, Sun-drenched',
      color: 'from-amber-600/80 to-navy-950/90',
      accent: 'text-amber-400',
      icon: <Sun className="w-6 h-6" />
    },
    {
      id: 'autumn',
      name: 'Golden Shoulder',
      months: 'September — October',
      description: 'The sweet spot for luxury travel. The sea has absorbed the summer heat, the frantic pace softens, and the light takes on a rich, golden, cinematic quality.',
      temperature: '20°C - 28°C',
      water: 'Perfectly Warm',
      vibe: 'Romantic, Balanced, Elegant',
      color: 'from-gold-600/80 to-navy-950/90',
      accent: 'text-gold-400',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: 'winter',
      name: 'Quiet Authenticity',
      months: 'November — March',
      description: 'The islands return to the locals. Athens thrives as a cultural hub. Wood smoke scents the air in mountain villages while ancient sites sit blissfully empty.',
      temperature: '10°C - 16°C',
      water: 'Cold',
      vibe: 'Authentic, Slow, Reflective',
      color: 'from-slate-700/80 to-navy-950/90',
      accent: 'text-slate-300',
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  const dataToUse = seasons.length > 0 ? seasons : defaultSeasons;
  const activeData = dataToUse.find(s => s.id === activeSeason) || dataToUse[0];

  return (
    <section className="w-full py-24 bg-navy-950 text-white relative overflow-hidden border-y border-gold-400/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} transition-all duration-1000 opacity-50 mix-blend-multiply`}></div>
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immersive Exploration</span>
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-normal text-white mb-6">
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side - Interactive Timeline */}
          <div className="lg:w-1/3 w-full space-y-4">
            {dataToUse.map((season) => {
              const isActive = activeSeason === season.id;
              return (
                <button
                  key={season.id}
                  onClick={() => setActiveSeason(season.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 border ${
                    isActive 
                    ? 'bg-navy-900/80 border-gold-400 shadow-[0_0_30px_rgba(212,175,55,0.15)] scale-105' 
                    : 'bg-navy-950/40 border-slate-800 hover:border-gold-400/30 hover:bg-navy-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs uppercase tracking-widest font-semibold ${isActive ? season.accent : 'text-slate-400'}`}>
                      {season.months}
                    </span>
                    <div className={`${isActive ? season.accent : 'text-slate-600'}`}>
                      {season.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-display ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {season.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Side - Dynamic Aura Display */}
          <div className="lg:w-2/3 w-full">
            <FadeIn key={activeData.id}>
              <div className="bg-navy-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${activeData.color} rounded-full blur-[80px] opacity-40 group-hover:scale-110 transition-transform duration-1000`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 rounded-full bg-white/5 border border-white/10 ${activeData.accent}`}>
                      {activeData.icon}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-display text-white">
                      {activeData.name}
                    </h3>
                  </div>

                  <p className="text-lg text-slate-300 leading-relaxed mb-10 min-h-[80px]">
                    {activeData.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Data Point 1 */}
                    <div className="bg-navy-950/60 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                      <ThermometerSun className={`w-5 h-5 mb-3 ${activeData.accent}`} />
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Air Temp</span>
                      <span className="text-lg font-display text-white">{activeData.temperature}</span>
                    </div>

                    {/* Data Point 2 */}
                    <div className="bg-navy-950/60 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                      <Waves className={`w-5 h-5 mb-3 ${activeData.accent}`} />
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Sea Condition</span>
                      <span className="text-lg font-display text-white">{activeData.water}</span>
                    </div>

                    {/* Data Point 3 */}
                    <div className="bg-navy-950/60 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                      <MapPin className={`w-5 h-5 mb-3 ${activeData.accent}`} />
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">Atmosphere</span>
                      <span className="text-lg font-display text-white">{activeData.vibe}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeasonalAuraShowcase;
