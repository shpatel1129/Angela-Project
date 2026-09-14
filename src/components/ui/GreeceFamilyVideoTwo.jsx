import React from 'react';
import FadeIn from './FadeIn';

const GreeceFamilyVideoTwo = () => {
  const youtubeId = "Q3ky16KD3yU";

  return (
    <section className="py-20 bg-slate-100 text-left">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Video Column (7/12 width) */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  title="Greece Family Trip Travel Guide Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>
          </div>

          {/* Text Column (5/12 width) */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#c9a15c] uppercase block">
                Cyclades Expedition Video
              </span>
              <h3 className="font-display text-3xl font-light leading-tight text-navy-950">
                Exploring Naxos & Paros By Sea
              </h3>
              <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                See the proximity and distinct atmospheres of Naxos and Paros to see why combining these Cycladic neighbors is an exceptional itinerary strategy for active families.
              </p>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GreeceFamilyVideoTwo;
