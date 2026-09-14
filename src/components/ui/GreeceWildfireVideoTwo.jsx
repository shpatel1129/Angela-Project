import React from 'react';
import FadeIn from './FadeIn';
import { ShieldCheck, Compass, Check } from 'lucide-react';

const GreeceWildfireVideoTwo = () => {
  const pillars = [
    {
      title: "Flexible Accommodation & Flight Terms",
      desc: "Prioritize refundable rates and Cancel For Any Reason (CFAR) travel insurance coverage for peak summer travel."
    },
    {
      title: "Resort Infrastructure & Water Access",
      desc: "Select five-star coastal properties with private boat piers, backup power, and multi-directional road routes."
    },
    {
      title: "24/7 Dedicated Travel Advisor Support",
      desc: "Have a seasoned professional actively monitoring Civil Protection alerts, ready to rebook ferries or domestic flights instantly."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3 Pillars Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a15c] uppercase block">
                STRATEGIC FRAMEWORK
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-light text-navy-950 leading-tight">
                3 Pillars of Wildfire-Resilient Travel Planning
              </h2>
              <p className="font-sans text-slate-600 font-light leading-relaxed">
                How bespoke luxury itinerary design insulates your vacation from unexpected weather disruptions.
              </p>

              {/* Connected Pillar Cards */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                {pillars.map((pil, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-2 mb-1 text-navy-950 font-sans text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck size={16} className="text-[#c9a15c]" />
                      <span>{pil.title}</span>
                    </div>
                    <p className="font-sans text-xs text-slate-600 font-light leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Asymmetric Video Frame */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="relative p-3 bg-white border border-slate-100 rounded-[32px] shadow-2xl">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-inner bg-slate-950">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/b0ivln0thA4"
                    title="Greece Wildfire Safety & Logistics Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GreeceWildfireVideoTwo;
