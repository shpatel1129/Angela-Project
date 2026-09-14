import React from 'react';
import FadeIn from './FadeIn';

const GreeceFamilyVideoOne = () => {
  const youtubeId = "PlCPx9yETCo";

  return (
    <section className="py-20 bg-navy-950 text-white text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Column (5/12 width) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#c9a15c] uppercase block">
                Visual Travel Guide
              </span>
              <h3 className="font-display text-3xl font-light leading-tight">
                Watch a Real Greek Family Vacation Experience
              </h3>
              <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">
                Take a visual journey through Greece covering key stops in Athens, Zakynthos, and Santorini, to understand what traveling with kids actually looks like on the ground.
              </p>
            </FadeIn>
          </div>

          {/* Video Column (7/12 width) */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  title="Greece Family Trip Travel Guide Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GreeceFamilyVideoOne;
