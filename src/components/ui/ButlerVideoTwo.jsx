import React from 'react';
import FadeIn from './FadeIn';
import { CheckCircle } from 'lucide-react';

const ButlerVideoTwo = ({ data }) => {
  if (!data?.youtubeId) return null;

  return (
    <section className="w-full py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Video */}
          <FadeIn direction="up">
            <div className="relative">
              {/* Decorative Lines */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold-400/30 rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold-400/30 rounded-br-xl" />
              
              <div className="relative w-full aspect-video bg-navy-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/40">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube-nocookie.com/embed/${data.youtubeId}?rel=0&modestbranding=1&vq=hd1080`}
                  title={data?.title || "Silversea Suite Experience"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right: Editorial Content */}
          <FadeIn delay={0.15} direction="up">
            <div>
              <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-slate-400 mb-4 block">
                THE SUITE EXPERIENCE
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-navy-950 leading-tight mb-4">
                {data?.title}
              </h2>
              <div className="w-12 h-[2px] bg-gold-400 mb-6" />
              {data?.description && (
                <p className="font-sans text-base text-slate-600 leading-relaxed mb-8">
                  {data.description}
                </p>
              )}

              {/* Key Takeaways */}
              {data?.keyTakeaways && (
                <div className="space-y-4">
                  <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-slate-400 mb-3">
                    Key Takeaways
                  </h4>
                  {data.keyTakeaways.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-navy-950 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold-500 transition-colors">
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      <p className="font-sans text-sm text-slate-700 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ButlerVideoTwo;
