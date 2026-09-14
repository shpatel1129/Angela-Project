import React from 'react';
import FadeIn from './FadeIn';
import MasterImage from './MasterImage';
import avalonPlaceholder from '../../assets/brands/avalon/avalon_placeholder.svg';

const AvalonCabinVisualizer = ({ cabins }) => {
  return (
    <section className="w-full bg-navy-950 py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">Choose Your View</h2>
            <p className="font-sans text-xl text-ice-200 font-light max-w-2xl mx-auto">
              Three distinct ways to experience the river, each designed with your ultimate comfort in mind.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-32">
          {cabins.map((cabin, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              {/* Image Side (50%) */}
              <div className="w-full lg:w-1/2 aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl group">
                <MasterImage
                  src={avalonPlaceholder}
                  alt={cabin.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/0 transition-colors duration-700"></div>
              </div>

              {/* Text Side (50%) - Minimal and punchy */}
              <div className="w-full lg:w-1/2">
                <FadeIn direction={idx % 2 !== 0 ? 'right' : 'left'}>
                  <span className="text-ts-gold tracking-[0.2em] uppercase text-sm font-bold mb-4 block">
                    {cabin.tagline}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl text-white mb-8">
                    {cabin.name}
                  </h3>
                  <p className="text-ice-200 text-lg leading-relaxed font-light mb-12">
                    {cabin.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {cabin.features?.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-ts-gold rounded-full"></div>
                        <span className="text-white/80 font-sans text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvalonCabinVisualizer;
