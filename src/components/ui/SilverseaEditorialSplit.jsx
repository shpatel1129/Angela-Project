import { Ship, User, Utensils, Compass, Globe, Award } from 'lucide-react';
import MasterImage from './MasterImage';

const iconMap = {
  ship: Ship,
  user: User,
  utensils: Utensils,
  compass: Compass,
  globe: Globe,
  award: Award
};

const SilverseaEditorialSplit = ({ data, image, bgClass = 'bg-white' }) => {
  if (!data) return null;

  return (
    <section className={`py-24 overflow-hidden ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-16">
          <span className="text-gold-400 font-bold tracking-[0.3em] uppercase text-xs block mb-3">The Silversea Difference</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-950 max-w-2xl leading-tight">{data.headline}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: editorial text */}
          <div className="lg:col-span-3 space-y-8">
            <p className="text-slate-600 text-lg leading-relaxed font-sans">{data.body}</p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-gold-400 pl-8 py-4">
              <p className="font-display text-2xl text-navy-900 italic leading-relaxed">"{data.pullQuote}"</p>
            </blockquote>

            {/* Feature grid — 2 columns, 3 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {data.features?.map((f, i) => {
                const IconComponent = iconMap[f.icon] || Ship;
                return (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-gold-400/5 transition-colors group">
                    <IconComponent className="w-6 h-6 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-navy-950 text-sm mb-1 group-hover:text-gold-400 transition-colors">{f.label}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: stacked images with offset */}
          <div className="lg:col-span-2 relative">
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Main image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <MasterImage
                  src={image}
                  alt="Silversea luxury lounge"
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
              {/* Amber accent overlay */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-400 rounded-2xl -z-10 opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-navy-950 rounded-2xl -z-10"></div>

              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-navy-950/90 backdrop-blur text-white px-5 py-3 rounded-xl shadow-lg">
                <p className="text-gold-400 text-[10px] font-bold uppercase tracking-widest">Ultra-Luxury</p>
                <p className="font-display text-lg mt-0.5">All-Suite Fleet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverseaEditorialSplit;
