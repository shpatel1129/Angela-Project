import React from 'react';
import { Moon, Droplets, MonitorPlay, ThermometerSun, Sparkles } from 'lucide-react';
import FadeIn from './FadeIn';

const CuratedComforts = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-24 md:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-amber-700 font-sans tracking-[0.2em] uppercase text-sm mb-4">
              {data.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-950 tracking-tight leading-tight">
              {data.title}
            </h2>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 auto-rows-min">
          
          {/* Card 1: Sleep (Large, Dark) */}
          <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2 group">
            <div className="h-full bg-navy-950 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
              {/* Background gradient blob */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl group-hover:bg-amber-500/30 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <Moon className="w-8 h-8 text-amber-300" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-serif text-white mb-4">
                  {data.items[0].title}
                </h3>
                <p className="text-navy-100 font-sans text-lg leading-relaxed max-w-md">
                  {data.items[0].description}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Bath (Wide, Light) */}
          <FadeIn delay={0.2} className="md:col-span-2 group">
            <div className="h-full bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden min-h-[220px]">
              <div className="absolute right-0 top-0 w-32 h-32 bg-stone-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
                <div className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 shrink-0">
                  <Droplets className="w-6 h-6 text-navy-800" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-navy-950 mb-3">
                    {data.items[1].title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed font-sans">
                    {data.items[1].description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Entertainment (Square, Accent) */}
          <FadeIn delay={0.3} className="md:col-span-1 group">
            <div className="h-full bg-amber-50 rounded-3xl p-8 hover:bg-amber-100/50 transition-colors min-h-[220px]">
              <MonitorPlay className="w-8 h-8 text-amber-700 mb-6 group-hover:-translate-y-1 transition-transform duration-300" />
              <h3 className="text-xl font-serif text-amber-900 mb-3 leading-snug">
                {data.items[2].title}
              </h3>
              <p className="text-amber-800/80 font-sans text-sm leading-relaxed">
                {data.items[2].description}
              </p>
            </div>
          </FadeIn>

          {/* Card 4: Climate (Square, Minimal) */}
          <FadeIn delay={0.4} className="md:col-span-1 group">
            <div className="h-full bg-white border border-stone-100 rounded-3xl p-8 hover:border-stone-300 transition-colors min-h-[220px]">
              <ThermometerSun className="w-8 h-8 text-stone-400 mb-6 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-xl font-serif text-navy-950 mb-3 leading-snug">
                {data.items[3].title}
              </h3>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                {data.items[3].description}
              </p>
            </div>
          </FadeIn>

          {/* Card 5: Housekeeping (Full width banner) */}
          <FadeIn delay={0.5} className="md:col-span-4 group">
            <div className="bg-navy-900 rounded-3xl p-8 sm:px-12 flex flex-col sm:flex-row items-center gap-8 justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_5s_linear_infinite]"></div>
              
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-1">
                    {data.items[4].title}
                  </h3>
                  <p className="text-navy-200 font-sans">
                    {data.items[4].description}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default CuratedComforts;
