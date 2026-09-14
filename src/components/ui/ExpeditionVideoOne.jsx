import React from 'react';
import FadeIn from './FadeIn';
import { Quote } from 'lucide-react';

const ExpeditionVideoOne = ({ data }) => {
  if (!data?.youtubeId) return null;

  return (
    <section className="w-full py-20 lg:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-sky-950 text-white relative overflow-hidden">
      {/* Visual glowing polar grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Video Embed (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <FadeIn direction="left">
              <div className="relative">
                {/* Premium border offset */}
                <div className="absolute -inset-1.5 bg-gradient-to-br from-sky-400/30 to-gold-400/20 rounded-2xl blur opacity-75" />
                <div className="relative w-full aspect-video bg-navy-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${data.youtubeId}?rel=0&modestbranding=1&vq=hd1080`}
                    title={data?.title || "Silversea Expedition"}
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

          {/* Right: Text + Expert Quote (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn direction="right">
              <span className="uppercase tracking-[0.25em] text-[10px] font-bold text-sky-400 mb-3 block">
                EXPEDITION BASE CAMP
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-white leading-tight mb-5">
                {data?.title}
              </h2>
              <p className="font-sans text-sm text-white/60 leading-relaxed mb-8">
                {data?.description}
              </p>

              {data?.quote && (
                <div className="relative border-t border-white/10 pt-6">
                  <Quote className="w-8 h-8 text-gold-400/20 absolute -top-4 right-4 rotate-180" />
                  <blockquote className="font-display text-lg lg:text-xl text-white/90 leading-relaxed italic mb-4">
                    "{data.quote.text}"
                  </blockquote>
                  <div>
                    <p className="font-sans text-xs text-gold-400 font-bold uppercase tracking-wider">
                      {data.quote.author}
                    </p>
                    <p className="font-sans text-[10px] text-white/40 mt-0.5">
                      {data.quote.role}
                    </p>
                  </div>
                </div>
              )}
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExpeditionVideoOne;
