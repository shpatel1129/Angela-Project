import React from 'react';
import FadeIn from './FadeIn';
import { Compass, CheckCircle } from 'lucide-react';

const ExpeditionVideoTwo = ({ data }) => {
  if (!data?.youtubeId) return null;

  return (
    <section className="w-full py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-ice-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Video player (7 cols) */}
          <div className="lg:col-span-7 w-full order-2 lg:order-1">
            <FadeIn direction="up">
              <div className="relative">
                {/* Decorative border brackets */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold-400/40 rounded-tl-xl" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold-400/40 rounded-br-xl" />

                <div className="relative w-full aspect-video bg-navy-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/40">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${data.youtubeId}?rel=0&modestbranding=1&vq=hd1080`}
                    title={data?.title || "Silversea Galápagos"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Takeaways & Text (5 cols) - Order 1 on mobile to read before video */}
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-5 h-5 text-gold-500" />
                <span className="uppercase tracking-[0.25em] text-[10px] font-bold text-slate-400 block">
                  GALÁPAGOS FOCUS
                </span>
              </div>
              
              <h2 className="font-display text-3xl lg:text-4xl text-navy-950 leading-tight mb-5">
                {data?.title}
              </h2>
              <div className="w-10 h-0.5 bg-gold-400 mb-6" />
              
              {data?.description && (
                <p className="font-sans text-sm text-slate-600 leading-relaxed mb-8">
                  {data.description}
                </p>
              )}

              {/* Takeaways list */}
              {data?.keyTakeaways && (
                <div className="space-y-4">
                  <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">
                    Silver Origin Features:
                  </h4>
                  {data.keyTakeaways.map((item, idx) => (
                    <div key={idx} className="flex gap-3 group">
                      <div className="w-5 h-5 rounded-full bg-navy-950 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold-500 transition-colors">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <p className="font-sans text-sm text-slate-700 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpeditionVideoTwo;
